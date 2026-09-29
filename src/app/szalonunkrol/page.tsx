import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Gallery } from "@/components/Gallery";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Szalonunkról" };

const group = [
  {
    title: "Fitohorm Kft.",
    text: "A Fitohorm Kft. gépjárműkereskedelmi és szervizelési ágazata a Fitohorm Autóház.",
    href: "http://www.fitohorm.hu",
  },
  {
    title: "Fitohorm Autószerviz",
    text: "2003-ban végeztem Karosszéria-lakatos mesterként, így új tevékenységi körrel bővült a cég. 2008-ban nyitott meg a karosszéria javító műhely, 400m2-en. Újabb fejlesztés 2010-ben következett, egy szintén 400 m2-es csarnok építésével, mely gépjármű fényező műhelyként üzemel. A nekünk bizalmat szavazó magánszemélyek és cégek igényeit felmérve 2013-ban valósult meg a gépjármű javítást, szervizelést lehetővé tevő autószervizünk eredetiség- és műszaki vizsgaállomásunkkal. A három csarnokkal teljeskörű szolgáltatást tudunk nyújtani mind a személygépjárművek, mind a tehergépjárművek terén.",
    href: "https://autoszerviz-fitohorm.hu/",
  },
  {
    title: "Generációváltás",
    text: "2017. a generációváltás éve volt. Édesapám átadta a stafétabotot bátyámnak, Szabó Attilának és nekem. A vegyiüzem szakmai cégvezetésével Forrai Dusán, addigi kereskedelmi igazgatót bíztuk meg.",
    href: "http://www.fitohorm.hu",
  },
  {
    title: "Hotel Elizabeth",
    text: "2017-ben a Fitohorm Kft. megvásárolta az akkor már több, mint 10 éve zárva tartó Banara Hotelt, melyet az épület nagy részének felújítása, korszerűsítése után Szabó Attila, mint a Fitohorm Kft. egyik ügyvezető igazgatója vezeti. A Hotel fejlesztése folyamatos, a közeljövőben több ütemben kerül kivitelezésre.",
    href: "https://hotelelizabeth.hu/",
  },
  {
    title: "Kedvenc kisbuszom",
    text: "A Fitohorm Kft. egy 20 fő + 1 sofőr és egy 30+1 fő szállítására alkalmas, külföldön, belföldön egyaránt bérelhető kisbusszal és csomagszállító utánfutóval rendelkezik.",
    href: "https://kedvenckisbuszom.hu/",
  },
];

const gallery = [
  { src: "/img/pages/szalon-1.jpg", alt: "A Fitohorm Autóház szalonja" },
  { src: "/img/pages/szalon-2.jpg", alt: "Autók a bemutatóteremben" },
  { src: "/img/pages/szalon-4.jpg", alt: "A szalon Baján" },
  { src: "/img/pages/szalon-3.jpg", alt: "Bemutatóterem" },
  { src: "/img/pages/szalon-5.jpg", alt: "Autókozmetika" },
  { src: "/img/pages/szalon-hero.jpg", alt: "A Fitohorm Autóház épülete" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Bemutatkozás"
        title="Fitohorm Autóház"
        description="Dongfeng, Mitsubishi és Cenntro márkakereskedés és szerviz Baján, a Szegedi úton."
        image="/img/pages/szalon-hero.jpg"
      />

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-20 lg:grid-cols-12 lg:px-8">
        <div className="relative aspect-square overflow-hidden rounded-[20px] bg-[#eee] lg:col-span-5">
          <Image
            src="/img/staff/szabo-balazs.jpg"
            alt="Szabó Balázs"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
        <div className="lg:col-span-7">
          <p className="text-[16px] leading-8 text-muted">
            Szabó Balázs vagyok, a Fitohorm Kft. egyik ügyvezető igazgatója és résztulajdonosa, a
            cég gépjárműkereskedelmi és szervizelési ágazatának vezetője.
          </p>
          <h2 className="mt-8 text-[28px] font-medium leading-tight tracking-tight sm:text-[34px]">
            A 2020-as év elején jutott tudomásomra,
          </h2>
          <div className="mt-5 space-y-4 text-[16px] leading-8 text-muted">
            <p>
              hogy eladóvá vált a két márkát forgalmazó bajai autószalon. Azonnal lehetőséget láttam
              benne, hogy egy újabb területen próbáljam ki magamat, kompletté téve az ágazat
              szolgáltatási körét.
            </p>
            <p>
              A szalon átvételét és beindítását nagyban befolyásolták a pandémia miatti gyártás
              leállások, megszorítások és az emberek jövőképének bizonytalanságai.
            </p>
            <p>
              Remélem az elkövetkező időben sikerül egy olyan csapatot és légkört kialakítani, ahova
              szívesen tér be Ön is új gépjárművet vásárolni vagy szervizeltetni.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              { n: "2020", l: "óta a bajai szalon" },
              { n: "3 márka", l: "Dongfeng, Mitsubishi, Cenntro" },
              { n: "Saját", l: "vizsgaállomás" },
            ].map((s) => (
              <div key={s.n}>
                <p className="text-[20px] font-medium">{s.n}</p>
                <p className="mt-1 text-[13px] text-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Gallery images={gallery} title="A szalonunk" />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <p className="text-[14px] font-medium text-muted">Szolgáltatásaink</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="border-t border-line bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-[1400px]">
          <p className="px-2 text-[14px] font-medium text-muted">A Fitohorm cégcsoport</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {group.map((g) => (
              <a
                key={g.title}
                href={g.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col rounded-[20px] bg-[#f4f4f4] p-7 transition-colors hover:bg-[#ececec]"
              >
                <p className="text-[20px] font-medium tracking-tight">{g.title}</p>
                <p className="mt-3 flex-1 text-[14px] leading-6 text-muted">{g.text}</p>
                <p className="mt-5 text-[13px] font-medium text-brand">tovább az oldalra ›</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
