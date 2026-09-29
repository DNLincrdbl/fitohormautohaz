export type PrivacyBlock =
  | { t: "h"; l: 2 | 3; v: string }
  | { t: "p"; v: string }
  | { t: "ul"; v: string[] };

export const privacy: PrivacyBlock[] = [
  {
    "t": "p",
    "v": "Kiemelt jelentőséggel bír számunkra a nyitott és átlátható módon történő adatkezelés. Az Ön jogainak védelme érdekében itt tájékoztatjuk arról, hogyan kezeljük és védjük az Ön személyes adatait."
  },
  {
    "t": "p",
    "v": "A tájékoztató első része általános jellegű és minden adatkezelésünkre vonatkozik, ezt követően pedig az adatkezeléseink egyes nagyobb csoportjaira adunk részletes tájékoztatást."
  },
  {
    "t": "h",
    "l": 3,
    "v": "ÁLTALÁNOS INFORMÁCIÓK"
  },
  {
    "t": "h",
    "l": 3,
    "v": "1. Az adatkezelő és a személyes adatok"
  },
  {
    "t": "p",
    "v": "Az adatkezelő az a személy vagy szervezet, amelyik meghatározza a személyes adatok kezelésének célját és eszközeit.A jelen esetben az adatkezelő (az „ Adatkezelő ” vagy „ mi ”) a [ Fitohorm Autóház 6500. Baja, Szegedi út 13-15., Cégjegyzékszám: 03-09-102340]."
  },
  {
    "t": "p",
    "v": "Személyes adat minden olyan információ, amely Önre vonatkozik, és amelyből Ön azonosítható, például az Ön neve vagy telefonszáma."
  },
  {
    "t": "h",
    "l": 3,
    "v": "2. Elérhetőségünk kérdések vagy problémák esetén"
  },
  {
    "t": "p",
    "v": "Ha bármilyen kérdése vagy megjegyzése van, illetve ha az Önre vonatkozó adatok kezelésével kapcsolatban kifogása vagy aggályai merülnek fel, kérjük, hogy írjon nekünk a iroda@fitohormautohaz.hu email címre. A megkeresés beérkezése után haladéktalanul felvesszük Önnel a kapcsolatot."
  },
  {
    "t": "h",
    "l": 3,
    "v": "3. Az adatok forrása"
  },
  {
    "t": "p",
    "v": "Termékeink és szolgáltatásaink értékesítése és reklámozása kapcsán, illetve egyéb üzleti kapcsolat során különböző módokon juthatunk az Ön személyes adataihoz, elsősorban az alábbi módokon:"
  },
  {
    "t": "h",
    "l": 3,
    "v": "Közvetlenül Öntől"
  },
  {
    "t": "ul",
    "v": [
      "Szerződéses kapcsolat létesítése esetén (pl. gépjármű vagy alkatrész vásárlása, szerviz- vagy más szolgáltatásunk igénybe vétele)",
      "Személyes, telefonos, vagy elektronikus (pl. emailen vagy a honlapunkon lévő formon vagy chat ablakon keresztül történő) érdeklődés vagy kapcsolatfelvétel esetén",
      "Direkt marketing megkeresésekre vonatkozó hozzájárulásával vagy nyereményjátékainkban való részvételével",
      "Bármilyen egyéb célú személyes, telefonos, email-es vagy postai úton történő megkeresésünk útján",
      "Valamilyen szerződéskötéssel kapcsolatos felhívásunkra, tenderünkre vagy álláspályázatunkra való jelentkezés útján"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Más forrásból"
  },
  {
    "t": "ul",
    "v": [
      "Elsősorban kereskedőhálózatunk valamelyik tagjától, illetve importőrünktől vagy ügynökünktől (kereskedői vagy importőri státusunktól függően)",
      "Márkaszervizünktől",
      "Az Emil Frey csoport valamelyik más tagjától, illetve egyéb üzleti partnerünktől",
      "Az ön nevében esetlegesen eljáró más személytől, ügyintézőtől",
      "Elektronikus vagy offline közvetítő felületen vagy szolgáltatón keresztül",
      "Nyilvánosan elérhető adatbázisokból vagy más forrásokból (pl. cégjegyzéki adatok)",
      "Az általunk üzemeltetett honlapok böngészése esetén log file-ok vagy cookie-k útján is személyes adatokhoz juthatunk a weblapok használatával és egyes technikai jellemzőkkel kapcsolatban"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "4. Az adatok tárolásának helye"
  },
  {
    "t": "p",
    "v": "Személyes adatait elektronikusan alapvetően a saját vagy a megbízásunkból üzemeltetett szervereken tároljuk, papír alapon pedig székhelyünkön és esetleges telephelyeinken vagy más helyiségeinkben, illetve esetlegesen irattárolással megbízott adatfeldolgozónknál. Elektronikus adatainak tárolásában igénybe vesszük az Emil Frey (importőr)csoport EU-n belüli és/vagy svájci székhelyű tagvállalatát vagy vállalatait. A Svájcban történő adatfeldolgozás az az Európai Bizottság döntése szerint egy tekintet alá esik az EU-n belüli adatfeldolgozással."
  },
  {
    "t": "h",
    "l": 3,
    "v": "5. Az adatkezelések célja és jogalapja"
  },
  {
    "t": "p",
    "v": "Az adatkezelések céljáról és jogalapjáról lentebb az egyes adatkezeléseknél talál tájékoztatást. Felhívjuk figyelmét, hogy egyes adatkezeléseknek egyidejűleg több célja és jogalapja is lehet. Ezekben az esetekben az adatokat mindaddig kezeljük, amíg akár egyetlen jogalap is fennáll. Ilyen eset például, ha Ön tesztvezetési adatlapot tölt ki vagy vásárol tőlünk, de egyúttal külön hozzájárulását adja marketing célú megkeresésekhez is."
  },
  {
    "t": "h",
    "l": 3,
    "v": "6. Az adatkezelések időtartama"
  },
  {
    "t": "p",
    "v": "Minden adatkezelésünkre irányadó, hogy az adatok kezelésének, illetve megőrzésének idejét az adatkezelés célja határozza meg. Ha több cél is vonatkozik valamelyik adatra, akkor minden esetben a hosszabb megőrzési idő érvényesül."
  },
  {
    "t": "p",
    "v": "Ha az adatkezelés olyan szerződés teljesítéséhez szükséges, amelyben Ön az egyik fél, vagy az a szerződés megkötését megelőzően az Ön kérésére történő lépések megtételéhez szükséges, akkor az adatokat az ügyfélkapcsolat fennállása alatt, majd a szerződés vagy az ügyfélkapcsolat megszűnése után az általános elévülési ideig, azaz 5 évig kezeljük."
  },
  {
    "t": "p",
    "v": "Ha az adatkezelés az Ön beleegyezésén alapszik, akkor az adatokat addig kezeljük, amíg Ön vissza nem vonja hozzájárulását vagy ha az adatkezelés célja ennél korábban megvalósul és nincs további adatkezelési cél, akkor a cél megvalósulásáig."
  },
  {
    "t": "p",
    "v": "Bármely esetben azonban, ha jogszabály kötelezővé teszi számunkra egyes dokumentumok megőrzését, akkor az azokban foglalt személyes adatokat az adott jogszabályban előírt megőrzési idő alatt tároljuk. Ezekben az esetekben a jogszabályi kötelezettségünk teljesítése az adattárolás jogalapjafüggetlenül attól, hogy az adott adatkezelésre más jogalap fennáll-e."
  },
  {
    "t": "p",
    "v": "Ilyen jogszabályi előírást tartalmaz többek közt"
  },
  {
    "t": "ul",
    "v": [
      "a számviteli törvény(azaz a 2000. évi C. tv.) az ún. számviteli bizonylatokra (pl. számla, szerződés, megállapodás, kimutatás, hitelintézeti bizonylat, bankkivonat, stb.), melyeket 8 évig vagyunk kötelesek megőrizni, illetve",
      "az adózás rendjéről szóló törvény (azaz a 2017. évi CL. tv.)az adóügyi bizonylatokra, melyeket az adó megállapításához való jog elévüléséig kell megőriznünk."
    ]
  },
  {
    "t": "p",
    "v": "Más esetekben, például, ha az adatkezelés jogalapja valamilyen jogos érdekünk, vagy más okból eltérünk a fentiektől, külön tájékoztatjuk Önt lentebb az adott adatkezelés időtartamáról."
  },
  {
    "t": "h",
    "l": 3,
    "v": "7. Az adatok címzettjei"
  },
  {
    "t": "p",
    "v": "Az adatok nem hozzáférhetőek bárki számára. Egyrészt adatfeldolgozókat veszünk igénybe bizonyos okokból, másrészt pedig szabályozzuk, hogy az Adatkezelő szervezetén belül és kívül ki férhet hozzá az adatokhoz.A személyes adatok közlése szigorúan a fent felsorolt célok eléréséhez szükséges és ésszerű mértékre korlátozódik. Adatait nem adjuk tovább marketingcélokból a felsorolt címzetteken kívül álló külső felekkel."
  },
  {
    "t": "p",
    "v": "Az Adatkezelő saját szervezetén belül az Ön személyes adataihoz kizárólag azoknak a mindenkori munkaköröknek a betöltői és az őket ellenőrző vagy felügyelő döntéshozói vagy –előkészítői szintek egyes munkaköreinek betöltői jogosultak hozzáférni, akiknek a munkája az adott adatkezelés céljának megvalósításához szükséges. Ezek a munkatársak kizárólag a szükséges hozzáférés elve szerint, a minimálisan szükséges mértékben férnek hozzá az adatokhoz. Belső eljárási és szervezeti intézkedésekkel törekszünk arra, hogy az Ön adatainak védelme minden üzleti folyamatunkban következetesen érvényesüljön."
  },
  {
    "t": "p",
    "v": "Harmadik feleknek elsősorban az Önnek nyújtott szolgáltatás lehetővé tétele érdekében továbbítunk adatokat, egyes esetekben pedig azért, hogy jogi kötelezettségeinket teljesíthessük, pl. egyes hatóságok által kötelezően előírt adatszolgáltatások esetén.Adatokat továbbíthatunk különösen az alább felsorolt címzetteknek, illetve az egyes adatkezeléseknél megadott további címzetteknek:"
  },
  {
    "t": "ul",
    "v": [
      "Az Emil Frey cégcsoport bel- és külföldi tagvállalatai, melyekegységes informatikai, pénzügyi, számviteli, könyvelési, kontrolling és HR szolgáltatásokat nyújtanak a csoport tagjai számára;",
      "Bíróságok, hatóságok, helyi és központi államigazgatási szervek, amennyiben erre jogszabály feljogosít vagy kötelez minket;",
      "Vállalkozóink, megbízottjaink, együttműködő partnereink vagy meghatalmazottjaink, akik részt vesznek az adatkezeléssel járó szolgáltatás teljesítésében."
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "8. Az Ön jogai"
  },
  {
    "t": "p",
    "v": "Önt az adatkezeléssel kapcsolatban az itt felsorolt jogok illetik meg. Ezeket a jogokat Önnek 2018. május 25-étől a GDPR (azaz az Európai Parlament és a Tanács (EU) 2016/679 rendelete) illetve a magyar adatvédelmi törvény (rövidítve Infotv., azaz az információs önrendelkezési jogról és az információszabadságról szóló 2011. évi CXII. törvény) biztosítja."
  },
  {
    "t": "h",
    "l": 3,
    "v": "A hozzáférés joga:"
  },
  {
    "t": "p",
    "v": "Ez lényegében tájékoztatást jelent arról, hogy milyen adatokat, miért és hogyan kezelünk Önről."
  },
  {
    "t": "p",
    "v": "Ön jogosult arra, hogy visszajelzést kapjon tőlünk arra vonatkozóan, hogy személyes adatainak kezelése folyamatban van-e, és ha ilyen adatkezelés folyamatban van, jogosult arra, hogy magukhoz a személyes adatokhoz és a kezelésükkel kapcsolatos valamennyi lényeges információhoz hozzáférést kapjon. Ilyen információk pl. az adatkezelés céljai, az érintett adatok kategóriái és az Ön jogai."
  },
  {
    "t": "p",
    "v": "Ön továbbá jogosult arra, hogy másolatot kapjon a kezelt személyes adatokból. A másolat készítése első alkalommal ingyenes, a további másolatokért az adminisztratív költségeinken alapuló, észszerű mértékű díjat számíthatunk fel, ha az adatkérés terjedelme miatt ez indokolt. Ha elektronikus úton nyújtott be kérelmet, joga van ahhoz, hogy az információkat széles körben használt elektronikus formátumban kapja meg (pl. PDF vagy Word dokumentumként)."
  },
  {
    "t": "h",
    "l": 3,
    "v": "A helyesbítés joga:"
  },
  {
    "t": "p",
    "v": "Ön jogosult arra, hogy kérésére indokolatlan késedelem nélkül helyesbítsük az Önre vonatkozó pontatlan személyes adatokat. Szükség esetén kérheti továbbá a hiányos személyes adatok kiegészítését."
  },
  {
    "t": "h",
    "l": 3,
    "v": "A hozzájárulás visszavonásának joga / törlés joga:"
  },
  {
    "t": "p",
    "v": "Ha a kérdéses adatkezelés az Ön hozzájárulásán alapszik, akkor Önnek joga van arra, hogy bármikor visszavonja azt és arra, hogy kérésére indokolatlan késedelem nélkül töröljük az Önre vonatkozó személyes adatokat. Ez a jogosultság nem vonatkozik olyan adatkezelésekre, amik nem az Ön hozzájárulásán alapulnak. Az adatkezelések jogalapját lentebb minden esetben feltüntetjük."
  },
  {
    "t": "h",
    "l": 3,
    "v": "Az adatkezelés korlátozásához való jog"
  },
  {
    "t": "p",
    "v": "Ön jogosult arra, hogy kérésére korlátozzuk az adatkezelést. Ez azt jelenti, hogy a korlátozott adatokat csak tárolhatjuk, de más módon csak az Ön hozzájárulásával vagy egyes törvényi esetekben használhatjuk fel. Az adatkezelés korlátozását többek közt akkor kérheti, havitatja az adatok pontosságát és kéri ezek ellenőrzését, vagy ha jogellenesnek tartja az adatkezelésünket, de Ön ellenzi az adatok törlését és e helyett a kezelés korlátozását kéri."
  },
  {
    "t": "h",
    "l": 3,
    "v": "Adathordozhatósághoz való jog"
  },
  {
    "t": "p",
    "v": "Ha a kérdéses adatkezelés az Ön hozzájárulásán alapszik, vagy szerződés teljesítésével függ össze, Ön jogosult arra, hogy az adatokat tagolt, széles körben használt, géppel olvasható formátumban (pl. PDF vagy Word) megkapja és ezeket egy másik adatkezelőnek továbbítsa. Ön továbbá jogosult arra, hogy – ha ez technikailag megvalósítható – kérje a személyes adatok adatkezelők közötti közvetlen továbbítását."
  },
  {
    "t": "h",
    "l": 3,
    "v": "A tiltakozás joga"
  },
  {
    "t": "p",
    "v": "Kérjük, hogy ezt a bekezdést a tiltakozás jogáról fokozott figyelemmel olvassa el. Ha az adatkezelés az Adatkezelő vagy egy harmadik fél jogos érdekeinek érvényesítéséhez szükséges, Ön jogosult arra, hogy a saját helyzetével kapcsolatos okokból bármikor tiltakozzon az adatkezelés ellen. Ekkor az adatokat nem kezelhetjük tovább, kivéve, ha bizonyítjuk, hogy az adatkezelést olyan kényszerítő erejű jogos okok indokolják, amelyek elsőbbséget élveznek az ön érdekeivel, jogaival és szabadságaival szemben, vagy amelyek jogi igények előterjesztéséhez, érvényesítéséhez vagy védelméhez kapcsolódnak."
  },
  {
    "t": "h",
    "l": 3,
    "v": "Panasztétel joga"
  },
  {
    "t": "p",
    "v": "Ha az Ön megítélése szerint a személyes adatok kezelése megsérti a GDPR-t vagy más adatvédelmi jogszabályt, javasoljuk, hogy elsőként velünk lépjen kapcsolatba annak érdekében, hogy felvetését minél gyorsabban és hatékonyabban megválaszolhassuk."
  },
  {
    "t": "p",
    "v": "Amennyiben nem kíván velünk kapcsolatba lépni, sérelem esetén panaszt tehet a Nemzeti Adatvédelmi és Információszabadság Hatóságnál. A Hatóság elérhetősége:"
  },
  {
    "t": "p",
    "v": "Székhely: 1125 Budapest, Szilágyi Erzsébet fasor 22/C."
  },
  {
    "t": "p",
    "v": "Levelezési cím: 1530 Budapest, Pf.: 5."
  },
  {
    "t": "p",
    "v": "Telefon: (06-1) 391-1400"
  },
  {
    "t": "p",
    "v": "E-mail: ugyfelszolgalat@naih.hu"
  },
  {
    "t": "p",
    "v": "Honlap: http://www.naih.hu"
  },
  {
    "t": "h",
    "l": 3,
    "v": "9. A tájékoztató módosításai és elérhetősége"
  },
  {
    "t": "p",
    "v": "Ezt a tájékoztatót bármikor frissíthetjük, ha valamilyen okból pontosításra vagy kiegészítésre szorul. A tájékoztató keltét a dokumentum alján szereplő dátum határozza meg. A kiegészítések és módosítások a frissített tájékoztató közzétételével azonnal hatályba lépnek. A közzétételre honlapunkon kerül sor. Javasoljuk, hogy időről-időre tanulmányozza át a tájékoztatót annak érdekében, hogy értesüljön az Önt érintő változásokról."
  },
  {
    "t": "p",
    "v": "Érvényesség kezdete: 2018. május 25."
  },
  {
    "t": "h",
    "l": 2,
    "v": "DIREKT MARKETING / HÍRLEVÉL"
  },
  {
    "t": "h",
    "l": 3,
    "v": "1. A kezelt adatok köre"
  },
  {
    "t": "h",
    "l": 3,
    "v": "Kapcsolattartási adatok"
  },
  {
    "t": "ul",
    "v": [
      "az Ön vezeték- és keresztneve,",
      "az Ön email címe,",
      "az Ön lakcíme,",
      "az Ön telefonszáma,"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Termékadatok"
  },
  {
    "t": "ul",
    "v": [
      "autójának márkája és típusa",
      "autójának alvázszáma"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Egyéb ügyféladatok"
  },
  {
    "t": "ul",
    "v": [
      "Finanszírozási adatok",
      "Biztosítással kapcsolatos adatok",
      "Pénzügyi-forgalmi adatok"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "2. Az adatszolgáltatás elmaradásának következményei"
  },
  {
    "t": "p",
    "v": "Ha Ön nem járul hozzá adatai kezeléséhez vagy a hozzájárulását visszavonja, nem fogjuk tudni Önt megkeresni marketing ajánlatainkkal, így ön adott esetben árkedvezményekről, akciókról, nyereményjátékokról maradhat le."
  },
  {
    "t": "h",
    "l": 3,
    "v": "3. Az adatkezelés célja és jogalapja"
  },
  {
    "t": "p",
    "v": "Az adatkezelés célja, hogy felvehessük Önnel a kapcsolatot és akár meglévő autója márkájától és típusától függő, vagy attól független direkt marketingajánlatokat (ideértve az információs felméréseket, meghívókat, reklámokat, hírleveleket és nyereményjáték felhívásokat) küldhessünk Önnek azokon a módokon, amikhez Ön hozzájárult."
  },
  {
    "t": "p",
    "v": "Személyes adatainak kezelése az Ön hozzájárulásánalapszik."
  },
  {
    "t": "h",
    "l": 3,
    "v": "4. Az adatok címzettjei"
  },
  {
    "t": "p",
    "v": "Harmadik feleknek elsősorban az Önnek nyújtott szolgáltatás lehetővé tétele érdekében továbbítunk adatokat, egyes esetekben pedig azért, hogy jogi kötelezettségeinket teljesíthessük. E körben különösen az alábbi címzettek számára továbbítunk személyes adatokat:"
  },
  {
    "t": "ul",
    "v": [
      "Reklám-, marketing- és médiaügynökségek,",
      "Technikai beszállítók, ideértve pl. a lokális vagy felhő alapú tárhelyszolgáltatókat, weboldal üzemeltetőket, marketing automatizálási platformokat, levélküldő rendszereket stb.",
      "Postai szolgáltatók, egyéb küldemény kézbesítő, fuvarozó, fuvarszervező vállalkozások."
    ]
  },
  {
    "t": "p",
    "v": "Az adatokat továbbíthatjuk továbbá az általunk forgalmazott gépjármű márka importőrének vagy importőreinek (Emil Frey csoport). Az adattovábbítás célja ezekben az esetekben az, hogy Önt minél hatékonyabban érhessük el az Önt érdeklő autómárkával kapcsolatosan, és hogy Ön mind az importőrök, mind pedig a márkakereskedők/márkaszervizek által szervezett akciókról, hírekről stb. értesülhessen. Felhívjuk figyelmét arra, hogy egyes esetekben az importőrök vagy márkakereskedők/márkaszervizek önálló adatkezelőnek is minősülnek és saját adatkezelési tájékoztatójuk is irányadó."
  },
  {
    "t": "h",
    "l": 2,
    "v": "NYEREMÉNYJÁTÉKOK"
  },
  {
    "t": "h",
    "l": 3,
    "v": "1. A kezelt adatok köre"
  },
  {
    "t": "h",
    "l": 3,
    "v": "Kapcsolattartási adatok"
  },
  {
    "t": "ul",
    "v": [
      "az Ön vezeték- és keresztneve,",
      "az Ön email címe,",
      "az Ön lakcíme,",
      "az Ön telefonszáma,"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "2. Az adatszolgáltatás elmaradásának következményei"
  },
  {
    "t": "p",
    "v": "Ha Ön nem járul hozzá adatai kezeléséhez vagy a hozzájárulását a játék lebonyolítása előtt visszavonja, részvétele a nyereményjátékban lehetetlenné válik és így a kapcsolódó játékszabályzat alapján a játékból ki kell zárnunk."
  },
  {
    "t": "h",
    "l": 3,
    "v": "3. Az adatkezelés célja és jogalapja"
  },
  {
    "t": "p",
    "v": "Az adatkezelés célja, hogy biztosítsa az Ön részvételét a nyereményjátékban, azaz hogy Ön játékosként azonosítható legyen, és hogy felvehessük Önnel a kapcsolatot a játékkal kapcsolatban. Nyertesség esetén az adatkezelés célja továbbá a nyereményjátékkal kapcsolatos adózási és számviteli jogszabályi kötelezettségeink teljesítése."
  },
  {
    "t": "p",
    "v": "A játékra jelentkezők és a nem nyertesek vonatkozásában személyes adatainak kezelése az Ön hozzájárulásánalapszik. A játék nyertesei vonatkozásában személyes adatainak kezelése jogszabályi kötelezettségen alapszik."
  },
  {
    "t": "p",
    "v": "Felhívjuk figyelmét arra, hogy ha Ön a nyereményjátékban való részvétellel kapcsolatos hozzájárulás mellett adatainak marketing célú kezeléséhez is hozzájárult, akkor a jelen tájékoztató ’Direkt Marketing’ fejezete is irányadó."
  },
  {
    "t": "h",
    "l": 3,
    "v": "4. Az adatkezelés időtartama"
  },
  {
    "t": "p",
    "v": "Az adatkezelés az Ön beleegyezésén alapszik, így az adatokat addig kezeljük, amíg Ön vissza nem vonja hozzájárulását."
  },
  {
    "t": "h",
    "l": 3,
    "v": "5. Az adatok címzettjei"
  },
  {
    "t": "p",
    "v": "Harmadik feleknek elsősorban az Önnek nyújtott szolgáltatás lehetővé tétele érdekében továbbítunk adatokat, egyes esetekben pedig azért, hogy jogi kötelezettségeinket teljesíthessük. E körben különösen az alábbi címzettek számára továbbítunk személyes adatokat:"
  },
  {
    "t": "ul",
    "v": [
      "Reklám-, marketing- és médiaügynökségek",
      "Technikai beszállítók, ideértve pl. a lokális vagy felhő alapú tárhelyszolgáltatókat, weboldal üzemeltetőket, marketing automatizálási platformokat, levélküldő rendszereket stb.",
      "Postai szolgáltatók, egyéb küldemény kézbesítő, fuvarozó, fuvarszervező vállalkozások",
      "Jogszabályban meghatározott hatóságok"
    ]
  },
  {
    "t": "h",
    "l": 2,
    "v": "TESZTVEZETÉS (ÜGYFÉL ÉS SAJTÓ)"
  },
  {
    "t": "h",
    "l": 3,
    "v": "1. A kezelt adatok köre"
  },
  {
    "t": "h",
    "l": 3,
    "v": "Kapcsolattartási adatok"
  },
  {
    "t": "ul",
    "v": [
      "az Ön vezeték- és keresztneve",
      "az Ön email címe",
      "az Ön lakcíme",
      "az Ön születési helye és ideje",
      "az Ön telefonszáma"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Egyéb adatok"
  },
  {
    "t": "ul",
    "v": [
      "Gépjárművezetői engedély száma és érvényessége",
      "Személyi igazolvány száma",
      "A tesztvezetés preferált helyszíne"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Ellenőrzéshez szükséges adatok"
  },
  {
    "t": "ul",
    "v": [
      "Személyi igazolvány fénymásolata vagy scannelt másolata",
      "Vezetői engedély fénymásolata vagy scannelt másolata",
      "Lakcímkártya fénymásolata vagy scannelt másolata",
      "Esetleges egyéb személyazonosító irat fénymásolata vagy scannelt másolata"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "2. Az adatszolgáltatás elmaradásának következményei"
  },
  {
    "t": "p",
    "v": "Ha Ön nem adja meg szükséges adatait, nem tudunk az Ön számára tesztvezetési lehetőséget biztosítani."
  },
  {
    "t": "h",
    "l": 3,
    "v": "3. Az adatkezelés célja és jogalapja"
  },
  {
    "t": "p",
    "v": "Az adatkezelés célja, hogy az Ön számára lehetővé tegyük a kívánt jármű tesztvezetését, amelyhez szükséges az, hogy Önt azonosítani tudjuk és adott esetben közigazgatási vagy szabálysértési, illetve egyéb jogsértés esetén igényeinek Önnel szemben érvényesítsük, illetve adatait az illetékes hatóság részére kiadjuk."
  },
  {
    "t": "p",
    "v": "Személyes adatainak kezelésejogos érdekünk érvényesítéséhez szükséges. Ennek lényege, hogy a járművekben vagy azokkal okozott anyagi vagy személyi károk és sérülések kockázata, továbbá az objektív felelősséget előíró jogszabályok kimentési lehetőségeimiatt az adatok kezeléséhez szükséges érdekünk elsőbbséget élvez és érdemben nem korlátozza az Ön érdekeit vagy alapvető jogait és szabadságait."
  },
  {
    "t": "h",
    "l": 3,
    "v": "4. Az adatkezelés időtartama"
  },
  {
    "t": "p",
    "v": "Adatait a polgárijogi elévülési időhöz igazodva a tesztvezetés befejezésétől számított 5 évig tároljuk."
  },
  {
    "t": "h",
    "l": 3,
    "v": "5. Az adatok címzettjei"
  },
  {
    "t": "p",
    "v": "Adatait hatósági megkeresés vagy határozat esetén az illetékes közigazgatási, szabálysértési vagy más hatóságnak továbbíthatjuk függetlenül attól, hogy ez törvényi kötelezettségünk vagy jogosultságunk-e. Ha káreset következik be, adatait továbbíthatjuk az illetékes biztosítótársaságoknak vagy a kárügyintézésben eljáró más megbízottunknak, illetve harmadik személynek."
  },
  {
    "t": "p",
    "v": "Ha importőrként járunk el, adatait továbbíthatjuk annak a márkakereskedőnek, aki a tesztvezetést szervezi és biztosítja az Ön részére."
  },
  {
    "t": "h",
    "l": 2,
    "v": "ÜGYFÉL-ELÉGEDETTSÉG MÉRÉSE"
  },
  {
    "t": "h",
    "l": 3,
    "v": "1. A kezelt adatok köre"
  },
  {
    "t": "h",
    "l": 3,
    "v": "Kapcsolattartási adatok"
  },
  {
    "t": "ul",
    "v": [
      "az Ön vezeték- és keresztneve",
      "az Ön email címe",
      "az Ön lakcíme",
      "az Ön telefonszáma"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Gépjárműadatok"
  },
  {
    "t": "ul",
    "v": [
      "Alvázszám",
      "Rendszám",
      "Egyéb gépjármű műszaki és szerződéses adatok, pl. vásárlás és forgalomba helyezés dátuma"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Szolgáltatás igénybevételének adatai"
  },
  {
    "t": "ul",
    "v": [
      "Az igénybe vett márkakereskedés vagy márkaszerviz neve",
      "Az igénybe vett szolgáltatás időpontja",
      "Az ön visszajelzése, a kérdésekre adott válaszai amennyiben azok személyes adatnak minősülnek"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "2. Az adatszolgáltatás elmaradásának következményei"
  },
  {
    "t": "p",
    "v": "Ha Ön tiltakozik adatai kezelése ellen, a termékeinkről és szolgáltatásainkról alkotott véleményét nem fogjuk tudni figyelembe venni annak érdekében, hogy emelhessük szolgáltatásaink és üzleti folyamataink minőségét."
  },
  {
    "t": "h",
    "l": 3,
    "v": "3. Az adatkezelés célja és jogalapja"
  },
  {
    "t": "p",
    "v": "Az adatkezelés célja, hogy visszajelzést kapjunk az Ön vásárlói, ill. ügyféltapasztalatairól és ez alapján emelhessük szolgáltatásaink és üzleti folyamataink minőségét."
  },
  {
    "t": "p",
    "v": "Személyes adatainak kezelésejogos érdekünk érvényesítéséhez szükséges.Ennek lényege, hogy az Ön fogyasztói élményével kapcsolatos visszajelzés kéréséhez fűződő érdekünk miatt az adatok kezeléséhez szükséges érdekünk elsőbbséget élvez és érdemben nem korlátozza az Ön érdekeit vagy alapvető jogait és szabadságait."
  },
  {
    "t": "h",
    "l": 3,
    "v": "4. Az adatkezelés időtartama"
  },
  {
    "t": "p",
    "v": "Az adatokat az ügyfélkapcsolat fennállása alatt, majd a szerződés vagy az ügyfélkapcsolat megszűnése után az általános elévülési ideig, azaz 5 évig kezeljük."
  },
  {
    "t": "h",
    "l": 3,
    "v": "5. Az adatok címzettjei"
  },
  {
    "t": "p",
    "v": "Adatait a kapcsolatfelvétel és a felmérés lebonyolítása, valamint kiértékelése céljából az Emil Frey csoport vagy a márkacsoport illetékes tagvállalatának vagy külső szolgáltatónak továbbíthatjuk."
  },
  {
    "t": "h",
    "l": 2,
    "v": "SZERZŐDÉSES KAPCSOLATOK"
  },
  {
    "t": "h",
    "l": 3,
    "v": "1. A kezelt adatok köre"
  },
  {
    "t": "p",
    "v": "Az adott termék/szolgáltatás, ill. szerződés jellegétől függően:"
  },
  {
    "t": "h",
    "l": 3,
    "v": "Kapcsolattartási adatok"
  },
  {
    "t": "ul",
    "v": [
      "az Ön vezeték- és keresztneve",
      "az Ön email címe",
      "az Ön lakcíme",
      "az Ön telefonszáma"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Szerződéses adatok"
  },
  {
    "t": "ul",
    "v": [
      "Az Önnel kötött írásbeli szerződésben vagy ahhoz kapcsolódó, ill. azt helyettesítő dokumentumban (pl. megrendelőlap) fellelhető bármilyen egyéb, személyes adatnak minősülő információ"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Gépjárműadatok"
  },
  {
    "t": "ul",
    "v": [
      "Alvázszám",
      "Rendszám",
      "Forgalmi engedély száma",
      "Forgalmi engedély másolata",
      "Egyéb gépjármű műszaki és szerződéses adatok, pl. forgalomba helyezés dátuma"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Okiratok"
  },
  {
    "t": "ul",
    "v": [
      "Személyi igazolvány, lakcímkártya, jogosítvány fénymásolata vagy scannelt példánya"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "2. Az adatszolgáltatás elmaradásának következményei"
  },
  {
    "t": "p",
    "v": "Ha Ön nem adja meg szükséges adatait, nem tudjuk Önnek termékeinket értékesíteni, ill. szolgáltatásainkat nyújtani, illetve nem tudunk adott esetben az Ön által kínált termékeket vagy szolgáltatásokat vásárolni, illetve igénybe venni. Szintén előfordulhat, hogy vállalkozások közti (B2B) szerződés esetén az Ön, mint kapcsolattartó adatai megadásának elmaradása azt eredményezi, hogy a szerződés nem lesz megköthető vagy teljesíthető."
  },
  {
    "t": "h",
    "l": 3,
    "v": "3. Az adatkezelés célja és jogalapja"
  },
  {
    "t": "p",
    "v": "Az adatkezelés célja, hogytermékeinket értékesítsük, illetve szolgáltatásokat nyújtsunk önnek, ideértve többek közt az ingó dolgok (gépjárművek, alkatrészek, merchandise termékek) értékesítését, illetve a profilunkba vágó szolgáltatásokat (pl. szervizelés, cseregépjármű biztosítása stb.)Az adatkezelés célja továbbá, hogy termékre vagy szolgáltatásra vonatkozó jogszabályi szavatossági vagy garanciális kötelezettségünket és bármilyen egyéb, szerződésben vagy jogszabályban előírt további kötelezettségünket teljesíthessük.Amennyiben Ön kínál a részünkre terméket vagy szolgáltatást, úgy az adatkezelés célja az, hogy ezeket igénybe vehessük."
  },
  {
    "t": "p",
    "v": "Ha Ön nem szerződő fél, hanem egy cég vagy más jogalany nevében jár el, mint annak szerződést kötő képviselője, megbízottja, vagy a szerződésben feltüntetett kapcsolattartója, akkor az adatkezelés célja az Önnel kapcsolatban álló szerződő féllel kötött szerződés teljesítése."
  },
  {
    "t": "p",
    "v": "Az adatkezelés jogalapja: az adatkezelés olyan szerződés teljesítéséhez szükséges, amelyben Ön az egyik fél, vagy az a szerződés megkötését megelőzően az Ön kérésére történő lépések megtételéhez szükséges.Ha Ön nem szerződő fél, hanem vállalkozások közti (B2B) szerződés esetén képviselő vagy kapcsolattartó, akkor az adatok kezelése jogos érdekünkön alapszik. Ennek lényege, hogy az Önt foglalkoztató vagy megbízó szervezettel kötött szerződés létrejötte és teljesítése okán az adatok kezeléséhez szükséges érdekünk elsőbbséget élvez és érdemben nem korlátozza az Ön érdekeit vagy alapvető jogait és szabadságait."
  },
  {
    "t": "p",
    "v": "Az adatkezelés jogalapja továbbá jogszabályi kötelezettségünk teljesítése a szavatossági és/vagy jótállási igényekkel kapcsolatban."
  },
  {
    "t": "h",
    "l": 3,
    "v": "4. Az adatok címzettjei"
  },
  {
    "t": "p",
    "v": "Ha márkakereskedőként járunk el, adatokat továbbíthatunk a márka importőre és gyártója felé, akik egyes termékek és szolgáltatások nyújtásában elengedhetetlenül részt vesznek. Ha importőrként járunk el, adatokat továbbíthatunk a márka illetékes kereskedője vagy szervize felé, akik egyes termékek és szolgáltatások nyújtásában elengedhetetlenül részt vesznek."
  },
  {
    "t": "p",
    "v": "Egyes szolgáltatásokat (pl. kiterjesztett garancia, biztosítások vagy assistance) külső partnerek nyújtanak, akik adott esetben külön adatkezelőnek is minősülhetnek. Ezen szolgáltatások kapcsán az adatokat partnereinknek továbbítjuk."
  },
  {
    "t": "p",
    "v": "Egyes szolgáltatások hatósági ügyintézést is magukban foglalnak, ezekkel kapcsolatban adatokat továbbítunk az illetékes hatóság felé (pl. új autó forgalomba helyezése)."
  },
  {
    "t": "p",
    "v": "Finanszírozás esetén adatokat továbbítunk a bevont pénzügyi szolgáltató partner felé, akik adott esetben külön adatkezelőnek is minősülhet."
  },
  {
    "t": "p",
    "v": "Jogvita esetén az adatokat továbbítjuk jogi képviselőnk részére."
  },
  {
    "t": "p",
    "v": "Ha a szerződés olyan szolgáltatás nyújtására irányul, amivel összefüggésben Önt érintően szabálysértés, bűncselekmény vagy más jogellenes magatartás következhet be (pl. bérautóval vagy szerviz csereautóval okozott baleset vagy elkövetett szabálysértés), az adatokat továbbíthatjuk az illetékes hatóságnak."
  },
  {
    "t": "h",
    "l": 2,
    "v": "BEJÖVŐ KAPCSOLATFELVÉTEL / INGYENES REKLÁMANYAGOKÉSKEDVEZMÉNYEK IGÉNYLÉSE"
  },
  {
    "t": "h",
    "l": 3,
    "v": "1. A kezelt adatok köre"
  },
  {
    "t": "h",
    "l": 3,
    "v": "Kapcsolattartási adatok"
  },
  {
    "t": "ul",
    "v": [
      "az Ön vezeték- és keresztneve",
      "az Ön email címe",
      "az Ön telefonszáma"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Gépjárműadatok"
  },
  {
    "t": "ul",
    "v": [
      "Alvázszám",
      "Típus"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "Egyéb adatok"
  },
  {
    "t": "ul",
    "v": [
      "Finanszírozással kapcsolatos érdeklődés esetén pénzügyi helyzetre vonatkozó adatok",
      "Az ön megkeresésében foglalt mindenkori személyes adatnak minősülő információk"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "2. Az adatszolgáltatás elmaradásának következményei"
  },
  {
    "t": "p",
    "v": "Ha Ön nem adja meg szükséges adatait, nem tudjuk az Ön által kezdeményezett kapcsolatfelvételt fogadni, illetve Önnel kommunikálni."
  },
  {
    "t": "h",
    "l": 3,
    "v": "3. Az adatkezelés célja és jogalapja"
  },
  {
    "t": "p",
    "v": "Az adatkezelés célja, hogy válaszolhassunk az Öntől érkező különféle megkeresésekre (érdeklődés, katalógus kérés stb.) akár személyesen, akár telefonon vagy az interneten keresztül."
  },
  {
    "t": "p",
    "v": "Személyes adatainak kezelésejogos érdekünk érvényesítéséhez szükséges. Ennek lényege, hogy az üzleti tevékenységünkhöz szükséges kommunikáció bonyolításával kapcsolatos érdekünk elsőbbséget élvez és érdemben nem korlátozza az Ön érdekeit vagy alapvető jogait és szabadságait."
  },
  {
    "t": "h",
    "l": 3,
    "v": "4. Az adatkezelés időtartama"
  },
  {
    "t": "p",
    "v": "Adatait az ügyfélkapcsolat, ill. egyéb jellegű kommunikáció időtartama alatt kezeljük."
  },
  {
    "t": "h",
    "l": 3,
    "v": "5. Az adatok címzettjei"
  },
  {
    "t": "p",
    "v": "Ha az adott érdeklődés megválaszolásához vagy kérés teljesítéséhez szükséges, adatait továbbíthatjuk az illetékes importőr vagy márkakereskedő/márkaszerviz, illetve gyártófelé. Ha a kapcsolatfelvétel célja valamilyen termék vagy szolgáltatás igénylése (pl. szervizkártya), az adott termék előállításához igénybe vett megbízottjainknak vagy alvállalkozóinknak továbbítjuk az adatokat.Ha az érdeklődés finanszírozási kérdéseket is érint, az adatokat továbbíthatjuk pénzügyi szolgáltató partnereink felé."
  },
  {
    "t": "h",
    "l": 2,
    "v": "PÉNZMOSÁS-MEGELŐZÉSI INTÉZKEDÉSEK"
  },
  {
    "t": "h",
    "l": 3,
    "v": "1. A kezelt adatok köre"
  },
  {
    "t": "p",
    "v": "A pénzmosás elleni törvény (azaz a a pénzmosás és a terrorizmus finanszírozása megelőzéséről és megakadályozásáról 2017. évi LIII. tv., a „ Pmt. ”) szerinti ügyfél azonosításhoz a törvényben előírt adatok és okiratmásolatok."
  },
  {
    "t": "h",
    "l": 3,
    "v": "2. Az adatszolgáltatás elmaradásának következményei"
  },
  {
    "t": "p",
    "v": "Ha Ön nem adja meg szükséges adatait, nem tudjuk a Pmt.-ben meghatározott ügyfélazonosítást elvégezni, így nem fogadhatunk el kétmillió-ötszázezer forintot elérő vagy meghaladó készpénzfizetést."
  },
  {
    "t": "h",
    "l": 3,
    "v": "3. Az adatkezelés célja és jogalapja"
  },
  {
    "t": "p",
    "v": "Az adatkezelés célja, hogy eleget tegyünk a Pmt.-ben előírt jogi kötelezettségeinknek."
  },
  {
    "t": "p",
    "v": "Az adatkezelés jogalapja a ránk vonatkozó jogi kötelezettség teljesítése."
  },
  {
    "t": "h",
    "l": 3,
    "v": "4. Az adatok címzettjei"
  },
  {
    "t": "p",
    "v": "A Pmt. által meghatározott esetekben vagy hatósági megkeresés esetén a Pmt. szerinti hatóságok részére teljesítünk adatszolgáltatást vagy teszünk bejelentést."
  },
  {
    "t": "h",
    "l": 2,
    "v": "SAJTÓKAPCSOLATOK"
  },
  {
    "t": "h",
    "l": 3,
    "v": "1. A kezelt adatok köre"
  },
  {
    "t": "ul",
    "v": [
      "az Ön vezeték- és keresztneve",
      "az Ön email címe",
      "az Ön telefonszáma",
      "az Ön lakcíme",
      "az Ön által képviselt sajtótermék"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "2. Az adatszolgáltatás elmaradásának következményei"
  },
  {
    "t": "p",
    "v": "Ha Ön nem adja meg szükséges adatait, nem áll módunkban munkáját segíteni sajtókapcsolati kommunikációval."
  },
  {
    "t": "h",
    "l": 3,
    "v": "3. Az adatkezelés célja és jogalapja"
  },
  {
    "t": "p",
    "v": "Az adatkezelés célja, hogy sajtómeghívókat, sajtóközleményeket küldhessünk Önnek, illetvekövethessük a sajtóautópark használatát."
  },
  {
    "t": "p",
    "v": "Személyes adatainak kezelésejogos érdekünk érvényesítéséhez szükséges. Ennek lényege, hogy az üzleti, marketing és PR tevékenységünkhöz fűződő érdekünk elsőbbséget élvez és érdemben nem korlátozza az Ön érdekeit vagy alapvető jogait és szabadságait."
  },
  {
    "t": "h",
    "l": 3,
    "v": "4. Az adatkezelés időtartama"
  },
  {
    "t": "p",
    "v": "Tekintettel arra, hogy az Ön újságírói státusának ellenőrzésérenincs módunk, adatait addig kezeljük, amíg nem kéri azok törlését."
  },
  {
    "t": "h",
    "l": 2,
    "v": "ÁLLÁSAJÁNLATRA JELENTKEZŐK"
  },
  {
    "t": "h",
    "l": 3,
    "v": "1. A kezelt adatok köre"
  },
  {
    "t": "h",
    "l": 3,
    "v": "Kapcsolattartási adatok"
  },
  {
    "t": "ul",
    "v": [
      "az Ön vezeték- és keresztneve",
      "az Ön postacíme",
      "az Ön email címe",
      "az Ön telefonszáma"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "CV adatok"
  },
  {
    "t": "ul",
    "v": [
      "végzettségek, korábbi munkahelyek, tapasztalat",
      "jelenlegi vagy korábbi bérezésével kapcsolatos adatok",
      "önéletrajzában, motivációs levelében vagy a felvételi eljárás során más módon közönt, személyes adatnak minősülő bármilyen további információ"
    ]
  },
  {
    "t": "h",
    "l": 3,
    "v": "2. Az adatszolgáltatás elmaradásának következményei"
  },
  {
    "t": "p",
    "v": "Az adatszolgáltatás hiányában nem tudjuk jelentkezését feldolgozni és azzal kapcsolatban visszajelzést adni."
  },
  {
    "t": "h",
    "l": 3,
    "v": "3. Az adatkezelés célja és jogalapja"
  },
  {
    "t": "p",
    "v": "Az adatkezelés célja, hogy lehetővé tegye számunkra a kiválasztási folyamat lebonyolítását, meggyőződhessünk az Ön alkalmasságáról a meghirdetett állásra és eldönthessük, kinek teszünk szerződéskötési ajánlatot."
  },
  {
    "t": "p",
    "v": "Személyes adatainak kezelésejogos érdekünk érvényesítéséhez szükséges. Ennek lényege, hogy a felvételi folyamat lebonyolításával kapcsolatos érdekünk elsőbbséget élvez és érdemben nem korlátozza az Ön érdekeit vagy alapvető jogait és szabadságait."
  },
  {
    "t": "h",
    "l": 3,
    "v": "4. Az adatkezelés időtartama"
  },
  {
    "t": "p",
    "v": "Sikertelen pályázat esetén adatait a kiválasztási folyamat befejezésétől számított négy hónapig kezeljük tekintettel arra, hogy amennyiben a kiválasztott jelölt munkaviszonya a próbaidő alatt megszűnik, újra fontolóra vehessük az Ön pályázatát. Sikeres pályázat esetén a munkaszerződés megkötésétől adatait a külön munkavállalói adatkezelési tájékoztató szerint kezeljük."
  },
  {
    "t": "h",
    "l": 2,
    "v": "WEBOLDAL LÁTOGATÓK (COOKIE-SZABÁLYZAT)"
  },
  {
    "t": "p",
    "v": "Weboldalunkon tett látogatása során a rendszer úgynevezett cookie-kat (vagy másképp „sütiket”) helyez el számítógépe internetes böngészőjében.A cookie-k segítésével gyűjtött felhasználói személyes adatok tekintetében adatkezelést folytatunk. A sütik a felhasználó által meglátogatott honlap webszervere által a felhasználó végberendezésén (számítógépén, telefonján, egyéb eszközén) elhelyezett kisméretű, betűket és számokat egyaránt tartalmazó szövegfájlok, melyek információkat tárolnak a felhasználóról, valamint a felhasználó és a webszervere kapcsolatáról. Lehetővé teszik a weboldal hatékonyságának, használati módjának, működésének, hibáinak és a látogatók számának nyomon követését, valamint a felhasználói élmény növelését, ezek egyszersmind az adatkezelés céljai."
  },
  {
    "t": "p",
    "v": "A következő típusú sütiket helyezheti el webszerverünk az Ön berendezésén:"
  },
  {
    "t": "h",
    "l": 3,
    "v": "Anonim analitikus sütik"
  },
  {
    "t": "p",
    "v": "Az analitikus sütik a látogatókról gyűjtenek a weboldal statisztikai jellegű látogatottságát vizsgáló elemzéseinkhez szükséges információkat. Ilyen információk például a weboldalt látogatók száma, az az időtartam, amelyet a látogató a honlapon tölt, navigációval kapcsolatos kérdések, azaz a látogató hogyan találta meg a weboldalt (reklámra kattintva vagy más módon). Az analitikus sütik tehát azÖn internetezési szokásairól közvetítenek információkat számunkra, amelyek honlapunk fejlesztéséhez a látogatói elégedettség és weboldalunk ismertségének vizsgálatán keresztül nyújtanak segítséget."
  },
  {
    "t": "h",
    "l": 3,
    "v": "Profilkezelési (azonosító) sütik"
  },
  {
    "t": "p",
    "v": "A weboldalunk lehetővé teheti a felhasználó számára, hogy személyes adatainak megadásával regisztráljon, majd ezt követően weboldalunkon bejelentkezzen. Az azonosító sütik így lehetővé teszik a felhasználói azonosítók, elmentett információk kezelését, és ezáltal az egymást követő honlap látogatások alkalmával a felhasználó egyedi azonosítását és valamely engedélyezett tartalomhoz való hozzáférését."
  },
  {
    "t": "h",
    "l": 3,
    "v": "Harmadik féltől származó, reklámozást szolgáló sütik"
  },
  {
    "t": "p",
    "v": "A weboldalunkon működő, harmadik fél által viselkedésalapú reklámozás érdekében alkalmazott sütik használatával a harmadik fél például nyomon követi azt, hogy mennyi felhasználó látta, valamint mennyi felhasználó látta többször az adott reklámot. Harmadik fél által használt sütik tekintetében a harmadik fél adatkezelési szabályzata az irányadó, amelyek tartalmára nincs befolyásunk és amit javaslunk külön áttanulmányozni."
  },
  {
    "t": "h",
    "l": 3,
    "v": "Harmadik féltől származó egyéb sütik"
  },
  {
    "t": "p",
    "v": "A weboldal harmadik féltől származó sütik segítségével a látogatók internetezési szokásait tudja nyomon követni, ezáltal különböző szolgáltatások igénybevételét tudja ajánlani a látogatóknak, úgy mint katalógus igénylése, vagy tesztvezetésre történő jelentkezés. Ezen sütik működéséből adódóan sem nekünk, sem harmadik félnek nincsen hozzáférése a másik fél által használt sütikben tárolt információkhoz."
  },
  {
    "t": "h",
    "l": 3,
    "v": "Flash sütik (helyi megosztott objektumok)"
  },
  {
    "t": "p",
    "v": "Weboldalunkon lehetséges, hogy multimédiás tartalmat helyezünk el, aminek lejátszása az Adobe FlashPlayer program használatával történik. A flash sütik, vagy másnéven a helyi megosztott objektumok a weboldalon található videó vagy audió tartalom lejátszásához szükséges technikai adatokat tárolnak (képminőség, hálózati link, sebesség). Alkalmasak meghatározott szolgáltatások nyújtására (pl. ún „auto-resume”) és a médiatartalommal kapcsolatos felhasználói preferenciák elmentésére."
  },
  {
    "t": "p",
    "v": "A cookie-kkal végzett adatkezelés az Ön hozzájárulásán alapszik. Hozzájárulás hiányában, illetve a korábban megadott hozzájárulás visszavonása esetén honlapunk nem helyez el cookie-kat az Ön berendezésén."
  },
  {
    "t": "h",
    "l": 3,
    "v": "A cookie-k felhasználók általi kezelése"
  },
  {
    "t": "p",
    "v": "A sütiket – a flash sütik kivételével – a felhasználók bármikor eltávolíthatják internetes böngészőjük Beállítások menüjében. A felhasználók továbbá ugyanitt beállíthatják a sütik használatának engedélyezését és tiltását. Ennek részletes módját az Ön által használt böngésző működési dokumentációja tartalmazza.A Flash sütik szintén a felhasználó végberendezésén kerülnek tárolásra, azonban a böngészőben ezek kezelésére nincs lehetőség. Az ilyen jellegű sütiket manuálisan az Adobe weboldalán található mindenkori tájékoztatásban foglaltak szerint lehet törölni, vagy a beállításaikat módosítani."
  }
];
