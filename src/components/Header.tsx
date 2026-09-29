"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { megaCars } from "@/lib/cars";
import {
  aboutTiles,
  grantTiles,
  megaLinks,
  nav,
  serviceTiles,
  type MegaKey,
  type MegaTile,
} from "@/lib/site";

const MEGA_CLOSE_MS = 80;

const megaTiles: Record<MegaKey, MegaTile[]> = {
  keszlet: megaCars.map((car) => ({
    name: car.model,
    href: `/keszlet/${car.slug}`,
    image: car.image,
    note: car.price?.final,
  })),
  szolgaltatasok: serviceTiles,
  rolunk: aboutTiles,
  palyazat: grantTiles,
};

function isActive(pathname: string, href: string, match?: string[]) {
  const paths = match ?? [href];
  return paths.some((p) => (p === "/" ? pathname === "/" : pathname === p || pathname.startsWith(`${p}/`)));
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState<MegaKey | null>(null);
  const [shown, setShown] = useState<MegaKey>("keszlet");
  const [prevPath, setPrevPath] = useState(pathname);
  const closeTimer = useRef<number>(0);

  if (pathname !== prevPath) {
    setPrevPath(pathname);
    setOpen(false);
    setMega(null);
  }

  const openMega = (key: MegaKey) => {
    window.clearTimeout(closeTimer.current);
    setShown(key);
    setMega(key);
  };

  const keepMega = () => window.clearTimeout(closeTimer.current);

  const scheduleCloseMega = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMega(null), MEGA_CLOSE_MS);
  };

  const closeMegaNow = () => {
    window.clearTimeout(closeTimer.current);
    setMega(null);
  };

  useEffect(() => {
    const onScroll = () => {
      window.clearTimeout(closeTimer.current);
      setMega(null);
      setOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(closeTimer.current);
    };
  }, []);

  const tiles = megaTiles[shown];

  return (
    <>
      <header
        className={`site-header sticky top-0 z-50 bg-white text-ink ${mega ? "is-mega-open" : ""}`}
      >
        <div className="grid h-[76px] grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10">
          <Link href="/" className="justify-self-start" aria-label="Fitohorm Autóház – Főoldal">
            <Image
              src="/logo.png"
              alt="Fitohorm Autóház"
              width={1134}
              height={128}
              preload
              className="h-[15px] w-auto sm:h-[17px]"
            />
          </Link>

          <nav className="hidden h-full items-stretch gap-1 justify-self-center self-stretch lg:flex">
            {nav.map((item) => {
              const active = isActive(pathname, item.href, item.match);
              const highlight = active || (item.mega !== undefined && mega === item.mega);
              const link = (
                <Link
                  href={item.href}
                  aria-expanded={item.mega ? mega === item.mega : undefined}
                  className={`flex items-center rounded-[12px] px-4 py-2 text-[14px] font-medium transition-colors duration-300 ease-out hover:bg-[#eee] ${
                    highlight ? "bg-[#eee]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );

              if (!item.mega) {
                return (
                  <span
                    key={item.href}
                    className="flex items-center"
                    onMouseEnter={scheduleCloseMega}
                  >
                    {link}
                  </span>
                );
              }

              const key = item.mega;
              return (
                <span
                  key={item.href}
                  className="flex h-full items-center"
                  onMouseEnter={() => openMega(key)}
                  onMouseLeave={scheduleCloseMega}
                >
                  {link}
                </span>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-5">
            <Link
              href="/idopontfoglalas"
              className={`hidden rounded-[12px] px-4 py-2 text-[14px] font-medium transition-colors duration-300 ease-out hover:bg-[#eee] lg:inline ${
                pathname === "/idopontfoglalas" ? "bg-[#eee]" : ""
              }`}
            >
              Időpontfoglalás
            </Link>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center"
              aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="flex w-4 flex-col gap-[5px]">
                <span
                  className={`h-px w-full bg-current transition ${open ? "translate-y-[3px] rotate-45" : ""}`}
                />
                <span
                  className={`h-px w-full bg-current transition ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>

        <div
          className="mega-panel absolute inset-x-0 top-full hidden lg:block"
          aria-hidden={mega ? undefined : true}
          onMouseEnter={keepMega}
          onMouseLeave={scheduleCloseMega}
        >
          <div className="absolute inset-x-0 -top-3 h-3" aria-hidden="true" />
          <div className="mega-clip">
            <div className="mega-clip-inner">
              <div className="mx-auto grid max-w-7xl grid-cols-[1fr_220px] gap-12 px-8 pb-14 pt-6">
                <div className="grid grid-cols-4 gap-x-6 gap-y-8">
                  {tiles.map((item) => (
                    <Link key={item.href} href={item.href} className="group block text-center">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] bg-[#eee]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          sizes="260px"
                        />
                      </div>
                      <p className="mt-3 text-[15px] font-medium tracking-tight">{item.name}</p>
                      {item.note ? (
                        <p className="mt-0.5 text-[12px] text-muted">{item.note}-tól</p>
                      ) : null}
                    </Link>
                  ))}
                </div>
                <ul className="space-y-3 border-l border-line pl-8 pt-1">
                  {megaLinks[shown].map((l) => (
                    <li key={l.href}>
                      <MegaLinkItem href={l.href} label={l.label} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {open ? (
          <div className="max-h-[calc(100svh-76px)] overflow-y-auto border-t border-line bg-white px-6 py-8 text-ink lg:px-10">
            <div className="mx-auto flex max-w-md flex-col gap-7">
              {nav.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className="text-[20px] font-medium">
                    {item.label}
                  </Link>
                  {item.mega ? (
                    <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                      {megaTiles[item.mega].map((t) => (
                        <li key={t.href}>
                          <Link href={t.href} className="text-[14px] text-muted hover:text-ink">
                            {t.name}
                          </Link>
                        </li>
                      ))}
                      {megaLinks[item.mega].map((l) => (
                        <li key={l.href}>
                          <MegaLinkItem href={l.href} label={l.label} small />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
              <Link href="/idopontfoglalas" className="tds-btn tds-btn-primary mt-2">
                Időpontfoglalás
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      <div
        className="mega-backdrop pointer-events-none fixed inset-x-0 bottom-0 top-[76px] z-40 bg-black/40 opacity-0"
        onClick={closeMegaNow}
      />
    </>
  );
}

function MegaLinkItem({ href, label, small }: { href: string; label: string; small?: boolean }) {
  const className = small
    ? "text-[14px] text-muted hover:text-ink"
    : "text-[14px] font-medium text-ink/80 transition-colors hover:text-ink";
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {label} ↗
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
