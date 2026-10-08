import { WorkWithMePage } from "./WorkWithMePage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Work With Me",
  description:
    "Mastermind, masterclasses, 1:1 coaching and speaking with Jesse Dan-Yusuf, for people who are building something, becoming someone, or making sense of the calling on their lives.",
  path: "/work-with-me",
});

export default function Page() {
  return <WorkWithMePage />;
}
