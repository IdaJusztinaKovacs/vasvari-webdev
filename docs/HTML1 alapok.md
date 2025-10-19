---
id: 1_tananyag
sidebar_position: 1
title: 1. tananyag
---

# 1. HTML alapok

## Mi az a HTML?

---

A HTML a **Hyper Text Markup Language** rövidítése.

    - A HTML egy leíró (jelölő) nyelv, amelyet weboldalak készítésére fejlesztettek ki, és ma már az internet egyik alapvető szabványa a W3C (World Wide Web Consortium) támogatásával.
    - Meghatározza a dokumentum tartalmának szerkezetét (pl. címsorok, bekezdések, felsorolások, táblázatok) egyszerű jelölőtagok segítségével.
    - Lehetővé teszi a kapcsolatot a dokumentum különböző részei, illetve különböző weboldalak között (hiperhivatkozások – HyperText).
    - Maga a HTML állomány egyszerű szöveges fájl, amely jelölő tagokat tartalmaz. Ezek alapján a böngésző eldönti, hogyan kell megjeleníteni a tartalmat.
    - A HTML fájl .html vagy .htm kiterjesztéssel rendelkezik, és bármilyen egyszerű szövegszerkesztővel (pl. Jegyzettömb) létrehozható és szerkeszthető.

## Történeti áttekintés

---

### 1989 - World Wide Web

Tim Berners-Lee, a CERN kutatója, megalkotta a World Wide Web koncepcióját. A projekt eredetileg a világ különböző egyetemein és kutatóintézeteiben dolgozó fizikusok közötti gyors, állandó és megbízható információáramlást szolgálta. Célja az volt, hogy egy egységes, könnyen használható rendszer segítségével a kutatók bárhonnan hozzáférhessenek egymás eredményeihez.

### 1990 - Első HTML-prototípus

Elkészült az első működő HTML-prototípus, a hozzá tartozó HTTP-protokoll és az első webböngésző (WorldWideWeb). A HTML-t eredetileg a dokumentumok logikai szerkezetének és tartalmának leírására tervezték. A megjelenítés módját teljes mértékben az aktuális böngésző határozta meg, így a tartalom volt az elsődleges, a vizuális forma pedig másodlagos. A felhasználói kör ekkor főként egyetemi tanárok, kutatók és tudományos szakemberek, akik számára a gyors információmegosztás és az együttműködés volt a legfontosabb.

### 1991 – HTML 1.0

Megjelent az első, nyilvánosan dokumentált HTML-verzió. Ez lehetővé tette a weboldalak alapvető szerkezetének kialakítását: bekezdések, hivatkozások, címsorok és felsorolások definiálását. A weboldalak megjelenése ekkor még nagyon egyszerű volt, egy formázott szöveges dokumentumra emlékeztetett.

### 1995 – HTML 2.0

Ez a verzió már bővítette a lehetőségeket: megjelent a félkövér és dőlt betűk használata, valamint a képek beillesztése. A kiegészítések között szerepeltek az űrlapok is, amelyek többsoros szövegbevitelt és választható opciókat tettek lehetővé – ezzel a web már nem csak információt közvetített, hanem interakcióra is alkalmas lett.

### 1996–1997 – HTML 3.0 és HTML 3.2

A HTML 3.0 tervezet (1995) számos újdonságot ígért, de túl összetettnek bizonyult, ezért nem vált hivatalos szabvánnyá. Helyette 1997 januárjában jelent meg a HTML 3.2, amely már támogatta a Java appletek és szkriptek beágyazását, így a korábban statikus HTML-oldalak dinamikus elemeket kaphattak. Ekkor jelent meg a `<style>` elem is, amellyel a megjelenésre vonatkozó szabályokat (CSS-t) közvetlenül a HTML-dokumentumba lehetett beágyazni.

### 1999: HTML 4.01 (= SGML)

Ez a verzió jelentős fejlesztéseket hozott, különösen az akadálymentesség és a formázási lehetőségek terén. Nagy hangsúlyt fektetett arra, hogy a weboldalak szerkezete és elrendezése elkülönüljön a tartalomtól, ezzel előkészítve a terepet a CSS széles körű használatához
Az SGML = Standard Generalized Markup Language egy, a 80-as évek óta szabványként használt általános jelölőnyelv, amelyet elektronikus adatcserében, dokumentumkezelésben és kiadványok előállításában alkalmaznak.

<u> Újdonságok és fejlesztések:</u>

- Nemzetközi karakterkészletek támogatása
- Jobbról balra olvasás (RTL – Right-To-Left) támogatása
- Űrlapok és táblázatok használhatóságának továbbfejlesztése
- A keretek (frames) használata hivatalosan is szabványba került

### 2000-es évek eleje – XHTML

A W3C (World Wide Web Consortium) bevezette az XHTML-t, amely a HTML és az XML ötvözete volt.
Az XML (Extensible Markup Language) egy általános célú leíró nyelv, amelyet kifejezetten speciális célú jelölőnyelvek létrehozására terveztek.
Az XHTML a HTML-nél szigorúbb szintaxis-szabályokat alkalmazott.
Célja az volt, hogy előkészítse a webet a jövőben strukturáltabb, gépek által könnyebben feldolgozható dokumentumok számára. Előnyei közé tartozott a jobb kompatibilitás a különböző böngészők között (pl. Firefox, Safari, Opera). 2008. január – Megjelent a HTML5 első nyilvános munkavázlata, amely új korszakot nyitott a webfejlesztésben.

### 2014-től napjainkig - HTML5

A HTML5 első nyilvános munkavázlata a WHATWG és a W3C együttműködésében készült, azzal a céllal, hogy egy modern, multimédiát natívan támogató, bővíthető és mobileszközökre is optimalizált HTML-verzió jöjjön létre.

**Fő újdonságok:**

- Új strukturális elemek: `<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`
- Beépített multimédia-támogatás: `<audio>` és `<video>` elemek
- Canvas API: 2D grafika és animáció HTML-en belül
- Új webes API-k: Web Storage, Geolocation API, és más, JavaScripthez kapcsolódó fejlesztések.

HTML5-ben az 5 nem csupán egy verziószámot jelöl, hanem egy új generációt is, amely visszafelé kompatibilis a korábbi HTML/XHTML verziókkal és a kódolása tekintetében nem szakít gyökeresen a korábbiakkal, hanem fokozatosan fejlődést jelent.

## Szabványok

---

A weboldalak készítésére vonatkozóan a W3C (World Wide Web Consortium) nevű szervezet ad ki előírásokat, szabványokat.

**Szabványosság ellenőrzése**
Egy HTML vagy CSS fájl szabványosságát legegyszerűbben böngészős bővítményekkel vagy az alábbi online validátor szoftverek segítségével ellenőrizhetjük:

- HTML validátor - https://validator.w3.org/
  Beadhatsz URL-t, feltölthetsz fájlt, vagy bemásolhatod a HTML-kódot.
- CSS validátor - https://jigsaw.w3.org/css-validator/
  Ellenőrzi a CSS-szabályok megfelelését a W3C ajánlásoknak.

A validálás segít a hibák kiszűrésében, de a szabványosság nem egyenlő a hibátlan megjelenítéssel minden eszközön

## A HTML-dokumentum felépítése és alapvető szabályai

---

A HTML-dokumentumok szövegfájlok és két részből állnak:

- **strukturáló** és **formázó** parancsokból (pl. bekezdések, képek, táblázatok, felsorolások)
  a megjelenítendő tartalomból (ASCII szövegek)
- Bármilyen szövegszerkesztővel elkészíthetők!

#### Példa:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Példa HTML-dokumentum</title>
  </head>
  <body>
    <!-- Strukturáló parancs: címsor -->
    <h1>Ez egy HTML dokumentum</h1>

    <!-- Strukturáló parancs: bekezdés -->
    <p>
      Ez itt a megjelenítendő
      <!-- Formázó parancs: félkövér -->
      <b>tartalom</b>, amely szöveg formájában jelenik meg a böngészőben.
    </p>

    <!-- Strukturáló parancs: kép; Formázó parancs: szélesség -->
    <img src="pelda.jpg" alt="Egy példa kép" width="200" />
  </body>
</html>
```

### Hogyan készül egy HTML-dokumentum?

- egyszerű TXT szerkesztőkkel (pl. Jegyzettömb, EditPlus, Notepad++)
  HTML-szerkesztők segítségével
- Adobe Dreamweaver (naprakész)
- KompoZer (elavult, nem támogatott)
- PsPad

## A HTML-dokumentum felépítése és alapvető szabályai

### 1. Dokumentumtípus meghatározás (DOCTYPE)

A dokumentumtípus meghatározás (DTD) adja meg a weboldal nyelvtanát a böngészőnek.  
A megadás módja: `<!DOCTYPE html>`  
(doctype = document type = dokumentumtípus).

A böngésző szabálykövető üzemmódban értelmezi a HTML-oldalt.  
Ha a dokumentumtípus hiányosan, hibásan vagy egyáltalán nincs megadva, akkor a böngésző **trükköző üzemmódba** válthat, és magától próbálja értelmezni a kódot – ez hibás megjelenítést eredményezhet.

### 2. A `<html>` elem

A dokumentumtípus meghatározás után a `<html>` nyitó utasítás és a `</html>` záró utasítás közötti rész alkotja a böngésző által értelmezett és megjelenített weblapot.  
Ezen elemek közé kell zárni a teljes dokumentumot: a szövegeket, az utasításokat és a hivatkozásokat is.

### 3. A fejrész (head)

A `<head> ... </head>` közötti rész a dokumentum leíró adatait tartalmazza, pl.:

- a karakterkódolást (`<meta charset="UTF-8">`),
- a címét (`<title>`),
- stíluslapokra (`<link>`) és szkriptekre (`<script>`) való hivatkozásokat.

A head részben megadott tartalom általában **nem látható** közvetlenül a böngészőben.

### 4. A törzsrész (body)

A `<body> ... </body>` közötti rész tartalmazza a weblap tényleges tartalmát:

- címsorokat,
- bekezdéseket,
- képeket,
- listákat,
- táblázatokat,
- hivatkozásokat.

Ez az a rész, amit a felhasználó a böngészőben lát.

---

### Példa: teljes HTML-dokumentum

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Példa HTML-dokumentum</title>
  </head>
  <body>
    <h1>Ez egy HTML dokumentum</h1>
    <p>
      Ez itt a megjelenítendő
      <b>tartalom</b>, amely szöveg formájában jelenik meg a böngészőben.
    </p>
    <img src="pelda.jpg" alt="Egy példa kép" width="200" />
  </body>
</html>
```

### Általános szabályok

- Kis- és nagybetűre érzéketlen.
- Idézőjelek használata: ' "
- A HTML-ben megjegyzéseket használhatunk, a kommentek a `<!– és - - >`
  között helyezkednek el.

```html
<!-- Ez egy HTML-komment példa -->
```

- Sok szóköz, Enter, tab = csak egynek számít. <u>Megoldás:</u> karakterentitások

- A HTML tag-ek szögletes zárójelek között helyezkednek el, pl.: `<tag>`
- A legtöbb HTML tag-nek van egy nyitó `<tag>` és záró `</tag>` párja.
- Kivétel pl.: `<img>`, `<br>`

## HTML nyelvtana

### Címkék és elemek

---

Azokat a strukturális egységeket, amelyek egy weblap tartalmát alkotják, objektumoknak nevezzük (pl. egy címsor, egy bekezdés vagy egy kép). Az objektumok tartalmazhatják egymást.

A HTML valójában <u>három nyelvi elemből</u> építkezik: **címkékből** (angolul: tag-ekből), **elemekből** és **attribútumokból**. (Az elemek címkékből és szövegekből állnak.)

A HTML jelölőnyelvben a megjelenítendő tartalomba címkéket (tag-okat) helyezünk el, amelyek megszabják, hogy a böngészők hogyan értelmezzék a megjelölt tartalmi részeket.
A címkék angol megnevezése (vagy rövidítése) egyben kifejezi a tartalmukat is.
A címkék mindig a &lt; és &gt; jelek között helyezkednek el!!

A címkék nagy többsége párban van (páros címkék), a pár első tagja a kezdő, a második tagja a záró tag .
A tartalom (ez leggyakrabban egy szöveg) a kezdő és a záró tag között helyezkedik el.

```html
<p>Ez itt egy bekezdésszöveg.</p>
```

Azokat a címkéket, amelyeknek nincs párjuk, páratlan vagy üres címkéknek szoktuk nevezni.
Pl.: a kép `<img>`, a sortörés `<br>` vagy a meta-adatok `<meta>`

Az elemek egymásba is ágyazhatók, azaz a páros címkék közrefoghatnak további páros címke-párokat vagy páratlan címkéket.

#### Bekezdésben félkövér és dőlt szöveg

```html
<p>Ez egy <b>félkövér</b> és <i>dőlt</i> szöveg ugyanabban a bekezdésben.</p>
```

#### Link listaelemen belül

```html
<ul>
  <li><a href="https://www.google.com">Google</a> kereső</li>
  <li><a href="https://www.wikipedia.org">Wikipédia</a> tudástár</li>
</ul>
```

#### Táblázat, benne link és félkövér szöveg

```html
<table border="1">
  <tr>
    <th>Név</th>
    <th>Weboldal</th>
  </tr>
  <tr>
    <td><b>Google</b></td>
    <td><a href="https://www.google.com">https://www.google.com</a></td>
  </tr>
  <tr>
    <td><b>Wikipedia</b></td>
    <td><a href="https://www.wikipedia.org">https://www.wikipedia.org</a></td>
  </tr>
</table>
```

#### Kép linkben (kattintható logó)

```html
<a href="https://www.wikipedia.org">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/63/Wikipedia-logo.png"
    alt="Wikipedia logo"
    width="80"
  />
</a>
```

### HTML tag-ek jellemzői és értékek

Egy elemnek lehet egy vagy több jellemzője (attribútuma) és a jellemzőnek van értéke (value).
Minden jellemzőnek egyértelműen meg kell adni az értékét és azt (dupla) idézőjelek között kell feltüntetni, valamint kisbetűkkel célszerű írni.

`<címke attribútum="érték"> tartalom </címke>`

`<címke attribútum1="érték1" attribútum2="érték2"> tartalom </címke>`
