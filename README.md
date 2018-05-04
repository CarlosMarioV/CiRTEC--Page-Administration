# Proyecto: CiRTEC

## Introducción

Este proyecto consta de una pequeña pagina web para la comunidad de robotica del Tecnologico de Costa Rica, se realizo para el curso de "Introducción al desarrollo de aplicaciones web" del 2018.

#### Notas:

* Se usa angular@1.6.9 con el enrutador uirouter/angular@1.0.15

Para la primera entrega, el landing page estara en la pagina index.html y se referenciara a su controlador dentro de este mismo ya que para implementar las rutas en AngularJS con UI Router se necesita un servidor activo de lo contrario mandara un error y no mostrara la pagina.

Para las direcciones URL => https://ui-router.github.io/tutorials/

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>CiRTEC</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="" />

    <!-- Load angular@1.6.9 and uirouter/angularjs@1.0.15-->
    <script src="./node_modules/angular/angular.js"></script>
    <script src="./node_modules/@uirouter/angularjs/release/angular-ui-router.js"></script>

    <!-- Load routers -->
    <script src="app.js"></script>

    <!-- Load controller-->
    <script src="./Landing_page/Controller/landingPage.js"></script>

</head>

<body ng-app="CiRTEC">
    <div>
        <ui-view></ui-view>
    </div>

</body>

</html>
```

## Parallax

parallax simple puro:

* https://www.youtube.com/watch?v=VPdiPff02Qg : Español
* https://www.youtube.com/watch?v=vEdrNJHiXXY : --

* https://www.youtube.com/watch?v=ZDcMe-uMAXI : con el nav solo arriba :: mbd
* https://www.youtube.com/watch?v=LOWjWRy_Kks : con el nav trasnparente :: css
