import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero, SectionLabel } from "@/components/PageHero";
import { company, emails, phones, socials, staff } from "@/lib/site";

export const metadata: Metadata = { title: "Kapcsolat" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kapcsolat"
        title="Kérdése lenne? Írjon nekünk üzenetet!"
        description={company.addressLine}
        image="/img/pages/kapcsolat-hero.jpg"
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <SectionLabel>Elérhetőségek</SectionLabel>
          <ul className="mt-5 space-y-4">
            <li>
              <p className="text-[13px] text-muted">Szerviz</p>
              <a
                href={phones.service.href}
                className="text-[22px] font-medium tracking-tight hover:text-brand"
              >
                {phones.service.value}
              </a>
            </li>
            <li>
              <p className="text-[13px] text-muted">Értékesítés</p>
              {phones.sales.map((p) => (
                <a
                  key={p.value}
                  href={p.href}
                  className="block text-[22px] font-medium tracking-tight hover:text-brand"
                >
                  {p.value}
                </a>
              ))}
            </li>
            <li>
              <p className="text-[13px] text-muted">Email</p>
              <a href={`mailto:${emails.info}`} className="text-[16px] hover:underline">
                {emails.info}
              </a>
            </li>
            <li>
              <p className="text-[13px] text-muted">Címünk</p>
              <a
                href={company.mapLink}
                target="_blank"
                rel="noreferrer"
                className="text-[16px] hover:underline"
              >
                {company.addressLine}
              </a>
            </li>
          </ul>

          <div className="mt-10">
            <SectionLabel>Nyitvatartás</SectionLabel>
            <p className="mt-4 text-[15px] leading-7">
              {company.hoursWeekday}
              <br />
              <span className="text-muted">{company.hoursWeekend}</span>
            </p>
          </div>

          <div className="mt-10 flex gap-2">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-[12px] bg-[#f4f4f4] px-4 py-2 text-[13px] font-medium transition-colors hover:bg-[#e6e6e6]"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionLabel>Írjon nekünk</SectionLabel>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <section id="munkatarsak" className="scroll-mt-24 bg-[#f4f4f4] px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-[1400px]">
          <div className="px-2">
            <p className="text-[14px] font-medium text-muted">Csapatunk</p>
            <h2 className="mt-1 text-[28px] font-medium tracking-tight sm:text-[36px]">Munkatársak</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {staff.map((p) => (
              <div key={p.name} className="overflow-hidden rounded-[20px] bg-white">
                <div className="relative aspect-[4/4] bg-[#eee]">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 45vw, 90vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[18px] font-medium tracking-tight">{p.name}</p>
                  <p className="mt-1 text-[13px] leading-5 text-muted">{p.role}</p>
                  <div className="mt-4 space-y-1 text-[13px]">
                    {p.email ? (
                      <a href={`mailto:${p.email}`} className="block break-all text-brand hover:underline">
                        {p.email}
                      </a>
                    ) : null}
                    {p.phone ? (
                      <a
                        href={`tel:${p.phone.replace(/[^\d+]/g, "")}`}
                        className="block text-ink hover:underline"
                      >
                        {p.phone}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-10">
        <MapEmbed />
      </div>
    </>
  );
}
