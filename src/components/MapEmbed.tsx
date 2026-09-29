import { company } from "@/lib/site";

export function MapEmbed({ title = "Itt talál minket!" }: { title?: string }) {
  return (
    <section id="terkep" className="scroll-mt-24 px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3 px-2">
          <h2 className="text-[24px] font-medium tracking-tight sm:text-[28px]">{title}</h2>
          <a
            href={company.mapLink}
            target="_blank"
            rel="noreferrer"
            className="text-[14px] font-medium text-brand hover:underline"
          >
            {company.addressLine} ↗
          </a>
        </div>
        <div className="overflow-hidden rounded-[20px] bg-[#eee]">
          <iframe
            title="Térkép – Fitohorm Autóház, Baja"
            src={company.mapEmbed}
            className="h-[420px] w-full grayscale"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
