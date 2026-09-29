"use client";

import { FormEvent, useState } from "react";
import { emails } from "@/lib/site";

export const inputClass =
  "h-11 w-full rounded-[12px] border border-line bg-white px-4 text-[14px] outline-none transition-colors focus:border-ink";

export function ContactForm({
  to = emails.info,
  subject = "Üzenet a weboldalról",
  defaultMessage,
}: {
  to?: string;
  subject?: string;
  defaultMessage?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const message = String(data.get("message") || "");
    const body = encodeURIComponent(
      `Név: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\n${message}`,
    );
    const href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.open(href, "_self");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-[20px] bg-[#f4f4f4] p-8">
        <p className="text-[24px] font-medium">Köszönjük.</p>
        <p className="mt-3 max-w-md text-[14px] leading-7 text-muted">
          Ha a levelezőprogramja nem nyílt meg, írjon nekünk közvetlenül:{" "}
          <a className="text-brand underline" href={`mailto:${to}`}>
            {to}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      <Field label="Név" name="name" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email cím" name="email" type="email" required />
        <Field label="Telefonszám" name="phone" type="tel" />
      </div>
      <label className="grid gap-2">
        <span className="text-[14px] font-medium text-muted">Üzenet</span>
        <textarea
          name="message"
          required
          rows={6}
          defaultValue={defaultMessage}
          className={`${inputClass} h-auto resize-y py-3`}
        />
      </label>
      <button type="submit" className="tds-btn tds-btn-primary">
        Küldés
      </button>
    </form>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-[14px] font-medium text-muted">{label}</span>
      <input type={type} name={name} required={required} className={inputClass} />
    </label>
  );
}
