import type { Metadata } from "next";
import { WorkWithMePage } from "./WorkWithMePage";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Mastermind, masterclasses and 1:1 coaching with Jesse Dan-Yusuf for creators, founders and leaders who want clarity, direction and the right kind of support for the season they're in.",
  alternates: { canonical: "/work-with-me" },
};

export default function Page() {
  return <WorkWithMePage />;
}
