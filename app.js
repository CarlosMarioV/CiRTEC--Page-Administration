var miapp = angular.module('CiRTEC', ['ui.router']);
miapp.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state(
			'landing_page', {
				url: '/',
				templateUrl: './Landing_page/landingPage.html',
				controller: 'LandingPageCtrl',
				controllerAs: 'home'
			})
		.state(
			'login', {
				url: '/login',
				templateUrl: './login/login.html',
				controller: 'LoginCtrl',
				controllerAs: 'login'
			})
		.state(
			'sigle_page', {
				url: '/sigle_page',
				templateUrl: './single-page/single-project.html',
				controller: 'SinglePageCtrl',
				controllerAs: 'singlepage'
			})
});