"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, m, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BookOpen, Headphones, Play, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { links } from "@/lib/site";

interface Step {
  n: string;
  verb: string;
  icon: LucideIcon;
  title: ReactNode;
  text: string;
  items: string[];
  links: { label: string; href: string }[];
  visual: { src: string; position: string; alt: string };
}

const steps: Step[] = [
  {
    n: "01",
    verb: "Read",
    icon: BookOpen,
    title: (
      <>
        Letters <span className="accent">&amp; essays.</span>
      </>
    ),
    text: "Masterpiece is where I write most honestly: about faith, creativity, calling and the slow work of becoming.",
    items: ["Masterpiece newsletter", "Essays"],
    links: [{ label: "Read Masterpiece", href: links.masterpiece }],
    visual: { src: "/images/jesse-portrait-bw.jpg", position: "50% 25%", alt: "Jesse Dan-Yusuf" },
  },
  {
    n: "02",
    verb: "Listen",
    icon: Headphones,
    title: (
      <>
        Sermons <span className="accent">&amp; conversations.</span>
      </>
    ),
    text: "Teaching from One City, and long conversations with creatives and builders about the life God is inviting us into.",
    items: ["The Cave podcast", "One City sermons", "Campfyre conversations"],
    links: [
      { label: "The Cave", href: links.theCavePodcast },
      { label: "One City", href: links.oneCityPodcast },
    ],
    visual: { src: "/images/campyfre.jpg", position: "50% 45%", alt: "Jesse Dan-Yusuf in conversation on stage" },
  },
  {
    n: "03",
    verb: "Watch",
    icon: Play,
    title: (
      <>
        Teachings, clips <span className="accent">&amp; films.</span>
      </>
    ),
    text: "Messages and short films on identity, purpose and doing the good work God prepared for you.",
    items: ["Teachings", "Clips", "Films"],
    links: [
      { label: "Watch on YouTube", href: links.youtube },
      { label: "Watch live", href: links.youtubeLive },
    ],
    visual: { src: "/images/jesse-portrait.jpg", position: "50% 30%", alt: "Jesse Dan-Yusuf preaching" },
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

const Heading = () => (
  <h2 className="display-lg lg:display-xl max-w-[14ch]">
    Ideas for becoming who <span className="accent">God made you to be.</span>
  </h2>
);

function StepBody({ step }: { step: Step }) {
  return (
    <>
      <h3 className="display-md">{step.title}</h3>
      <p className="lede max-w-md mt-4 md:mt-5">{step.text}</p>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-5 micro">
        {step.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-6 md:mt-8">
        {step.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="pill">
            {l.label}
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden />
          </a>
        ))}
      </div>
    </>
  );
}

function StepVisual({ step, pinned }: { step: Step; pinned: boolean }) {
  return (
    <div className={cn("photo", pinned ? "h-[30svh] lg:h-full lg:w-auto lg:aspect-[4/5]" : "aspect-[4/3] md:aspect-[4/5] md:max-w-[440px] md:ml-auto")}>
      <Image src={step.visual.src} alt={step.visual.alt} fill sizes="(min-width: 1024px) 440px, 100vw" style={{ objectPosition: step.visual.position }} />
    </div>
  );
}

/** True when the viewport is too short to pin a full step (phone landscape, small laptop windows). */
function useShortViewport() {
  const [short, setShort] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-height: 560px)");
    const update = () => setShort(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return short;
}

/** Read · Listen · Watch. Pinned: as the page scrolls through, the copy and picture step from one to the next. */
export function Ideas() {
  const short = useShortViewport();
  return short ? <IdeasStacked /> : <IdeasPinned />;
}

function IdeasStacked() {
  return (
    <section id="ideas" className="container-x py-16 md:py-24">
      <Heading />
      <div className="space-y-20 md:space-y-28 mt-12">
        {steps.map((step) => (
          <div key={step.n} className="grid grid-cols-12 gap-x-6 gap-y-8 items-center">
            <div className="col-span-12 md:col-span-6 min-w-0">
              <p className="micro inline-flex items-center gap-1.5 mb-6">
                <step.icon className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden />
                {step.verb}
              </p>
              <StepBody step={step} />
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 min-w-0">
              <StepVisual step={step} pinned={false} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function IdeasPinned() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const raw = v * steps.length;
    const next = Math.min(steps.length - 1, Math.max(0, Math.floor(raw)));
    setActive((prev) => {
      if (next === prev) return prev;
      // dead zone around each boundary so a scroll that settles on the line does not flip back and forth
      const edge = next > prev ? next : prev;
      return Math.abs(raw - edge) > 0.08 ? next : prev;
    });
  });

  const step = steps[active];
  const drift = useTransform(scrollYProgress, [0, 1], [28, -28]);

  return (
    <section id="ideas" ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 h-[100svh] flex items-start lg:items-center overflow-hidden">
        <div className="container-x w-full grid grid-cols-12 gap-x-6 gap-y-5 items-center pt-20 lg:pt-0">
          <div className="col-span-12 lg:col-span-6 min-w-0">
            <p className="label mb-5 md:mb-7">Read · Listen · Watch</p>
            <div className="mb-6 md:mb-8">
              <Heading />
            </div>
            <ol className="flex flex-wrap gap-x-6 gap-y-1">
              {steps.map((s, i) => (
                <li
                  key={s.n}
                  className={cn(
                    "micro inline-flex items-center gap-1.5 transition-colors duration-500",
                    i === active ? "!text-[color:var(--paper)]" : "!text-[color:var(--paper-40)]"
                  )}
                >
                  <s.icon className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden />
                  {s.verb}
                </li>
              ))}
            </ol>
            <div className="relative h-px w-40 bg-white/10 mt-4 mb-6 md:mb-8 overflow-hidden" aria-hidden>
              <m.span className="absolute inset-0 origin-left bg-[color:var(--paper)]" style={{ scaleX: scrollYProgress }} />
            </div>

            <div className="grid min-h-[14rem] lg:min-h-[19rem]">
              <AnimatePresence initial={false}>
                <m.div
                  key={step.n}
                  className="col-start-1 row-start-1 min-w-0"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <StepBody step={step} />
                </m.div>
              </AnimatePresence>
            </div>
          </div>

          <m.div className="col-span-12 lg:col-span-5 lg:col-start-8 grid min-w-0 lg:h-[min(64svh,580px)]" style={{ y: drift }}>
            <AnimatePresence initial={false}>
              <m.div
                key={step.n}
                className="col-start-1 row-start-1 min-w-0 lg:h-full lg:flex lg:items-center lg:justify-end"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.6, ease }}
              >
                <StepVisual step={step} pinned />
              </m.div>
            </AnimatePresence>
          </m.div>
        </div>
      </div>
    </section>
  );
}
