---
id: 1_tananyag
sidebar_position: 1
sidebar_label: "1. tananyag"
title: "1. Bevezetés"
---

## Mi az a Bootstrap?
---

A Bootstrap egy ingyenes, nyílt forráskódú frontend keretrendszer, amely előre elkészített HTML, CSS és JavaScript elemeket biztosít reszponzív weboldalak készítéséhez.

#### Miért hasznos?

- gyors fejlesztés
- egységes dizájn
- reszponzív rácsrendszer
- rengeteg kész komponens (gombok, űrlapok, menük, modálok stb.)

Bootstrap honlapja: https://getbootstrap.com

## Kezdő lépések
---
### Bootstrap beágyazása külső szolgáltatótól (CDN)

A **Bootstrap** külső szolgáltatónál elhelyezett **CSS állomány**át egyszerűen beemelhetjük HTML állományainkba egy link segítségével (ezt a HTML dokumentum fejlécében kell elhelyezni):

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
```

Egyes interaktív szolgáltatások eléréséhez szükség van a **Bootstrap JavaScript állomány**ára is. Ehhez a következő sort el kell helyezni a HTML állomány lezáró body eleme előtt:

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

#### Bootstrap sablon

```html
<!doctype html>
<html lang="hu">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap példa</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao1+N9Lki47SRGZiV1EkBU1de1LKnf0KSssv" crossorigin="anonymous">
  </head>
  <body>

    <h1 class="text-center mt-4">Bootstrap 5 működik!</h1>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>
```
### Bootstrap bemelése a HTML állomány mellé

A Bootstrap állományait közvetlenül is elhelyezhetjük a HTML fájljaink mellett. Ehhez töltsük le a Bootstrap csomagot, majd a kapott ZIP állomány kicsomagolása után helyezzük el a szükséges CSS fájlokat a HTML mellé, illetve – ha interaktív elemeket is használunk – a JavaScript fájlokat is.

A Bootstrap 5.0.2 verziójának előre összeállított, minifikált CSS- és JS-fájljai az alábbi oldalról tölthetők le, és közvetlenül felhasználhatók a projektben: https://getbootstrap.com/docs/5.0/getting-started/download/#compiled-css-and-js

#### Offline Bootstrap sablon

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Offline Példa</title>

    <!-- Bootstrap CSS (offline) -->
    <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.min.css">
</head>

<body>

    <div class="container mt-5">
        <h1 class="text-primary">Bootstrap offline használata</h1>
        <p>Ez a weboldal a letöltött Bootstrap fájlokat használja internetkapcsolat nélkül is.</p>

        <button class="btn btn-success">Példa gomb</button>
    </div>

    <!-- Bootstrap Bundle JS (Popperrel együtt) -->
    <script src="bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

:::warning FONTOS!
A **saját CSS-t mindig a Bootstrap után kell betölteni**, hogy felül tudja írni a Bootstrap stílusait.
:::

### Ajánlott mappastruktúra

```text
projekt/
│
├─ index.html
│
├─ css/
│   └─ sajat.css
│
├─ js/
│   └─ sajat.js
│
├─ bootstrap-5.1.3-dist/
│   ├─ css/
│   └─ js/
```


