export type BrandId = "mitsubishi" | "dongfeng" | "cenntro";

export type Price = {
  gross?: string;
  discount?: string;
  final: string;
  note?: string;
};

export type Car = {
  slug: string;
  brand: BrandId;
  name: string;
  model: string;
  features: string[];
  image: string;
  badge?: string;
  price?: Price;
  priceTable?: string;
  catalog?: { href: string; label: string };
  grant?: { href: string; label: string };
};

export const brands: {
  id: BrandId;
  name: string;
  headline: string;
  image: string;
  site?: string;
}[] = [
  {
    id: "mitsubishi",
    name: "Mitsubishi",
    headline: "Hivatalos Mitsubishi márkakereskedés és szerviz.",
    image: "/img/pages/brand-mitsubishi.jpg",
    site: "https://www.mitsubishibaja.hu/",
  },
  {
    id: "dongfeng",
    name: "Dongfeng",
    headline: "Benzines, hibrid és elektromos modellek.",
    image: "/img/pages/brand-dongfeng.webp",
    site: "https://dongfengbaja.hu/",
  },
  {
    id: "cenntro",
    name: "Cenntro",
    headline: "A környezetbarát áruszállítás új éllovasai.",
    image: "/img/pages/brand-cenntro.jpg",
  },
];

const cenntroGrant = {
  href: "/elektromos-tehergepjarmu-tamogatas",
  label: "Állami támogatás",
};

export const cars: Car[] = [
  {
    slug: "mitsubishi-colt",
    brand: "mitsubishi",
    name: "Mitsubishi Colt",
    model: "Colt",
    features: ["Benzin motor", "Instyle felszereltséggel", "Kék színben"],
    image: "/img/cars/mitsubishi-colt.jpg",
    price: { gross: "9 099 000 Ft", discount: "1 109 000 Ft", final: "7 990 000 Ft" },
    priceTable: "/img/arak/mitsubishi-colt.png",
  },
  {
    slug: "mitsubishi-asx-invite",
    brand: "mitsubishi",
    name: "Mitsubishi ASX Invite",
    model: "ASX Invite",
    features: ["Benzin motor", "Invite felszereltséggel", "Több színben"],
    image: "/img/cars/mitsubishi-asx-invite.jpg",
    price: { gross: "9 769 000 Ft", discount: "1 870 000 Ft", final: "7 899 000 Ft" },
    priceTable: "/img/arak/mitsubishi-asx-invite.png",
  },
  {
    slug: "mitsubishi-asx-mhev-invite",
    brand: "mitsubishi",
    name: "Mitsubishi ASX MHEV Invite",
    model: "ASX MHEV Invite",
    features: ["Hibrid motor", "Invite felszereltséggel", "Több színben"],
    image: "/img/cars/mitsubishi-asx-invite.jpg",
    price: { gross: "10 619 000 Ft", discount: "1 870 000 Ft", final: "8 749 000 Ft" },
    priceTable: "/img/arak/mitsubishi-asx-mhev-invite.png",
  },
  {
    slug: "mitsubishi-asx-hev",
    brand: "mitsubishi",
    name: "Mitsubishi ASX HEV",
    model: "ASX HEV",
    features: ["Hibrid motor", "Invite felszereltséggel", "Több színben"],
    image: "/img/cars/mitsubishi-asx-invite.jpg",
    price: { gross: "14 819 000 Ft", discount: "1 319 000 Ft", final: "13 500 000 Ft" },
    priceTable: "/img/arak/mitsubishi-asx-hev.png",
  },
  {
    slug: "mitsubishi-grandis-invite-plus",
    brand: "mitsubishi",
    name: "Mitsubishi Grandis Invite plus",
    model: "Grandis Invite plus",
    features: ["Benzin motor"],
    badge: "Most 3.000.000 Ft kedvezménnyel!",
    image: "/img/cars/mitsubishi-grandis-invite-plus.jpg",
    price: { gross: "13 239 000 Ft", discount: "3 240 000 Ft", final: "9 999 000 Ft" },
    priceTable: "/img/arak/mitsubishi-grandis-invite-plus.png",
  },
  {
    slug: "mitsubishi-outlander",
    brand: "mitsubishi",
    name: "Mitsubishi Outlander",
    model: "Outlander",
    features: ["PHEV", "Ezüst színben", "Készleten"],
    badge: "Most 5.000.000 Ft kedvezménnyel!",
    image: "/img/cars/mitsubishi-outlander.jpg",
    price: { gross: "24 150 000 Ft", discount: "5 360 000 Ft", final: "18 790 000 Ft" },
    priceTable: "/img/arak/mitsubishi-outlander.png",
  },
  {
    slug: "dongfeng-box",
    brand: "dongfeng",
    name: "Dongfeng Box",
    model: "Box",
    features: ["Elektromos hajtás", "E3 felszereltség", "340 km hatótáv"],
    image: "/img/cars/dongfeng-box.webp",
    price: { gross: "12 026 900 Ft", discount: "2 027 900 Ft", final: "9 999 000 Ft" },
    priceTable: "/img/arak/dongfeng-box.png",
    grant: { href: "/elektromos-auto-palyazat", label: "Állami támogatással" },
  },
  {
    slug: "dongfeng-u-tour",
    brand: "dongfeng",
    name: "Dongfeng U-Tour",
    model: "U-Tour",
    features: ["Benzin motor", "7 személyes egyterű", "Több színben"],
    image: "/img/cars/dongfeng-u-tour.jpg",
    price: { gross: "14 680 000 Ft", discount: "2 290 000 Ft", final: "12 390 000 Ft" },
    priceTable: "/img/arak/dongfeng-u-tour.png",
  },
  {
    slug: "dongfeng-u-tour-hev",
    brand: "dongfeng",
    name: "Dongfeng U-Tour HEV",
    model: "U-Tour HEV",
    features: ["Hibrid motor", "7 személyes egyterű", "Több színben"],
    image: "/img/cars/dongfeng-u-tour-hev.webp",
    price: { gross: "16 880 000 Ft", discount: "2 490 000 Ft", final: "14 390 000 Ft" },
    priceTable: "/img/arak/dongfeng-u-tour-hev.png",
  },
  {
    slug: "dongfeng-t5-evo",
    brand: "dongfeng",
    name: "Dongfeng T5 Evo",
    model: "T5 Evo",
    features: ["1.5 turbo benzin", "SUV", "Luxory felszereltség"],
    image: "/img/cars/dongfeng-t5-evo.webp",
    price: { gross: "13 690 000 Ft", discount: "1 700 000 Ft", final: "11 990 000 Ft" },
    priceTable: "/img/arak/dongfeng-t5-evo.png",
  },
  {
    slug: "dongfeng-t5-evo-hev",
    brand: "dongfeng",
    name: "Dongfeng T5 Evo HEV",
    model: "T5 Evo HEV",
    features: [
      "1.5 turbo benzin + 55 kW teljesítményű elektromos motor",
      "SUV",
      "Luxory felszereltség",
    ],
    image: "/img/cars/dongfeng-t5-evo-hev.jpg",
    price: { gross: "15 810 000 Ft", discount: "2 220 000 Ft", final: "13 590 000 Ft" },
    priceTable: "/img/arak/dongfeng-t5-evo-hev.png",
  },
  {
    slug: "dongfeng-mage",
    brand: "dongfeng",
    name: "Dongfeng Mage",
    model: "Mage",
    features: ["1.5 turbo benzin", "SUV", "Készleten"],
    image: "/img/cars/dongfeng-mage.webp",
    price: { gross: "10 940 000 Ft", discount: "1 750 000 Ft", final: "9 190 000 Ft" },
    priceTable: "/img/arak/dongfeng-mage.png",
  },
  {
    slug: "dongfeng-shine",
    brand: "dongfeng",
    name: "Dongfeng Shine",
    model: "Shine",
    features: ["Benzin motor", "Sport coupé", "Több színben"],
    image: "/img/cars/dongfeng-shine.webp",
    price: { gross: "8 710 000 Ft", discount: "720 000 Ft", final: "7 990 000 Ft" },
    priceTable: "/img/arak/dongfeng-shine.png",
  },
  {
    slug: "dongfeng-shine-gs",
    brand: "dongfeng",
    name: "Dongfeng Shine GS",
    model: "Shine GS",
    features: ["Benzin motor", "Sport coupé", "Több színben"],
    image: "/img/cars/dongfeng-shine-gs.webp",
    price: { gross: "8 610 000 Ft", discount: "1 320 000 Ft", final: "7 290 000 Ft" },
    priceTable: "/img/arak/dongfeng-shine-gs.png",
  },
  {
    slug: "dongfeng-z9-gt",
    brand: "dongfeng",
    name: "Dongfeng Z9 GT",
    model: "Z9 GT",
    features: ["Diesel motor", "Sport coupé", "Több színben"],
    image: "/img/cars/dongfeng-z9-gt.webp",
    price: { final: "10 890 000 Ft + ÁFA-tól", note: "Basic, Worker és Exclusive kivitel, nettó árak" },
    priceTable: "/img/arak/dongfeng-z9-gt.png",
  },
  {
    slug: "dongfeng-u-tour-v9",
    brand: "dongfeng",
    name: "Dongfeng U-tour V9",
    model: "U-tour V9",
    features: ["PHEV hajtás", "7 személyes", "Készleten"],
    image: "/img/cars/dongfeng-u-tour-v9.jpg",
    price: { gross: "20 480 000 Ft", discount: "1 490 000 Ft", final: "18 990 000 Ft" },
    priceTable: "/img/arak/dongfeng-u-tour-v9.png",
  },
  {
    slug: "dongfeng-s7",
    brand: "dongfeng",
    name: "Dongfeng S7",
    model: "S7",
    features: ["Elektromos motor", "Vegyes hatótáv 420 km", "Több színben"],
    image: "/img/cars/dongfeng-s7.webp",
    price: { gross: "15 190 000 Ft", discount: "900 000 Ft", final: "14 290 000 Ft" },
    priceTable: "/img/arak/dongfeng-s7.png",
  },
  {
    slug: "dongfeng-t5",
    brand: "dongfeng",
    name: "Dongfeng T5",
    model: "T5",
    features: ["Benzin motor", "SUV", "Több színben"],
    image: "/img/cars/dongfeng-t5.jpg",
    price: { gross: "9 590 000 Ft", discount: "700 000 Ft", final: "8 890 000 Ft" },
    priceTable: "/img/arak/dongfeng-t5.png",
  },
  {
    slug: "cenntro-avantier",
    brand: "cenntro",
    name: "Cenntro Avantier",
    model: "Avantier",
    features: ["100% elektromos hajtás", "182 km hatótáv", "Több színben kapható"],
    image: "/img/cars/cenntro-avantier.jpg",
    catalog: { href: "/docs/cenntro-avantier-katalogus.pdf", label: "Avantier katalógus" },
    grant: cenntroGrant,
  },
  {
    slug: "cenntro-logistar-100",
    brand: "cenntro",
    name: "Cenntro Logistar 100",
    model: "Logistar 100",
    features: ["100% elektromos hajtás", "120 km hatótáv", "Teherbírás: 525 kg"],
    image: "/img/cars/cenntro-logistar-100.jpg",
    catalog: { href: "/docs/cenntro-logistar-100.pdf", label: "Logistar 100 adatlap" },
    grant: cenntroGrant,
  },
  {
    slug: "cenntro-logistar-260",
    brand: "cenntro",
    name: "Cenntro Logistar 260",
    model: "Logistar 260",
    features: ["100% elektromos hajtás", "270 km hatótáv", "Teherbírás: 1300+ kg"],
    image: "/img/cars/cenntro-logistar-260.jpg",
    catalog: { href: "/docs/cenntro-logistar-260.pdf", label: "Logistar 260 katalógus" },
    grant: cenntroGrant,
  },
];

export function getCar(slug: string) {
  return cars.find((c) => c.slug === slug);
}

export function getBrand(id: BrandId) {
  return brands.find((b) => b.id === id)!;
}

export const megaCars = [
  "mitsubishi-outlander",
  "mitsubishi-grandis-invite-plus",
  "mitsubishi-asx-invite",
  "mitsubishi-colt",
  "dongfeng-box",
  "dongfeng-mage",
  "dongfeng-t5-evo",
  "cenntro-logistar-260",
].map((slug) => getCar(slug)!);
