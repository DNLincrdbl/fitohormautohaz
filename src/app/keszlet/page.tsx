import type { Metadata } from "next";
import Link from "next/link";
import { CarCatalog } from "@/components/CarCatalog";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Gépjármű készletünk",
  description: "Mitsubishi, Dongfeng és Cenntro új gépjárművek készletről, akciós árakkal Baján.",
};

export default async function StockPage({
  searchParams,
}: {
  searchParams: Promise<{ marka?: string }>;
}) {
  const { marka } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Gépjármű"
        title="Készletlista"
        description="Melyik márka után érdeklődik? Mitsubishi, Dongfeng és Cenntro modellek akciós árakkal, részletes ártáblával."
        image="/img/hero/dongfeng-t5-evo.webp"
      />

      <section className="bg-[#f4f4f4] px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-[1400px]">
          <CarCatalog key={marka ?? "all"} initialBrand={marka} />
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <p className="text-[14px] font-medium text-muted">Használt autót keres?</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-[28px] font-medium tracking-tight sm:text-[36px]">
          Használt gépjárműveink
        </h2>
        <Link href="/hasznalt-gepjarmuvek" className="tds-btn tds-btn-dark mx-auto mt-8">
          Használt gépjárművek
        </Link>
      </section>
    </>
  );
}
