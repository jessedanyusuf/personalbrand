"use client";

import { EditorialShell } from "@/components/editorial/EditorialShell";
import { Nav } from "@/components/editorial/Nav";
import { Hero } from "@/components/editorial/Hero";
import { MasterpieceStatement } from "@/components/editorial/MasterpieceStatement";
import { Ideas } from "@/components/editorial/Ideas";
import { ServeBuild } from "@/components/editorial/ServeBuild";
import { Story } from "@/components/editorial/Story";
import { WorkWithMe } from "@/components/editorial/WorkWithMe";
import { Newsletter } from "@/components/editorial/Newsletter";
import { Footer } from "@/components/editorial/Footer";

// Hero → Masterpiece → Ideas → One City/Fyreworks → Story → Work With Me → Newsletter → Footer
export default function Home() {
  return (
    <EditorialShell>
      <div id="top" />
      <Nav />
      <Hero />
      <MasterpieceStatement />
      <Ideas />
      <ServeBuild />
      <Story />
      <WorkWithMe />
      <Newsletter />
      <Footer />
    </EditorialShell>
  );
}
