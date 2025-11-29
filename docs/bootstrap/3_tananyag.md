---
id: 3_tananyag
sidebar_position: 3
sidebar_label: "3. tananyag"
title: "3. A Bootstrap 5 konténerei (containers)"
---

## Konténerek
---

A tárolók (containers) a Bootstrap egyik alapvető építőelemei. Azért használjuk őket, hogy a tartalom megfelelően igazodjon az eszköz vagy a böngésző nézetablakának méretéhez. A tárolók segítenek a tartalom strukturálásában, igazításában, sőt gyakran annak központosításában is.

A konténer elem határozza meg a webes alkalmazás külső margóját, vagyis azt, hogy a tartalom milyen szélességben és elrendezésben jelenjen meg.

Konténert úgy hozunk létre, hogy egy HTML elemhez — leggyakrabban egy `div`-hez — hozzáadjuk a `container` osztályt. Fontos, hogy a `container` más HTML elemekkel is használható, nem csak `div`-vel.

### A konténerek típusai
A Bootstrapben háromféle konténertípus érhető el:

| Konténer típusa             | Osztály              | Viselkedés |
|-----------------------------|----------------------|------------|
| Alap konténer              | `container`          | Fix maximális szélességgel rendelkezik. A szélessége töréspontok szerint változik. |
| Folyékony konténer         | `container-fluid`    | Mindig 100% szélességű, minden kijelzőn. |
| Töréspont alapú konténer   | `container-{breakpoint}` | A megadott töréspont alatt 100% szélességű, felette fix maximális szélességre vált. |


### Alap konténer (`container`)
Az alapértelmezett tároló minden töréspontnál beállít egy max-width értéket.  
**Példa:**

```html
<div class="container">
  <h1>Alap konténer</h1>
  <p>Ez a konténer töréspontok szerint változó maximális szélességű.</p>
</div>
```

### Folyékony konténer (`container-fluid`)
Mindig a teljes elérhető szélességet használja.

```html
<div class="container-fluid">
  <h1>Folyékony konténer</h1>
  <p>Ez a konténer minden felbontáson 100% szélességű.</p>
</div>
```

### Törésponthoz kötött konténer (container-\{breakpoint}\)
A megadott töréspont alatt teljes szélesség, felette fix szélesség.

```html
<div class="container-sm">100% a small töréspontig</div>
<div class="container-md">100% a medium töréspontig</div>
<div class="container-lg">100% a large töréspontig</div>
<div class="container-xl">100% az extra large töréspontig</div>
<div class="container-xxl">100% az extra extra large töréspontig</div>
```

A következő táblázatban látható a `.countainer` és a `.container-fluid`-hoz képest, hogyan viszonyulnak a töréspont beállítások. 

| Osztály            | Extra small (0–575 px) | Small (≥576 px) | Medium (≥768 px) | Large (≥992 px) | Extra large (≥1200 px) | XX-large (≥1400 px) |
|--------------------|------------------------|------------------|-------------------|------------------|--------------------------|----------------------|
| .container         | 100%                   | 540 px           | 720 px            | 960 px           | 1140 px                  | 1320 px              |
| .container-sm      | 100%                   | 540 px           | 720 px            | 960 px           | 1140 px                  | 1320 px              |
| .container-md      | 100%                   | 100%             | 720 px            | 960 px           | 1140 px                  | 1320 px              |
| .container-lg      | 100%                   | 100%             | 100%              | 960 px           | 1140 px                  | 1320 px              |
| .container-xl      | 100%                   | 100%             | 100%              | 100%             | 1140 px                  | 1320 px              |
| .container-xxl     | 100%                   | 100%             | 100%              | 100%             | 100%                     | 1320 px              |
| .container-fluid   | 100%                   | 100%             | 100%              | 100%             | 100%                     | 100%                |
