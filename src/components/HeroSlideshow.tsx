"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site";

const INTERVAL_MS = 6000;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [reach, setReach] = useState(1);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % heroSlides.length;
        setReach((r) => Math.max(r, next + 1));
        return next;
      });
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 bg-black" aria-hidden="true">
      {heroSlides.slice(0, reach + 1).map((slide, i) => (
        <div
          key={slide.src}
          className={`hero-slide absolute inset-0 ${i === index ? "is-active" : ""}`}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            preload={i === 0}
            loading={i === 0 ? undefined : "eager"}
            className="object-cover brightness-[.7]"
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
