---
id: 3_tananyag
sidebar_position: 3
sidebar_label: "3. tananyag"
title: "3. HTML alapok III."
---

## Karakterentitások

---

A HTML nemcsak szöveget, hanem jeleket és formázást is leír. De vannak
olyan karakterek, amiket a böngésző nem tud "betűként" értelmezni, mert
parancsnak gondolja őket – például a `<`, `>` vagy az `&`. Ezeket
karakterentitásokkal tudjuk megjeleníteni.

A karakterentitások speciális kódok, amik egy-egy jelet helyettesítenek.
A karakterentitás három részből áll:

az elején `&` jel, a végén `;` jel

- és a kettő között pedig egy meghatározott kódsorozat van:
- `&`kódsorozat`;`

A legtöbbet alkalmazott karakterentitás:

- A nem törhető szóköz, azaz az `&nbsp;`
- A `&lt;` és `&gt;` nagyon gyakori, ha kódot akarunk megmutatni a weboldalon.

![Karakterentások](/img/Karakterentitas.png)

:::tip
A nem törhető szóközt sokszor használjuk táblázatokban vagy címekben, hogy ne essen szét a szöveg.
:::

## Szakaszok

---

HTML-ben lehetőségünk van a weboldal tartalmának strukturálására is. Ezt szakaszok, tartalmi egységek kialakításával tehetjük meg.

A `<div>...</div>` egy általános célú blokkszintű (block) szakasz. A blokkszintű elemek mindig új sorban kezdődnek, és kihasználják a teljes rendelkezésre álló szélességet.

A `<span>...</span>` egy átalános célú sorszintű (inline) szakasz. A sorszintű elemek nem kezdődnek új sorban, illetve szélességük csak akkora, mint amekkora helyre szükségük van.

:::caution
Egy sorszintű (inline) HTML elem nem tartalmazhat blokkszintű (block) elemet!!
:::

#### Példa:

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <title>Szakaszok</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div>
      <h2>1. tartalmi egység</h2>
      <p>Ez egy bekezdés.</p>
      <p>Ez egy másik bekezdés.</p>
    </div>
    <div>
      <h2>2. tartalmi egység</h2>
      <p>Ez egy olyan bekezdés, ami egy <span>span elemet</span> tartalmaz.</p>
    </div>
  </body>
</html>
```

## Az id és class attribútumok

---

Minden HTML objektumnak adható egyedi azonosító, illetve minden HTML objektum csoportosítható osztályokba. Ezek alapvetően majd CSS-ben lesznek hasznosak, amikor egy-egy objektumra vagy objektumok csoportjára szeretnénk hivatkozni.

**Egyedi azonosító (id attribútum):** egy adott HTML elem egyértelmű azonosítására szolgál. Értéke a dokumentumon belül szabályosan egyedi kell, hogy legyen, továbbá ez az érték nem tartalmazhat szóközt, valamint számmal sem kezdődhet.

**Osztály (class attribútum):** jellemzően több HTML elem csoportosítására használatos. Értéke nem kell, hogy egyedi legyen, sőt általában nem az. Értékéül szóközzel elválasztva megadható több olyan osztály neve is, amelyekhez az adott elem tartozik

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <meta charset="utf-8" />
    <title>ID és Class példa</title>
    <style>
      /* id: #header (egyedi) */

      /* class: .card (több elemre) */

      /* több class egy elemre (összeadódik) */
    </style>
  </head>
  <body>
    <header id="header">
      <h1>Oldal címe</h1>
    </header>

    <section>
      <div class="card">Kártya 1 — ugyanaz a class</div>
      <div class="card">Kártya 2 — ugyanaz a class</div>

      <!-- több class egy elemben -->
      <a href="#footer" class="btn primary large">Ugrás a lábléchez</a>
    </section>

    <footer id="footer" class="card">
      <p>Lábléc — itt is van id és class egyszerre</p>
    </footer>
  </body>
</html>
```

## A HTML5 szemantikus tagek

---

- `<header>...</header>:` Címsor/fejléc elem. Általában a szakasz címsorát (h1-h6 vagy hgroup) helyezik itt el.
- `<footer>...</footer>:` Az oldal vagy egy tartalmi egység lábléce
- `<nav>...</nav>:` Navigációs menü, itt kapnak helyet az oldal fontosabb navigációs (más helyekre mutató) elemei
- `<aside>...</aside>:` Érintőlegesen kapcsolódó tartalom (jellemzően oldalsáv)
- `<main>...</main>:` Fő tartalom
- `<section>...</section>:` Logikai egység, ez képviseli a tartalom egyes fejezeteit.
- `<article>...</article>:` A „cikk” elem, ahogy a nevéből is következik, egy önálló tartalommal rendelkező rész.

Az új szerkezeti elemek kivétel nélkül blokkszintű (block) elemek, a `<div>`-hez hasonlóan.

Ezek a tagek - az általános célú `<div>` és `<span>` tagekkel ellentétben - szemantikai jelentéssel bírnak, tehát egyértelműen meghatározzák a tartalmuk jelentését (pl. egy `<nav>`-ról tudjuk, hogy valamilyen navigációt valósít meg).

A HTML5-ben bevezetett szemantikus tageket felhasználva precízebben leírhatjuk egy weboldal szerkezetét.

![Szemantikus tag-ek](/img/szemantikus_tag.png)

## Listák

---

A HTML listák lehetőséget biztosítanak arra, hogy egymáshoz kapcsolódó információkat egy csoportba gyűjtve sorolhassunk fel. Két fontos listatípus:

- **`<ul>...</ul>:` Rendezetlen (számozatlan) lista**
  - akkor használjuk, ha a listaelemek között nincs megállapítható sorrend
  - a listaelemeket a` <li>...</li>` taggel adhatjuk meg
- **`<ol>...</ol>:` Rendezett (számozott) lista**
  - akkor használjuk, ha számít a listaelemek sorrendje
  - a listaelemeket a `<li>...</li>` taggel adhatjuk meg
  - **fontosabb attribútumok:**
    - reversed: fordított számozás
    - start: számozás kezdősorszáma
    - type: felsorolásjel típusa
      - lehetséges értékei: 1: arab szám, i: "kisbetűs" római szám, I: "nagybetűs" római szám, a: kisbetű, A: nagybetű
- **`<dl>...</dl>:` Meghatározás (definíciós, asszociációs) listák (dl)**
  - A definiálandó kifejezéseket a `<dt> és </dt>` címkék között (dt = definition term = meghatározandó kifejezés),
  - A meghatározások szövegét pedig a `<dd> és a </dd>` tagok között (dd = definition description = meghatározási leírás) adjuk meg

#### Példa: Rendezetlen, rendezett és definíciós lista

```html
<!-- Rendezetlen (számozatlan) lista -->
<ul>
  <li>Kenyér</li>
  <li>Tej</li>
  <li>Felvágott</li>
</ul>

<!-- Rendezett (számozott) lista -->
<ol>
  <li>Nyisd ki a szemed!</li>
  <li>Nyomd ki az ébresztőt!</li>
  <li>Aludj vissza!</li>
</ol>

<!-- Definíciós lista -->
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language – a weboldalak alapvető jelölőnyelve.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets – a megjelenés és formázás leírására szolgál.</dd>

  <dt>JavaScript</dt>
  <dd>A weboldalak interaktív működését biztosító programozási nyelv.</dd>
</dl>
```

A fenti listatípusokból készíthetünk **többszintű listát** is. Ennek a lényege, hogy egy listaelembe egy másik listát ágyazunk be.

#### Példa:

```html
<ol>
  <li>Első listaelem</li>
  <li>
    Második listaelem
    <ol type="a">
      <li>Első allista elem</li>
      <li>Második allista elem</li>
    </ol>
  </li>
  <li>Harmadik listaelem</li>
</ol>
```

## Táblázatok

---

A **táblázatok** segítségével mátrix-szerű, _kétdimenziós adathalmazt_ tudunk megjeleníteni.  
Egy táblázat feladata az **összetartozó adatok** egymáshoz való viszonyának **áttekinthető megjelenítése**.

A táblázat **sorokból**, **oszlopokból**, **fejlécekből** és (opcionálisan) egy **címrészből** áll.  
A sorok és oszlopok által alkotott **cellák** tartalmazzák a táblázat adatait — ezek lehetnek **szövegek, számok, képek, listák vagy akár újabb táblázatok is.**

:::info Régi gyakorlat
A weblapkészítés korai időszakában a táblázatokat gyakran az **oldalak elrendezésére** is használták.  
Például a táblázat első sora tartalmazta a fejlécet, a második sor két cellájában a menü és a tartalom kapott helyet.

Ez a módszer ma már **elavult**, mivel a modern **CSS layout technikák** (pl. _Flexbox_, _Grid_) sokkal rugalmasabbak.
:::

### 1. HTML szintaxis

Táblázatokat a `<table>` tag segítségével lehet létrehozni.  
Egy tábla **sorokat** (`<tr>`) tartalmaz, és minden sor **cellákból** (`<th>` vagy `<td>`) áll.

Ha szeretnénk egy táblázatnak címet adni, akkor ezt a `<caption>...</caption>` taggel tehetjük meg, amit mindig közvetlenül a `<table>` után kell írnunk.

```html
<!-- A <table> elem hozza létre a táblázatot -->
<table>
  <!-- A táblázat címét a <caption> jelöli -->
  <caption>
    Osztály névsora és életkora
  </caption>

  <!-- Egy táblázat sorát a <tr> (table row) jelöli -->
  <tr>
    <!-- A <th> (table header) a fejléc-cella, ami alapból félkövér és középre igazított -->
    <th>Név</th>
    <th>Kor</th>
  </tr>

  <!-- Egy újabb sor a táblázatban -->
  <tr>
    <!-- A <td> (table data) egy adatcellát jelöl -->
    <td>Kovács Anna</td>
    <td>23</td>
  </tr>
</table>
```

### 2. `<table>` címke

A táblázatot a `<table>` elemmel kezdjük. Ez az elem tartalmazza a teljes táblázatot.

Példa táblázat létrehozására:

```html
<table>
  <!-- táblázat tartalma ide kerül -->
</table>
```

### 3. `<tr>` címke

A táblázatsorokat a `<tr>` (table row) elemmel definiáljuk. Minden sor tartalmazza a táblázat egy sorát.

Példa táblázatsorok létrehozására:

```html
<table>
  <tr>
    <!-- első sor tartalma ide kerül -->
  </tr>
  <tr>
    <!-- második sor tartalma ide kerül -->
  </tr>
</table>
```

### 4. `<td>` címke

A táblázat adatait a `<td>` (table data) elemmel definiáljuk. Ezek tartalmazzák a tényleges adatokat, amelyek a táblázatban megjelennek.

Példa az adatok létrehozására:

```html
<table>
  <tr>
    <td>Cella 1</td>
    <td>Cella 2</td>
  </tr>
  <tr>
    <td>Cella 3</td>
    <td>Cella 4</td>
  </tr>
</table>
```

### 5. `<th>` címke

A táblázat fejléceit a `<th>` (table header) elemmel definiáljuk. Ezek általában félkövér vagy más formázásúak, és a táblázat oszlopainak címeit tartalmazzák.

Példa a fejlécek létrehozására:

```html
<table>
  <tr>
    <th>Fejléc: Oszlop 1</th>
    <th>Fejléc: Oszlop 2</th>
  </tr>
  <tr>
    <td>Adat 1</td>
    <td>Adat 2</td>
  </tr>
</table>
```

### 6. `<caption>` címke

A táblázathoz hozzáadhatunk egy címsort a `<caption>` elem segítségével, amely leírja a táblázat tartalmát vagy célját.

Példa címsor hozzáadására a táblázathoz:

```html
<table>
  <caption>
    Ez egy példa táblázat
  </caption>
  <tr>
    <th>Oszlop 1</th>
    <th>Oszlop 2</th>
  </tr>
  <tr>
    <td>Adat 1</td>
    <td>Adat 2</td>
  </tr>
</table>
```

### 7. Táblázat szegélyek

Alapértelmezetten a HTML-táblázatok szegély nélkül jelennek meg.
A cellák köré **border** attribútummal vagy CSS segítségével rajzolhatunk keretet.

```html
<table border="1">
  <tr>
    <td>1. sor, 1. cella</td>
    <td>1. sor, 2. cella</td>
  </tr>
  <tr>
    <td>2. sor, 1. cella</td>
    <td>2. sor, 2. cella</td>
  </tr>
</table>
```

![Táblázat](/img/tablazat.jpg)

### 8. Táblázat kialakításának általános szabályai

- a táblázat minden oszlopában azonos számú cellának kell lennie
- egy adott oszlopban a cellák szélessége mindig azonos
- az azonos számú és szélességű celláktól csak sor- és oszlopátfogással ( azaz cellák egyesítésével ) lehet eltérni
- ha a táblázat üres cellákat is tartalmaz, akkor azt is be kell kódolni úgy, hogy a `<th></th>` vagy `<td></td>` tagokat üres tartalommal definiáljuk (egyébként felborul a táblázat szerkezete)

### 9. Táblázatok formázása

A táblázatok formázásához elsősorban a CSS-t ajánlott, de bizonyos, a HTML5 által nem támogatott attribútumok segítségével néhány alaptulajdonságot foglaltunk össze az alábbi táblázatban.

<div style={{overflowX: "auto"}}>

| attribútum      | lehetséges értékei                  | funkció, jelentés                                                                                                            | táblázat | sor | adatcella |
| --------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | :------: | :-: | :-------: |
| **width**       | szám (pixelérték) vagy %            | az elem szélessége képpontban megadva vagy az aktuális ablakmérethez / táblázat teljes szélességéhez viszonyítva (arányában) |    X     |     |     X     |
| **height**      | szám (pixelérték) vagy %            | az adatcella magassága képpontban megadva vagy a táblázat teljes magasságához viszonyítva (arányában)                        |          |     |     X     |
| **align**       | left, center, right / justify, char | a táblázat vízszintes igazítása az aktuális ablakszélességhez viszonyítva / a cellaszélességhez viszonyítva                  |    X     |  X  |     X     |
| **valign**      | top, middle, bottom, baseline       | a sor celláiban / egy adott cellában lévő tartalom függőleges igazítása                                                      |          |  X  |     X     |
| **bgcolor**     | színkód / színnév                   | a teljes táblázat / a sor / egy adott cella háttérszíne                                                                      |    X     |  X  |     X     |
| **nowrap**      | nowrap                              | a cella tartalma nem tördelhető                                                                                              |          |     |     X     |
| **border**      | szám (pixelérték)                   | a táblázat szegélyének vastagsága képpontban                                                                                 |    X     |     |           |
| **cellpadding** | szám (pixelérték)                   | cella belső margójának (cellabelső) értéke képpontban                                                                        |    X     |     |           |
| **cellspacing** | szám (pixelérték)                   | cellák közötti távolság (cellaköz) értéke képpontban                                                                         |    X     |     |           |

</div>

---

#### Régi attribútumok modern CSS megfelelői

| Régi attribútum                            | Modern CSS megfelelő                                            |
| ------------------------------------------ | --------------------------------------------------------------- |
| `<table border="1">`                       | `table { border: 1px solid black; border-collapse: collapse; }` |
| `<td bgcolor="yellow">`                    | `td { background-color: yellow; }`                              |
| `<td align="center">`                      | `td { text-align: center; }`                                    |
| `<td valign="top">`                        | `td { vertical-align: top; }`                                   |
| `<table width="80%">`                      | `table { width: 80%; }`                                         |
| `<table cellpadding="10" cellspacing="5">` | `td { padding: 10px; } table { border-spacing: 5px; }`          |

:::info Összegzés
A táblázatok formázásához ma már kizárólag **CSS-t** használunk.  
A fenti attribútumok továbbra is felismerhetők a böngészőkben, de a **HTML5 szabvány szerint elavultak**,  
és **nem javasolt a használatuk új weboldalakon**.
:::

### 10. Cellák átfogása (cellaösszevonás)

Egy-egy cella több oszlopot vagy több sort is átfoghat: a `<th>` és a `<td>` tagok nyitó címkéjében alkalmazhatjuk a **colspan (colspan = column spanning = oszlop átfogás)**, illetve a **rowspan (rowspan = row spanning = sor átfogás)** jellemzőket. Ezen jellemzőknek értékül az a számot kell adnunk, ahány oszlopot, illetve ahány sort szeretnénk összevonni (egyesíteni).

#### Példa oszlopok összevonásra

Oszlopok összevonása esetén az **egymás melletti cellákat** vonjuk össze.

```html
<table border="1" style="border-collapse: collapse">
  <caption>
    Oszlopok összevonása
  </caption>

  <!-- A fejléc első sora, ahol a "Évek" cella három oszlopon terjed ki -->
  <tr>
    <th colspan="3">Évek</th>
  </tr>

  <!-- A második fejlécsor: külön oszlopok az évekhez -->
  <tr>
    <th>2000.</th>
    <th>2010.</th>
    <th>2017.</th>
  </tr>

  <!-- Táblázat adatsorai -->
  <tr>
    <td>12</td>
    <td>24</td>
    <td>48</td>
  </tr>
  <tr>
    <td>15</td>
    <td>28</td>
    <td>40</td>
  </tr>
</table>
```

![Oszlop osszevonás](/img/colspan.jpg)

#### Példa sorok összevonására

Sorok összevonása esetén az **egymás alatti cellákat** vonjuk össze

```html
<table border="1" style="border-collapse: collapse">
  <caption>
    Sorok összevonása
  </caption>

  <tr>
    <td rowspan="5">Osztályok</td>
    <td>9.a</td>
    <td>25 fő</td>
  </tr>
  <tr>
    <td>9.b</td>
    <td>32 fő</td>
  </tr>
  <tr>
    <td>9.c</td>
    <td>28 fő</td>
  </tr>
  <tr>
    <td>10.a</td>
    <td>18 fő</td>
  </tr>
  <tr>
    <td>10.c</td>
    <td>30 fő</td>
  </tr>
</table>
```

![Sorok osszevonása](/img/rowspan.jpg)

### 11. Nagyméretű táblázatok szerkezeti egységei

Nagyméretű táblázatoknál a szerkezet áttekinthetőségét segítik elő a `<thead>`, `<tbody>` és `<tfoot>` HTML-címkék.
Ezek logikai egységekre bontják a táblázatot: a fejlécre, a törzsre és a láblécre.

| Címke     | Jelentése | Leírás                                                     |
| --------- | --------- | ---------------------------------------------------------- |
| `<thead>` | Fejléc    | Az oszlopok címét tartalmazza, általában `<th>` elemekkel. |
| `<tbody>` | Törzs     | A tényleges adatokat tartalmazó sorok kerülnek ide.        |
| `<tfoot>` | Lábléc    | A táblázat összegző, záró adatai (pl. „Összesen” sor).     |

#### Példa: a thead, tbody, tfoot használata

```html
<table border="1" style="border-collapse: collapse; text-align: center;">
  <caption>
    Osztálylétszámok évfolyamonként
  </caption>

  <thead>
    <tr>
      <th>Évfolyam</th>
      <th>Osztály</th>
      <th>Létszám</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>9.</td>
      <td>9.a</td>
      <td>25 fő</td>
    </tr>
    <tr>
      <td>9.</td>
      <td>9.b</td>
      <td>32 fő</td>
    </tr>
    <tr>
      <td>10.</td>
      <td>10.a</td>
      <td>18 fő</td>
    </tr>
    <tr>
      <td>10.</td>
      <td>10.c</td>
      <td>30 fő</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td colspan="2" style="text-align: right;"><strong>Összesen:</strong></td>
      <td><strong>105 fő</strong></td>
    </tr>
  </tfoot>
</table>
```

![Cellaátfogás](/img/cellaatfogas.jpg)

### 12. Oszlopcsoportok formázása: `<col>` és `<colgroup>`

Ha szeretnénk a táblázat oszlopait csoportosítani (pl. formázás céljából), akkor ezt a `<colgroup>...</colgroup>` taggel tehetjük meg. Ezt közvetlenül a `<caption>` után (ha van caption) és a `<thead>` elé (ha van thead) írjuk. Az oszlopcsoportosításon belül a `<col/>` páratlan tag jelöl egy oszlopot. Ha egyszerre több, mondjuk N darab oszlopot szeretnénk kijelölni a csoportosításban, akkor ezt a `<col span="N"/>` segítségével tudjuk megtenni.

:::info
Egyszerűen fogalmazva:

- `<colgroup>`: egy oszlopcsoportot jelöl (tehát több oszlopot foghat össze).
- `<col>`: egy konkrét oszlopot jelöl a táblázatban.

Ezek nem látszanak magukban, de stílust lehet hozzájuk rendelni (pl. háttérszín, szélesség stb.)
:::

:::caution
**Fontos elhelyezési szabály**: A `<colgroup>` és `<col>` tagek a `<caption>` után, de az első `<tr>` elé kerülnek.
:::

#### Példa az oszlopformázásra

```html
<table>
  <caption>
    Kínálatunk
  </caption>
  <colgroup>
    <!-- az első oszlop világospiros háttérszínű lesz -->
    <col style="background-color: salmon;" />
    <!-- a következő 2 oszlop világoszöld háttérszínt kap -->
    <col style="background-color: lightgreen;" span="2" />
  </colgroup>
  <thead>
    <tr>
      <th id="nev">Hamburger neve</th>
      <th id="ar">Ár</th>
      <th id="extra">Rendelés esetén jár még</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td headers="nev">Sajtos</td>
      <td headers="ar">1800 Ft</td>
      <td headers="extra" rowspan="2">Ajándék szósz és üdítő</td>
    </tr>
    <tr>
      <td headers="nev">Franciasalátás</td>
      <td headers="ar">2000 Ft</td>
    </tr>
    <tr>
      <td headers="nev">Hawaii</td>
      <td headers="ar extra" colspan="2">NEM RENDELHETŐ!</td>
    </tr>
  </tbody>
  <!-- itt még lehetne akár egy <tfoot> is, viszont ez opcionális... -->
</table>
```

![Oszlopformázás](/img/oszlopformazas.jpg)
