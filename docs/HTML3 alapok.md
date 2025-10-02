# 3. HTML alapok III

## Karakterentitások

A karakterentitás három részből áll:

az elején & jel, a végén ; jel

- és a kettő között pedig egy meghatározott kódsorozat van:
- & kódsorozat;

A legtöbbet alkalmazott karakterentitás:

- a nem törhető szóköz, azaz az `&nbsp;`

![Karakterentások](/img/Karakterentitas.png)

## Szakaszok

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
