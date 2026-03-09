"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImageSource } from "@sanity/image-url";
import { useState } from "react";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  location?: string;
  coverImage: SanityImageSource;
};

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const imageUrl = urlFor(project.coverImage).width(1200).height(900).url();

  return (
    <Link
      href={`/projetos/${project.slug.current}`}
      className="group block relative overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f5]">
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-transform duration-800 ease-smooth ${hovered ? "scale-105" : "scale-100"}`}
        />
        {/* Overlay: always visible on mobile, hover-only on desktop */}
        <div className="absolute inset-0 bg-black/30 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-600 ease-smooth" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-smooth">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-tight text-center">
            {project.title}
          </h2>
          {project.location && (
            <p className="text-xs tracking-[0.12em] uppercase font-bold text-white/80 mt-2 text-center">
              {project.location}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
