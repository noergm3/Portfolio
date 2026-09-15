import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import ProjectClientContent from "./ProjectClientContent";

export async function generateStaticParams() {
  return portfolioData.en.projects.list.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = portfolioData.en.projects.list.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.problem || project.highlight,
    alternates: {
      canonical: `https://noegonzalez.dev/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Case Study | Noé González Mendoza`,
      description: project.problem || project.highlight,
      url: `https://noegonzalez.dev/projects/${slug}`,
      type: "article",
      images: [
        {
          url: "https://noegonzalez.dev/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${project.title} - Noé González Mendoza`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study | Noé González Mendoza`,
      description: project.problem || project.highlight,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const projectEn = portfolioData.en.projects.list.find((p) => p.slug === slug);
  const projectEs = portfolioData.es.projects.list.find((p) => p.slug === slug);

  if (!projectEn) {
    notFound();
  }

  return (
    <ProjectClientContent
      slug={slug}
      initialEn={projectEn}
      initialEs={projectEs || projectEn}
      allProjectsEn={portfolioData.en.projects.list}
      allProjectsEs={portfolioData.es.projects.list}
    />
  );
}
