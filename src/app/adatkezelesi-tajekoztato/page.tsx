import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { privacy } from "@/lib/privacy";
import { company } from "@/lib/site";

export const metadata: Metadata = { title: "Adatkezelési tájékoztató" };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Jogi"
        title="Adatkezelési tájékoztató"
        description={`${company.name}, ${company.addressLine} · ${company.registry}`}
      />
      <section className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
        {privacy.map((b, i) => {
          if (b.t === "h") {
            return b.l === 2 ? (
              <h2 key={i} className="mt-14 text-[24px] font-medium tracking-tight first:mt-0">
                {b.v}
              </h2>
            ) : (
              <h3 key={i} className="mt-8 text-[16px] font-medium">
                {b.v}
              </h3>
            );
          }
          if (b.t === "ul") {
            return (
              <ul key={i} className="mt-3 list-disc space-y-1.5 pl-5 text-[14px] leading-7 text-muted">
                {b.v.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }
          return (
            <p key={i} className="mt-3 text-[14px] leading-7 text-muted">
              {b.v}
            </p>
          );
        })}
      </section>
    </>
  );
}
