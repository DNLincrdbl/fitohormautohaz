"use client";

import { useMemo, useState } from "react";
import { CarCard } from "@/components/CarCard";
import { brands, cars, type BrandId } from "@/lib/cars";

type Filter = "all" | BrandId;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "Mind" },
  ...brands.map((b) => ({ id: b.id, label: b.name })),
];

export function CarCatalog({ initialBrand }: { initialBrand?: string }) {
  const start: Filter = filters.some((f) => f.id === initialBrand)
    ? (initialBrand as Filter)
    : "all";
  const [active, setActive] = useState<Filter>(start);

  const groups = useMemo(
    () =>
      brands
        .filter((b) => active === "all" || b.id === active)
        .map((b) => ({ brand: b, cars: cars.filter((c) => c.brand === b.id) })),
    [active],
  );

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={`h-9 shrink-0 rounded-[12px] px-4 text-[14px] font-medium transition-colors duration-300 ${
              active === f.id ? "bg-ink text-white" : "bg-white text-ink hover:bg-[#e6e6e6]"
            }`}
          >
            {f.label}
            <span className={`ml-2 text-[12px] ${active === f.id ? "text-white/60" : "text-muted"}`}>
              {f.id === "all" ? cars.length : cars.filter((c) => c.brand === f.id).length}
            </span>
          </button>
        ))}
      </div>

      {groups.map(({ brand, cars: list }) => (
        <section key={brand.id} id={brand.id} className="mt-12 scroll-mt-28">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="text-[28px] font-medium tracking-tight sm:text-[32px]">{brand.name}</h2>
              <p className="mt-1 text-[14px] text-muted">{brand.headline}</p>
            </div>
            {brand.site ? (
              <a
                href={brand.site}
                target="_blank"
                rel="noreferrer"
                className="text-[14px] font-medium text-brand hover:underline"
              >
                {brand.site.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")} ↗
              </a>
            ) : null}
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {list.map((car) => (
              <CarCard key={car.slug} car={car} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
