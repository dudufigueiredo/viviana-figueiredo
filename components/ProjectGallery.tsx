"use client";
import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

type GalleryImage = { src: string; alt: string };

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="flex flex-col gap-5">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="relative w-full bg-[#f5f5f5] cursor-zoom-in text-left"
            aria-label={img.alt}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={2400}
              height={0}
              style={{ width: "100%", height: "auto" }}
              className="block"
              sizes="(max-width: 1366px) 100vw, 1366px"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images}
        plugins={[Counter]}
        carousel={{ padding: "60px" }}
      />
    </>
  );
}
