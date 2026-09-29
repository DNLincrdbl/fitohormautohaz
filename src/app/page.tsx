import Image from "next/image";
import Link from "next/link";
import { CarCard } from "@/components/CarCard";
import { DragSlider } from "@/components/DragSlider";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { HomeTiles } from "@/components/HomeTiles";
import { MapEmbed } from "@/components/MapEmbed";
import { cars } from "@/lib/cars";
import { company, phones, services } from "@/lib/site";

const promos = [
  {
    href: "/keszlet/mitsubishi-grandis-invite-plus",
    image: "/img/pages/hir-1.jpg",
    title: "Mitsubishi Grandis – most 3.000.000 Ft kedvezménnyel",
    span: "",
  },
  {
    href: "/keszlet/mitsubishi-outlander",
    image: "/img/pages/hir-2.png",
    title: "Mitsubishi Outlander – most 5.000.000 Ft kedvezménnyel",
    span: "",
  },
  {
    href: "/keszlet?marka=dongfeng",
    image: "/img/pages/akcio-dongfeng.jpg",
    title: "Dongfeng akciók: T5 Evo, U-Tour, Shine GS, Mage",
    span: "lg:col-span-2",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative h-[calc(100svh-76px)] overflow-hidden bg-black text-white">
        <HeroSlideshow />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,.45) 0%, rgba(0,0,0,.2) 40%, rgba(0,0,0,.5) 100%)",
          }}
        />
        <div className="relative flex h-full flex-col items-center">
          <div className="mt-[16vh] px-6 text-center">
            <h1 className="text-[48px] font-medium leading-none tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,.35)] sm:text-[72px] lg:text-[84px]">
              Fitohorm Autóház
            </h1>
            <p className="mt-5 text-[20px] font-normal text-white/90 [text-shadow:0_2px_18px_rgba(0,0,0,.35)] sm:text-[28px] lg:text-[32px]">
              Dongfeng · Mitsubishi · Cenntro
            </p>
          </div>
          <div className="mb-20 mt-auto flex w-full flex-col items-center justify-center gap-4 px-6 sm:flex-row sm:gap-6">
            <Link href="/keszlet" className="tds-btn tds-btn-primary">
              Készletünk
            </Link>
            <Link href="/idopontfoglalas" className="tds-btn tds-btn-glass">
              Szerviz időpont
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pt-4 sm:px-6 sm:pt-6">
        <div className="mx-auto grid max-w-[1400px] gap-4 md:grid-cols-3">
          <InfoTile label="Szervizbejelentés">
            <a href={phones.service.href} className="hover:text-brand">
              {phones.service.value}
            </a>
          </InfoTile>
          <InfoTile label="Nyitvatartás">
            <span>{company.hoursWeekday}</span>
            <span className="block text-[14px] font-normal text-muted">{company.hoursWeekend}</span>
          </InfoTile>
          <InfoTile label="Értékesítés">
            {phones.sales.map((p) => (
              <a key={p.value} href={p.href} className="block hover:text-brand">
                {p.value}
              </a>
            ))}
          </InfoTile>
        </div>
      </section>

      <HomeTiles />

      <section className="bg-white px-4 pb-4 sm:px-6 sm:pb-6">
        <div className="mx-auto grid max-w-[1400px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {promos.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              aria-label={p.title}
              className={`group relative min-h-[380px] overflow-hidden rounded-[20px] border border-line bg-white ${p.span}`}
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                sizes={p.span ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
              />
            </Link>
          ))}
          <Link
            href="/elektromos-tehergepjarmu-tamogatas"
            className="group relative min-h-[380px] overflow-hidden rounded-[20px] bg-black sm:col-span-2 lg:col-span-4 lg:aspect-[2.35/1] lg:min-h-0"
          >
            <Image
              src="/img/pages/palyazat-hero.jpg"
              alt="Állami támogatás e-járművekre"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,.65) 0%, rgba(0,0,0,.1) 60%)" }}
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-7 sm:px-10 sm:py-9">
              <p className="text-[15px] font-medium text-white/90">Hírek</p>
              <h2 className="mt-1 text-[32px] font-medium leading-tight tracking-tight text-white sm:text-[40px]">
                3.600.000 Ft Állami támogatás e-járművekre!
              </h2>
              <span className="tds-btn tds-btn-light tds-btn-tile mt-5">Részletek</span>
            </div>
          </Link>
        </div>
      </section>

      <DragSlider eyebrow="Készletünk" title="Új gépjárművek" subtitle="Húzd oldalra az autókat.">
        {cars.map((car) => (
          <CarCard key={car.slug} car={car} slide />
        ))}
      </DragSlider>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[14px] font-medium text-muted">Szolgáltatásaink</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-[32px] font-medium leading-tight tracking-tight sm:text-[40px]">
            Minden egy helyen, az autóvásárlástól a szervizig.
          </h2>
        </div>
        <ul className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.title}>
              <Link
                href={s.href}
                className="flex h-full items-center justify-between gap-4 rounded-[16px] bg-[#f4f4f4] px-6 py-5 text-[15px] font-medium transition-colors hover:bg-[#ececec]"
              >
                {s.title}
                <span className="text-muted">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-4 sm:px-6">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 rounded-[20px] bg-[#f4f4f4] p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[16px]">
            <Image
              src="/img/pages/szalon-hero.jpg"
              alt="A Fitohorm Autóház szalonja Baján"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div>
            <p className="text-[14px] font-medium text-muted">Bemutatkozás</p>
            <h2 className="mt-3 text-[32px] font-medium leading-tight tracking-tight sm:text-[40px]">
              Köszöntünk a Fitohorm Autóház oldalán!
            </h2>
            <p className="mt-5 text-[17px] leading-8 text-muted">{company.quote}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/szalonunkrol" className="tds-btn tds-btn-dark">
                Szalonunkról
              </Link>
              <Link href="/virtualis-seta" className="tds-btn tds-btn-light">
                Virtuális séta
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <p className="text-[14px] font-medium text-muted">Kérdésed lenne?</p>
        <a
          href={phones.service.href}
          className="mt-3 inline-block text-[40px] font-medium tracking-tight hover:text-brand sm:text-[56px]"
        >
          {phones.service.value}
        </a>
        <p className="mt-2 text-[14px] font-medium uppercase tracking-[0.08em] text-muted">
          Keress minket bizalommal!
        </p>
        <Link href="/kapcsolat" className="tds-btn tds-btn-primary mx-auto mt-10">
          Elérhetőségek
        </Link>
      </section>

      <MapEmbed title="Címünk" />
    </>
  );
}

function InfoTile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[20px] bg-[#f4f4f4] px-7 py-6">
      <p className="text-[13px] text-muted">{label}</p>
      <div className="mt-1 text-[18px] font-medium tracking-tight">{children}</div>
    </div>
  );
}
