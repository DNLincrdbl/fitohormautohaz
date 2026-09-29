import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CarCard } from "@/components/CarCard";
import { PriceTable } from "@/components/PriceTable";
import { cars, getBrand, getCar } from "@/lib/cars";
import { emails, phones } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return cars.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) return { title: "Gépjármű" };
  return {
    title: car.name,
    description: `${car.name}: ${car.features.join(", ")}.${
      car.price ? ` Akciós ár: ${car.price.final}.` : ""
    }`,
  };
}

export default async function CarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = getCar(slug);
  if (!car) notFound();

  const brand = getBrand(car.brand);
  const related = cars.filter((c) => c.brand === car.brand && c.slug !== car.slug).slice(0, 3);
  const inquiry = `mailto:${emails.sales}?subject=${encodeURIComponent(
    `Érdeklődés – ${car.name}`,
  )}`;

  return (
    <article>
      <section className="bg-white px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="relative mx-auto aspect-[4/3] max-w-[1400px] overflow-hidden rounded-[20px] bg-[#eee] sm:aspect-[21/9]">
          <Image
            src={car.image}
            alt={car.name}
            fill
            preload
            className="object-cover"
            sizes="100vw"
          />
          {car.badge ? (
            <span className="absolute left-5 top-5 rounded-[10px] bg-white/95 px-3 py-1.5 text-[13px] font-medium">
              {car.badge}
            </span>
          ) : null}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-14 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <Link
            href={`/keszlet?marka=${brand.id}`}
            className="text-[14px] font-medium text-muted hover:text-ink"
          >
            ‹ {brand.name} készlet
          </Link>
          <h1 className="mt-4 text-[40px] font-medium leading-tight tracking-tight sm:text-[52px]">
            {car.name}
          </h1>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {car.features.map((f) => (
              <li key={f} className="py-4 text-[16px]">
                {f}
              </li>
            ))}
          </ul>
          {car.grant ? (
            <Link
              href={car.grant.href}
              className="mt-8 flex items-center justify-between rounded-[16px] bg-[#f4f4f4] px-6 py-5 text-[15px] font-medium hover:bg-[#ececec]"
            >
              {car.grant.label} – pályázat részletei
              <span className="text-muted">›</span>
            </Link>
          ) : null}
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-[20px] bg-[#f4f4f4] p-7">
            {car.price ? (
              <dl className="space-y-4">
                {car.price.gross ? (
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[14px] text-muted">Bruttó ár</dt>
                    <dd className="text-[16px] text-muted line-through decoration-black/30">
                      {car.price.gross}
                    </dd>
                  </div>
                ) : null}
                {car.price.discount ? (
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="text-[14px] text-muted">Akció</dt>
                    <dd className="text-[16px] font-medium">– {car.price.discount}</dd>
                  </div>
                ) : null}
                <div className="border-t border-line pt-4">
                  <dt className="text-[14px] text-muted">
                    {car.price.gross ? "Akciós bruttó vételár" : "Ár"}
                  </dt>
                  <dd className="mt-1 text-[30px] font-medium tracking-tight">{car.price.final}</dd>
                  {car.price.note ? (
                    <dd className="mt-1 text-[13px] text-muted">{car.price.note}</dd>
                  ) : null}
                </div>
              </dl>
            ) : (
              <p className="text-[15px] leading-7 text-muted">
                Árajánlatért és elérhetőségért keresse értékesítő kollégáinkat.
              </p>
            )}
            <div className="mt-7 grid gap-3">
              <a href={inquiry} className="tds-btn tds-btn-primary w-full min-w-0">
                Ajánlatkérés
              </a>
              <a href={phones.sales[0].href} className="tds-btn tds-btn-light w-full min-w-0">
                Hívás: {phones.sales[0].value}
              </a>
              {car.catalog ? (
                <a
                  href={car.catalog.href}
                  target="_blank"
                  rel="noreferrer"
                  className="tds-btn tds-btn-gray w-full min-w-0"
                >
                  {car.catalog.label} (PDF)
                </a>
              ) : null}
            </div>
          </div>
        </aside>
      </section>

      {car.priceTable ? (
        <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
          <p className="text-[14px] font-medium text-muted">Ártábla</p>
          <h2 className="mt-2 text-[28px] font-medium tracking-tight">Paraméterek és felszereltség</h2>
          <PriceTable src={car.priceTable} alt={`${car.name} ártábla`} />
        </section>
      ) : null}

      {related.length ? (
        <section className="bg-[#f4f4f4] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-[1400px]">
            <p className="px-2 text-[14px] font-medium text-muted">További {brand.name} modellek</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {related.map((c) => (
                <CarCard key={c.slug} car={c} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
