---
id: 4_tananyag
sidebar_position: 4
sidebar_label: "4. tananyag"
title: "4. Bootstrap 5 rácsrendszere"
---

## Bootstrap rácsok (Grid System)
---

A Bootstrap egyik legfontosabb eleme a 12 oszlopos rácsrendszer.  
Ezt használjuk arra, hogy a weboldal tartalmát különböző méretű kijelzőkön eltérő módon rendezzük el.

![Rácsrendszer](/img/BootstrapGrid.png)

A rácsrendszer **három alapegységből** épül fel:

1. **Konténer** (`container`, `container-fluid`, stb.)
2. **Sor** (`row`)
3. **Oszlopok** (`col`, `col-*`)

A rács mindig egy soron belül működik, és egy sor **összesen 12 egységet** tartalmaz.  
Bármilyen oszlopkombináció használható, amíg a 12-t nem haladja meg.

### 1. Konténer (container)

A rácsrendszer alapja a konténer, amely meghatározza:

- a tartalom maximális szélességét,
- a töréspontokat,
- a rácselemek viselkedését.

Példa:

```html
<div class="container">
  <div class="row">
    <div class="col">Oszlop 1</div>
    <div class="col">Oszlop 2</div>
  </div>
</div>
```

### 2. Sor (row)

A `row` egy vízszintes sáv, amely a rácsrendszerben az oszlopok (col) számára keretet biztosít.  
A Bootstrappben a sorok gondoskodnak arról, hogy az oszlopok megfelelően igazodjanak egymás mellé, illetve hogy a rács hézagai (gutter) automatikusan működjenek.

- A sor **flexbox konténerként** működik.
- Az oszlopok mindig egy `row`-n belül helyezkednek el.
- Egy sor összesen **12 egységnyi szélességet** tartalmaz.

#### Példa:

```html
<div class="row">
  <div class="col">Bal</div>
  <div class="col">Jobb</div>
</div>
```

### 3. Oszlopok (col)

Az oszlopok adják a rács rendszer alapját.
Alapértelmezett viselkedés: minden oszlop egyenlően osztozik a rendelkezésre álló 12 egységen.

```html
<div class="row">
  <div class="col">1</div>
  <div class="col">2</div>
  <div class="col">3</div>
</div>
```
A fenti példában 3 egyenlő szélességű oszlop jön létre.

### 4. Oszlopok méretezése

Az oszlopok méretét számmal is megadhatjuk:

- col-1: 1 egység

- col-6: 6 egység

- col-12: teljes sor

Példa:

```html
<div class="row">
  <div class="col-4">Bal</div>
  <div class="col-8">Jobb</div>
</div>
```

### 5. Töréspontok használata

Reszponzív viselkedéshez töréspontokat is rendelhetünk az oszlopokhoz.

| Töréspont | Jelölés | Aktiválódik |
|----------|---------|-------------|
| Small | col-sm-* | ≥576 px |
| Medium | col-md-* | ≥768 px |
| Large | col-lg-* | ≥992 px |
| Extra Large | col-xl-* | ≥1200 px |
| Extra Extra Large | col-xxl-* | ≥1400 px |

---

## Hogyan lehet létrehozni a Bootstrap rácsrendszerével egy struktúrát?
---

- **Először létre kell hozni a külső tárolót**, amely a sorok és oszlopok „burkolójaként” működik, és ehhez a **container / container-fluid / container-\{töréspont\}osztályok**at.
- **Ezen belül** kell elkészíteni a **sorokat a row osztály alkalmazásával**.
- Ezután a **sorokon belül** kell definiálni az **oszlopokat**, amelyekhez a **col, a col-xx** és ezeknek a **töréspontokkal kombinált változat**ait **(pl. col-md-3)** használjuk.
- Végül az **egyes oszlopokon belül definiáljuk a tényleges tartalmat (div, h, p, …)**.

### 1. Példa: Kétoszlopos elrendezés törésponttal (col-12, col-md-6)
---
Mobilon egymás alatt, tableten és asztali gépen egymás mellett:

```html
<div class="row">
  <div class="col-12 col-md-6">Oszlop 1</div>
  <div class="col-12 col-md-6">Oszlop 2</div>
</div>
```
#### Magyarázat:

- `<768px`: mindkét oszlop 12 egység (egymás alatt)
- `≥768px`: mindkettő 6 egység (két hasáb)

### 2. Példa: Automatikus oszlopelosztás
---

A Bootstrap automatikusan igazítja az oszlopok méretét:

```html
<div class="row">
  <div class="col">A</div>
  <div class="col">B</div>
  <div class="col">C</div>
</div>
```
#### Magyarázat: 
- Mindegyik egyenlő széles lesz.

### 3. Példa: Háromoszlopos elrendezés példája (col-sm-4, col-sm-4, col-sm-4)
---

```html
<div class="container">
  <div class="row">
    <div class="col-sm-4">Bal</div>
    <div class="col-sm-4">Közép</div>
    <div class="col-sm-4">Jobb</div>
  </div>
</div>
```
#### Magyarázat
- Mivel **mindhárom oszlop col-sm-4**, a **töréspont 576px-nél aktiválódik**.
- **576px alatt** (mobilon) **az oszlopok egymás alatt jelennek meg**, mert a Bootstrap az oszlopok szélességét automatikusan egymás alá rendezi.
- **576px felett** (tableten, laptopon, nagy kijelzőn) **mindhárom** oszlop **4 egység széles**.
- **A 12 egységes rácsban így: 4 + 4 + 4 = 12** tehát pontosan kitöltik a sort.
- Az elrendezés: balra – középen – jobbra három egyenlő hasábban.

### 4. Példa: Háromoszlopos elrendezés több törésponttal (md, lg, xl)
---

Az alábbi példa három különböző oszlopot mutat be, amelyek több töréspont alapján változtatják a szélességüket.

- **1. oszlop:**  
  - md alatt: 12 oszlop  
  - md-től: 6 oszlop  
  - lg-től: 4 oszlop  
  - xl-től: 3 oszlop

- **2. oszlop:**  
  - md alatt: 12 oszlop  
  - md-től: 6 oszlop  
  - lg-től: 8 oszlop  
  - xl-től: 4 oszlop

- **3. oszlop:**  
  - xl alatt: 12 oszlop  
  - xl-től: 5 oszlop  

```html
<div class="row">

  <!-- md alatt 12, md-től 6, lg-től 4, xl-től 3 -->
  <div class="col-md-6 col-lg-4 col-xl-3">
    tartalom
  </div>

  <!-- md alatt 12, md-től 6, lg-től 8, xl-től 4 -->
  <div class="col-md-6 col-lg-8 col-xl-4">
    tartalom
  </div>

  <!-- xl alatt 12, xl-től 5 -->
  <div class="col-xl-5">
    tartalom
  </div>

</div>
```

