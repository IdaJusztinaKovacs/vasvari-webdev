---
id: 5_tananyag
sidebar_position: 5
sidebar_label: "5. tananyag"
title: "5. Pozicionálás"
---
## Blokkszintű elemek elhelyezése
---

### Dokumentumfolyam

A dokumentumfolyam (normal document flow, vagy gyakran simply flow) azt jelenti, hogy a böngésző alapértelmezett szabályok szerint helyezi el az elemeket, mégpedig:

- fentről lefelé
- balról jobbra
- a HTML elemek természetes sorrendjében

### Statikus pozíció (static)
Ez az alapállapot, ebben az esetben az elem statikus, nem változik a pozíciója (nincs pozicionálva).

```css
    div {
        position: static;
    }
```
### Eltolás

A nem statikus helyzetű elemek helyzetét tudjuk módosítani a következő tulajdonságokkal:

- **left** - eltolás balról
- **right** - eltolás jobbról
- **top** - eltolás fentről
- **bottom** - eltolás lentről

Az **eltolás alapértéke auto** ez nem befolyásolja az elem helyzetét. Megadhatjuk hosszmértékben, vagy százalékban. Százalékos érték esetén a pozicionálás típusától függő (szülő-)elem mérete alapján számolja ki a böngésző az eltolás mértékét. Felvehet negatív értéket is.

```css
    top: 33px;      /* Felső eltolás */
    right: 55%;     /* Bal eltolás */
    bottom: -5em;   /* Alsó eltolás */
    left: 9px;      /* Bal eltolás */
```

### Viszonylagos pozíció (relative)
Viszonylagos pozicionálás esetén az elem eredeti helyéhez képest eltolódik a megadott mértékben.
- Az elem megtartja a helyét a normál dokumentumfolyamban.
- A vizuális eltolás (top, left, right, bottom) csak a megjelenést változtatja, nem a foglalt helyet.
- A többi elem úgy viselkedik, mintha az elem nem mozdult volna el.

```css
    div {
        position: relative;
        left: 50px;
        top: 50px;
    }
```
![Pozicionalas_relative](/img/poz_rel.JPG)

### Független pozíció (absolute)

A `position: absolute` esetén az elem **kiválik a dokumentum normál folyamból**, vagyis nem foglal helyet, és nem tolja el a többi elemet.

Az eltolás (top, left, right, bottom) mindig a **legközelebbi olyan szülő elemhez képest** történik, amelynek pozicionálása **nem statikus** (tehát `relative`, `absolute`, `fixed` vagy `sticky`).

Ha a közvetlen szülő például `position: relative`, akkor az lesz a viszonyítási pont.

Ha **nincs egyetlen nem statikus szülő sem**, akkor a pozicionálás alapja a `body` elem (pontosabban a dokumentum gyökér nézete).

```css
    div {
        position: absolute;
        left: 50px;
        top: 50px;
    }
```

![Pozicionalas_absolute](/img/poz_nem_statikus.JPG)

### Rögzített pozíció (fixed)

A `position: fixed` esetén az elem **kiválik a dokumentum normál folyamból**, ezért nem foglal helyet, és nem tolja el a többi elemet — ugyanúgy, mint az absolute pozicionálásnál.

Az eltolás (top, left, right, bottom) **mindig a böngészőablakhoz (viewport) viszonyítva** történik, függetlenül attól, milyen pozicionálású a szülő eleme.

Ennek következtében:

- az elem **nem scrollozódik**, mindig fixen a képernyő azon pontján marad,

- az utána következő elemek **becsúsznak az eredeti helyére**,

- nem befolyásolja a szülő elem méretét, magasságát — ugyanúgy viselkedik, mint az absolute, csak nem a szülőhöz, hanem a viewporthoz igazodik.

```css
    div {
        position: fixed;
        left: 50px;
        top: 50px;
    }
```
![Pozicionalas_fixed](/img/poz_fixed.JPG)

:::tip
A fixed pozicionálást gyakran használjuk fejléc és lábléc rögzítésére. A tartalom görgethetően megjelenik közöttük.
:::

### Ragadós pozíció (sticky)

A `sticky` pozíció egy **relative + fixed hibrid**

A sticky elem kezdetben normálisan viselkedik, majd amikor eléri a megadott pozíciót (pl. top: 0), "odaragad" és ott marad, amíg a szülő konténere látható. De csak addig marad ott, amíg a szülő konténere látható.

Amikor a szülő konténer **alja eléri a sticky elemet**, az már nem tud a megadott pozíción maradni, **tovább görgetődik**, mintha újra relative lenne.

```css
.sticky-doboz {
    position: sticky;
    top: 0;
}
```

:::warning FONTOS!
A sticky elem **nem a viewporthoz van kötve**, hanem **a szülő görgetési tartományához.**
**A sticky csak a szülő konténeren belül működik!!**
:::

:::tip
Több sticky elem is lehet egy konténerben, különböző pozíciókkal. Például oldalsáv elemei, amelyek különböző távolságokban "ragadnak".
```css
.sticky-top-0 {
    position: sticky;
    top: 0;
}

.sticky-top-140 {
    position: sticky;
    top: 140px;
}

.sticky-top-280 {
    position: sticky;
    top: 280px;
}
```
:::


### Z magasság (z-index)

A dokumentumfolyamban az elemek alapértelmezés szerint egymás fölé rétegződnek: a később érkező elemek a korábban lévők fölé kerülnek, vagyis felül „lapolódnak”.

A z-index tulajdonsággal ezt a rétegződést módosíthatjuk.

#### Példa:
```css 
    div {
        position: relative;
        z-index: 150;
    }
```

A z-index a **böngészőablak síkjára merőleges (z) tengelyen mozgatja fel vagy le** az elemeket:

- **Pozitív érték:** az elem feljebb kerül (más elemek fölé).

- **Negatív érték:** az elem lejjebb kerül (más elemek alá).

- Értéke lehet pozitív vagy negatív egész szám.

![Z-index](/img/z_index.JPG)

:::warning Fontos!
**A z-index csak akkor működik, ha az elem pozicionált** (position: relative | absolute | fixed | sticky).
Alapértéke auto, ami azt jelenti, hogy a dokumentumfolyam határozza meg a rétegződést.
:::

:::tip
Ha egy elemet **biztosan legalulra** szeretnénk helyezni, adjunk neki **nagyon nagy negatív z-index értéket**, például:

```css
    z-index: -10000;
```
Ha pedig **biztosan legfelülre** szeretnénk tenni, használjunk **nagyon nagy pozitív értéket**, például:
```css
    z-index: 10000;
```
:::

### Átlátszóság (opacity)

Szabványosan az `opacity` stílustulajdonságnak adhatunk meg egy 0 és 1 közötti értéket azzal a jelentéssel, hogy minél nagyobb értéket adunk meg, az objektum annál kevésbé lesz átlátszó (tehát 0 esetén teljesen átlátszó, 1 esetén egyáltalán nem).

**Az opacity minden gyerek elemet is átlátszóvá tesz!**
Ha egy szülő elem opacity-t kap, a teljes tartalma átlátszó lesz — képek, szöveg, gombok, minden.
**Példa:**
```css
    .container {
        opacity: 0.4;
    }
```
Ebben a példában az elem átlátszóságát 0.4-re állítottuk. Ez azt jelenti, hogy csak részben átlátszó, így a háttérkép vagy az elemek alatta részben láthatók lesznek. Ezt a hatást kreatív dizájnokban és átmenetekben lehet alkalmazni.

:::warning FONTOS!
**Ha csak a hátteret szeretnéd átlátszóvá tenni, akkor *nem* az `opacity` tulajdonságot kell használni, hanem `rgba()` vagy `hsla()` színértéket.**
:::

### Túlcsordulások kezelése (overflow)

A `overflow` tulajdonság azt határozza meg, hogyan jelenjen meg a tartalom, ha az túlnyúlik a befoglaló doboz számára rendelkezésre álló területen.
A túlcsordulás kezelhető:
- vízszintesen: **overflow-x**
- függőlegesen: **overflow-y**
- mindkét irányban egyszerre: **overflow** (összevont alak)

Az összevont alak két értéket is kaphat:
```css
    overflow: <overflow-x> <overflow-y>;
```

#### Lehetséges értékek és jelentésük:
**1. visible (alapértelmezett)**
- A túlnyúló tartalom látható marad, kilóg a dobozból.
- Semmilyen vágás vagy görgetés nem történik.

**2. hidden**
- A doboz levágja (eltünteti) a túlnyúló részeket.
- Nem jelenik meg görgetősáv.

**3. scroll**
- A tartalom túlnyúló részei rejtve vannak, de mindig megjelenik a görgetősáv (mindkét irányban), akkor is, ha valójában nincs túlnyúlás.

**4. auto**
- A böngésző csak akkor ad görgetősávot, ha valóban túlnyúlás történik.
- A modern elrendezésekben ez a leggyakoribb választható érték.

### Láthatóság (visibility)
A `visibility` (láthatóság) tulajdonság egy adott elem két lehetséges állapotát jelöli, amely megmutatja vagy láthatatlanná teszi azt; a láthatatlan elem a weblap elhelyezésében megtartja a helyét, csak átlátszóvá válik.

**Lehetséges értékei:**
- **visible (alapértelmezett érték):** az elem látható
- **hidden:** az elem nem látható, de a helye megmarad
- **collapse (csak táblázatoknál):** sorok, oszlopok, sorcsoportok, oszlopcsoportok elrejtéséhez
- **inherit:** szülőtől örökölt érték

### Megjelenítés (display)
A `display` CSS-tulajdonság határozza meg, hogy a böngésző milyen típusú dobozt generál az elemhez.
Ezen keresztül szabályozzuk az elem:
- **megjelenítési módját** (pl. blokk vagy sor szintű),
- **elhelyezkedését** a dokumentumfolyamban,
- és azt is, hogy hogyan viselkedjen más elemekkel együtt.

A display tehát a webes layoutok egyik legfontosabb tulajdonsága, mert alapjaiban befolyásolja az elem viselkedését.

**A leggyakrabban használt értékek:**
- **inline (alapértelmezett érték):** Ez az érték lehetővé teszi, hogy az elem egy sorban jelenjen meg a szöveg részeként anélkül, hogy új sorba kerülne. Az elem szélessége csak annyi lesz, amennyi a tartalom méretétől szükséges.
- **block (blokk-doboz):** Ez az érték általában a legelterjedtebb és legtöbb HTML elem alapértelmezett megjelenési módja. Az elem egy blokkot képez, amely a rendelkezésre álló helyet teljes szélességben elfoglalja, így a következő elem a sor alatt jelenik meg.
- **inline-block:** Blokk-dobozként formázható, de inline dobozként kerül elhelyezésre az oldalon. Az inline és block közötti kompromisszumot jelenti. Az elemek sorban jelennek meg, de lehetővé teszik a szélesség és a magasság beállítását, valamint a margin és padding használatát.
- **none:** Ez az érték az elemhez nem rendel sorközi vagy blokkszintű dobozt, azaz az elemnek nincsen hatása a weboldal elrendezésére. Az elem elrejtésére használják így az nem foglal teret és teljesen eltűnik a megjelenésből.
- **flex:** Lehetővé teszi a rugalmas elrendezés létrehozását egy tartományon belül, amely lehetővé teszi az elemek dinamikus elrendezését és viselkedését.
- **grid:** Érték használata egy többszintű elrendezési rendszert hoz létre, ahol az elemek egy síkon vagy síkokon helyezkednek el.

**Példa:**
```css
.pelda {
  display: block;
  width: 200px;
  height: 100px;
  background-color: #ff0000;
}
```
Ebben a példában beállítottuk a display tulajdonságot block értékre. Ez azt jelenti, hogy az elem blokk formában jelenik meg, és teljes szélességet foglal el. Az elemnek beállítottunk egy 200 pixel szélességet és egy 100 pixel magasságot, és piros háttérszínt alkalmaztunk rá. Így az elem egy piros téglalap formájában jelenik meg az oldalon.

:::important FONTOS!
**Egy elem kijelzési tulajdonságának, azaz a display értékének beállítása csak az elem megjelenítésének módját változtatja meg, NEM pedig azt, hogy az milyen típusú
elem!**
:::

## Hasznos tudnivalók, praktikák
---

### Elemek és tartalmak vízszintes igazítása
**1. Blokkelem vízszintes igazítása a szülőelemhez viszonyítva:** 
```css
    margin: auto;
```

**2. Blokkelem tartalmának vízszintes igazítása:** 
```css
    text-align: left|center|right|justify;
```

**3. Kép vízszintes igazítása:** 
```css
    display: block; margin-left: auto; margin-right: auto;
```
