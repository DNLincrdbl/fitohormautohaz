import Image from "next/image";
import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";
import { MapEmbed } from "@/components/MapEmbed";
import type { Block } from "@/lib/pages";
import { company } from "@/lib/site";

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.endsWith(".pdf")) {
    return (
      <a
        href={href}
        target={href.startsWith("mailto:") ? undefined : "_blank"}
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function Heading({ eyebrow, title }: { eyebrow?: string; title?: string }) {
  if (!eyebrow && !title) return null;
  return (
    <div className="mb-8">
      {eyebrow ? <p className="text-[14px] font-medium text-muted">{eyebrow}</p> : null}
      {title ? (
        <h2 className="mt-2 max-w-3xl text-[28px] font-medium leading-tight tracking-tight sm:text-[34px]">
          {title}
        </h2>
      ) : null}
    </div>
  );
}

export function ContentBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="pb-4">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "text":
      return (
        <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <Heading eyebrow={block.eyebrow} title={block.title} />
          <div className="space-y-5 text-[16px] leading-8 text-muted">
            {block.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </section>
      );

    case "split": {
      const asList = block.paragraphs.every((p) => p.length < 60) && block.paragraphs.length > 1;
      return (
        <section className="px-4 py-6 sm:px-6">
          <div
            className={`mx-auto grid max-w-[1400px] items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
              block.reverse ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            {block.contain ? (
              <div className="overflow-hidden rounded-[20px] bg-[#fafafa] p-4 sm:p-8">
                <Image
                  src={block.image}
                  alt={block.title}
                  width={1400}
                  height={1400}
                  className="h-auto w-full"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            ) : (
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#eee]">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            )}
            <div className="px-2 py-4 lg:px-6">
              {block.eyebrow ? (
                <p className="text-[14px] font-medium text-muted">{block.eyebrow}</p>
              ) : null}
              <h2 className="mt-2 text-[28px] font-medium leading-tight tracking-tight sm:text-[34px]">
                {block.title}
              </h2>
              {asList ? (
                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {block.paragraphs.map((p) => (
                    <li key={p} className="py-3 text-[15px]">
                      {p}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted">
                  {block.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              )}
              {block.link ? (
                <SmartLink href={block.link.href} className="tds-btn tds-btn-dark mt-8">
                  {block.link.label}
                </SmartLink>
              ) : null}
            </div>
          </div>
        </section>
      );
    }

    case "list":
      return (
        <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <Heading eyebrow={block.eyebrow} title={block.title} />
          {block.intro ? (
            <p className="-mt-4 mb-8 max-w-2xl text-[15px] leading-7 text-muted">{block.intro}</p>
          ) : null}
          <div className={`grid gap-4 ${block.groups.length > 1 ? "md:grid-cols-2" : ""}`}>
            {block.groups.map((g, i) => (
              <div key={g.title ?? i} className="rounded-[20px] bg-[#f4f4f4] p-7">
                {g.title ? <p className="text-[17px] font-medium">{g.title}</p> : null}
                <ul className={`${g.title ? "mt-4" : ""} space-y-2.5 text-[14px] leading-6 text-muted`}>
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      );

    case "numbered":
      return (
        <section className="mx-auto max-w-5xl px-6 py-14 lg:px-8">
          <Heading title={block.title} />
          {block.intro ? (
            <p className="-mt-4 mb-8 text-[15px] font-medium text-muted">{block.intro}</p>
          ) : null}
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {block.items.map((item, i) => (
              <li key={item.title} className="rounded-[20px] border border-line p-7">
                <span className="text-[13px] font-medium text-muted">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-[18px] font-medium tracking-tight">{item.title}</p>
                <p className="mt-2 text-[14px] leading-6 text-muted">{item.text}</p>
              </li>
            ))}
          </ol>
          {block.outro ? (
            <p className="mt-8 max-w-3xl text-[15px] leading-7 text-muted">{block.outro}</p>
          ) : null}
        </section>
      );

    case "cards":
      return (
        <section className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6">
          <div className="px-2">
            <Heading eyebrow={block.eyebrow} title={block.title} />
          </div>
          <div
            className={`grid gap-4 ${
              block.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
            }`}
          >
            {block.items.map((card) => {
              const inner = (
                <>
                  {card.image ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#eee]">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    </div>
                  ) : null}
                  <div className="p-7">
                    <p className="text-[20px] font-medium tracking-tight">{card.title}</p>
                    {card.text ? (
                      <p className="mt-2 text-[14px] leading-6 text-muted">{card.text}</p>
                    ) : null}
                    {card.cta ? (
                      <p className="mt-4 text-[13px] font-medium text-brand">{card.cta} ›</p>
                    ) : null}
                  </div>
                </>
              );
              const className = "group block overflow-hidden rounded-[20px] bg-[#f4f4f4]";
              return card.href ? (
                <SmartLink key={card.title} href={card.href} className={className}>
                  {inner}
                </SmartLink>
              ) : (
                <div key={card.title} className={className}>
                  {inner}
                </div>
              );
            })}
          </div>
        </section>
      );

    case "downloads":
      return (
        <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          <Heading title={block.title} />
          <ul className="divide-y divide-line border-y border-line">
            {block.items.map((d) => (
              <li key={d.href}>
                <SmartLink
                  href={d.href}
                  className="flex items-center justify-between gap-4 py-4 text-[15px] font-medium hover:text-brand"
                >
                  <span>{d.label}</span>
                  <span className="text-[13px] text-muted">
                    {d.href.endsWith(".pdf") ? "PDF ↓" : "↗"}
                  </span>
                </SmartLink>
              </li>
            ))}
          </ul>
        </section>
      );

    case "image":
      return (
        <section className="px-4 py-6 sm:px-6">
          {block.contain ? (
            <div className="mx-auto flex max-w-md justify-center rounded-[20px] bg-white p-6">
              <Image
                src={block.src}
                alt={block.alt}
                width={600}
                height={300}
                className="h-auto max-h-32 w-auto object-contain"
              />
            </div>
          ) : (
            <div className="relative mx-auto aspect-[21/9] max-w-[1400px] overflow-hidden rounded-[20px] bg-[#eee]">
              <Image src={block.src} alt={block.alt} fill className="object-cover" sizes="100vw" />
            </div>
          )}
        </section>
      );

    case "iframe":
      return (
        <section className="px-4 py-6 sm:px-6">
          <div className="mx-auto max-w-[1400px]">
            <h2 className="mb-5 px-2 text-[24px] font-medium tracking-tight sm:text-[28px]">
              {block.title}
            </h2>
            <div className="overflow-hidden rounded-[20px] bg-black">
              <iframe
                title={block.title}
                src={block.src}
                className="h-[70vh] min-h-[420px] w-full"
                allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>
      );

    case "notice":
      return (
        <section className="px-4 py-6 sm:px-6">
          <div className="mx-auto max-w-[1400px] rounded-[20px] bg-ink px-8 py-14 text-center text-white sm:px-16">
            {block.eyebrow ? (
              <p className="text-[14px] font-medium text-white/60">{block.eyebrow}</p>
            ) : null}
            <p className="mx-auto mt-3 max-w-3xl text-[26px] font-medium leading-tight tracking-tight sm:text-[32px]">
              {block.title}
            </p>
            {block.lines.map((l) => (
              <p key={l} className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 text-white/75">
                {l}
              </p>
            ))}
            {block.action ? (
              <SmartLink href={block.action.href} className="tds-btn tds-btn-light mt-8">
                {block.action.label}
              </SmartLink>
            ) : null}
          </div>
        </section>
      );

    case "contact":
      return (
        <section className="mx-auto max-w-5xl px-6 py-14 text-center lg:px-8">
          {block.title ? (
            <h2 className="mx-auto max-w-2xl text-[26px] font-medium leading-tight tracking-tight sm:text-[32px]">
              {block.title}
            </h2>
          ) : null}
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-3">
            <ContactTile label="Címünk" value={company.addressLine} href={company.mapLink} />
            {block.email ? (
              <ContactTile label="Email" value={block.email} href={`mailto:${block.email}`} />
            ) : null}
            {block.phone ? (
              <ContactTile label="Telefon" value={block.phone.value} href={block.phone.href} />
            ) : null}
          </div>
        </section>
      );

    case "booking":
      return (
        <section className="mx-auto max-w-3xl px-6 py-14 lg:px-8">
          <BookingForm />
        </section>
      );

    case "map":
      return <MapEmbed />;
  }
}

function ContactTile({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block rounded-[20px] bg-[#f4f4f4] p-6 transition-colors hover:bg-[#ececec]"
    >
      <p className="text-[13px] text-muted">{label}</p>
      <p className="mt-1 break-words text-[16px] font-medium">{value}</p>
    </a>
  );
}
