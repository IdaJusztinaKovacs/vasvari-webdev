---
sidebar_position: 2
title: 2. HTML alapok II
---

# 2. HTML alapok II.

## A head (fejrész) fontosabb tagjei

---

A dokumentum egészére vonatkozó információkat tartalmazza

### 1. Kötelező meta-adatok

    - `<meta charset="utf-8">` ( vagy iso-8859-2 ) karakterkészlet
    - `<title>` ( weblap címe )
    - `<link>` ( a stíluslap csatolása - ha van külső stíluslap )
    - `<style>` ( ha van belső stílus definíció )

### 2. Nem kötelező, de minden esetben javasolt meta-adatok

A weblap kulcsszavai (kereséshez): `<meta name="keywords" content="....">`

Pár szavas összegzés: `<meta name="description" content="....">`

#### Példa:

```html
<meta name="keywords" content="HTML5, CSS3, webszerkesztés" />
<meta name="description" content="Szabványkövető weblap készítése" />
```

### 3. További `<meta>` címkék

A `<meta>` címke jellemzőivel a weblapra vonatkozó számos további információ adható meg:

- ki készítette a weblapot ( author )
- milyen szoftverrel készült ( generator )
- a készítő program azonosítója ( progid )
- mikor volt utoljára frissítve ( revised )
- szerzői jogok (copyright)
- a terjesztés köre ( teljes web/csak intranet ) ( distribution )
- a weboldal lejárati ideje ( expires )
- a webhely tulajdonosa ( owner ) stb.

#### Példa:

```html
<meta name="author" content="nagy programozó" />
<meta name="distribution" content="web" />
<meta name="copyright" content="2024©nagyprogramozó" />
<meta http-equiv="expires" content="24 Dec 2023 14:00:00 GMT" />
```

### 4. `<title>` címke

A fejlécelemek között a legfontosabb a dokumentumcím

```html
<title>Ide írjuk be a címet</title>.
```

- Ezt a böngészőprogramok általában az ablak címsorában vagy fülén jelenítik meg.
- Nagyon fontos része a weboldalnak (mindig célszerű megadnunk)
- Csak betűket, számokat vagy különleges karaktereket tartalmazhat, de más címkéket nem!

### 5. `<link>` címke

#### Példa: Külső CSS-stíluslapok kapcsolása, csatolása

```html
<link rel="stylesheet" type="text/css" href="style.css" />
```

A `<link>` tagnak nincs záró párja.

### 6. `<script>` címke

#### Példa: JS-scriptfájl csatolása:

```html
<script type=”text/javascript” src=”kulsofajl.js”></script>
```

Egy HTML-oldalhoz akár több CSS-fájl is kapcsolható.

### 7. `<style>` címke

A `<style>` taggal az adott oldalon érvényes stílusokat definiálhatunk
(Belső vagy beágyazott CSS-stílusok megadása).

#### Példa:

```html
<style>
  /* Belső stílusok megadása */
  p {
    color: blue;
    font-size: 16px;
  }
</style>
```

### 8. Összefoglaló

`<title>...</title>`: a böngészőfülön megjelenő cím (ezt mindig adjuk meg!)

`<meta charset="UTF-8"/>`: UTF-8 karakterkódolás beállítása (ezt mindig adjuk meg!)

`<meta name="author" content="Gipsz Jakab"/>`: a weboldal szerzője

`<meta name="description" content="Jakab blogoldala"/>`: a weboldal leírása

`<meta name="keywords" content="webtervezés,webterv,HTML,CSS,PHP"/>`: keresési kulcsszavak megadása

`<link rel="stylesheet" href="valami.css"/>`: külső CSS fájl beágyazása

`<link rel="icon" href="valami.png"/>`: böngészőfülön megjelenő ikon

`<style>...</style>`: CSS formázás beszúrása

`<script>...</script>`: JavaScript beszúrása

## A `<body>` (törzsrész) fontosabb jellemzői

---

A törzs (dokumentumtörzs) a `<body>` és `</body>` elemek között helyezkedik el.  
Ez tartalmazza a weblap **látható tartalmát**.

### 1. Jellemzői

- A böngésző megjeleníti → ez a weboldal „látható része”.
- A CSS-stílussal történő formázás is alapvetően erre vonatkozik.
- Ebben kell elhelyezni **mindent**, ami a tartalom:
  - szövegek
  - hivatkozások (linkek)
  - képek
  - táblázatok
  - listák
  - űrlapok stb.
- A sorváltásra NEM kell figyelni: az egymás után álló több szóköz vagy Enter is **csak egynek számít**.
- A sor- és bekezdésváltást külön HTML-utasítással kell kérni:
  - sortörés: `<br>`
  - új bekezdés: `<p> ... </p>`

#### Példa:

```html
<body>
  <h1>Címsor a törzsben</h1>
  <p>Ez egy bekezdés.</p>
  Ez a szöveg ugyanabban a bekezdésben van.<br />
  Ez viszont már új sorban jelenik meg.
</body>
```

### 2. A `<body>` rész alapvető szöveges tag-jei

| Tag            | Jelentés / használat                 |
| -------------- | ------------------------------------ |
| `<p>...</p>`   | Bekezdés                             |
| `<h1>...</h1>` | 1. szintű címsor (legfontosabb)      |
| `<h2>...</h2>` | 2. szintű címsor                     |
| `<h3>...</h3>` | 3. szintű címsor                     |
| `<h4>...</h4>` | 4. szintű címsor                     |
| `<h5>...</h5>` | 5. szintű címsor                     |
| `<h6>...</h6>` | 6. szintű címsor (legkevésbé fontos) |

#### Példa: Címsorokat és egy bekezdést tartalmazó HTML kód

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <title>Bekezdések, címsorok</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <h1>1. szintű címsor</h1>
    <h2>2. szintű címsor</h2>
    <h3>3. szintű címsor</h3>
    <h4>4. szintű címsor</h4>
    <h5>5. szintű címsor</h5>
    <h6>6. szintű címsor</h6>
    <p>Ez egy bekezdés...</p>
  </body>
</html>
```

A fenti kódot tartalmazó HTML fájlt böngészőben megnyitva a következő kimenetet kapjuk:

![Bekezdés és címsorok](/img/cimsor.jpg)

### 3. `<img/>` páratlan címke

Ha egy weboldalra egy képet szeretnénk beszúrni, akkor ezt az `<img/>` páratlan taggel tudjuk megtenni. A tag fontosabb attribútumai:

- **src:** a kép elérési útvonala
- **alt:** helyettesítő szöveg, ha a kép betöltése sikertelen
- **title:** a kép címe, ami akkor jelenik meg, ha a kurzor a kép fölött áll
- **width:** a kép szélessége (pixelben)
- **height:** a kép magassága (pixelben).

Ha a width és height attribútumok közül csak az egyiket adjuk meg, akkor a másik a kép eredeti méretarányaiból számolódik. Tehát például, ha egy 400x300-as (400 pixel széles, 300 pixel magas) kép szélességét 800 pixelre állítjuk (megduplázzuk), akkor a magassága automatikusan 600 pixel lesz.

#### Példa: A HTML fájllal egy mappában van egy img mappa, amiben található egy medve.jpg kép. Szúrjuk be a képet a weboldalunkra úgy, hogy a szélessége 400 pixel legyen!

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <title>Kép beszúrása</title>
    <meta charset="UTF-8" />
  </head>
  <body>
    <img src="img/medve.jpg" alt="Medve" title="Ez egy Maci" width="400" />
  </body>
</html>
```

<img src="/vasvari-webdev/img/medve.jpg" alt="Medve" class="medve-img" />

### 4. `<a>` címke

Az `<a>` tag egy **hiperhivatkozást** definiál, amelyet egyik oldalról a másikra való hivatkozásra használunk.  
Legfontosabb attribútuma a **href**, amely a hivatkozás címét (URL vagy fájl) adja meg.

#### Alap szintaxis

```html
<a href="https://www.wikipedia.org">Wikipédia</a>
```

Alapértelmezés szerint a hivatkozások minden böngészőben így jelennek meg:

- A még nem látogatott link kék és aláhúzott

- A már meglátogatott link lila és aláhúzott

- Az éppen aktív (kattintás alatt lévő) link piros és aláhúzott

#### Példa:

```html
<p>
  Látogasd meg a
  <a href="https://www.wikipedia.org" target="_blank" title="Online tudástár"
    >Wikipédiát</a
  >!
</p>
```

:::important

#### Linkek típusai

- Lehet egy másik weboldal: `<a href="https://www.google.com">Google</a> `
- Lehet lapon belüli hivatkozás: `<a href="#top">Vissza a tetejére</a> `

  (ez az id="top" attribútummal rendelkező elemre mutat)

- Lehet egy másik file: `<a href="bevasarlolista.txt">Bevásárlólista</a>`
  :::

#### Fontos attribútomok

- **href** → kötelező, a link célját adja meg
- **target** → opcionális, a megnyitás módját szabályozza
- **title** → opcionális, kiegészítő információ: ha fölé viszed az egeret, „buborékban” megjelenik a szöveg.

:::note

#### A target attribútum lehetséges értékei

- **\_self:** ugyanott, ahol rákattintottunk (alapértelmezett)

- **\_blank:** új lapon vagy ablakban

- **\_top:** ablak tetején

- **\_parent:** szülő dokumentumban
  :::

## További tartalmi és formázó elemek

---

### 1. Sortörés és elválasztás

```html
<p>Ez egy sor.<br />Ez már új sorban jelenik meg.</p>
<hr />
<p>Ez pedig a vízszintes vonal alatt van.</p>
```

### 2. Előre formázott szöveg

`<pre>...</pre>` – alakhű megjelenítés, megőrzi a szóközöket, sortöréseket

```html
<pre>
  Ez egy   előre
      formázott   szöveg.
</pre>
```

### 3. Kiemelések

#### 3.1 Szemantikus kiemelések

Ezeket a böngészők és a képernyőolvasók is „értelmezik”:

`<em>` – hangsúly (ált. dőlt betű)

`<strong>` – erős kiemelés (ált. félkövér betű)

`<mark>` – szövegkiemelés

```html
<p>Ez egy <em>hangsúlyos</em> szó.</p>
<p>Ez egy <strong>nagyon fontos</strong> szó.</p>
<p>Ez egy <mark>kiemelt</mark> szó.</p>
```

**Megjelenés a böngészőben:**

![Kiemeles](/img/kiemelt.jpg)

#### 3.2 Nem szemantikus (régi, kinézethez kötött) kiemelések

Ezek ma is működnek, de nem ajánlott használni őket, mert csak formázást adnak, jelentést nem:

`<i>` → dőlt szöveg

`<b>` → félkövér szöveg

`<u>` → aláhúzott szöveg

### 4. Indexek

`<sub>` – alsó index

`<sup>` – felső index

```html
<p>Víz képlete: H<sub>2</sub>O</p>
<p>Másodfokú kitevő: x<sup>2</sup></p>
```

**Megjelenés a böngészőben:**

![Indexek](/img/indexek.jpg)

### 5. Idézetek

`<q>` – rövid idézet (idézőjelet automatikusan tesz)

`<blockquote> `– idézetblokk (hosszabb idézetekhez)

```html
<p>Albert Einstein szerint: <q>Isten nem kockajátékos.</q></p>

<blockquote>
  Ez egy hosszabb idézet, amelyet a böngészők külön blokként, behúzással
  jelenítenek meg.
</blockquote>
```

**Megjelenés a böngészőben:**

![Idézetek](/img/idezetek.JPG)

### 6. Kód és előformázás

`<code>` – rövid kódrészlet

`<pre><code>...</code></pre>` – több soros kódblokk

```html
<p>A HTML-ben a <code>&lt;p&gt;</code> tag a bekezdést jelöli.</p>

<pre><code>
for (let i = 0; i < 5; i++) {
  console.log(i);
}
</code></pre>
```

**Megjelenés a böngészőben:**

![Kod](/img/kod.jpg)

### 7. Iframe (lebegő keret)

Az `<iframe>` tag segítségével másik weboldalt ágyazhatunk a weblapba.

Fontos attribútumai:

**src** – a beágyazott oldal URL-je

**width** – keret szélessége (pixelben)

**height** – keret magassága (pixelben)

```html
<iframe src="https://www.wikipedia.org" width="500" height="300"></iframe>
```
