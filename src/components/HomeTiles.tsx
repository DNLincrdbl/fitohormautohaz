import Image from "next/image";
import Link from "next/link";
import { brands, cars } from "@/lib/cars";

const tiles = brands.map((brand, i) => ({
  ...brand,
  count: cars.filter((c) => c.brand === brand.id).length,
  wide: i === 2,
}));

export function HomeTiles() {
  return (
    <section id="markak" className="scroll-mt-24 bg-white px-4 py-4 sm:px-6 sm:py-6">
      <div className="mx-auto grid max-w-[1400px] gap-4 lg:grid-cols-2">
        {tiles.map((tile) => (
          <article
            key={tile.id}
            className={`relative min-h-[420px] overflow-hidden rounded-[20px] bg-black lg:min-h-0 ${
              tile.wide ? "lg:col-span-2 lg:aspect-[2.35/1]" : "lg:aspect-[16/10]"
            }`}
          >
            <Image
              src={tile.image}
              alt={tile.name}
              fill
              className="object-cover object-center"
              sizes={tile.wide ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,.62) 0%, rgba(0,0,0,.16) 45%, rgba(0,0,0,.22) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-between px-6 py-7 sm:px-10 sm:py-9">
              <p className="text-[15px] font-medium text-white/90">Forgalmazott márkák</p>
              <div>
                <h2 className="text-[32px] font-medium leading-none tracking-tight text-white sm:text-[40px]">
                  {tile.name}
                </h2>
                <p className="mt-2 max-w-lg text-[16px] text-white/90 sm:text-[18px]">
                  {tile.headline} {tile.count} modell a készletlistán.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href={`/keszlet?marka=${tile.id}`}
                    className="tds-btn tds-btn-primary tds-btn-tile"
                  >
                    Készlet
                  </Link>
                  {tile.site ? (
                    <a
                      href={tile.site}
                      target="_blank"
                      rel="noreferrer"
                      className="tds-btn tds-btn-light tds-btn-tile"
                    >
                      Márkaoldal
                    </a>
                  ) : (
                    <Link href="/cenntro" className="tds-btn tds-btn-light tds-btn-tile">
                      Bővebben
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
