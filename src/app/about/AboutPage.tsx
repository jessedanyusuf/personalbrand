"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { links } from "@/lib/site";
import { EditorialShell } from "@/components/editorial/EditorialShell";
import { Nav } from "@/components/editorial/Nav";
import { PageHero } from "@/components/editorial/PageHero";
import { Float } from "@/components/editorial/Float";
import { Reveal } from "@/components/editorial/Reveal";
import { Newsletter } from "@/components/editorial/Newsletter";
import { Footer } from "@/components/editorial/Footer";

interface Role {
  role: string;
  org: string;
  text: string;
  href?: string;
}

// TODO: confirm titles (and add years) for Fyreworks, Campfyre and anything missing
const roles: Role[] = [
  { role: "Lead Pastor", org: "One City Church Abuja", text: "A gospel movement helping everyone, everywhere, become one with God.", href: links.oneCity },
  { role: "Creative Director", org: "Fyreworks", text: "A creative studio helping visionaries turn bold ideas into meaningful impact.", href: links.fyreworks },
  { role: "Founder", org: "Campfyre", text: "Courses, community and resources for building a sustainable creative life.", href: links.campfyre },
  { role: "Writer", org: "Masterpiece", text: "An ongoing letter about faith, creativity, calling and becoming.", href: links.masterpiece },
  { role: "Co-facilitator", org: "Becoming One", text: "One City's pre-marriage course, led with Eva alongside trained mentor couples." },
];

function Photo({ src, alt, position, aspect = "aspect-[3/4]", sizes, className }: { src: string; alt: string; position: string; aspect?: string; sizes: string; className?: string }) {
  return (
    <div className={`photo ${aspect}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className={className} style={{ objectPosition: position }} />
    </div>
  );
}

export function AboutPage() {
  return (
    <EditorialShell>
      <Nav />

      <PageHero
        image="/images/jesse-portrait-bw.jpg"
        position="50% 25%"
        alt="Jesse Dan-Yusuf"
        title={
          <>
            About <span className="accent">Me</span>
          </>
        }
      >
        <p className="text-xl sm:text-2xl md:text-3xl leading-[1.15] tracking-[-0.035em] max-w-xl">
          I&apos;m Jesse Dan-Yusuf, a pastor, creator and entrepreneur{" "}
          <span className="accent">helping people find their story in God&apos;s story.</span>
        </p>
        {/* TODO: Jesse to review and rewrite in his own words */}
        <div className="body space-y-4 max-w-lg mt-6 md:mt-8">
          <p>
            For as long as I can remember I&apos;ve been fascinated by God, by creativity and by ideas, and by the possibility that a life could be made
            into something meaningful.
          </p>
          <p>
            For a long time those felt like separate paths. Over the years they turned out to be one calling, and today they show up as a church, a
            creative studio, a community for creatives and a letter called Masterpiece.
          </p>
          <p>I&apos;m not writing from the finish line. I&apos;m still being made.</p>
        </div>
      </PageHero>

      {/* Statement */}
      <section className="container-x pt-20 md:pt-40 pb-20 md:pb-36 text-center">
        <Reveal>
          <p className="label mb-8">The idea beneath everything</p>
          <h2 className="statement mx-auto max-w-[22ch]">
            Every life is God&apos;s <span className="accent">masterpiece,</span> made on purpose, for a purpose.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lede max-w-xl mx-auto mt-10 md:mt-14">
            Ephesians 2:10 is the thread that runs through my preaching, my writing and my work: we are his workmanship, created for good works God
            prepared beforehand.
          </p>
        </Reveal>
      </section>

      {/* One City */}
      <section className="container-x pb-20 md:pb-36">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-center">
          <Reveal className="col-span-9 sm:col-span-6 lg:col-span-4">
            <Float amount={28}>
              <Photo src="/images/jesse-preaching.jpg" alt="Jesse Dan-Yusuf preaching at One City Church Abuja" position="50% 30%" sizes="(min-width: 1024px) 33vw, 75vw" />
            </Float>
          </Reveal>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="label mb-6">Serving</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-lg">
                In 2015, a small group of us gathered in a living room in Abuja. That gathering became <span className="accent">One City Church,</span>{" "}
                where I serve as Lead Pastor.
              </h2>
              <a href={links.oneCity} target="_blank" rel="noopener noreferrer" className="arrow-link mt-10 group">
                Visit One City
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} aria-hidden />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Fyreworks & Campfyre, at opposite ends */}
      <section className="container-x pb-20 md:pb-36">
        <Reveal>
          <p className="label mb-8 md:mb-16">Building</p>
        </Reveal>
        <div className="grid grid-cols-12 gap-x-6 gap-y-14 md:gap-y-16">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <Reveal>
              <h2 className="display-md">
                I lead <span className="accent">Fyreworks,</span> a creative studio helping visionaries turn bold ideas into meaningful impact.
              </h2>
            </Reveal>
            <Reveal className="mt-8 md:mt-10" delay={0.1}>
              <Float amount={28}>
                {/* Typographic plate until there is a current Fyreworks photograph */}
                <div className="photo aspect-[16/10] md:aspect-[4/3]">
                  <div className="absolute inset-0 flex items-end p-6 md:p-8 bg-[radial-gradient(120%_80%_at_70%_110%,#3a1f14_0%,#1a1412_45%,#141414_100%)]">
                  <p className="text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.85] tracking-[-0.065em] font-medium">
                    Fyre<span className="accent">works</span>
                  </p>
                  </div>
                </div>
              </Float>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-8 md:pt-32 lg:pt-48">
            <Reveal delay={0.1}>
              <h2 className="display-md">
                And <span className="accent">Campfyre,</span> a home for creatives building a sustainable creative life.
              </h2>
            </Reveal>
            <Reveal className="mt-8 md:mt-10" delay={0.2}>
              <Float amount={40}>
                <Photo src="/images/campyfre.jpg" alt="A Campfyre conversation on stage" position="50% 45%" aspect="aspect-[16/10] md:aspect-[4/3]" sizes="(min-width: 768px) 45vw, 100vw" />
              </Float>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Faith & family */}
      <section className="container-x pb-20 md:pb-36">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 items-center">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <p className="label mb-6">Faith &amp; family</p>
              <h2 className="display-lg">
                At the centre of my life is my family. I&apos;m married to <span className="accent">Eva,</span> and together we&apos;re raising AvaGrace
                and Eden.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="body max-w-md mt-8 md:mt-10">
                Eva and I pastor together at One City, and we lead Becoming One, our pre-marriage course, because we believe every marriage matters to
                God&apos;s mission.
              </p>
            </Reveal>
          </div>
          <Reveal className="col-span-9 col-start-4 sm:col-span-5 sm:col-start-8 lg:col-span-4 lg:col-start-9" delay={0.1}>
            <Float>
              <Photo src="/images/jesse-and-eva.jpg" alt="Jesse and Eva Dan-Yusuf" position="50% 35%" sizes="(min-width: 1024px) 33vw, 75vw" />
            </Float>
          </Reveal>
        </div>
      </section>

      {/* Roles */}
      <section className="container-x pb-8 md:pb-16">
        <Reveal>
          <p className="label mb-8">Work</p>
          <h2 className="display-xl">
            Where you&apos;ll <span className="accent">find me.</span>
          </h2>
        </Reveal>
        <ul className="mt-10 md:mt-20 border-b border-white/10">
          {roles.map((r, i) => {
            const row = (
              <div className="grid grid-cols-12 gap-x-4 gap-y-1 items-baseline py-5 md:py-7">
                <span className="col-span-2 md:col-span-1 num-sm text-sm md:text-base text-[color:var(--paper-40)]">(0{i + 1})</span>
                <p className="col-span-10 md:col-span-5 text-lg md:text-2xl font-medium tracking-[-0.035em]">
                  {r.role} <span className="text-[color:var(--paper-40)]">&mdash; {r.org}</span>
                </p>
                <p className="col-span-10 col-start-3 md:col-span-5 md:col-start-auto body">{r.text}</p>
                <span className="hidden md:flex col-span-1 justify-end">
                  {r.href && <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity" strokeWidth={1.75} aria-hidden />}
                </span>
              </div>
            );
            return (
              <li key={r.org} className="group border-t border-white/10">
                {r.href ? (
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="block">
                    {row}
                  </a>
                ) : (
                  row
                )}
              </li>
            );
          })}
        </ul>
      </section>

      <Newsletter />
      <Footer />
    </EditorialShell>
  );
}
