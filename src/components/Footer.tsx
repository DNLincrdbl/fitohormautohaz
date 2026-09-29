import Image from "next/image";
import Link from "next/link";
import { company, emails, footerCopy, nav, phones, serviceTiles, socials } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/logo.png"
            alt="Fitohorm Autóház"
            width={1134}
            height={128}
            className="h-[16px] w-auto"
          />
          <p className="mt-5 max-w-xs text-[13px] leading-6 text-muted">{company.tagline}.</p>
          <ul className="mt-5 flex gap-4">
            {socials.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[13px] font-medium text-muted hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <FooterList
          title="Menü"
          items={[
            ...nav.map((n) => ({ href: n.href, label: n.label })),
            { href: "/idopontfoglalas", label: "Időpontfoglalás" },
            { href: "/allasajanlatok", label: "Állásajánlatok" },
          ]}
        />
        <FooterList
          title="Szolgáltatások"
          items={serviceTiles.map((s) => ({ href: s.href, label: s.name }))}
        />
        <div className="text-[13px] leading-6 text-muted">
          <p className="mb-3 text-[13px] font-medium text-ink">Kapcsolat</p>
          <a href={company.mapLink} target="_blank" rel="noreferrer" className="hover:text-ink">
            {company.addressLine}
          </a>
          <ul className="mt-3 space-y-1">
            <li>
              <a href={phones.service.href} className="hover:text-ink">
                Szerviz: {phones.service.value}
              </a>
            </li>
            {phones.sales.map((p) => (
              <li key={p.value}>
                <a href={p.href} className="hover:text-ink">
                  Értékesítés: {p.value}
                </a>
              </li>
            ))}
          </ul>
          <a href={`mailto:${emails.info}`} className="mt-3 inline-block hover:text-ink">
            {emails.info}
          </a>
          <p className="mt-3">
            {company.hoursWeekday}
            <br />
            {company.hoursWeekend}
          </p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-5 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>2026 © {footerCopy}</p>
          <Link href="/adatkezelesi-tajekoztato" className="hover:text-ink">
            Adatkezelési tájékoztató
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="mb-3 text-[13px] font-medium">{title}</p>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-[13px] text-muted hover:text-ink">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
