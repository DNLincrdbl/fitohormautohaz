import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { brandSites, phones, serviceTiles } from "@/lib/site";

export const metadata: Metadata = { title: "Szolgáltatásaink" };

const workshops = [
  { name: "Fényező műhely", href: brandSites.paintshop },
  { name: "Karosszéria javító műhely", href: brandSites.bodyshop },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="„Megbízhatóságunk a legfontosabb alkatrész.”"
        title="Szolgáltatásaink"
        description="Márkaszerviz, alkatrész, autókozmetika, saját vizsgaállomás, kárügyintézés és finanszírozás – egy helyen, Baján."
        image="/img/pages/szerviz-hero.jpg"
      />

      <section className="bg-white px-4 py-4 sm:px-6 sm:py-6">
        <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceTiles.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative min-h-[340px] overflow-hidden rounded-[20px] bg-black"
            >
              <Image
                src={s.image}
                alt={s.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,.65) 0%, rgba(0,0,0,0) 60%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                <p className="text-[24px] font-medium leading-tight tracking-tight text-white">{s.name}</p>
                <span className="tds-btn tds-btn-light tds-btn-tile shrink-0">Bővebben</span>
              </div>
            </Link>
          ))}
          {workshops.map((w) => (
            <a
              key={w.href}
              href={w.href}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[160px] flex-col justify-between rounded-[20px] bg-[#f4f4f4] p-7 transition-colors hover:bg-[#ececec]"
            >
              <p className="text-[14px] font-medium text-muted">Fitohorm Autószerviz</p>
              <p className="text-[24px] font-medium tracking-tight">{w.name} ↗</p>
            </a>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <p className="text-[14px] font-medium text-muted">Szervizbejelentés</p>
        <a
          href={phones.service.href}
          className="mt-3 inline-block text-[36px] font-medium tracking-tight hover:text-brand sm:text-[48px]"
        >
          {phones.service.value}
        </a>
        <div className="mt-8">
          <Link href="/idopontfoglalas" className="tds-btn tds-btn-primary">
            Időpontfoglalás
          </Link>
        </div>
      </section>

      <MapEmbed />
    </>
  );
}
