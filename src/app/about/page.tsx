import type { Metadata } from "next";
import { AboutPage } from "./AboutPage";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jesse Dan-Yusuf is a pastor, creator and entrepreneur: Lead Pastor of One City Church Abuja, building the creative studio Fyreworks, and writing Masterpiece.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return <AboutPage />;
}
