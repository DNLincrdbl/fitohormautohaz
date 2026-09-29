import { brandSites, emails, phones } from "@/lib/site";

export type Block =
  | { type: "text"; eyebrow?: string; title?: string; paragraphs: string[] }
  | {
      type: "split";
      eyebrow?: string;
      title: string;
      paragraphs: string[];
      image: string;
      contain?: boolean;
      reverse?: boolean;
      link?: { href: string; label: string };
    }
  | { type: "list"; eyebrow?: string; title?: string; intro?: string; groups: { title?: string; items: string[] }[] }
  | { type: "numbered"; title?: string; intro?: string; items: { title: string; text: string }[]; outro?: string }
  | { type: "cards"; eyebrow?: string; title?: string; items: { title: string; text?: string; image?: string; href?: string; cta?: string }[] }
  | { type: "downloads"; title?: string; items: { label: string; href: string }[] }
  | { type: "image"; src: string; alt: string; contain?: boolean }
  | { type: "iframe"; title: string; src: string }
  | { type: "notice"; eyebrow?: string; title: string; lines: string[]; action?: { href: string; label: string } }
  | { type: "contact"; title?: string; email?: string; phone?: { value: string; href: string } }
  | { type: "booking" }
  | { type: "map" };

export type ContentPage = {
  slug: string;
  title: string;
  eyebrow?: string;
  description?: string;
  hero?: string;
  metaTitle?: string;
  blocks: Block[];
};

const servicePhone = { value: phones.service.value, href: phones.service.href };

export const pages: ContentPage[] = [
  {
    slug: "szerviz",
    eyebrow: "„Megbízhatóságunk a legfontosabb alkatrész.”",
    title: "Szerviz",
    description:
      "Márkaszervizünk Ford, Mitsubishi, Dongfeng és XEV gépjárművek szervizelésével foglalkozik. Márkafüggetlen autószervizünk Baja, Iparos utcában található.",
    hero: "/img/pages/szerviz-hero.jpg",
    blocks: [
      {
        type: "numbered",
        title: "Márkaszervizünk egy olyan hely, ahol az autók és ügyfeleink mindig az első helyen állnak.",
        intro: "Mit kínálunk?",
        items: [
          {
            title: "Szakértelem",
            text: "Csapatunk elkötelezett és képzett szakemberekből áll, akik évek óta dolgoznak az autók javításán és karbantartásán. Bízhat bennünk, hogy járműve minden szempontból a legjobb kezekben lesz.",
          },
          {
            title: "Modern Technológia",
            text: "Felszerelésünk és technológiai eszközeink mindig naprakészek, hogy gyorsan és hatékonyan szervizelhessük az autókat. Így időt és pénzt spórolhat.",
          },
          {
            title: "Ügyfélközpontúság",
            text: "Az ügyfeleink elégedettsége az elsődleges szempont számunkra. Mindig hallgatunk az igényeikre és kérdéseikre, és készek vagyunk segíteni bármilyen autós probléma megoldásában.",
          },
          {
            title: "Megfizethetőség",
            text: "Nálunk a minőségi autószervizet megfizethető áron kínáljuk. Nincsenek rejtett költségek vagy felesleges kiadások.",
          },
          {
            title: "Gyors és Hatékony Szolgáltatás",
            text: "Tudjuk, mennyire fontos az autója a mindennapi életében, ezért minden tőlünk telhetőt megteszünk azért, hogy minél gyorsabban visszakapja.",
          },
        ],
        outro:
          "Legyen szó egyszerű olajcseréről, nagyobb javításokról vagy rendszeres karbantartásról, szervizünk várja Önt is sok szeretettel!",
      },
      {
        type: "split",
        title: "Autószervizünkben az alábbi szolgáltatásokkal várjuk:",
        paragraphs: [
          "Garanciális szerviz",
          "Időszakos szerviz és karbantartás",
          "Garancia időn túli szerviz",
          "Gépjármű-diagnosztika",
          "Futómű állítás",
          "Gumiszerelés",
        ],
        image: "/img/pages/szerviz.jpg",
        link: { href: "/idopontfoglalas", label: "Időpontfoglalás" },
      },
      { type: "contact", title: "Elérhetőségeink", email: emails.service, phone: servicePhone },
      { type: "map" },
    ],
  },
  {
    slug: "alkatresz-ertekesites",
    eyebrow: "„Megbízhatóságunk a legfontosabb alkatrész.”",
    title: "Alkatrész értékesítés",
    description:
      "Lehetősége van gyári alkatrészek vásárlására személyesen a szalonban vagy emailen leadott megrendelő alapján. Kérdés esetén keressen minket elérhetőségeink egyikén!",
    hero: "/img/pages/alkatresz.jpg",
    blocks: [
      { type: "contact", title: "Elérhetőségeink", email: emails.service, phone: servicePhone },
      { type: "map" },
    ],
  },
  {
    slug: "autokozmetika",
    eyebrow: "„Csillogó tisztaság, ragyogó eredmények.”",
    title: "Autókozmetika",
    description:
      "Szenvedéllyel törekszünk arra, hogy autója minden nap ragyogóan tündököljön. Célunk az autók védelme, javítása és megújítása, hogy Ön büszkén vezethesse járművét!",
    hero: "/img/pages/autokozmetika-hero.jpg",
    blocks: [
      {
        type: "split",
        title: "Személygépjárművek, kistehergépjárművek külső-belső takarítását vállaljuk.",
        paragraphs: [],
        image: "/img/pages/autokozmetika.jpg",
      },
      {
        type: "list",
        groups: [
          { title: "Külső takarítás", items: ["Kézi mosás", "Autó polírozás", "Fényszóró polírozás", "Fényszóró lakkozás"] },
          { title: "Belső takarítás", items: ["Száraz kárpittisztítás", "Ózonos klímafertőtlenítés"] },
        ],
      },
      { type: "contact", title: "Időpontkérés", email: emails.service, phone: servicePhone },
      { type: "map" },
    ],
  },
  {
    slug: "gepjarmukar-biztositasi-ugyintezes",
    title: "Gépjárműkár biztosítási ügyintézés",
    description:
      "Cégünk a Magyarországon működő összes biztosítónak javít. Amennyiben káresemény érte az Ön gépjárművét és velünk szeretné javíttatni, abban az esetben a teljes kárügyintézést lebonyolítjuk Ön helyett.",
    hero: "/img/pages/biztositas-hero.jpg",
    blocks: [
      {
        type: "list",
        eyebrow: "Tájékoztató a szükséges dokumentumokról",
        title: "Kötelező gépjármű felelősségi biztosításra történő kárrendezés",
        intro: "Amennyiben az Ön gépjárművében más okozott kárt és ismert a károkozó.",
        groups: [
          {
            title: "Magánszemély esetén",
            items: [
              "Baleseti bejelentő lap (kék-sárga)",
              "Gépjármű kárbejelentő lap kitöltve (károkozó biztosítója szerinti)",
              "Forgalmi engedélyének másolata mind két oldaláról",
              "Gépjárművezető személyes okmányainak másolata (személyi igazolvány, vezetői engedély), kivéve, ha parkolt a gépjármű a baleset idején",
              "Gépjármű törzskönyvének másolata vagy a lízingcég megnevezése",
              "Meghatalmazás cégünk részére",
              "Meghatalmazás az eljáró személynek, ha nem a gépjármű tulajdonosa jár el az ügyben",
            ],
          },
          {
            title: "Cég esetén",
            items: [
              "Gépjármű kárbejelentő lap kitöltve (károkozó biztosítója szerinti), aláírási jogosult által aláírva",
              "Aláírási címpéldány",
              "3 hónapnál nem idősebb cégkivonat",
              "Meghatalmazás cégünk részére (aláírásra jogosult által aláírva, lepecsételve)",
              "Meghatalmazás az eljáró személynek, ha nem az aláírásra jogosult jár el az ügyben",
              "Bélyegző",
            ],
          },
        ],
      },
      {
        type: "list",
        title: "Casco biztosításra történő kárrendezés",
        intro: "Amennyiben gépjárművében Ön okozta a kárt vagy más okozta benne, de az okozó ismeretlen.",
        groups: [
          {
            title: "Magánszemély esetén",
            items: [
              "Casco kötvény másolata",
              "Gépjármű kárbejelentő lap kitöltve",
              "Forgalmi engedély másolata mind két oldaláról",
              "Jogosítvány (amennyiben parkoló gépjárművében keletkezett kár, úgy nem kell)",
              "Törzskönyv másolata vagy lízingcég megnevezése",
              "Meghatalmazás eljáró személy részére, amennyiben nem a tulajdonos jár el az ügyben",
            ],
          },
          {
            title: "Cég esetén",
            items: [
              "Gépjárművezető személyes okmányainak másolata (személyi igazolvány, vezetői engedély), kivéve, ha parkolt a gépjármű a baleset idején",
              "Gépjármű törzskönyvének másolata vagy a lízingcég megnevezése",
              "Aláírási címpéldány",
              "3 hónapnál nem idősebb cégkivonat",
              "Meghatalmazás cégünk részére (aláírásra jogosult által aláírva, lepecsételve)",
              "Meghatalmazás az eljáró személynek, ha nem az aláírásra jogosult jár el az ügyben",
              "Bélyegző",
            ],
          },
        ],
      },
      { type: "image", src: "/img/pages/biztositas.jpg", alt: "Kárügyintézés a Fitohorm Autóházban" },
      { type: "contact", title: "Kérdése lenne? Keressen minket bizalommal!", phone: servicePhone, email: emails.service },
    ],
  },
  {
    slug: "eredetvizsga-muszakivizsgabazis",
    title: "Eredetvizsga, műszaki vizsgabázis",
    description:
      "Saját vizsgasorral rendelkezünk, ahol vállaljuk az alábbi gépjárművek adás-vétele esetén az eredetiség vizsgálatot, és a forgalomba helyezés előtti és időszakos műszaki vizsgálatát is.",
    hero: "/img/pages/vizsga-hero.jpg",
    blocks: [
      {
        type: "list",
        eyebrow: "Műszaki vizsga",
        title: "Vizsgálható járművek",
        groups: [
          {
            title: "Gépjárművek",
            items: [
              "Személygépjárművek M1",
              "Tehergépjármű 3,5t-ig N1",
              "Tehergépjármű 3,5-12t-ig N2",
              "Tehergépjármű 12t felett N3",
              "Traktor T",
              "Lassú jármű IJ",
            ],
          },
          {
            title: "Pótkocsik",
            items: [
              "Könnyű pótkocsi O1",
              "Pótkocsi 3,5t-ig O2",
              "Pótkocsi 3,5-10t-ig O3",
              "Pótkocsi 10t felett O4",
              "Traktor pótkocsi Ra",
              "Traktor vontatású gép S",
              "Lassú jármű pótkocsi Rb",
            ],
          },
        ],
      },
      {
        type: "list",
        title: "Szükséges dokumentumok",
        groups: [
          {
            title: "Magánszemély esetén",
            items: ["Személyigazolvány", "Lakcímkártya", "Forgalmi engedély", "Érvényes biztosítás"],
          },
          {
            title: "Cég esetén",
            items: ["Céges bélyegző"],
          },
        ],
      },
      { type: "image", src: "/img/pages/vizsga.jpg", alt: "Állapotfelmérés a vizsgabázison" },
      {
        type: "list",
        eyebrow: "Eredetvizsga",
        title: "Eredetiségvizsgálat kategóriái",
        groups: [
          {
            title: "Személy- és tehergépjárművek",
            items: [
              "Kis kategória 1400 cm3-ig",
              "Középkategória 1401-2000 cm3-ig",
              "Felső kategória 2001 cm3 felett",
              "Kis tehergépjármű 3,5t-ig",
              "Tehergépjármű 3,5-7,5t-ig",
              "Tehergépjármű 7,5t-tól",
            ],
          },
          {
            title: "Motorkerékpárok",
            items: ["Motorkerékpár 500 cm3-ig", "Motorkerékpár 501 cm3 felett", "Négykerekű segédmotoros kerékpár"],
          },
          { title: "Autóbuszok", items: ["Autóbusz 20 főig", "Autóbusz 21 főtől"] },
          {
            title: "Mezőgazdasági vontatók",
            items: [
              "Mezőgazdasági vontató, lassú jármű",
              "Könnyű pótkocsi (lakókocsi)",
              "Nehéz pótkocsi",
              "Különleges pótkocsik (felépítménnyel)",
            ],
          },
          { title: "Szükséges dokumentum", items: ["Adásvételi szerződés"] },
        ],
      },
      { type: "contact", title: "Kérdése lenne?", phone: servicePhone, email: emails.service },
    ],
  },
  {
    slug: "gepjarmu-finanszirozasi-ugyintezes",
    title: "Gépjármű finanszírozási ügyintézés",
    description:
      "A Fitohorm Autóház vállalja a finanszírozásra történő gépjárművásárlásának ügyintézését a Euroleasing hivatalos közvetítőjeként.",
    hero: "/img/pages/finanszirozas-hero.jpg",
    blocks: [
      {
        type: "split",
        eyebrow: "Euroleasing",
        title: "Finanszírozás egy helyen, a szalonban.",
        paragraphs: [
          "A Fitohorm Autóház vállalja a finanszírozásra történő gépjárművásárlásának ügyintézését a Euroleasing hivatalos közvetítőjeként.",
          "A feltételekről és lehetőségekről a www.euroleasing.hu oldalon részletesen tájékozódhat.",
        ],
        image: "/img/pages/finanszirozas.jpg",
        link: { href: "https://www.euroleasing.hu", label: "euroleasing.hu" },
      },
      { type: "image", src: "/img/pages/euroleasing-logo.jpg", alt: "Euroleasing", contain: true },
      { type: "contact", title: "Kérdése lenne?", email: emails.sales, phone: { value: phones.sales[0].value, href: phones.sales[0].href } },
    ],
  },
  {
    slug: "uj-szolgaltatas-videofelvetel-a-szervizrol",
    eyebrow: "Új szolgáltatás",
    title: "Videófelvétel a szervizről",
    description:
      "Örömmel mutatjuk be legújabb szolgáltatásunkat, amelynek célja, hogy még nagyobb átláthatóságot és bizalmat biztosítsunk ügyfeleink számára. Mostantól lehetősége van videófelvételt kérni a gépjárműve szervizelési folyamatáról!",
    hero: "/img/pages/videofelvetel.jpg",
    metaTitle: "Új szolgáltatás: Videófelvétel a szervizről",
    blocks: [
      {
        type: "cards",
        title: "Miért válassza ezt a szolgáltatást?",
        items: [
          { title: "Átláthatóság", text: "Pontosan nyomon követheti, mi történik autójával a szerviz során." },
          { title: "Bizalom", text: "Tudja, hogy minden munkafolyamat precízen és gondosan történik." },
          { title: "Dokumentáció", text: "Bármikor visszanézheti a felvételt, ha kérdése merülne fel." },
        ],
      },
      {
        type: "numbered",
        title: "Hogyan működik?",
        items: [
          { title: "Jelezze igényét", text: "A szervizelés megkezdése előtt jelezze igényét kollégáinknak." },
          {
            title: "Rögzítjük",
            text: "A folyamatot nagyfelbontású kamerával rögzítjük, ügyelve arra, hogy minden fontos lépés látható legyen.",
          },
          { title: "Megkapja", text: "A felvételt digitális formában kapja meg, amelyet egyszerűen elérhet és tárolhat." },
        ],
      },
      {
        type: "notice",
        eyebrow: "Szolgáltatás díja",
        title: "Videófelvétel: 20.000 Ft · Képkockafelvétel: 10.000 Ft",
        lines: ["Az összeg tartalmazza a teljes felvételkészítést, valamint a fájl digitális átadását."],
      },
      {
        type: "contact",
        title: "Kérdése van, vagy szeretné igénybe venni a szolgáltatást? Keressen minket bizalommal!",
        email: emails.service,
        phone: servicePhone,
      },
      { type: "map" },
    ],
  },
  {
    slug: "idopontfoglalas",
    title: "Időpontfoglalás",
    description: "Kérjük válasszon szolgáltatást, és kollégáink hamarosan visszaigazolják időpontját.",
    hero: "/img/pages/dongfeng-tortenet-hero.jpg",
    blocks: [{ type: "booking" }, { type: "map" }],
  },
  {
    slug: "mitsubishi",
    eyebrow: "Történelem",
    title: "A Mitsubishi története",
    hero: "/img/pages/mitsubishi-tortenet-hero.jpg",
    metaTitle: "Mitsubishi története",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "1870-ben Yataro Iwasaki, egy japán rizskereskedő család gyermeke Tsukumo Shokai néven létrehozta saját kereskedőcégét, amelyhez három hajó is tartozott. 1875-ben Iwasaki új nevet adott cégének: Mitsubishi Gőzhajó Társaság. A családi címer három gyémántja, valamint egy baráti család három tölgylevelet ábrázoló címeréből alakult ki az embléma. „Mitsu” jelentése magyarul három, a „bishi” pedig a gyémánt japán elnevezése. A mai Mitsubishi-embléma 1914 óta változatlan.",
          "1917-ben a Mitsubishi-birodalom hajói után megszületett az első sorozatban gyártott japán személyautó, a Mitsubishi A-modell. A hétüléses, favázas autóba 2,8 literes, négyhengeres, 35 lóerős benzinmotor került. Egy évvel később bemutatták a cég első teherautóját (T-1), 1920-ban elkészült az első Mitsubishi gőzmozdony, 1921-ben pedig levegőbe emelkedett a gyár első repülőgépe. 1933-ban a Mitsubishi bemutatta a világ első búvárhajóját, amely 1000 méteres mélységbe tudott leereszkedni.",
        ],
      },
      {
        type: "split",
        title: "A ma több mint negyven óriásvállalatból álló Mitsubishi-cégcsoport",
        paragraphs: [
          "a világ egyik legnagyobb és legkiterjedtebb ipari konszernje. Ezek között szerepel az 1970-ben önállóvá vált Mitsubishi Motors Corporation éppúgy, mint a szórakoztatóelektronikával, telekommunikációval, számítástechnikával foglalkozó Mitsubishi Electric, vagy a fényképezőgépeiről ismert Nikon. Kevesen tudják például azt, hogy a világ egyik legnagyobb bankját a Mitsubishi tudhatja magáénak, és hogy Japán egyik legnépszerűbb söre, a Kirin is a Mitsubishi-konszern terméke.",
        ],
        image: "/img/hero/mitsubishi-colt.webp",
      },
      {
        type: "text",
        paragraphs: [
          "A Mitsubishi Motors Corporation mérnökei az elmúlt három évtizedben hihetetlen tempót diktálnak a fejlesztésben. Kifinomult motortechnika, többszelepes vezérlés, előbb mechanikus, majd elektronikus befecskendezés, közvetlen benzinbefecskendezés (GDI-technológia), összkerékmeghajtás és összkerék-kormányzás, elektronikus motor- és futómű-felügyeleti rendszer, nem utolsó sorban pedig magas szintű biztonsági és környezetvédelmi megoldások jelzik: a Mitsubishi a világ élvonalába tartozó autók gyártása mellett kötelezte el magát.",
          "Magyarországon 2005 óta a Mitsubishi Motors Import Kft. (MM Import Kft.) a Mitsubishi gépjárművek hivatalos importőre, amely az Emil Frey-cégcsoport tagjaként azt a célt tűzte maga elé, hogy kiépített és optimalizált márkakereskedői hálózaton keresztül növelje a Mitsubishi személygépkocsik értékesítési volumenét, és erősítse a Mitsubishi Motors cég hírnevét Magyarországon. A cégcsoport üzleti filozófiájának alapelve: a vásárlók kiszolgálása nem az autók eladásával ér véget, hanem akkor kezdődik.",
        ],
      },
    ],
  },
  {
    slug: "dongfeng-tortenelem",
    eyebrow: "Történelem",
    title: "Dongfeng Motor Corporation",
    description:
      "A DFM 1969-ben jött létre, székhelye Wuhan. Bár kevesen tudják, ez ma az egyik legnagyobb kínai autóipari csoport, amelynek teljes vagyona 240,2 milliárd RMB és jelenleg 176.000 alkalmazottat foglalkoztat.",
    hero: "/img/pages/dongfeng-tortenet-hero.jpg",
    metaTitle: "Dongfeng története",
    blocks: [
      {
        type: "cards",
        items: [
          {
            title: "2018-ban",
            text: "a 65. helyet foglalta el a világ 500 legnagyobb vállalatának listáján, a Fortune 2018-as összesítése alapján.",
          },
          {
            title: "Alaptevékenység",
            text: "A DFM alaptevékenysége haszongépjárművek, személygépkocsik, motorok, és az ezekhez tartozó alkatrészek gyártásából és más autóipari vállalatok teljeskörű kiszolgálásából áll, jelenleg több, mint 3,8 millió gépjármű értékesítése mellett.",
          },
        ],
      },
      {
        type: "split",
        title: "Iparági úttörő",
        paragraphs: [
          "A DFM erős befolyással bír az autóiparra: a Dongfeng a kínai autóipar első népszerű márkája, amelynek stabil helye van a világ 500 legfontosabb autómárkája között.",
          "49 éves története során a DFM iparági úttörővé vált gyártási, működési és marketing területen egyaránt. A komplex, ugyanakkor nyitott iparági fejlesztések meghonosítása által a DFM mindig hangsúlyt fektetett a független kompetencia-innovációra is. A DFM fejlesztőbázisai elsősorban Kínában, Svédországban és Németországban folytatnak összehangolt, közös tevékenységet. Ezek mindegyike a végletekig elkötelezte magát a műszaki innováción alapuló ipari alkalmazhatóság mellett.",
        ],
        image: "/img/pages/dongfeng-tortenet.jpg",
      },
      {
        type: "text",
        paragraphs: [
          "2014-el bezárólag a DFM összesen 26,6 millió járművet szállított le: ebbe haszongépjárművek (teherautók és buszok) is beletartoznak, ahogyan a nehéz / közepes / könnyű gépjárművek és a mini, illetve a speciális rendeltetésű/módosított járművek is. A személygépkocsik különféle típusú modelleket fednek le, beleértve a szedánokat, a terepjárókat, a könnyű haszongépjárműveket, és a kisméretű városi autókat. A speciális terepjárók közé tartoznak a hibrid járművek, BEV-ek, földgázjárművek: a DFM ezekre is nagy hangsúlyt fordít.",
          "A jövőben a DFM továbbra is tartja magát az eredeti elképzeléséhez, miszerint „egy évszázadokon túlnyúló, fenntartható fejlődésű, önálló innovációra képes és globális versenyképességű, nemzetközi tényező kíván lenni az autópiacon”, annak érdekében, hogy jobbá tegye magát és talán a világot is.",
        ],
      },
    ],
  },
  {
    slug: "fordrol",
    eyebrow: "Történelem",
    title: "Henry Ford története",
    description:
      "Henry Ford praktikus és megfizethető autóival megváltoztatta az emberek életmódját. Feltalálta a mozgó összeszerelősort, lefektette a tömegtermelés alapjait, amelyek azután a XX. század első felében az egész világon iparági szabvánnyá váltak.",
    hero: "/img/pages/ford-tortenet-hero.jpg",
    metaTitle: "Fordról",
    blocks: [
      {
        type: "text",
        paragraphs: [
          "Henry Ford 1863. július 30-án Springwells Townshipben (Wayne megye, Michigan állam) született. Ő volt az elsőszülött William és Mary Ford hat gyermeke között. Jól menő családi farmon élt, napjait egyrészt az egytantermes iskolában töltötte, másrészt a farmon dolgozott. Már fiatal korában érdeklődött a műszaki dolgok iránt. Később igazi géniusszá vált, és azóta is őt tartják az autóipar egyik óriásának.",
        ],
      },
      {
        type: "split",
        title: "A szakma elsajátítása",
        paragraphs: [
          "Henry Ford fiatalon kezdte. 12 éves korára, Henry szabadideje túlnyomó részét a saját maga által felszerelt kis gépműhelyben töltötte. 1878-ban, azaz 15 éves korában itt készítette el első gőzgépét. A következő évben elköltözött otthonról, és a közeli Detroit városába ment, ahol gépésztanoncként kezdett dolgozni. Három évig maradt tanonc, majd visszatért Dearbornba.",
          "A következő néhány évben részben gőzgépek üzemeltetésével és javításával foglakozott, részben egy detroiti gyárban végzett alkalmi munkát, és az apja farmján működő mezőgazdasági gépeket javította. Az 1888-as év komoly változást hozott életében, amikor feleségül vette Clara Bryantet. Családja megélhetését egy fűrészmalom működtetésével biztosította. Nem kellett azonban sokáig várni az újabb váltásra, hiszen Ford 1891-ben a detroiti Edison Illuminating Company mérnöke lett. Két évvel később főmérnökké nevezték ki, ami elég időt és pénzt biztosított számára ahhoz, hogy a belsőégésű motorokkal végzett saját kísérleteivel foglalkozhasson.",
        ],
        image: "/img/pages/ford-tortenet.jpg",
      },
      {
        type: "text",
        title: "Első járműve",
        paragraphs: [
          "A kísérletek csúcspontját 1896-ban az első önjáró jármű, a Quadricycle elkészítése jelentette. Az első Ford motor a Ford Bagley Avenue 58. szám alatti otthonában, a fa konyhaasztalon pöfögött be a történelembe. Ebből a kísérletből kiindulva egy olyan motort tervezett, amelyet négy biciklikerékkel ellátott vázra szerelt, s ez lett az első Ford autó.",
        ],
      },
      {
        type: "text",
        title: "Önállósodás",
        paragraphs: [
          "Miután 1898-ban kilépett az Edison vállalattól, Ford megszervezte a Detroit Automobile Companyt. Sajnos a cég csődbe ment, de mivel soha nem volt az a típus, akit a kudarcok eltántorítottak volna, különböző versenyautókat kezdett tervezni és építeni. 1901. október 10-én a híres Sweepstakes versenyautójával legyőzte az amerikai bajnokot, Alexander Wintont.",
        ],
      },
    ],
  },
  {
    slug: "cenntro",
    eyebrow: "Cenntro",
    title: "A környezetbarát áruszállítás új éllovasai",
    description:
      "Növelje vállalkozása értékét a készletről azonnal vihető, zéró kibocsátású kisteherautóinkkal, melyek alacsony üzemeltetési költséggel és gyors szervizeléssel is járnak.",
    hero: "/img/pages/cenntro-hero.jpg",
    metaTitle: "Cenntro",
    blocks: [
      {
        type: "cards",
        eyebrow: "Modellek",
        title: "Cenntro kínálat",
        items: [
          {
            title: "Avantier",
            text: "100% elektromos hajtás · 182 km hatótáv",
            image: "/img/cars/cenntro-avantier.jpg",
            href: "/keszlet/cenntro-avantier",
            cta: "Részletek",
          },
          {
            title: "Logistar 100",
            text: "120 km hatótáv · 525 kg teherbírás",
            image: "/img/cars/cenntro-logistar-100.jpg",
            href: "/keszlet/cenntro-logistar-100",
            cta: "Részletek",
          },
          {
            title: "Logistar 260",
            text: "270 km hatótáv · 1300+ kg teherbírás",
            image: "/img/cars/cenntro-logistar-260.jpg",
            href: "/keszlet/cenntro-logistar-260",
            cta: "Részletek",
          },
        ],
      },
      {
        type: "split",
        title: "Állami támogatással CENNTRO e-haszonjármű",
        paragraphs: [
          "Örömmel jelentjük be, hogy mostantól a Cenntro elektromos teherautói elképesztő 3.600.000 forint állami támogatás érhetők el! Ez az egyedülálló lehetőség lehetővé teszi Ön számára, hogy a legkorszerűbb, környezetbarát elektromos teherautókat szerezze be a mindennapi üzleti tevékenységéhez, miközben jelentős pénzügyi előnyöket élvezhet.",
        ],
        image: "/img/pages/cenntro-1.jpg",
        link: { href: "/elektromos-tehergepjarmu-tamogatas", label: "Pályázat részletei" },
      },
      {
        type: "split",
        title: "A karbonsemleges árufuvarozás jövőjét a Cenntro szállítja",
        paragraphs: [
          "A 100%-ban elektromos teherszállítóink a kevés mozgó alkatrészüknek hála kevesebb karbantartást igényelnek benzines társaiknál. Járműveink környezetbarátak, költséghatékonyak és a cége megítélésére is pozitívan hatnak.",
        ],
        image: "/img/cars/cenntro-logistar-100.jpg",
        reverse: true,
      },
      {
        type: "notice",
        eyebrow: "Sajtó",
        title: "HANDRÁS: „VÉGRE egy olcsó elektromos kisteherautó”",
        lines: [],
      },
      {
        type: "downloads",
        title: "Katalógusok",
        items: [
          { label: "Cenntro Avantier katalógus", href: "/docs/cenntro-avantier-katalogus.pdf" },
          { label: "Cenntro Logistar 100 adatlap", href: "/docs/cenntro-logistar-100.pdf" },
          { label: "Cenntro Logistar 260 katalógus", href: "/docs/cenntro-logistar-260.pdf" },
        ],
      },
    ],
  },
  {
    slug: "elektromos-auto-palyazat",
    eyebrow: "2024",
    title: "Elektromos autó pályázat, állami támogatással!",
    description:
      "2024. január 5-én a Széchenyi Terv Plusz keretében hazai gazdasági társaságok számára jelent meg tisztán elektromos személygépkocsik és kisteherautók vagy kisbuszok vásárlásának támogatására „Közúti elektromos jármű beszerzés támogatása vállalkozásoknak” címmel pályázati felhívás.",
    hero: "/img/pages/palyazat-hero.jpg",
    metaTitle: "Elektromos autó pályázat",
    blocks: [
      {
        type: "split",
        title: "Vissza nem térítendő támogatás",
        paragraphs: [
          "A 30 milliárd forintos keretösszegből vissza nem térítendő támogatás igényelhető autónként 2,8-4 millió forint összegben. A pályázati kiírás tervezetet előzetesen társadalmi vitára bocsátották, aminek során sok észrevétel érkezett. Ezek egy részét pontosítás vagy módosítás formájában a végleges kiírásba is beépítették.",
          "A két legfontosabb újdonság, hogy az egyéni vállalkozók esetén kikerült a két fős foglalkoztatotti minimum, illetve hogy a kiírás lízing esetén nem nevezi meg a zárt végű lízinget egyetlen lehetséges megoldásként, így elméletben akár nyílt végű lízing igénybevételére is lehetőség nyílik. Ezen a ponton azonban vannak még tisztázatlan kérdések. Remélhetőleg a februári indulásig ezek is tisztázásra kerülnek.",
        ],
        image: "/img/pages/palyazat.png",
        contain: true,
        link: {
          href: "https://www.palyazat.gov.hu/programok/helyreallitasi-es-ellenallokepessegi-terv/rrf/rrf-10101-24/alapadatok",
          label: "Pályázat alapadatai",
        },
      },
      {
        type: "cards",
        items: [
          {
            title: "Ki pályázhat?",
            text: "Magyarországon székhellyel vagy magyar fiókteleppel rendelkező európai gazdasági társaságok, szövetkezetek, egyéni cégek vagy egyéni vállalkozók, amennyiben legkésőbb 2021 végéig bejegyezték, tevékenységeik között nem szerepel a gépjárműkölcsönzés vagy gépjármű-kereskedelem, valamint taxis egyéni vállalkozók vagy egyéni cégek esetén a taxis tevékenységet legkésőbb 2023 december 1-ig bejegyezték. A jármű nettó ára nem lehet magasabb, mint a vállalkozás utolsó lezárt üzleti évének nettó árbevétele, vagy egyéni vállalkozó esetén a bevétele.",
          },
          {
            title: "Hány autóra?",
            text: "Az alkalmazotti létszámtól függ. 9 alkalmazottig egy autóra, 10-49 főig 5 autóra, 50-249 alkalmazott esetén 10 db, 250 főtől maximum 16 járműre lehet pályázni.",
          },
          {
            title: "Mekkora összegre?",
            text: "Egy pályázó 2,8 és 64 millió forint közötti összegre nyújthat be pályázatot. A jármű nettó vételárától, a bruttó akkumulátor kapacitástól, valamint attól függ, hogy személyautóra vagy teherautóra szeretnénk pályázni.",
          },
        ],
      },
      {
        type: "split",
        eyebrow: "Dongfeng Box",
        title: "Állami támogatással most 6 941 000 Forintért megvásárolható!",
        paragraphs: [
          "340 km hatótáv",
          "Töltési idő 80%-ra mindössze 30 perc",
          "Számos vezetősegítő rendszer",
          "Ülésszellőztetés",
        ],
        image: "/img/pages/dongfeng-box-palyazat.webp",
        reverse: true,
        link: { href: "/keszlet/dongfeng-box", label: "Dongfeng Box" },
      },
      { type: "contact", title: "Kérdése lenne? Keressen minket bizalommal!", email: emails.sales, phone: servicePhone },
      { type: "map" },
    ],
  },
  {
    slug: "elektromos-tehergepjarmu-tamogatas",
    eyebrow: "Pályázat",
    title: "Állami támogatással CENNTRO e-haszonjármű",
    description:
      "Örömmel jelentjük be, hogy mostantól a Cenntro elektromos teherautói elképesztő 3.600.000 forint állami támogatás érhetők el! Ez az egyedülálló lehetőség lehetővé teszi Ön számára, hogy a legkorszerűbb, környezetbarát elektromos teherautókat szerezze be a mindennapi üzleti tevékenységéhez, miközben jelentős pénzügyi előnyöket élvezhet.",
    hero: "/img/pages/cenntro-hero.jpg",
    metaTitle: "Elektromos tehergépjármű támogatás",
    blocks: [
      {
        type: "text",
        eyebrow: "Pályázatról",
        title: "Főbb tudnivalók",
        paragraphs: [
          "Magyarországi cégek és vállalkozások 2024. február 5.-től pályázhatnak elektromos kisteherautók beszerzésére. A sikeres pályázók 3,6 MILLIÓ FT ÁLLAMI TÁMOGATÁSSAL vásárolhatnak elektromos járművet a pályázatban meghatározott feltételek szerint.",
        ],
      },
      {
        type: "list",
        title: "Pályázat részletei",
        groups: [
          {
            items: [
              "Magyarországon székhellyel vagy az Európai Gazdasági Térség területén székhellyel és Magyarországon fiókteleppel, magyar adószámmal rendelkező gazdasági társaságok, szövetkezetek, egyéni cégek és egyéni vállalkozások pályázhatnak",
              "CENNTRO modellek esetén a megpályázható összeg 3,6 millió Ft",
              "A pályázat 2024. február 05. 10:00-tól 2025. március 31. 10:00-ig nyújtható be",
              "A támogatást a projekt fizikai befejezését követően, utófinanszírozással folyósítják",
              "A támogatott járműre teljes körű CASCO biztosítást kell kötni",
              "3 éven belül, de legkésőbb 2027. december 31-ig a támogatással vásárolt jármű nem adható el",
              "A pályázati keret 30 milliárd forint",
            ],
          },
        ],
      },
      {
        type: "numbered",
        title: "Pályázni szeretnék, mi a teendőm?",
        items: [
          {
            title: "Tájékozódjon",
            text: "Töltse le és olvassa el a részletes pályázati anyagot a palyazat.gov.hu oldalon.",
          },
          { title: "Árajánlat", text: "Kérjen árajánlatot tőlünk." },
          { title: "Beadás", text: "Február 5-től nyújtsa be pályázatát elektronikusan a palyazat.gov.hu oldalon." },
        ],
      },
      {
        type: "cards",
        eyebrow: "RRF-10.10.1-24 pályázat",
        title: "Pályázat során elérhető modellek",
        items: [
          {
            title: "CENNTRO LOGISTAR 100",
            image: "/img/pages/logistar-100-cut.png",
            href: "/docs/cenntro-logistar-100.pdf",
            cta: "Adatlap",
          },
          {
            title: "CENNTRO LOGISTAR 200",
            image: "/img/pages/logistar-200-cut.png",
            href: "/docs/cenntro-logistar-200.pdf",
            cta: "Adatlap",
          },
          {
            title: "CENNTRO LOGISTAR 260",
            image: "/img/pages/logistar-260-cut.png",
            href: "/docs/cenntro-logistar-260.pdf",
            cta: "Adatlap",
          },
        ],
      },
      {
        type: "downloads",
        title: "Hasznos linkek",
        items: [
          {
            label: "Részletes pályázati dokumentumok",
            href: "https://www.palyazat.gov.hu/programok/helyreallitasi-es-ellenallokepessegi-terv/rrf/rrf-10101-24/dokumentumok",
          },
          { label: "Pályázat benyújtása", href: "https://www.palyazat.gov.hu/palyazatok/" },
        ],
      },
      { type: "contact", title: "Kapcsolat", email: emails.sales, phone: servicePhone },
      { type: "map" },
    ],
  },
  {
    slug: "mitsubishi-nyeremenyjatek",
    eyebrow: "Nyereményjáték",
    title: "Nyerje vissza Mitsubishi-je teljes vételárát!",
    description:
      "MM Import Kft. a Mitsubishi Motors magyarországi vezérképviselete nyereményjátékot hirdet a 2024. március 1. – december 31. időszakban új Mitsubishi gépjárművet vásárló ügyfelek között.",
    hero: "/img/pages/nyeremenyjatek-hero.jpg",
    metaTitle: "Mitsubishi nyereményjáték",
    blocks: [
      {
        type: "split",
        title: "A nyertes visszakapja a teljes bruttó vételárat",
        paragraphs: [
          "A hivatalos Mitsubishi márkakereskedésekben új Mitsubishi gépjárművet vásárló és a nyereményjátékra regisztráló ügyfelek közül 2025. január elején, közjegyző jelenlétében kisorsolásra kerül egy nyertes.",
          "A nyertes visszakapja az általa megvásárolt új Mitsubishi gépjárműve ügyfélszerződés (gépjármű adásvételi szerződés) szerinti TELJES BRUTTÓ VÉTELÁRÁT!",
          "Egy ügyfél az általa vásárolt gépjárművek számának megfelelő alkalommal vehet részt a nyereményjátékban. Ezzel növelve nyerési esélyét!",
        ],
        image: "/img/pages/nyeremenyjatek.jpg",
      },
      {
        type: "text",
        title: "Duplázza meg nyerési esélyét!",
        paragraphs: [
          "Az az új Mitsubishi gépjárművet vásárló és a nyereményjátékban részt vevő személy (ajánló), akinek ajánlásával egy másik új ügyfél szintén új Mitsubishit gépjárművet vásárol, dupla eséllyel indul a nyereményjátékban az alábbiak szerint!",
          "Amennyiben az új ügyfél a regisztrációs lapon megjelöli az ajánló adatait, akkor az ajánló a saját regisztrációs lapján kívül még egyszer bekerül a nyereményre esélyesek közé. Egy résztvevő ajánlóként csak egyszer duplázhatja meg a nyerési esélyét, azaz csak egy új ügyfél ajánlása kerül a nyereményjátékban figyelembevételre.",
        ],
      },
      {
        type: "notice",
        title: "Ne hagyja ki ezt a vissza nem térő lehetőséget, nyerje vissza Mitsubishi-je teljes vételárát!",
        lines: ["Részletek és feltételek a hivatalos MITSUBISHI márkakereskedésekben!"],
        action: { href: "/keszlet?marka=mitsubishi", label: "Mitsubishi modellek" },
      },
      {
        type: "downloads",
        items: [
          { label: "Részvételi- és Játékszabályzat", href: "/docs/mitsubishi-nyeremenyjatek-szabalyzat.pdf" },
          { label: "mitsubishibaja.hu", href: brandSites.mitsubishi },
        ],
      },
      { type: "contact", email: emails.sales, phone: servicePhone },
      { type: "map" },
    ],
  },
  {
    slug: "allasajanlatok",
    eyebrow: "„Megbízhatóságunk a legfontosabb alkatrész.”",
    title: "Állásajánlatok",
    hero: "/img/pages/allas.jpg",
    blocks: [
      {
        type: "notice",
        eyebrow: "Munkatársat keresünk",
        title: "Karosszérialakatos munkakörben",
        lines: ["Fitohorm Autószerviz · 6500 Baja, Iparos utca 8."],
      },
      {
        type: "list",
        groups: [
          {
            title: "Amit kínálunk",
            items: [
              "Stabil, hosszú távú AZONNALI munkalehetőség",
              "Szakmai és karrier fejlődési lehetőség",
              "Versenyképes fizetés",
              "Modern, jól felszerelt munkakörnyezet",
            ],
          },
          {
            title: "Amit várunk",
            items: [
              "Karosszériajavításban szerzett tapasztalat",
              "Megbízhatóság, igényesség",
              "Önálló, precíz munkavégzés",
              "Jó problémafelismerő és megoldó képesség",
            ],
          },
        ],
      },
      {
        type: "notice",
        eyebrow: "Jelentkezés",
        title: emails.jobs,
        lines: ["Várjuk jelentkezésed!"],
        action: { href: `mailto:${emails.jobs}`, label: "Jelentkezem" },
      },
      { type: "map" },
    ],
  },
  {
    slug: "virtualis-seta",
    title: "Virtuális séta",
    description: "Járja be szalonjainkat otthonról, 360°-os panorámaképeken.",
    hero: "/img/pages/virtualis-seta.png",
    blocks: [
      {
        type: "iframe",
        title: "Dongfeng, Cenntro szalon",
        src: "https://kuula.co/share/collection/7KMfh?logo=1&info=0&fs=1&vr=1&zoom=1&sd=1&autorotate=0.1&thumbs=1&inst=hu",
      },
      {
        type: "iframe",
        title: "Mitsubishi szalon",
        src: "https://kuula.co/share/collection/7KMF7?logo=0&info=1&fs=1&vr=1&sd=1&thumbs=1",
      },
      { type: "map" },
    ],
  },
];

export function getPage(slug: string) {
  return pages.find((p) => p.slug === slug);
}
