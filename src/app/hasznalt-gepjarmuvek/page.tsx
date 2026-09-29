import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { brandSites, phones } from "@/lib/site";

export const metadata: Metadata = { title: "Használt gépjárművek" };

export default function UsedCarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Fitohorm"
        title="Használt gépjárművek"
        description="Aktuális használtautó kínálatunk folyamatosan frissül a Használtautó.hu partneroldalunkon."
        image="/img/pages/hasznalt.png"
      />

      <section className="px-4 py-6 sm:px-6">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 rounded-[20px] bg-[#f4f4f4] p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <div className="relative aspect-[6/5] overflow-hidden rounded-[16px]">
            <Image
              src="/img/pages/hasznalt.png"
              alt="Használt gépjármű a Fitohorm Autóháznál"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div>
            <p className="text-[14px] font-medium text-muted">Kiemelt ajánlat</p>
            <h2 className="mt-3 text-[32px] font-medium tracking-tight sm:text-[40px]">Opel Astra</h2>
            <p className="mt-4 text-[16px] leading-7 text-muted">
              További autók, részletes adatokkal és fotókkal a partneroldalunkon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={brandSites.usedCars}
                target="_blank"
                rel="noreferrer"
                className="tds-btn tds-btn-primary"
              >
                További autók
              </a>
              <a href={phones.sales[0].href} className="tds-btn tds-btn-light">
                Hívás: {phones.sales[0].value}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <p className="text-[14px] font-medium text-muted">Új autót keres?</p>
        <Link href="/keszlet" className="tds-btn tds-btn-dark mx-auto mt-6">
          Új gépjárművek
        </Link>
      </section>
    </>
  );
}
