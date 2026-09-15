import { portfolioData } from "@/data/portfolioData";
import HireMeClient from "./HireMeClient";

export const metadata = {
  title: "Hire Me | Senior Frontend Engineer Briefing",
  description:
    "Recruiter & Engineering Leader Briefing: 10+ years experience, specialized in React, Next.js, enterprise architecture, and multi-tenant SaaS. Available for global remote contractor roles.",
  alternates: {
    canonical: "https://noegonzalez.dev/hire-me",
  },
  openGraph: {
    title: "Hire Me | Senior Frontend Engineer - Noé González Mendoza",
    description:
      "Recruiter & Hiring Manager quick-scan briefing: Senior Frontend Engineer (React / Next.js / JavaScript / Node.js). Available for global remote opportunities.",
    url: "https://noegonzalez.dev/hire-me",
    type: "profile",
    images: [
      {
        url: "https://noegonzalez.dev/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hire Noé González Mendoza - Senior Frontend Engineer",
      },
    ],
  },
};

export default function HireMePage() {
  return (
    <HireMeClient
      initialEn={portfolioData.en.hireMe}
      initialEs={portfolioData.es.hireMe}
      projectsEn={portfolioData.en.projects.list}
      projectsEs={portfolioData.es.projects.list}
    />
  );
}
