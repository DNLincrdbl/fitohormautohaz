"use client";

import Image from "next/image";
import { useState } from "react";
import { Lightbox } from "@/components/Gallery";

export function PriceTable({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 block w-full max-w-xl overflow-hidden rounded-[20px] border border-line bg-white transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,.08)]"
        aria-label={`${alt} nagyítása`}
      >
        <Image
          src={src}
          alt={alt}
          width={1414}
          height={2000}
          className="h-auto w-full"
          sizes="(min-width: 640px) 576px, 100vw"
        />
      </button>
      {open ? <Lightbox image={{ src, alt }} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
