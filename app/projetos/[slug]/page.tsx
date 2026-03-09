import { client } from "@/sanity/lib/client";
import { projectBySlugQuery, projectsQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { SanityImageSource } from "@sanity/image-url";
import ProjectGallery from "@/components/ProjectGallery";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const projects = await client.fetch(projectsQuery);
    return projects.map((p: { slug: { current: string } }) => ({
      slug: p.slug.current,
    }));
  } catch {
    return [];
  }
}

type Project = {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  coverImage: SanityImageSource;
  gallery?: SanityImageSource[];
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: Project | null = await client.fetch(projectBySlugQuery, {
    slug,
  });

  if (!project) notFound();

  return (
    <article className="-mt-[73px]">
      <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-[#f5f5f5]">
        <Image
          src={urlFor(project.coverImage).width(2400).height(1350).url()}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="max-w-[1366px] mx-auto px-5 py-8 md:py-12 text-center">
        {project.location && (
          <p className="text-xs tracking-[0.15em] uppercase text-[#888] mb-3">
            {project.location}
          </p>
        )}
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium text-[#1a1a1a] leading-tight">
          {project.title}
        </h1>
        {project.description && (
          <p className="mt-8 text-base leading-relaxed text-[#444] font-light max-w-2xl mx-auto">
            {project.description}
          </p>
        )}
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="max-w-[1366px] mx-auto px-5">
          <ProjectGallery
            images={(project.gallery ?? []).map((image, i) => ({
              src: urlFor(image).width(2400).url(),
              alt: `${project.title} — ${i + 1}`,
            }))}
          />
        </div>
      )}
    </article>
  );
}
