import { AboutPage } from "./AboutPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description:
    "One story. Many expressions. Jesse Dan-Yusuf is Lead Pastor of One City Church in Abuja, leads the creative studio Fyreworks, and writes and teaches through Masterpiece.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
