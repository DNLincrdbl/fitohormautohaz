export const company = {
  name: "Fitohorm Autóház",
  legalName: "Fitohorm Kft.",
  short: "Fitohorm Autóház",
  tagline: "Dongfeng, Mitsubishi és Cenntro márkakereskedés és szerviz Baján",
  description:
    "Köszöntjük márkakereskedésünk, szervizünk hivatalos weboldalán. Tekintse meg aktuális ajánlatainkat, szalonunkat virtuális séta keretein belül.",
  quote:
    "„Válaszd a Fitohorm Autóházat és indulj útnak álmaid autójával, mert mindenki megtalálja a társát!”",
  addressLine: "6500 Baja, Szegedi út 13-15.",
  city: "Baja",
  registry: "Cégjegyzékszám: 03-09-102340",
  workshopAddress: "6500 Baja, Iparos utca 8.",
  hoursWeekday: "Hétfő–Péntek: 7:00 – 16:00",
  hoursWeekend: "Szombat–Vasárnap: Zárva",
  mapEmbed:
    "https://maps.google.com/maps?q=fitohorm%20aut%C3%B3h%C3%A1z&t=m&z=15&output=embed&iwloc=near",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Fitohorm+Aut%C3%B3h%C3%A1z+Baja+Szegedi+%C3%BAt+13",
};

export const phones = {
  service: { label: "Szervizbejelentés", value: "+36 30 205 8641", href: "tel:+36302058641" },
  sales: [
    { label: "Értékesítés", value: "+36 30 097 4171", href: "tel:+36300974171" },
    { label: "Értékesítés", value: "+36 30 683 2621", href: "tel:+36306832621" },
  ],
};

export const emails = {
  info: "info@fitohormautohaz.hu",
  sales: "sales@fitohormautohaz.hu",
  service: "szerviz@fitohormautohaz.hu",
  office: "iroda@fitohormautohaz.hu",
  jobs: "balazs.szabo@fitohorm.hu",
};

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/fitohormautohaz" },
  { label: "Instagram", href: "https://www.instagram.com/fitohorm_autohaz/" },
  { label: "TikTok", href: "https://www.tiktok.com/@fitohormautohaz" },
];

export const brandSites = {
  dongfeng: "https://dongfengbaja.hu/",
  mitsubishi: "https://www.mitsubishibaja.hu/",
  usedCars:
    "https://www.hasznaltauto.hu/partner/PDNG3D6BBKBTAECE74SV6YFUKBO26LIUBK63I5YZGGDWQNESAQUYV766WVUEXJNHBUZW65RHEAUWT4REEMJD2XHISRVWYJLSJ4DREWL2RSLGOSVCQVVVA2DWNYWHARVIUGDEGKC23X6RD4P4RKBQVSWA7WJB64JDMMLJTKFOXJLMMGXFF7YGGBYTSYDOZSPXZR3NA7MEWHOWF4IHSYIXG3Z7VJ7EXH2X4RQ5W4V5ZY5TY2QENMVJQE7XFX6YQ5TNSGIGQNAHCH3BWRAO5YYWSOWKEQXUTZXT7QBOACDIVE",
  bodyshop: "https://autoszerviz-fitohorm.hu/karosszeria-muhely/",
  paintshop: "https://autoszerviz-fitohorm.hu/fenyezo-muhely/",
};

export type MegaKey = "keszlet" | "szolgaltatasok" | "rolunk" | "palyazat";

export type NavItem = {
  href: string;
  label: string;
  mega?: MegaKey;
  match?: string[];
};

export const nav: NavItem[] = [
  { href: "/keszlet", label: "Készletünk", mega: "keszlet", match: ["/keszlet", "/hasznalt-gepjarmuvek"] },
  {
    href: "/szolgaltatasok",
    label: "Szolgáltatások",
    mega: "szolgaltatasok",
    match: [
      "/szolgaltatasok",
      "/szerviz",
      "/alkatresz-ertekesites",
      "/autokozmetika",
      "/gepjarmukar-biztositasi-ugyintezes",
      "/eredetvizsga-muszakivizsgabazis",
      "/gepjarmu-finanszirozasi-ugyintezes",
      "/uj-szolgaltatas-videofelvetel-a-szervizrol",
      "/idopontfoglalas",
    ],
  },
  {
    href: "/szalonunkrol",
    label: "Rólunk",
    mega: "rolunk",
    match: ["/szalonunkrol", "/mitsubishi", "/dongfeng-tortenelem", "/fordrol", "/virtualis-seta", "/allasajanlatok"],
  },
  {
    href: "/elektromos-auto-palyazat",
    label: "Pályázat",
    mega: "palyazat",
    match: ["/elektromos-auto-palyazat", "/elektromos-tehergepjarmu-tamogatas", "/cenntro", "/mitsubishi-nyeremenyjatek"],
  },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export type MegaTile = { name: string; href: string; image: string; note?: string };
export type MegaLink = { label: string; href: string };

export const serviceTiles: MegaTile[] = [
  { name: "Szerviz", href: "/szerviz", image: "/img/pages/szerviz.jpg" },
  { name: "Alkatrész értékesítés", href: "/alkatresz-ertekesites", image: "/img/pages/alkatresz.jpg" },
  { name: "Autókozmetika", href: "/autokozmetika", image: "/img/pages/autokozmetika-hero.jpg" },
  { name: "Eredetvizsga, műszaki vizsga", href: "/eredetvizsga-muszakivizsgabazis", image: "/img/pages/vizsga.jpg" },
  { name: "Kárügyintézés", href: "/gepjarmukar-biztositasi-ugyintezes", image: "/img/pages/biztositas-hero.jpg" },
  { name: "Finanszírozás", href: "/gepjarmu-finanszirozasi-ugyintezes", image: "/img/pages/finanszirozas.jpg" },
  { name: "Videófelvétel a szervizről", href: "/uj-szolgaltatas-videofelvetel-a-szervizrol", image: "/img/pages/videofelvetel.jpg" },
];

export const aboutTiles: MegaTile[] = [
  { name: "Szalonunkról", href: "/szalonunkrol", image: "/img/pages/szalon-hero.jpg" },
  { name: "Virtuális séta", href: "/virtualis-seta", image: "/img/pages/virtualis-seta.png" },
  { name: "Mitsubishi története", href: "/mitsubishi", image: "/img/pages/mitsubishi-tortenet-hero.jpg" },
  { name: "Dongfeng története", href: "/dongfeng-tortenelem", image: "/img/pages/dongfeng-tortenet-hero.jpg" },
  { name: "Henry Ford története", href: "/fordrol", image: "/img/pages/ford-tortenet-hero.jpg" },
];

export const grantTiles: MegaTile[] = [
  { name: "Elektromos személygépjármű támogatás", href: "/elektromos-auto-palyazat", image: "/img/pages/dongfeng-box-palyazat.webp" },
  { name: "Cenntro e-haszonjármű támogatás", href: "/elektromos-tehergepjarmu-tamogatas", image: "/img/pages/cenntro-hero.jpg" },
  { name: "Cenntro", href: "/cenntro", image: "/img/pages/cenntro-1.jpg" },
  { name: "Mitsubishi nyereményjáték", href: "/mitsubishi-nyeremenyjatek", image: "/img/pages/nyeremenyjatek.jpg" },
];

export const megaLinks: Record<MegaKey, MegaLink[]> = {
  keszlet: [
    { label: "Új gépjárművek", href: "/keszlet" },
    { label: "Mitsubishi", href: "/keszlet?marka=mitsubishi" },
    { label: "Dongfeng", href: "/keszlet?marka=dongfeng" },
    { label: "Cenntro", href: "/keszlet?marka=cenntro" },
    { label: "Használt gépjárművek", href: "/hasznalt-gepjarmuvek" },
    { label: "Időpontfoglalás", href: "/idopontfoglalas" },
  ],
  szolgaltatasok: [
    { label: "Összes szolgáltatás", href: "/szolgaltatasok" },
    { label: "Időpontfoglalás", href: "/idopontfoglalas" },
    { label: "Fényező műhely", href: brandSites.paintshop },
    { label: "Karosszéria javító műhely", href: brandSites.bodyshop },
  ],
  rolunk: [
    { label: "Munkatársak", href: "/kapcsolat#munkatarsak" },
    { label: "Állásajánlatok", href: "/allasajanlatok" },
    { label: "Kapcsolat", href: "/kapcsolat" },
  ],
  palyazat: [
    { label: "Cenntro modellek", href: "/keszlet?marka=cenntro" },
    { label: "Dongfeng Box", href: "/keszlet/dongfeng-box" },
    { label: "Kapcsolat", href: "/kapcsolat" },
  ],
};

export const services = [
  { title: "Új autó értékesítés", href: "/keszlet" },
  { title: "Használtautó értékesítés", href: "/hasznalt-gepjarmuvek" },
  { title: "Szerviz", href: "/szerviz" },
  { title: "Alkatrész értékesítés", href: "/alkatresz-ertekesites" },
  { title: "Autókozmetika", href: "/autokozmetika" },
  { title: "Műszaki vizsga", href: "/eredetvizsga-muszakivizsgabazis" },
  { title: "Gépjármű kgfb és casco kötés", href: "/gepjarmukar-biztositasi-ugyintezes" },
  { title: "Turbó és Injektor bevizsgálás, felújítás", href: "/szerviz" },
  { title: "Gépjármű finanszírozási ügyintézés", href: "/gepjarmu-finanszirozasi-ugyintezes" },
];

export const staff = [
  { name: "Bányainé Rónay Erika", role: "Értékesítési vezető", email: "ronay.erika@fitohormautohaz.hu", phone: "+36 30/097-4171", image: "/img/staff/ronay-erika.jpg" },
  { name: "Bizzer Henrik", role: "Szervizvezető", email: "bizzer.henrik@fitohormautohaz.hu", phone: "+36 30/604 4152", image: "/img/staff/bizzer-henrik.jpg" },
  { name: "Verbiás Lilla", role: "Munkafelvételi asszisztens", email: "info@fitohormautohaz.hu", phone: "+36 30/205-8641", image: "/img/staff/verbias-lilla.jpg" },
  { name: "Busnyák Péter", role: "Szerelő", image: "/img/staff/busnyak-peter.jpg" },
  { name: "Fekete Anett", role: "Értékesítő", email: "fekete.anett@fitohormautohaz.hu", phone: "+36 30 683 2621", image: "/img/staff/fekete-anett.jpg" },
  { name: "Csák Réka", role: "Irodai asszisztens", email: "csak.reka@fitohormautohaz.hu", phone: "+36 30/487 7481", image: "/img/staff/csak-reka.jpg" },
  { name: "Szabóné Németh Nóra", role: "Irodavezető", email: "iroda@fitohormautohaz.hu", image: "/img/staff/szabone-nemeth-nora.jpg" },
  {
    name: "Szabó Balázs",
    role: "Fitohorm Kft. Ügyvezető Igazgató, Gépjárműkereskedelmi és -fenntartási ágazat vezetője",
    email: "iroda@fitohormautohaz.hu",
    image: "/img/staff/szabo-balazs.jpg",
  },
  { name: "Borbély Dominika", role: "Marketing", email: "borbely.dominika@fitohormautohaz.hu", image: "/img/staff/borbely-dominika.jpg" },
] as { name: string; role: string; email?: string; phone?: string; image: string }[];

export type HeroSlide = {
  src: string;
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  cta: string;
};

export const heroSlides: HeroSlide[] = [
  {
    src: "/img/cars/mitsubishi-outlander.jpg",
    eyebrow: "Mitsubishi",
    title: "Outlander PHEV",
    text: "Most 5.000.000 Ft kedvezménnyel, akciós ár: 18 790 000 Ft",
    href: "/keszlet/mitsubishi-outlander",
    cta: "Részletek",
  },
  {
    src: "/img/hero/dongfeng-mage.webp",
    eyebrow: "Dongfeng",
    title: "Mage",
    text: "1.5 turbó SUV készletről, akciós ár: 9 190 000 Ft",
    href: "/keszlet/dongfeng-mage",
    cta: "Részletek",
  },
  {
    src: "/img/hero/eclipse-cross-ev.jpg",
    eyebrow: "Mitsubishi",
    title: "Mitsubishi kínálat",
    text: "Colt, ASX, Grandis és Outlander egy helyen, Baján",
    href: "/keszlet?marka=mitsubishi",
    cta: "Mitsubishi modellek",
  },
  {
    src: "/img/hero/dongfeng-t5-evo.webp",
    eyebrow: "Dongfeng",
    title: "T5 Evo",
    text: "Luxory felszereltség, akciós ár: 11 990 000 Ft",
    href: "/keszlet/dongfeng-t5-evo",
    cta: "Részletek",
  },
  {
    src: "/img/hero/fitohorm-autohaz.png",
    eyebrow: "Fitohorm Autóház",
    title: "Szalon és szerviz Baján",
    text: "Új autók, márkaszerviz, biztosítás és finanszírozás egy helyen",
    href: "/szalonunkrol",
    cta: "Szalonunkról",
  },
  {
    src: "/img/hero/dongfeng-shine.jpg",
    eyebrow: "Dongfeng",
    title: "Shine",
    text: "Sport coupé több színben, akciós ár: 7 990 000 Ft",
    href: "/keszlet/dongfeng-shine",
    cta: "Részletek",
  },
  {
    src: "/img/hero/mitsubishi-colt.webp",
    eyebrow: "Mitsubishi",
    title: "Colt",
    text: "Instyle felszereltséggel, akciós ár: 7 990 000 Ft",
    href: "/keszlet/mitsubishi-colt",
    cta: "Részletek",
  },
  {
    src: "/img/hero/mitsubishi-asx.jpg",
    eyebrow: "Mitsubishi",
    title: "ASX",
    text: "Benzines és hibrid változatban, már 7 899 000 Ft-tól",
    href: "/keszlet/mitsubishi-asx-invite",
    cta: "Részletek",
  },
];

export const cookieCopy = {
  message:
    "Ez az oldal cookie-kat használ. A böngészés folytatásával jóváhagyja, hogy cookie-kat használjunk.",
  dismiss: "Értettem",
  link: "Adatkezelési tájékoztató",
};

export const footerCopy = "Fitohorm Autóház – Fitohorm Kft. Minden jog fenntartva.";
