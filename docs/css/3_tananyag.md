---
id: 3_tananyag
sidebar_position: 3
sidebar_label: "3. tananyag"
title: "3. CSS - hátterek (szín és kép) beállítása, speciális formázási lehetőségeik"
---
## Háttértulajdonságok (background-)

A weblap valamennyi elemének (karakter, szó, címsor, bekezdés, lista, táblázat, kép stb.) van háttér-
rétege, amely alapértelmezetten
- vagy teljesen átlátszó,
- vagy a háttérszín tulajdonság értékének megfelelően kitöltött színű,
- és/vagy a háttérkép(ek) tulajdonságértéke(i)ként meghatározott kép(ek) alkotja(k)

### `background-color ` - háttérszín
A háttérszínt a teljes elemnek beállítja; a színmegadásoknál meghatározottak szerint adhatjuk meg.
Példa: 
```css
body { background-color: #000A00; }
body { background-color: yellow; }
```

### `background-image` - háttérkép
A háttérkép tulajdonsággal egy képet használunk fel a választott elem hátterének mozaikszerű kitöltésére (alapértelmezés).
A háttérképeket különböző elemekhez rendelhetjük.

Példa:
```css
body { background-image: url(tegla.jpg); }
```

:::important Fontos!
- A böngészők alapértelmezetten a teljes kitöltendő hátteret a kép méretének változatlanul hagyása mellett, vízszintes és függőleges irányú ismétlésével, összefüggően töltik ki
- Ha háttérképet használunk egy elemnél, akkor gondoskodni kell arról, hogy a szöveg olvasható maradjon!
- **A háttérkép és a háttérszín együttes előfordulása esetén mindig a kép van felül és a háttérszín alul!**
:::

#### Hogyan lehet egyidejűleg több háttérképet is alkalmazni? 
- A képfájlokat és a tulajdonságokat felsorolásszerűen, **vesszővel és szóközzel elválasztva** adjuk meg, ahol a **felsorolás sorrendje egyben meghatározza a háttérképek egymásra rétegződését** (azaz az **első háttérkép van legfelül és minden további háttérkép a sorrendnek megfelelően egyre hátrébb kerül**).

### `background-repeat` - háttérkép ismétlődése
a háttérkép ismétlődése többféle is lehet - lehetséges értékei:
- **repeat** (mozaikszerű ismétlődés mindkét irányban; alapértelmezés)
- **no-repeat** (nincs ismétlődés)
- **repeat-x** (csak vízszintes irányban ismétlődik)
- **repeat-y** (csak függőleges irányban ismétlődik)
- **round** (vízszintes irányban egész számú ismétlés úgy, hogy a kép szélességi méretét megnyújtja)
- **space** (egész számú ismétlést végez úgy, hogy a háttérképek között üres helyeket – távolságokat – hagy annak megfelelően, hogy a háttérkép szélességi értéke alapján hányszor fér ki az egymás mellé)

Példa:
```css
body { 
    background-image: url(tegla.jpg);
    background-repeat: repeat-x; 
}
```

### `background-position-x` - háttérkép vízszintes helyzete
A háttérkép vízszintes helyzete paraméter lehetséges értékei:
- a **szokásos hosszúsági mértékegységek** mellett az **egész értékű százalék**, illetve a **left** (vízszintesen balra), **center** (vízszintesen középre) és a **right** (vízszintesen jobbra) lehetnek – függőlegesen ismétlődő háttérképhez.

Példa:
```css
body { 
    background-image: url(tegla.jpg);
    background-repeat: no-repeat;
    background-position-x: 40%; 
}
```

### `background-position-y` - háttérkép függőleges helyzete
A háttérkép függőleges helyzete paraméter lehetséges :
- a **szokásos hosszúsági mértékegységek** mellett az **egész értékű százalék**, illetve a **top** (függőlegesen felülre), **center** (függőlegesen középre) és a **bottom** (függőlegesen alulra) lehetnek – vízszintesen ismétlődő háttérképhez.

Példa:
```css
body { 
    background-image: url(tegla.jpg);
    background-repeat: no-repeat;
    background-position-y: top; 
}
```

### `background-position` - háttérkép összevont tulajdonság
A háttérkép vízszintes és függőleges helyzetének (elhelyezkedésének) meghatározása, amelyben egy értékpárt adunk meg: 
- az első a vízszintes,
- a második a függőleges elhelyezkedést határozza meg
- akkor érdemes használni, ha nem ismétlődik a háttérkép

**Alkalmazható beállítások / mértékegységek:**
- elnevezéssel: left (balra), right (jobbra), top (felül), bottom (alul),
center (középre)
- %-értékkel: pl. 0% 0% a bal felső sarkot, az 50% 50% a szülőelem közepét fogja jelenteni
- képpontban: a szülőelemhez képest a megfelelő irányokban a meg-
adott értékkel van eltolva a háttérkép (pl. 50px 100px)

Példa:
```css
body { 
    background-image: url(tegla.jpg);
    background-repeat: no-repeat;
    background-position: 100% 50%; 
}
```


### `background-attachment` - háttérkép gördíthetősége
A háttérkép kapcsolásának (gördíthetőségének) meghatározása megadja a háttérkép kapcsolatát a dokumentumon belüli szülő-objektummal, amelynek alapértelmezett értéke:
- a **scroll** (a tartalom gördítésénél a háttérkép is gördüljön), 
- illetve használható a **fixed**, ekkor a háttérkép a tartalom gördítése esetén sem mozdulhat el (vízjelként helyben marad).

Példa:
```css
body { 
    background-image: url(tegla.jpg);
    background-repeat: repeat-x;
    background-attachment: fixed; 
}
```

### `background-size` - háttérkép mérete
A háttérképként alkalmazott kép fizikai méreteitől eltérően, más méretekkel is felhasználhatjuk a képet

**lehetőségek:**
- kulcsszóval: auto, cover, contain
- egyetlen érték megadásával (ez akkor a kép szélességi mérete lesz, a-másik auto értéket fog felvenni)
- két érték megadásával (az első a szélesség, a második a magasság)
- többszörös szintaxissal (vesszővel felsorolt értéksorozattal)

**lehetséges értékek:**
- **auto** (alapértelmezett érték): a kép az eredeti fizikai mérete szerint
- **pixelérték**: a megadott képpont szerinti mérettekkel jelenik meg
- **%-érték**: a kép mérete a kitöltendő rész nagyságához viszonyítva kerül meghatározásra (a háttérkép ekkor magasságában és szélességében is arányosan kerül megjelenítésre)
- **cover** (lefedés): változatlan képarány mellett a háttérkép mérete úgy változik, hogy a kisebbik mérete teljesen lefedje a háttérként kijelölt területet (tehát a képet nyújtva vagy levág belőle)
- **contain** (magában foglal): változatlan képarány mellett a háttérkép mérete úgy változik, hogy a teljes háttérkép beleférjen a háttérként kijelölt területbe (tehát a képet arányosan átméretezi úgy, hogy kimaradhatnak lefedetlen területek is)

### `background-clip` - háttérkép hatóköre

Alaphelyzetben a háttérkép és a háttérszín hatása (azaz hatóköre) az elem szegélye által határolt területéig terjed ki – ezen bármikor változtathatunk:
- border-box: a szegélyek külső élei által határolt teljes területig
- padding-box: a belső margó és a tartalom együttes dobozáig
- content-box: a tartalom dobozra vonatkozik a megadott érték

### `background` - az összes háttértulajdonság összevonása

Példa:
```css
body { 
    background: yellow url(kep.jpg) repeat-x fixed; 
}
```

### `background-origin` - háttérkép referenciapontja

A hátérképek helyzetének megadásához a pozicionálás referenciapontjának és az ahhoz képest meghatározott helyzetnek az ismerete is szükséges, tehát a lehetséges referenciapont
- padding-box (alapértelmezés: a belső margódoboz bal felső sarka)
- content-box: a tartalomdoboz bal felső sarka
- border-box: a szegélydoboz bal felső sarka

Példa:
```css
body { background-origin: padding-box; }
```