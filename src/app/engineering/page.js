import { portfolioData } from "@/data/portfolioData";
import EngineeringClient from "./EngineeringClient";

export const metadata = {
  title: "Engineering Notes & System Design Insights",
  description:
    "Engineering reflections on building scalable enterprise frontends, multi-tenant SaaS architectures, RBAC authorization, and database design by Noé González Mendoza.",
  alternates: {
    canonical: "https://noegonzalez.dev/engineering",
  },
  openGraph: {
    title: "Engineering Notes & System Design - Noé González Mendoza",
    description:
      "Deep technical reflections on React, Next.js, multi-tenant data isolation, RBAC, and database performance by Senior Software Engineer Noé González Mendoza.",
    url: "https://noegonzalez.dev/engineering",
    type: "website",
    images: [
      {
        url: "https://noegonzalez.dev/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Engineering Notes - Noé González Mendoza",
      },
    ],
  },
};

export default function EngineeringHubPage() {
  return (
    <EngineeringClient
      initialEn={portfolioData.en.engineering}
      initialEs={portfolioData.es.engineering}
    />
  );
}
