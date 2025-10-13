---
id: html5-kepek
title: 5. tananyag
sidebar_position: 5
---

# 5. Képek elhelyezése

## 1. A képek szerepe a weboldalon

---

A weboldalakat gyakran egészítik ki képek, hogy illusztrálják a tartalmat, hangulatot adjanak, vagy vizuálisan támogassák az információt.
A képek külön fájlokban tárolódnak, ezért a HTML-dokumentumban csak hivatkozunk rájuk az `<img>` címke segítségével.

## 2. Az `<img>` elem szintaxisa

```html
<img src="kepnev.jpg" alt="leírás a képről" width="400" height="300" />
```

| **Attribútum**      | **Jelentése**                                                         | **Példa**                      | **Megjegyzés**                              |
| ------------------- | --------------------------------------------------------------------- | ------------------------------ | ------------------------------------------- |
| `src`               | A kép elérési útja                                                    | `src="kepek/taj.jpg"`          | Kötelező!                                   |
| `alt`               | Alternatív szöveg                                                     | `alt="Tájkép a hegyek között"` | Képleírás, akadálymentesség miatt fontos    |
| `width`             | Kép szélessége                                                        | `width="400"`                  | Pixelben vagy százalékban is megadható      |
| `height`            | Kép magassága                                                         | `height="300"`                 | Pixelben vagy százalékban is megadható      |
| `border`            | Kép köré elhelyezett keret vastagsága (általában képpontban történik) | `border="2"`                   | HTML5-ben inkább CSS-sel oldjuk meg         |
| `hspace` / `vspace` | Vízszintes és függőleges távolság                                     | `hspace="10"`                  | Elavult, CSS-t használjunk helyette         |
| `align`             | Igazítás (balra, jobbra, középre)                                     | `align="left"`                 | Elavult, helyette `float` vagy `text-align` |

## 3. Az elérési utak fajtái

---

### Relatív elérési út

A HTML-fájlhoz viszonyított hely:

```html
<img src="kepek/napfelkelte.jpg" alt="Napfelkelte" />
```

### Abszolút elérési út

Teljes URL, ha a kép egy másik webhelyen található:

```html
<img src="https://www.pelda.hu/kepek/logo.png" alt="Példa logó" />
```

## 4. Képek méretezése

### HTML attribútumokkal

```html
<img src="madar.jpg" alt="Madár" width="300" height="200" />
```

### CSS-stílussal (ajánlott)

```html
<img src="madar.jpg" alt="Madár" style="width: 300px; height: auto;" />
```

:::info
Ha csak az egyik értéket (például a width-et) adod meg, és a másikat nem, akkor a böngésző automatikusan kiszámítja a másik méretet a kép eredeti arányai alapján — vagyis a kép nem torzul. A **height:** auto beállítás ugyanezt az eredményt biztosítja.
:::

## 5. Igazítás és elhelyezés

### Balra vagy jobbra "úsztatás" (float)

```html
<img src="virag.jpg" alt="Virág" style="float: left; margin-right: 15px;" />
<p>A virág a természet egyik legszebb alkotása...</p>
```

:::info
A **float** lehet left vagy right, a **margin** segítségével helyet hagyhatunk körülötte.
:::

### Középre igazítás

#### 1. módszer

```html
<div style="text-align: center;">
  <img src="hegyek.jpg" alt="Hegyek naplementében" width="400" />
</div>
```

#### 2. módszer

```html
<img src="virag.jpg" alt="Virág" style="display: block; margin: 0 auto;" />
```

## 6. Képek keretezése és stílusozása

```html
<img
  src="tajkep.jpg"
  alt="Tájkép"
  style="
    width: 400px;
    border: 3px solid #333;
    border-radius: 10px;
    box-shadow: 5px 5px 10px gray;
  "
/>
```

:::info

- **border:** keret
- **border-radius:** lekerekített sarkok
- **box-shadow:** árnyék  
  :::

## 7. Képre kattintva nagyobb változat megnyitása

Kattintásra új ablakban nyílik meg a nagy kép.

```html
<a href="tajkep_nagy.jpg" target="_blank">
  <img src="tajkep_kicsi.jpg" alt="Tájkép kicsiben" width="300" />
</a>
```

## 8. `<figure>` elem

A `<figure>` elem egy HTML5 strukturális elem, amit arra használnak, hogy egy illusztrációt (pl. képet, diagramot, kódrészletet, táblázatot stb.) és a hozzá tartozó leírást (általában `<figcaption>`) egy logikai egységbe foglaljunk.

```html
<figure>
  <img src="image/akita.jpg" alt="akita" height="200" />
  <figcaption>2. kép: Akita</figcaption>
</figure>
```

:::info
**Miért hasznos? a `<figure>` elem?**  
**Szemantikailag pontosabb** – a böngésző és a keresőmotorok tudják, hogy ez a kép és a felirat összetartozik.  
**Hozzáférhetőség (Accessibility)** – a képernyőolvasók helyesen olvassák fel a képet és a feliratát.  
**Stílus szempontból rendezett** – CSS-ben könnyen formázhatod a képet és a feliratot együtt.  
**Mozgatható egység** – a `<figure>` tartalma a főszövegben bárhol elhelyezhető, akár külön is (például lábjegyzetként), és továbbra is egy egységet alkot.
:::
