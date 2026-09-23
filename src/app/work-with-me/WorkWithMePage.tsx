"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { email } from "@/lib/site";
import { EditorialShell } from "@/components/editorial/EditorialShell";
import { Nav } from "@/components/editorial/Nav";
import { PageHero } from "@/components/editorial/PageHero";
import { Reveal } from "@/components/editorial/Reveal";
import { Float } from "@/components/editorial/Float";
import { Footer } from "@/components/editorial/Footer";

/** Opens the visitor's email app, addressed to Jesse, with the subject (and an optional prompt) filled in. */
const mailTo = (subject: string, body?: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

interface Offer {
  id: string;
  n: string;
  href: string;
  title: ReactNode;
  subtitle: string;
  body: string[];
  bestFor: string;
  cta: string;
}

const offers: Offer[] = [
  {
    id: "mastermind",
    n: "01",
    href: mailTo("Mastermind"),
    title: (
      <>
        Join my <span className="accent">Mastermind.</span>
      </>
    ),
    subtitle: "Build alongside people who are serious about growth.",
    body: [
      "A small, curated community for creators, founders and leaders who want clarity, accountability, fresh perspective and meaningful relationships as they build.",
      "We meet around the real questions: What are you building? What’s getting in the way? What needs to change? And what does your next season require from you?",
    ],
    bestFor: "people who want ongoing support, community and accountability.",
    cta: "Join the Mastermind",
  },
  {
    id: "masterclass",
    n: "02",
    href: mailTo("Masterclasses"),
    title: (
      <>
        Join a <span className="accent">Masterclass.</span>
      </>
    ),
    subtitle: "Go deeper on one idea that could change how you work and live.",
    body: [
      "Focused, practical sessions on the subjects I think and work around most: calling, creativity, personal brand, meaningful work, leadership, storytelling and building ideas that matter.",
      "Come for a few hours. Leave with greater clarity and something you can actually use.",
    ],
    bestFor: "people who want focused teaching around a specific challenge or opportunity.",
    cta: "Explore Masterclasses",
  },
  {
    id: "coaching",
    n: "03",
    href: mailTo("1:1 Coaching"),
    title: (
      <>
        Work with me <span className="accent">1:1.</span>
      </>
    ),
    subtitle: "Sometimes you need a room where the whole conversation is about you.",
    body: [
      "Personal coaching is a focused space to think clearly about your life, work, calling or next move.",
      "We’ll uncover what matters most, work through what’s keeping you stuck, and turn the things you’ve been thinking about into clear decisions and practical next steps.",
      "No formulas. No generic playbook. Just thoughtful, honest work around where you are and where you want to go.",
    ],
    bestFor: "people at a meaningful transition, decision point or season of reinvention.",
    cta: "Apply for 1:1 Coaching",
  },
];

export function WorkWithMePage() {
  return (
    <EditorialShell>
      <Nav />

      <PageHero
        image="/images/jesse-side-profile.jpg"
        position="50% 20%"
        alt="Jesse Dan-Yusuf"
        title={
          <>
            Work <span className="accent">With Me</span>
          </>
        }
      >
        <p className="text-xl sm:text-2xl md:text-3xl leading-[1.15] tracking-[-0.035em] max-w-xl">
          You don&apos;t need more information. You need clarity, direction, and{" "}
          <span className="accent">the right kind of support for the season you&apos;re in.</span>
        </p>
        <p className="body max-w-lg mt-6 md:mt-8">
          I work with creators, founders, leaders and people who want to become more intentional about who they are, what they&apos;re building, and the
          life they&apos;re becoming.
        </p>
      </PageHero>

      {/* Three offers */}
      <section className="container-x pt-16 md:pt-32 pb-20 md:pb-36">
        <Reveal>
          <h2 className="display-xl max-w-[14ch]">
            Here are three ways <span className="accent">I can help.</span>
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-20 border-b border-white/10">
          {offers.map((o, i) => (
            <Reveal key={o.id} delay={0.05 * i}>
              <article id={o.id} className="grid grid-cols-12 gap-x-6 gap-y-6 py-10 md:py-16 border-t border-white/10 scroll-mt-24">
                <div className="col-span-12 lg:col-span-5">
                  <p className="label">{o.n}.</p>
                  <h3 className="display-lg mt-4">{o.title}</h3>
                  <p className="text-lg md:text-xl leading-[1.3] font-medium tracking-[-0.03em] mt-5 max-w-sm">{o.subtitle}</p>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7 lg:pt-9">
                  <div className="body space-y-4 max-w-lg">
                    {o.body.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                  <p className="text-[15px] md:text-base leading-[1.55] max-w-lg mt-6">
                    <span className="font-semibold">Best for:</span> <span className="text-[color:var(--paper-60)]">{o.bestFor}</span>
                  </p>
                  <a href={o.href} className="pill pill-solid !h-12 !px-6 mt-8 group">
                    {o.cta}
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Speaking invitations: separate from the three ways to work together */}
      <section id="speaking" className="container-x pb-20 md:pb-36 scroll-mt-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-center">
          <Reveal className="col-span-10 sm:col-span-7 md:col-span-5">
            <Float amount={36}>
              <div className="photo aspect-[4/5]">
                <Image
                  src="/images/jesse-portrait.jpg"
                  alt="Jesse Dan-Yusuf speaking on stage"
                  fill
                  sizes="(min-width: 768px) 40vw, 80vw"
                  style={{ objectPosition: "50% 30%" }}
                />
              </div>
            </Float>
          </Reveal>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="label mb-6 md:mb-8">Speaking</p>
              <h2 className="display-xl">
                Invite me to <span className="accent">speak.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg md:text-xl leading-[1.3] font-medium tracking-[-0.03em] mt-6 md:mt-8 max-w-md">
                Speaking, preaching and teaching.
              </p>
              <p className="body max-w-md mt-4">Invite me to speak, preach or teach at your church, conference or gathering.</p>
              <a href={mailTo("Speaking invitation", "Event:\nDate:\nLocation:\nAudience:\n")} className="pill pill-solid !h-12 !px-6 mt-8 group">
                Invite me to speak
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </EditorialShell>
  );
}
