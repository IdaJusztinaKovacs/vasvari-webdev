---
id: html4-color
title: 4. tananyag
sidebar_position: 4
---

# 4. Színek megadása HTML-ben és CSS-ben

## Színkeverés

Színeket többféle objektumnak megadhatunk: színt kaphatnak például a karakterek, vonalak, sőt
még a háttér vagy a szegély is, azonban a szín kialakítása minden esetben ugyanazon elvek alapján történik. (Maguknak a színeknek a megadása többféle módon is történhet. Az arculattervezés során használt grafikai programok is számos színkoordinárendszert ismernek, így szabadon választhatunk, hogy melyik szerint adjuk meg a színeket.)

A színt meghatározó érték sokféle lehet, megadhatjuk kulcsszóval, de akár kódokkal is.

A színkeverés három alapszínből valósítható meg.

A színek keverésében kétféle keverési módot különböztetünk meg.

- Az egyik az **additív, vagyis összeadó színkeverés**, amely a színes fények keverését
  jelenti. Három alapszíne a vörös, a zöld és a kék, ezért hívják RGB-színsémának is. Általában ezt alkalmazzuk akkor, ha valamilyen számítógépes kijelzőn szeretnénk színe-
  ket használni.

- A másik módszer a **szubsztraktív, azaz a kivonó színkeverés**, amikor a fehér fényből
  kivonunk színeket (hullámhossztartományokat). Ez a színes anyagok, folyadékok és
  pigmentek keverése. A szubtraktív színkeverés nyomdászatban használt változatának
  alapszínei a türkizkék, a bíbor és a sárga. A színkódolásnál a CMYK (cyan, magenta,
  yellow, key) rövidítést használják, amelyben a „key” szó a fekete színre, mint nyomdászati kulcsszínre utal. A színkeverési módszer lényege, hogy ha a piros színt szeretnénk létrehozni, akkor sárga és bíbor színeket keverünk, mivel ezek elnyelik a kéket, a türkizkéket és a zöldet, a visszavert fényben csak a piros szín hullámhossza marad meg.

## Színek nevei

A CSS2 szabványban 16 színt már az angol nevükkel is megadhattunk: white (fehér), black
(fekete), red (piros), green (zöld), blue (kék), gray (szürke), silver (ezüstszürke), yellow (sárga),
purple (lila), aqua (akvamarinkék), navy (mélykék), teal (pávakék), fuchsia (mályvaszín), maroon
(gesztenyebarna), lime (világoszöld), olive (olajzöld). A mai modern böngészők már 147
színnév használatát támogatják (ld. https://www.w3schools.com/cssref/css_colors.asp), ebből
17 az alapszínek száma.

## Hexadecimális RGB-kód

A legelterjedtebb módszer szerint a három RGB-alapszín (vörös, zöld, kék) intenzitását
kétjegyű hexadecimális számokkal adjuk meg `#` jellel az elején.

Így egy szín kódja: ` #r1 r2 g1 g2 b1 b2`,

amelyben r1r2 a piros, g1g2 a zöld és b1b2 a kék szín intenzitását adja meg. A #r1r2g1g2b1b2
megadásnál az r1r2, g1g2 és b1b2 értékek hexadecimálisan, a 00 és FF között adják meg az adott szín erősségét.
Közöttük a 00 a legsötétebb és az FF pedig a legvilágosabb.

A hexadecimális számoknál a 9 feletti értékeket jelképező betűket mind kisbetűvel, mind nagybetűvel megadhatjuk.

Például: a `#FF0000` a piros, a `#00FF00` a zöld, a `#0000FF` a kék, a `#000000` a fekete, a `#FFFFFF`
a fehér színeket határozza meg.

Rövidítve is írható a #rgb formában.

A 00, 33, 66, 99, CC, FF karakterpárok kombinációiból előállított összesen 216 színt
webtűrő (webbiztos) színeknek nevezzük, mert ezek elvileg minden eszközön és operációs
rendszeren majdnem azonos árnyalatban jelennek meg (azaz számítógéptől függetlenek).

## Decimális RGB-kód

Az alapszínek intenzitását a 0 és a 255 közötti egész számokkal is megadhatjuk:
rgb(r,g,b), pl. `rgb(122, 205, 15).`

## Százalékos RGB-kód

Az RGB-kódok megadása százalékos értékekkel is lehetséges: rgb(rrr%,ggg%,bbb%),
ekkor az egyes komponensek értékei csak a 0% és 100% közötti zárt intervallumba eshetnek,
pl. `rgb(15%, 98%, 57%)`. (A 0% éppen nullát, a 100% pedig 255-öt jelent, illetve a százalékjelet
közvetlenül a szám után kell írni.)

## HSL-kód

A színeket megadhatjuk úgy is, hogy a színárnyalatot (hue), a színtelítettséget (saturation)
és a világosságot (lightness) határozzuk meg.

A HSL-kód szintaxisa: hsl(hhh,sss%,lll%).

## RGBA-kód, HSLA-kód

A CSS3 egyik gyakran használt új funkciója az átlátszóság. (A grafikai programokban is
rendszeresen alkalmazunk átlátszó színeket vagy rétegeket.)

Az átlátszóság mértékét transparency, az átlátszatlanságot opacity néven találhatjuk általában
a programokban, illetve (mint itt is) az úgynevezett alfa csatorna (rövidítve A) segítségével
tudunk átlátszóságot beállítani. A CSS-szabványban az alfa csatorna értéke a `[0;1]` intervallumból vett (valós) érték, amelynél a 0 érték a teljesen átlátszót, az 1 pedig a teljesen átlátszatlan változatot jelenti.

Ha egy RGB-kódhoz szeretnénk alfa csatornát megadni, akkor az rgb helyett az rgba szerinti kódmegadást kell használni úgy, hogy a három színösszetevő mögött negyedikként
az átlátszóság mértékét jelző értéket kell megadni: rgba(red,green,blue,alpha), például:`rgba(100,25,42,0.3)`.

A hsl esetén ugyanígy kell eljárni: a hsla szerinti kódban a negyedik jelöli az átlátszóság mértékét: hsla(hue,saturation,lightness,alpha), pl. egy ilyen lehetséges kód: `hsla(120,100%,25%,0.8)`.
