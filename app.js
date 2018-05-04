var miapp = angular.module('CiRTEC', ['ui.router']);
miapp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('landing_page', {
    url: '/',
    templateUrl: './Landing_page/landingPage.html',
    controller: 'LandingPageCtrl',
    controllerAs: 'home'
  });
});
