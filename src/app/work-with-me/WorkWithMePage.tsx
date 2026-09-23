"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { email } from "@/lib/site";
import { EditorialShell } from "@/components/editorial/EditorialShell";
import { Nav } from "@/components/editorial/Nav";
import { PageHero } from "@/components/editorial/PageHero";
import { Reveal } from "@/components/editorial/Reveal";
import { Footer } from "@/components/editorial/Footer";

const interests = ["Mastermind", "Masterclass", "1:1 Coaching", "Not sure yet"] as const;
type Interest = (typeof interests)[number];

interface Offer {
  id: string;
  n: string;
  interest: Interest;
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
    interest: "Mastermind",
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
    interest: "Masterclass",
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
    interest: "1:1 Coaching",
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
  // Each offer's button opens the enquiry form below with that offer already chosen
  const [interest, setInterest] = useState<Interest>("Not sure yet");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // Netlify Forms: the static HTML carries the form definition; submissions post to the site root
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const pairs = Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v)]);
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(pairs).toString(),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

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
                  <a href="#start" onClick={() => setInterest(o.interest)} className="pill pill-solid !h-12 !px-6 mt-8 group">
                    {o.cta}
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <section id="start" className="container-x pb-20 md:pb-36 scroll-mt-24">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <Reveal className="col-span-12 lg:col-span-5">
            <h2 className="display-xl max-w-[12ch]">
              Not sure where <span className="accent">to start?</span>
            </h2>
            <p className="lede max-w-md mt-6 md:mt-8">Tell me where you are, what you&apos;re working through, and what you&apos;re hoping to change.</p>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7" delay={0.1}>
            {status === "sent" ? (
              <div className="lg:pt-4">
                <p className="display-md">Thank you.</p>
                <p className="body max-w-md mt-4">Your message is on its way. I&apos;ll read it properly and reply personally.</p>
              </div>
            ) : (
              <form
                name="work-with-me"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7 lg:pt-4 [color-scheme:dark]"
              >
                <input type="hidden" name="form-name" value="work-with-me" />
                <p className="hidden">
                  <label>
                    Leave this empty: <input name="bot-field" />
                  </label>
                </p>
                <label className="block">
                  <span className="micro block mb-1">Name</span>
                  <input type="text" name="name" required autoComplete="name" className="field !text-base md:!text-lg" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="micro block mb-1">Email</span>
                  <input type="email" name="email" required autoComplete="email" className="field !text-base md:!text-lg" placeholder="you@example.com" />
                </label>
                <label className="block relative sm:col-span-2">
                  <span className="micro block mb-1">I&apos;m interested in</span>
                  <select
                    name="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value as Interest)}
                    className="field !text-base md:!text-lg appearance-none pr-8"
                  >
                    {interests.map((option) => (
                      <option key={option} value={option} className="bg-black text-[color:var(--paper)]">
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-0 bottom-4 text-[color:var(--paper-60)] pointer-events-none" aria-hidden />
                </label>
                <label className="block sm:col-span-2">
                  <span className="micro block mb-1">Where are you, and what are you hoping to change?</span>
                  <textarea name="message" rows={4} required className="field !text-base md:!text-lg resize-none" placeholder="A few lines is plenty" />
                </label>
                <div className="sm:col-span-2 flex flex-wrap items-center gap-5 pt-2">
                  <button type="submit" disabled={status === "sending"} className="pill pill-solid !h-12 !px-6 group disabled:opacity-60">
                    {status === "sending" ? (
                      "Sending…"
                    ) : (
                      <>
                        Find the right fit
                        <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.75} aria-hidden />
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="micro">
                      Something went wrong. You can also email{" "}
                      <a href={`mailto:${email}`} className="text-[color:var(--paper)] underline underline-offset-4">
                        {email}
                      </a>
                      .
                    </p>
                  )}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <Footer />
    </EditorialShell>
  );
}
