---
id: 6_tananyag
sidebar_position: 6
sidebar_label: "6. tananyag"
title: "6. Bootstrap 5 komponensek"
---
# Komponensek

A Bootstrap komponensei előre elkészített felhasználói felület darabkák, rendszerint egy kötött formátumú HTML struktúrából állnak, amire a Bootstrap CSS stílusai, és adott esetben a Bootstrap JavaScript hatással van.

Ebben a fejezetben bemutatásra kerülő komponensek a legjellemzőbben használtak közül lettek kiválogatva, bővebben a komponensekről az alábbi linken olvashatunk:&#x20;

https://getbootstrap.com/docs/5.0/components/accordion/

## Kártya
---
A kártyákban különböző tartalmakat helyezhetünk el, például képet a tetején vagy az alján a `card-img-bottom` és `card-img-top` osztályokkal (ezt a képen kell elhelyezni).

```html
<div class="card" style="width: 18rem;">
  <img src="duckling.jpg" class="card-img-top" alt="Kiskacsa">
  <div class="card-body">
    <h3 class="card-title">Házikacsa</h3>
    <p class="card-text">A házikacsa (Anas platyrhynchos domestica) a récefélék családjába tartozó baromfi, a tőkés réce (vadkacsa) alfaja, háziasított változata...</p>
    <a href="#" class="btn btn-primary">Réce rendelés</a>
  </div>
</div>
```

![](https://4266704503-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LNfhge3bZW-4Qpjzwtx%2F-M0cwt_VcHUnRy0eRYkw%2F-M0d63I4atcl0e3n97N1%2Fcard.png?alt=media\&token=86dd9240-1677-419c-9843-ecb6c117172c)

A kártyában elhelyezett `card-body` osztályú elem gondoskodik az elemek eltartásáról:&#x20;

```html
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <img src="duckling-t.jpg" class="img-fluid rounded mb-3" alt="Kiskacsa">
    <h5 class="card-title">Házikacsa</h5>
    <p class="card-text">A házikacsa (Anas platyrhynchos domestica) a récefélék családjába tartozó baromfi, a tőkés réce (vadkacsa) alfaja, háziasított változata...</p>
    <a href="#" class="btn btn-primary">Réce rendelés</a>
  </div>
</div>
```

![](https://4266704503-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LNfhge3bZW-4Qpjzwtx%2F-M0cwt_VcHUnRy0eRYkw%2F-M0d7TCSWY5FFsNOeJ7J%2Fcard-body.png?alt=media\&token=8626fce9-f1b4-4de7-b86d-7198363ab6af)

A kártyákban el lehet helyezni előre formázott listákat, ezekből  függőleges navigációs menü szervezhető:&#x20;

```html
<div class="card" style="width: 18rem;">
    <div class="card-header fw-bold">
        Kacsaféléink
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item"><a href="#">Házikacsa</a></li>
        <li class="list-group-item"><a href="#">Indiai futókacsa</a></li>
        <li class="list-group-item"><a href="#">Tőkés kacsa</a></li>
    </ul>
</div>
```

![](https://4266704503-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LNfhge3bZW-4Qpjzwtx%2F-M0cwt_VcHUnRy0eRYkw%2F-M0dDDAfjQyuQB7M5Q_x%2Fvertical-menu.png?alt=media\&token=594c3ae0-10fe-4db7-94e4-f5fd761a2238)

## Gomb
---
A Bootstrap gomb komponense jelentéstartalomtól függő megjelenést biztosít a linkeknek (`a`), és a [gomb](https://digikiad.gitbook.io/digitalis-kiadvanyok/html/html-elemek#urlapok) elemeknek (`button`).

```html
<a href="#" class="btn btn-primary">Elsődleges</a>
<a href="#" class="btn btn-secondary">Másodlagos</a>
<a href="#" class="btn btn-success">Siker</a>
<a href="#" class="btn btn-danger">Veszély</a>
<a href="#" class="btn btn-warning">Figyelmeztetés</a>
<a href="#" class="btn btn-info">Információs</a>
<a href="#" class="btn btn-light">Világos</a>
<a href="#" class="btn btn-dark">Sötét</a>
```

![](https://4266704503-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LNfhge3bZW-4Qpjzwtx%2F-M1LoZtjzgECZft_iinS%2F-M1Lwin8ar4F3saIk5Ji%2Fbuttons.png?alt=media\&token=59d5ec87-793a-4fb6-8027-adfa3c58f00b)

Használhatunk `a` vagy `button` elemet, a megjelenésük meg fog egyezni:

```html
<a href="#" class="btn btn-primary">Én egy link vagyok</a>
<button type="button" class="btn btn-primary">Én egy gomb vagyok</button>
```

![](https://4266704503-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LNfhge3bZW-4Qpjzwtx%2F-M1LoZtjzgECZft_iinS%2F-M1LxemWLlylvAqMg1OM%2Fa-button.png?alt=media\&token=042384ca-2cb8-4509-8730-5bec5b8e7011)

A `btn-sm` és a `btn-lg` CSS osztályokkal kis és nagy méretű gombokat tudunk létrehozni:

```html
<a href="#" class="btn btn-primary btn-sm">Kis gomb</a>
<a href="#" class="btn btn-primary">Közepes gomb</a>
<a href="#" class="btn btn-primary btn-lg">Nagy gomb</a>
```

![](https://4266704503-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LNfhge3bZW-4Qpjzwtx%2F-M1LoZtjzgECZft_iinS%2F-M1LyfD_fs5EqAHqAv2S%2Fbutton-sizes.png?alt=media\&token=d4603fb5-b8a1-4767-9b75-2a7e214dc7c9)

