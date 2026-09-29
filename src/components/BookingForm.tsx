"use client";

import { FormEvent, useState } from "react";
import { Field, inputClass } from "@/components/ContactForm";
import { emails, phones } from "@/lib/site";

const options = [
  "Szerviz",
  "Garanciális szerviz",
  "Időszakos szerviz és karbantartás",
  "Gépjármű-diagnosztika",
  "Futómű állítás",
  "Gumiszerelés",
  "Autókozmetika",
  "Műszaki vizsga",
  "Eredetvizsga",
  "Kárügyintézés",
  "Alkatrész",
  "Videófelvétel a szervizről",
];

export function BookingForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) || "");
    const body = encodeURIComponent(
      [
        `Szolgáltatás: ${get("service")}`,
        `Kért időpont: ${get("date")} ${get("time")}`,
        `Gépjármű: ${get("car")}`,
        `Rendszám: ${get("plate")}`,
        "",
        `Név: ${get("name")}`,
        `Telefon: ${get("phone")}`,
        `Email: ${get("email")}`,
        "",
        get("message"),
      ].join("\n"),
    );
    const subject = encodeURIComponent(`Időpontfoglalás – ${get("service")}`);
    window.open(`mailto:${emails.service}?subject=${subject}&body=${body}`, "_self");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[20px] bg-[#f4f4f4] p-8">
        <p className="text-[24px] font-medium">Köszönjük.</p>
        <p className="mt-3 max-w-md text-[14px] leading-7 text-muted">
          Kollégáink hamarosan visszaigazolják az időpontot. Sürgős esetben hívjon
          minket:{" "}
          <a className="text-brand underline" href={phones.service.href}>
            {phones.service.value}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <label className="grid gap-2">
        <span className="text-[14px] font-medium text-muted">Kérjük válasszon szolgáltatást</span>
        <select name="service" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Válasszon…
          </option>
          {options.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Dátum" name="date" type="date" required />
        <Field label="Időpont (7:00 – 16:00)" name="time" type="time" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Gépjármű típusa" name="car" />
        <Field label="Rendszám" name="plate" />
      </div>
      <Field label="Név" name="name" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telefonszám" name="phone" type="tel" required />
        <Field label="Email cím" name="email" type="email" />
      </div>
      <label className="grid gap-2">
        <span className="text-[14px] font-medium text-muted">Megjegyzés</span>
        <textarea name="message" rows={4} className={`${inputClass} h-auto resize-y py-3`} />
      </label>
      <button type="submit" className="tds-btn tds-btn-primary">
        Időpontot kérek
      </button>
    </form>
  );
}
