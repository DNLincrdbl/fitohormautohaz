"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/site";

const INTERVAL_MS = 6000;

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [reach, setReach] = useState(1);

  const go = (next: number) => {
    if (next === index) return;
    setPrev(index);
    setIndex(next);
    setReach((r) => Math.max(r, next + 1));
  };

  useEffect(() => {
    const next = (index + 1) % heroSlides.length;
    const id = window.setTimeout(() => {
      setPrev(index);
      setIndex(next);
      setReach((r) => Math.max(r, next + 1));
    }, INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [index]);

  return (
    <>
      <div className="absolute inset-0 bg-black" aria-hidden="true">
        {heroSlides.slice(0, reach + 1).map((slide, i) => (
          <div
            key={slide.src}
            className={`hero-slide absolute inset-0 ${
              i === index ? "is-active" : i === prev ? "is-leaving" : ""
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              preload={i === 0}
              loading={i === 0 ? undefined : "eager"}
              className="object-cover brightness-[.75]"
              sizes="100vw"
            />
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.25) 45%, rgba(0,0,0,.15) 70%, rgba(0,0,0,.4) 100%)",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-8 sm:px-10 sm:pb-10">
        <div className="relative min-h-[260px] sm:min-h-[280px]">
          {heroSlides.map((slide, i) => (
            <div
              key={slide.src}
              aria-hidden={i !== index}
              className={`hero-copy absolute inset-x-0 bottom-0 max-w-[720px] ${i === index ? "is-active" : ""}`}
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-white/75">
                {slide.eyebrow}
              </p>
              <h2 className="mt-3 text-[44px] font-medium leading-[1.02] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,.35)] sm:text-[64px] lg:text-[76px]">
                {slide.title}
              </h2>
              <p className="mt-4 text-[17px] text-white/85 sm:text-[20px]">{slide.text}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Link
                  href={slide.href}
                  tabIndex={i === index ? 0 : -1}
                  className="tds-btn tds-btn-primary"
                >
                  {slide.cta}
                </Link>
                <Link
                  href="/idopontfoglalas"
                  tabIndex={i === index ? 0 : -1}
                  className="tds-btn tds-btn-glass"
                >
                  Szerviz időpont
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-8 gap-2 sm:gap-3">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`${slide.eyebrow} ${slide.title}`}
              aria-current={i === index}
              className="group py-2 text-left"
            >
              <span className="block h-[3px] overflow-hidden rounded-full bg-white/25">
                <span
                  key={i === index ? `on-${index}` : "off"}
                  className={`block h-full rounded-full bg-white ${
                    i === index ? "hero-progress" : i < index ? "w-full" : "w-0"
                  }`}
                />
              </span>
              <span
                className={`mt-2 hidden truncate text-[12px] font-medium transition-colors lg:block ${
                  i === index ? "text-white" : "text-white/55 group-hover:text-white/85"
                }`}
              >
                {slide.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
