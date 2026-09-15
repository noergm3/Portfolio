import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import ArticleClient from "./ArticleClient";

export async function generateStaticParams() {
  return portfolioData.en.engineering.articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = portfolioData.en.engineering.articles.find(
    (a) => a.slug === slug
  );

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Engineering Notes`,
    description: article.summary,
    alternates: {
      canonical: `https://noegonzalez.dev/engineering/${slug}`,
    },
    openGraph: {
      title: `${article.title} - Noé González Mendoza`,
      description: article.summary,
      url: `https://noegonzalez.dev/engineering/${slug}`,
      type: "article",
      images: [
        {
          url: "https://noegonzalez.dev/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${article.title} - Engineering Notes`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} - Noé González Mendoza`,
      description: article.summary,
    },
  };
}

export default async function EngineeringArticlePage({ params }) {
  const { slug } = await params;
  const articleEn = portfolioData.en.engineering.articles.find(
    (a) => a.slug === slug
  );
  const articleEs = portfolioData.es.engineering.articles.find(
    (a) => a.slug === slug
  );

  if (!articleEn) {
    notFound();
  }

  return (
    <ArticleClient
      slug={slug}
      initialEn={articleEn}
      initialEs={articleEs || articleEn}
    />
  );
}
