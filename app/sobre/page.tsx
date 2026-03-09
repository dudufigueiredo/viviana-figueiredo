import { client } from "@/sanity/lib/client";
import { aboutQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

export const revalidate = 60;

type About = {
  bio?: unknown[];
  photo?: SanityImageSource;
};

export default async function SobrePage() {
  const about: About | null = await client.fetch(aboutQuery).catch(() => null);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        {about?.photo && (
          <div className="relative aspect-[3/4] bg-[#f5f5f5]">
            <Image
              src={urlFor(about.photo).width(900).height(1200).url()}
              alt="Viviana Figueiredo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
        <div className="pt-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#1a1a1a] leading-tight mb-10">
            Sobre
          </h1>
          {about?.bio ? (
            <div className="prose prose-neutral font-light text-[#444] leading-relaxed [&_p]:mb-6">
              <PortableText value={about.bio as Parameters<typeof PortableText>[0]["value"]} />
            </div>
          ) : (
            <p className="text-[#444] leading-relaxed font-light">
              Decoradora de interiores há mais de 20 anos, Viviana Figueiredo
              iniciou sua carreira aos 25 anos ao lado de sua avó, Leda
              Magalhães. Após sete anos como assistente, concluiu cursos de
              arquitetura e decoração e estabeleceu seu escritório independente.
              Sua marca é o trabalho colaborativo — todos os projetos são
              altamente personalizados, desenvolvidos em cocriação com os
              clientes do início ao fim.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
