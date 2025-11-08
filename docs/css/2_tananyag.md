---
id: 2_tananyag
sidebar_position: 2
sidebar_label: "2. tananyag"
title: "2. CSS tulajdonságok"
---

## Betűtulajdonságok (font-)
---

A CSS számos tulajdonságot kínál a szöveg megjelenésének beállításához.

A betűtulajdonságok a **font-** előtaggal kezdődnek, és a betűtípus, méret, stílus, vastagság és egyéb jellemzők módosítására szolgálnak.

A font tulajdonság általában több al-tulajdonságot tartalmaz, amelyek közül néhány a következő:

- **font-family:** Meghatározza a használandó betűtípusokat vagy betűcsaládokat. Például: *font-family: Arial, Helvetica, sans-serif;*.

- **font-size:** Az aktuális betűméretet határozza meg, például *font-size: 16px;*.

- **font-weight:** A betűvastagságot állítja be, például *font-weight: bold;* vagy *font-weight: normal;*.

- **font-style:** A betűstílust határozza meg, például *font-style: italic;*.

- **font-variant:** A kisbetűk esetében használt kisbetű változást szabályozza, például *font-variant: small-caps;*.

- **color:** A szöveg színét jelenti egy weboldalon vagy dokumentumban, például *color: #ff0000;*.

- **text-decoration:** A szöveg aláhúzását, áthúzását vagy vonalozását állítja be, például *text-decoration: underline;*.

- **text-transform:** A szöveg kisbetűsítését, nagybetűsítését vagy egyéb átalakításokat szabályozza, például *text-transform: uppercase;*.

- **Összetett forma:** Az összes főbb betűtulajdonság egyetlen rövidített formában is megadható. A sorrend kötött, az értékeket szóköz választja el.

**Példa az összetett formára:**

```css
p {
  font: italic small-caps bold 16px/1.5 "Times New Roman", serif;
}
```

## Szövegtulajdonságok (text-)
---

A CSS szövegtulajdonságai a szöveg elrendezését, igazítását, díszítését, szó- és betűközeit, valamint a szóközök és sortörések kezelését szabályozzák.
A legtöbb ilyen tulajdonság a text- előtaggal kezdődik, és a betűtulajdonságokkal együtt adja meg a szöveg teljes megjelenését.

- **text-align:** A szöveg vízszintes igazítását határozza meg a tartalmazó elemben. **Értékei:** left, right, center, justify. Például *text-align: center;*.

- **text-justify:** A sorkizárt igazítás során a szóközök kezelésének módját szabályozza. Csak text-align: justify mellett működik. Például *text-justify: inter-word; (csökkenti vagy növeli a szavak közötti teret)*.

- **vertical-align:** A szöveget vagy képet függőlegesen igazítja soron belül. **Értékei:** baseline, middle, top, bottom. Például *vertical-align: middle; (Táblázatoknál és inline elemeknél lesz különösen fontos.)*

- **text-decoration:** A szöveg aláhúzását, föléhúzását vagy áthúzását állítja be. **Értékei:** underline, overline, line-through, none. Például *text-decoration: underline;*.

- **text-transform:** A szöveg kis- és nagybetűs megjelenését módosítja. **Értékei:** uppercase, lowercase, capitalize, none. Például *text-transform: uppercase*;.

- **line-height:** A szövegsorok közötti sorközt szabályozza. **Értéke** lehet szám (arány), például 1.5, vagy mértékegység, például 24px. Például *line-height: 1.5;*.

- **text-indent:** A bekezdés első sorának behúzását adja meg. Pozitív érték jobbra, negatív érték balra tolja az első sort. Például *text-indent: 2em;*.

- **letter-spacing:** A betűk közötti távolságot (betűközt) módosítja. Pozitív érték növeli, negatív csökkenti a betűközt. Például *letter-spacing: 0.1em;*.

- **word-spacing:** A szavak közötti szóközök méretét szabályozza. Pozitív érték növeli, negatív csökkenti a szóközöket. Például *word-spacing: 0.2em;*.

- **white-space:** A szóközök és sortörések kezelésének módját határozza meg. **Értékei:** *normal* – alapértelmezett viselkedés (több szóköz összevonása); *nowrap* – nem enged sortörést; *pre* – megőrzi a szóközöket és töréseket; *pre-line, pre-wrap* – kombinált módok. Például *white-space: nowrap;*.