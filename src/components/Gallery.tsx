"use client";

import Image from "next/image";
import { useState } from "react";
import { DragSlider } from "@/components/DragSlider";

export type GalleryImage = { src: string; alt: string };

export function Gallery({
  images,
  featuredCount = 3,
  eyebrow = "Galéria",
  title,
  subtitle = "Húzd oldalra a képeket.",
}: {
  images: GalleryImage[];
  featuredCount?: number;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  const current = images.find((r) => r.src === active);
  const featured = images.slice(0, featuredCount);
  const slides = images.slice(featuredCount);

  return (
    <>
      {featured.length ? (
        <section className="bg-white px-4 pt-4 pb-4 sm:px-6 sm:pt-6 sm:pb-6">
          <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-2">
            {featured.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setActive(item.src)}
                aria-label={item.alt}
                className={`relative min-h-[280px] overflow-hidden rounded-[20px] bg-black sm:min-h-[360px] ${
                  i === 2 ? "lg:col-span-2 lg:min-h-[420px]" : "lg:min-h-[380px]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes={i === 2 ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
                />
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {slides.length ? (
        <DragSlider eyebrow={eyebrow} title={title} subtitle={subtitle}>
          {slides.map((item) => (
            <button
              key={item.src}
              type="button"
              data-slide
              aria-label={item.alt}
              onClick={() => setActive(item.src)}
              className="relative h-[52vh] min-h-[300px] w-[min(78vw,820px)] shrink-0 overflow-hidden rounded-[20px] bg-[#ddd] sm:h-[58vh]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                draggable={false}
                className="pointer-events-none object-cover"
                sizes="(min-width: 1024px) 820px, 78vw"
              />
            </button>
          ))}
        </DragSlider>
      ) : null}

      {current ? <Lightbox image={current} onClose={() => setActive(null)} /> : null}
    </>
  );
}

export function Lightbox({
  image,
  onClose,
}: {
  image: GalleryImage;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute right-6 top-6 text-[14px] font-medium text-white"
      >
        Bezárás
      </button>
      <Image
        src={image.src}
        alt={image.alt}
        width={1600}
        height={1200}
        className="max-h-[88vh] w-auto max-w-full rounded-[20px] object-contain"
      />
    </div>
  );
}
