var app = angular.module('CiRTEC', []);

app.controller('SinglePageCtrl', function () {
    var vm = this;
    vm.saludar = 'Hola, mundo single page.';
    console.log('Hola, estoy en el controlador single page.');
});