"use client";

import { EditorialShell } from "@/components/editorial/EditorialShell";
import { Nav } from "@/components/editorial/Nav";
import { Hero } from "@/components/editorial/Hero";
import { MasterpieceStatement } from "@/components/editorial/MasterpieceStatement";
import { Ideas } from "@/components/editorial/Ideas";
import { ServeBuild } from "@/components/editorial/ServeBuild";
import { Story } from "@/components/editorial/Story";
import { SelectedWork } from "@/components/editorial/SelectedWork";
import { WorkWithMe } from "@/components/editorial/WorkWithMe";
import { Newsletter } from "@/components/editorial/Newsletter";
import { Footer } from "@/components/editorial/Footer";

// Hero → Masterpiece → Ideas → One City/Fyreworks → Story → Selected Work → Work With Me → Newsletter → Footer
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
      <SelectedWork />
      <WorkWithMe />
      <Newsletter />
      <Footer />
    </EditorialShell>
  );
}
