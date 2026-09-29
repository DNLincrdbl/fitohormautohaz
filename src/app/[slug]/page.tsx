import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentBlocks } from "@/components/ContentBlocks";
import { PageHero } from "@/components/PageHero";
import { getPage, pages } from "@/lib/pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return {};
  return { title: page.metaTitle ?? page.title, description: page.description };
}

export default async function ContentPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();

  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        image={page.hero}
      />
      <ContentBlocks blocks={page.blocks} />
    </>
  );
}
