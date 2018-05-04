var app = angular.module('CiRTEC', []);

app.controller('LandingPageCtrl', function() {
  var home = this;
  home.saludar = 'Hola, mundo';
  console.log('Hola, estoy en el controlador.');
});
