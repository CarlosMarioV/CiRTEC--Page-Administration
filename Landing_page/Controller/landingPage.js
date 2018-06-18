var app = angular.module("cirtec")
  .controller('LandingPageCtrl', function ($scope) {
    var home = this;
    home.saludar = 'Hola, mundo';
    console.log('Hola, estoy en el controlador.');
  });