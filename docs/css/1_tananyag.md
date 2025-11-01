---
id: 1_tananyag
sidebar_position: 1
sidebar_label: "1. tananyag"
title: "1. CSS alapok"
---

## Mi a CSS, mire való?
---

A CSS (**Cascading Style Sheets**, magyarul: **lépcsőzetes / rangsorolt stíluslapok**) a számítástechnikában egy stílusleíró nyelv, amely a HTML vagy XHTML típusú strukturált dokumentumok megjelenését írja le. Ezenkívül használható bármilyen XML alapú dokumentum stílusának leírására
is (pl. SVG, XUL). 

A CSS (és a HTML) specifikációját a World Wide Web Consortium felügyeli.
Stíluslappal határozhatjuk meg egy weboldalon az oldal vagy a szöveg színét, a betűk típusát, stílusát, az elrendezéseket, a táblázatok és minden elem megjelenését.

## A CSS csatolásának módjai
---

Egy HTML kódba többféleképpen is beágyazhatunk CSS formázásokat.

### 1. Inline CSS

**Inline CSS** esetén a tagek `style` attribútumának értékeként adjuk meg a CSS formázást. Ekkor a formázás mindig csak az adott objektumra lesz érvényes. Ebben az esetben nem használunk CSS szelektort, hiszen mindig az aktuális objektumot formázzuk.

**Példa:**

```html

<p style="color: blue;">Lorem ipsum...</p>

```
:::warning
Az inline CSS nem hatékony, valamint a kód átláthatóságát is rontja. Emiatt, ha csak lehet, kerüljük a használatát!
:::

### 2. Internal CSS

A **lapon belüli (internal) CSS**-t a `<head>`-ben adjuk meg, `<style>` és `</style>` között. Az így kiadott formázások az aktuális HTML dokumentumra lesznek érvényesek.

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <title>CSS alapok</title>
    <meta charset="UTF-8"/>
    <style>
      /* az itt kiadott CSS utasítások az aktuális HTML fájlra vonatkoznak */
      p { color: blue; }
    </style>
  </head>
  <body>
    <p>Ezt a bekezdést a belső CSS kék színűre formázza.</p>
    <p>Itt látható egy második bekezdés, ugyanolyan stílussal.</p>
  </body>
</html>
```
**Eredmény:** mindkét bekezdés kék színnel jelenik meg.

### 3. External CSS

A **külső (external) CSS** lényege, hogy a CSS formázásokat **egy külső (.css kiterjesztésű) fájlba írjuk**. Ezt a fájlt a HTML állományunk `<head>` részében, a `<link/>` páratlan tag segítségével csatoljuk. Az így beágyazott CSS minden olyan HTML oldalra érvényes lesz, amely hivatkozik erre a fájlra – így a stílus **egységes** és **könnyen karbantartható** marad.

```html
<!DOCTYPE html>
<html lang="hu">
  <head>
    <title>CSS alapok</title>
    <meta charset="UTF-8"/>
    <!-- a main.css nevű külső CSS fájl beágyazása -->
    <link rel="stylesheet" href="main.css"/>
  </head>
  <body>
    <!-- a weboldal tartalma... -->
  </body>
</html>
```
A külső (external) CSS különösen hasznos akkor, amikor egy weboldal több lapjának szeretnénk ugyanazt a formázást adni.
A href attribútumban megadott **elérési útvonal** (például main.css, css/style.css vagy akár https://.../style.css) határozza meg, honnan töltődik be a stíluslap:

- Ha a CSS fájl **ugyanabban a mappában** van, elég csak a fájlnév (`main.css`).

- Ha **alárendelt mappában** van, útvonalat kell megadni (`css/main.css`).

- Ha **külső forrásból** (például CDN-ről) érkezik, teljes URL-t kell írni (`https://cdn.../bootstrap.css`).

## Szintaxis
---

A CSS kód megjelenése attól függ, hogyan csatoljuk a HTML-dokumentumhoz. Általánosságban azonban (ha **nem inline módszert** használunk) először jön az szelektor neve, amit formázni szeretnénk, majd azután jön az, ahogyan szeretnénk formázni.

![selector](/img/selector.jpg)

- A **kapcsos zárójelek** között, **pontosvesszővel elválasztva** adjuk meg a formázásokat `tulajdonság: érték` formában.
**Minden utasítást pontosvessző (;) zár le.**

- Egy CSS szabályt **declaration blocknak** vagy **deklarációs blokknak** nevezünk — ez határozza meg, hogyan nézzen ki az elem a weboldalon.

- A **szelektor** (vagy **kijelölő**, *selector*) adja meg, mely HTML elemekre vonatkozik a formázás.

- A **tulajdonság** (*property*, pl. color, font-size) határozza meg, mit szeretnénk módosítani.

- Az **érték** (*value*, pl. red, 16px) adja meg a tulajdonság konkrét beállítását.

A CSS kódba írhatunk kommenteket (megjegyzéseket) is az alábbi szintaxissal:

```css
/* Ez egy komment a CSS kódban */
```

## Alapvető szelektorok
---

A szelektor határozza meg, mely HTML elemekre alkalmazzuk a formázást.

### 1. Elem (típus) szelektor
A legegyszerűbb kiválasztási lehetőség. Egy HTML elemet határozhatunk meg vele, amihez hozzá szeretnénk rendelni a különböző tulajdonságokat

**Példa:**
```css
    p { color: #ffcdee; } 
``` 
Ebben az esetben az összes `<p>` (bekezdés) elem szövege rózsaszín (#ffcdee) lesz.

### 2. Osztály szelektor

Egy vagy több elemre adható azonos stílus.
A CSS-ben `.` (pont) jellel hivatkozunk rá, a HTML-ben a `class` attribútummal.

```html
<p class="kiemelt">Ez egy kiemelt bekezdés.</p>
```

```css
.kiemelt {
  color: red;
  font-weight: bold;
}
```
Ebben az esetben minden olyan elem, amelynek `class="kiemelt"` van beállítva, piros szöveggel és félkövér betűstílussal fog megjelenni.

### 3. Azonosító (ID) szelektor

Egyedi elemre alkalmazható. A CSS-ben `#` (hashtag) jellel hivatkozunk rá, a HTML-ben az `id` attribútummal.

```html
<p id="kulonleges">Ez egy különleges bekezdés.</p>
```

```css
#kulonleges {
  color: green;
  font-style: italic;
}
```

Ebben az esetben a `#kulonleges` azonosítóval rendelkező bekezdés szövege zöld színű és dőlt betűstílusú lesz.

### 4. Univerzális szelektor

A univerzális szelektor `*` minden HTML elemre érvényes stílust alkalmaz.
Akkor használjuk, ha az egész oldalra egységes alapformázást szeretnénk megadni.

```css
* {
  margin: 0;
  padding: 0;
}
```
Ez a példa a dokumentum összes elemére alkalmaz egy stílust, amely nullára állítja a margókat és a paddingeket.

### 5. Csoportosítás

A csoportosító szelektor segítségével több elemet is ugyanazzal a formázással láthatunk el.
A szelektorokat vesszővel választjuk el egymástól.

```css
h1, h2, h3 {
  color: navy;
}
```

Ebben az esetben az összes `<h1>`, `<h2>` és `<h3>` címsor szövege sötétkék (navy) lesz.

## Összetett szelektorok
---

Az összetett szelektorok segítségével pontosabban meghatározhatjuk, hogy a formázás mely elemekre vonatkozzon.
Ilyenkor több szelektort kombinálunk, vagy leszármazott viszonyt jelzünk közöttük.

### 1. Leszármazott (descendant) szelektor

A szóközzel elválasztott szelektorok egymásba ágyazott elemeket jelölnek.
Az első elem az **ős**, a második pedig a **leszármazott**, amelyre a formázás ténylegesen vonatkozik.

**Szintaxis:**

```css
szulo gyerek {
  /* formázások */
}
```
**Példa:**

```css
div span {
  color: blue;
}
```

Ebben az esetben minden olyan `<span>` elem kékre színeződik, amely bármilyen mélységben egy `<div>` elemben található.

:::important FONTOS
Csak az utolsó szelektor (span) kerül ténylegesen formázásra.
:::

### 2. Pontosabb kijelölés osztállyal vagy azonosítóval

Az összetett szelektorokat kombinálhatjuk osztállyal vagy azonosítóval is, hogy pontosabban célozzuk meg az elemeket.

**Példa:**

```css
#eleje p {
  color: green;
}
```
Az `#eleje` azonosítójú elem összes `<p>` bekezdésének szövege zöld lesz.

```css
.bev img {
  border: 2px solid red;
}
```

A `.bev` osztályú elem összes képe piros szegélyt kap.

## Értékek és mértékegységek
---

A CSS nyelvben a tulajdonságok értékei gyakran **számokkal és mértékegységekkel** vannak meghatározva.
Mielőtt megismernénk a konkrét formázási szabályokat, célszerű áttekinteni a **leggyakrabban alkalmazott mértékegységeket**, amelyek a méretek, színek, szögek és egyéb arányok beállításánál használatosak.

### 1. Hosszúság megadása
- abszolút hosszúság: mm (milliméter), cm (centiméter), in (inch = hüvelyk), pt (pont), px (pixel), pc (pica)
- relatív hosszúság: *%* (más értékekből számolódik), *em* (betűmérethez viszonyít), *rem* (gyökérelem betűméretéhez viszonyít), *vw* (ablakszélesség 1%-ához viszonyít), *vh* (ablakmagasság 1%-ához viszonyít)

#### Relatív hosszúság: `em` - az aktuális elem betűméretéhez viszonyít

- Az `em` értéke az elem saját (vagy örökölt) font-size beállításától függ.
- **1em = az aktuális betűméret.**
- Ha az elem `font-size` a 16px, akkor `1em = 16px`.

**Példa:**
```css
p {
  font-size: 16px;
  margin-bottom: 2em; /* 2 × 16px = 32px */
}
```
A bekezdés alja 32 pixel távolságra lesz a következő elemtől.

:::warning FIGYELEM: az `em` összegződik
Ha egymásba ágyazott elemeknek külön `font-size` van megadva, az `em` az aktuális szinthez viszonyít.

**Példa:**
```css
div {
  font-size: 20px;
}

p {
  font-size: 0.8em; /* 0.8 × 20px = 16px */
}

span {
  font-size: 0.8em; /* 0.8 × 16px = 12.8px (nem 16px × 0.8!) */
}
```
A span végül kisebb lesz, mert a 0.8-as értéket már a 16px-es bekezdésmérethez viszonyítja, nem az eredeti 20px-hez.
:::

#### Relatív hosszúság: `rem` - a gyökérelem (html) betűméretéhez viszonyít

- A `rem` értéke mindig a `<html>` elem `font-size`-ából számolódik.
- Nem öröklődik minden szinten újra, tehát állandó viszonyítási pont marad.

**Példa:**
```css
html {
  font-size: 16px;
}

p {
  font-size: 1rem; /* mindig 16px */
  margin-bottom: 2rem; /* mindig 32px */
}
```

### 2. Szögek megadása
- *deg* (fok), *rad* (radián), *grad* (gradián)

### 3. Színek megadása
- angol névvel - pl. blue
- decimális RGB-kóddal - pl. rgb(0, 0, 255)
- százalékos RGB-kóddal - pl. rgb(0%, 0%, 100%)
- hexadecimális RGB-kóddal - pl. #0000FF

## CSS rangsor
---

Amikor egy HTML elemre több CSS szabály is vonatkozik, a böngészőnek el kell döntenie, melyik érvényesüljön. 

Ezt a döntést az úgynevezett **CSS rangsor (specifitás)** alapján hozza meg.

### A stílusok érvényesülésének sorrendje

1. **Böngésző alapértelmezett stílusai**
(pl. a bekezdés alapértelmezett margója, a linkek kék színe)

2. **Külső CSS fájlokból származó szabályok**

3. **Belső (internal) CSS** – `<style>` blokk a HTML-ben

4. **Inline CSS** – közvetlenül az elemre írva (style="...")

5. **!important** kulcsszóval megjelölt szabályok

:::tip Általános szabály
Mindig a formázandó HTML-kódhoz **legközelebbi CSS-stíluslap** hajtja végre a formázást.
:::

:::warning FIGYELEM
A `!important` kulcsszóval **bármelyik CSS-szabály felülírható**, még az inline stílusok is.  
Ezt a kulcsszót **csak kivételes esetben** használd, mert megnehezíti a stíluslap karbantartását és hibakeresését.
:::
