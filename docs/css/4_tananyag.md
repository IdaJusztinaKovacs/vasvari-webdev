---
id: 4_tananyag
sidebar_position: 4
sidebar_label: "4. tananyag"
title: "4. A dobozmodell és tulajdonságai"
---

## A dobozmodell alapvető jellemzői
---

**A CSS stíluslapnyelv egy HTML-dokumentum megjelenítésekor az egyes elemekhez láthatatlan dobozokat rendel**, amelyek magukban foglalhatnak karaktereket, szavakat, sorokat, bekezdéseket, listákat, képeket, táblázatokat stb. **Minden doboznak lehetnek külön formázási tulajdonságai** (mint pl. a mérete: szélessége-magassága,az előtér színe, a háttér színe, a szegélye, a betű típusa stb.). **A dobozok hierarchikusan egymásba is ágyazódhatnak**: pl. egy szó doboza egy lista egy sorának vagy egy táblázat egy cellájának a dobozába, az pedig a lista vagy a táblázat dobozába, majd az a weboldal egy szakaszának dobozába stb. kerülhet.

A dobozok lehetnek: 
- **blokkszintűek** (block-level box) – pl. bekezdés, lista, táblázat, blokkidézet, div szakaszok
- **sorszintűek** (line box) – pl. egy szöveg egy sora
- **soron belüliek** (inline-level box) – pl. karakterek, szavak, képek egy soron belül

![Dobozmodell](/img/dobozmodell.jpg)

A böngészőben megjelenő elemek dobozokban helyezkednek el.
#### CSS Dobozmodell (belülről kifele haladva):
- **Tartalom:** ez tetszőleges elem lehet, pl.: bekezdés, kép, táblázat, link, stb.
- **Belső margó:** kitöltésnek is szokták hívni. A szegély és a tartalom közötti távolságot értjük alatta.
- **Szegély:** a belső margó határán helyezkedik el.
- **Külső margó:** szegélyen kívül helyezkedik el, az elemek eltartását, távolságot jelenti

![Dobozmodell_02](/img/dobozmodell_02.jpg)

## CSS Dobozmodell – Az elem tényleges mérete
---

- **Szélesség** = doboz szélessége + bal és jobboldali belső margó + bal és jobb oldali szegély vastagsága.
- **Magasság** = doboz magassága + alsó és felső belső margó + alsó és felső szegély vastagsága.

Ezt a számítási módot CSS-ben lehet módosítani (ld. box-sizing).

Ha az elem elhelyezkedését vizsgáljuk, azaz, hogy mekkora helyet foglal el, akkor a külső margók is számítanak.

![ElemMerete](/img/elem_merete.jpg)

:::info **Általános tudnivalók**
- a margó, a szegély, a bélés és a tartalom mérete külön-külön változtatható
- a margó, a szegély és a bélés a doboz egyes oldalain vagy akár mindenütt hiányozhatnak, de egyszerre mindegyik lehet egymástól eltérő tulajdonságokkal meghatározott
- a margó lehet negatív érték, így az elemek átfedése is létrehozható
- a bélés háttérszíne megegyezik a tartalom színével, de ezen lehet változtatni (ld. box-sizing)
- a margó mindig átlátszó, a így a szülő elem állandóan látható marad
- a szegély a háttér elé (ha van háttérszín vagy háttérkép megadva), de a tartalom mögé kerül (ha átfedés van a szegély és a tartalom között)
:::

:::warning Általános szabály 
Ha egy elem szélességét és magasságát a CSS segítségével állítjuk be, akkor csak a tartalomterület szélességét és magasságát határozzuk meg. 
Egy elem teljes méretének kiszámításához (alapértelmezett helyzetben) mindig hozzá kell adni a padding, a border és a margin értékét is.
:::

#### A szabvány szerint:
- a **teljes objektum (a doboz) szélességét** a jobb és a bal oldali margó, a jobb és a bal oldali szegély, a jobb és a bal oldali belső margó, valamint a tartalom szélességének összege,
- a **teljes objektum (a doboz) magasságát** pedig a felső és az alsó margó, a felső és az alsó szegély, a felső és az alsó belső margó, valamint a tartalom magasságának összege adja;
- a szélességhez (width) nem tartozik hozzá a padding, a border és a margin

## Példa: a szélesség értékének kiszámítása
---

![Doboz_szelesseg](/img/doboz_szelesseg.jpg)

A dobozmodell egyes elemeire meghatározott értékek:
- (bal/jobb) margin: 10px
- (bal/jobb) border: 3px
- (bal/jobb) padding: 5px
- tartalom width: 100px

**Az elfoglalt szélesség: 10+3+5+100+5+3+10 = 136px**

**Tehát az elfoglalt tényleges szélesség nagysága 136px**

## Példa: a szélesség értékének kiszámítása
---

![Doboz_magassag](/img/doboz_magassag.jpg)

A dobozmodell egyes elemeire meghatározott értékek:
- (alsó/felső) margin: 15px
- (alsó/felső) border: 3px
- (alsó/felső) padding: 7px
- tartalom height: 70px

**Az elfoglalt magasság: 15+3+7+70+7+3+15 = 120px**

**Tehát az elfoglalt tényleges magasság nagysága 170px**

:::warning FONTOS!
#### A CSS-dobozmodellben tehát alapértelmezés szerint az elemhez rendelt szélesség és magasság csak az elem tartalomdobozára vonatkozik. 
A **box-sizing (dobozméret-) tulajdonság** segítségével viszont módosítható ez a viselkedés, mert ezzel az határozható meg, hogy hogyan kell kiszámítani egy elem helyfoglalását, a szélességét és magasságát, azaz legyenek a bélések és a szegélyhatárok benne vagy sem.

**Négyféle beállítást lehet alkalmazni:**
- A **content-box** érték az alapértelmezett CSS-dobozméretezési viselkedést határozza meg, azaz sem a béléseket, sem a szegélyeket, sem a margókat nem számolja bele a megadott szélességi és magassági értékekbe. Így tehát ha pl. egy elem szélességét 100 képpontra állítja, akkor az elem tartalomdoboza 100 képpont széles lesz, és a szegély vagy kitöltés szélessége hozzáadódik a végső renderelt szélességhez, így az elem 100 képpontnál szélesebb lesz.
- A **border-box** érték viszont arra utasítja a böngészőt, hogy vegye figyelembe a szegélyeket és béléseket az elemek szélességéhez és magasságához megadott értékekben, vagyis a megadott width és height értékéből levonja a padding és a border értékét, majd az így kapott szélességi és magassági értékkel rendelkező terület lesz a content mérete. Ha tehát pl. egy elem szélességét 100 képpontra állítja, a szegély 5 képpontos, a bélések pedig 10 képpont nagyságúak, akkor a content szélességére 100 – 2*5 – 2*10 = 70 képpont marad, tehát a tartalom doboza „összezsugorodik”, hogy elnyelje az extra szélességet. Ez általában sokkal könynyebbé teszi az elemek méretezését. (Ezt az alapértelmezést használják a böngészők a table, a select, a button és az input elemekhez is.)
- Az **initial** érték a korábban meghatározott értéket jelenti.
- Az **inherit** érték pedig azt mutatja a böngészőnek, hogy az elem a szülőelemtől örökli ezt a tulajdonságértéket

**Ha egy blokkszintű elemre nem adunk meg külön szélességi (width) és magassági (height) értéket, akkor a szélességét a szülőtől örökli (de alaphelyzetben akkora, mint a böngészőablak szélessége), a magasságát pedig a blokkszintű elem tartalmának mérete határozza meg!**

**A sorközi objektumok méretét viszont mindig a tartalmuk nagysága határozza meg.**
:::

### A dobozmodellel kapcsolatos tulajdonságok megadása – szélesség és magasság

Egy HTML-elem méretének a beállítására az alábbi tulajdonságokat használhatjuk:
- **width** = az elem szélessége
- **max-width** = az elem legnagyobb szélessége (ennél nem lehet szélesebb, **alapértéke none**)
- **min-width** = az elem legkisebb szélessége (ennél nem lehet keskenyebb, **alapértéke 0**)
- **height** = az elem magassága
- **max-height** = az elem legnagyobb magassága (ennél nem lehet magasabb, **alapértéke none**)
- **min-height** = az elem legkisebb magassága (ennél nem lehet alacsonyabb, **alapértéke 0**)

Lehetséges megadási módok:
- auto (alapbeállítás): a böngésző maga határozza
- initial: beállítja a tulajdonságot az alapértelmezett értékére
- inherit (örökölt): a szülőtől örökölt érték
- abszolút értékben: px, pt, cm, em 

**Példa:**
```css
	p { height: 100px; }
```
- relatív értékben: a befoglaló blokk szélességének %-ában

**Példa:**
```css
	div { width: 80%; }
```

## Belső margó beállításai - `padding`
---

- A belső margó a szegély és a tartalom közötti távolságot jelenti.
- A padding CSS tulajdonsággal tudod beállítani.
- Az értéke lehet abszolút (px)/relatív (em, rem, %) mértékegységű számérték.

#### Példa:
1. **Egy paraméter** esetén mind a négy oldalon ugyanakkora belső margót állíthatsz be.
```css
    p {
        padding:15px;
    }
```
2. **Két paraméter** esetén:
- Első paraméterrel a függőleges irányú belső margót tudod beállítani.
- Második paraméterrel a vízszintes irányú belső margót tudod beállítani.
```css
    p {
        padding:15px 30px;
    }
```
3. **Négy paraméter** esetén a felső belső margótól kezdve az **óramutató járásával megegyező irányba** állíthatod be az egyes oldalak belső margóját.

- Első paraméter: felső belső margó
- Második paraméter: jobb oldali belső margó
- Harmadik paraméter: alsó belső margó
- Negyedik paraméter: bal oldali belső margó
```css
    p {
        padding:15px 25px 35px 45px;
    }
```
### Belső margó - irány szerinti bontása

A padding CSS tulajdonság a négy irány szerint tovább bontható. 
- **padding-top:** Felső belső margó
- **padding-right:**  Jobb oldali belső margó
- **padding-bottom:** Alsó belső margó
- **padding-left:** Bal oldali belső margó

## Külső margó beállításai - `margin`
---
- A külső margó a szegélyen kívül helyezkedik el, az elemek eltartását, távolságát jelenti.
- A margin CSS tulajdonsággal tudod beállítani.
- Az értéke lehet abszolút (px)/relatív (em, rem, %) mértékegységű számérték.

#### Példa:
1. **Egy paraméter** esetén mind a négy oldalon ugyanakkora külső margót állíthatsz be.
```css
    p {
        margin:15px;
    }
```
2. **Két paraméter** esetén:
- Első paraméterrel a függőleges irányú külső margót tudod beállítani.
- Második paraméterrel a vízszintes irányú külső margót tudod beállítani.
```css
    p {
        margin:15px 30px;
    }
```
3. **Négy paraméter** esetén a felső külső margótól kezdve az **óramutató járásával megegyező irányba** állíthatod be az egyes oldalak külső margóját.

- Első paraméter: felső külső margó
- Második paraméter: jobb oldali felső margó
- Harmadik paraméter: alsó külső margó
- Negyedik paraméter: bal oldali külső margó
```css
    p {
        margin:15px 25px 35px 45px;
    }
```

:::warning Alsó és felső külső margók mértékének eltérése

**Szabvány szerinti szabály:**
- Ha az elemek alsó és felső külső margójának mértéke eltér, akkor az értékek közül a nagyobbik érték fog érvényesülni a böngészőben.
- Azaz a böngésző csak a nagyobb külső margó beállítást fogja érvényesíteni.
:::

### Külső margó - irány szerinti bontása

A margin CSS tulajdonság a négy irány szerint tovább bontható. 
- **margin-top:** Felső külső margó
- **margin-right:**  Jobb oldali külső margó
- **margin-bottom:** Alsó külső margó
- **margin-left:** Bal oldali külső margó

## Középre igazítás külső margó segítségével
---
A blokk szintű elemeket automatikus külső margó segítségével lehet vízszintesen középre igazítani.
- Ebben az esetben a bal és jobb oldali külső margó értékét **auto** –ra kell állítanod.
```css
    p {
        background-color: rgb(173, 214, 241);
        width: 300px;
        margin-left:auto;
        margin-right:auto;
    }
```
**A blokk szintű elem középre igazítása nem egyezik meg a szöveg igazítással (text-align)!**

## Szegély beállításai - `border` – Shorthand parancs
---

```css
    border: border-width border-style border-color;
```

- A szegély a belső margó határán helyezkedik el.
- A szegély beállítását a border rövid paranccsal adhatod meg.

#### A megadási sorrend számít:
- *Első paraméter:* a **border-width**, a szegély vastagsága
- *Második paraméter:* a **border-style**, a szegély stílusa
- *Harmadik paraméter:* a **border-color**, a szegély színe

:::important FONTOS!
Ha a szegély stílusát nem határozod meg, akkor nem jelenik meg a szegély.
:::

**A leggyakrabban használt szegély stílusok:**
- **none** – nincs szegély
- **solid** – folytonos szegély
- **dotted** – pontozott szegély
- **dashed** – szaggatott szegély
- **double** – dupla szegély

![Border](/img/border.jpg)

- **groove** - bemélyített
- **ridge** - kidomborodó
- **inset** - süllyesztett
- **outset** - kiemelkedő

![BorderStyle](/img/border_style.jpg)

### Szegély - irány szerinti bontása

A border CSS tulajdonság a négy irány szerint tovább bontható.

- **border-top:** Felső szegély
- **border-right:**  Jobb oldali szegély
- **border-bottom:** Alsó szegély
- **border-left:** Bal oldali szegély

### Szegély – irány és tulajdonság szerinti bontás kombinálása

```css
    border-irány-tulajdonság: érték;
```

:::important FONTOS!
Az alábbi táblázat a `border-*-*` tulajdonságok lehetséges értékeit mutatja be:

| CSS tulajdonság                | Leírás                                  |
|--------------------------------|------------------------------------------|
| `border-top-width: 2px;`       | Felső szegély vastagsága 2 pixel         |
| `border-top-style: solid;`     | Felső folytonos szegély                  |
| `border-top-color: green;`     | Felső szegély színe zöld                 |
| `border-bottom-width: 5px;`    | Alsó szegély vastagsága 5 pixel          |
| `border-bottom-style: double;` | Alsó szegély stílusa dupla vonalú        |
| `border-bottom-color: blue;`   | Alsó szegély színe kék                   |
:::

## Lekerekítés - `border-radius`
---
Az elemek sarkait a border-radius CSS tulajdonsággal tudod lekerekíteni.

```css
    border-radius: érték;
```
**Az érték lehet:**
- Számérték: 20px
- Százalék: 50%
- Arányok: 1.2em, vagy 2.5rem

#### Példa:
1. **Egy paraméter esetén** mind a négy sarok lekerekített lesz az adott mértékkel
```css
    img {
        border-radius: 30px;
    }
```

2. **Ha a border-radius két paraméteres**, akkor
- **Első paraméter** a bal felső és a jobb alsó sarok lekerekítését jelenti.
- **Második paraméter** a jobb felső és a bal alsó sarok lekerekítését jelenti.

![BorderRadius_2p](/img/border_radius_kp.jpg)

3. **Ha a border-radius négy paraméteres**, akkor
- **Első paraméter:** a bal felső sarok lekerekítése
- **Második paraméter:** a jobb felső sarok lekerekítése
- **Haramdik paraméter:** a jobb alsó sarok lekerekítése
- **Negyedik paraméter:** a bal alsó sarok lekerekítése

![BorderRadius_4p](/img/border_radius_4p.jpg)