---
id: 2_tananyag
sidebar_position: 2
sidebar_label: "2. tananyag"
title: "2. Breakpointok használata a Bootstrapben"
---

## Breakpoints
---
A Bootstrapben nem szükséges saját @media lekérdezéseket írni ahhoz, hogy különböző felbontású képernyőkön eltérő elrendezéseket kapjunk. Ehelyett használhatjuk a töréspontokat (breakpoints).

A **töréspont** egy olyan **Bootstrap-változó**, amely a képernyő minimális szélességéhez kapcsolódik.
Ha egy osztályhoz megadunk egy töréspontot, az azt jelenti, hogy az adott stílus vagy elrendezés csak akkor lesz érvényben, ha a képernyő szélessége eléri vagy meghaladja a töréspont értékét.

A Bootstrap 5 keretrendszer 6 (hat) alapértelmezett töréspontot tartalmaz. A fejlesztők ezeket a töréspontokat úgy választották meg, hogy a weboldalakon kialakításra kerülő tárolók kényelmesen elférjenek a BS 12 oszlopos rácsrendszerében. 

| Töréspont elnevezése       | Azonosító jel (infix) | Hatóköre        |
|----------------------------|------------------------|------------------|
| X-Small                    | –                      | < 576px          |
| Small                      | sm                     | ≥ 576px          |
| Medium                     | md                     | ≥ 768px          |
| Large                      | lg                     | ≥ 992px          |
| Extra Large                | xl                     | ≥ 1200px         |
| Extra Extra Large          | xxl                    | ≥ 1400px         |

### Breakpointok használata osztályokban

A töréspontokat a Bootstrap osztályok nevében használjuk, az ún. infixekkel (sm, md, lg, xl, xxl).
Ezek azt jelölik, hogy az adott osztály a megadott törésponttól felfelé legyen aktív.

#### Példa grid rendszerre

Mobilon egymás alatt, nagyobb kijelzőn két oszlop:

```html
<div class="row">
  <div class="col-12 col-md-6">Első oszlop</div>
  <div class="col-12 col-md-6">Második oszlop</div>
</div>
```
#### Magyarázat:

- col-12: mobilon teljes szélesség
- col-md-6: 768px-től (md) két hasáb