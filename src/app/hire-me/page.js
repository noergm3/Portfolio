import { portfolioData } from "@/data/portfolioData";
import HireMeClient from "./HireMeClient";

export const metadata = {
  title: "Hire Noé González Mendoza | Senior Software Engineer Briefing",
  description:
    "Recruiter & Engineering Leader Briefing: 10+ years experience building enterprise systems, SaaS platforms, and modern web applications with React, Next.js, and Node.js. Available for global remote roles.",
  alternates: {
    canonical: "https://noegonzalez.dev/hire-me",
  },
  openGraph: {
    title: "Hire Noé González Mendoza | Senior Software Engineer",
    description:
      "Recruiter & Hiring Manager quick-scan briefing: Senior Software Engineer (Full Stack · React · Next.js · Node.js). Available for global remote opportunities.",
    url: "https://noegonzalez.dev/hire-me",
    type: "profile",
    images: [
      {
        url: "https://noegonzalez.dev/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hire Noé González Mendoza - Senior Software Engineer",
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
