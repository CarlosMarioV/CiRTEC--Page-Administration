var angular;
angular.module("cirtec", ["ngRoute"])
	.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl: 'Landing_page/landingPage.html',
				controller: "LandingPageCtrl as home"
			})
			.when(
				'/login', {
					templateUrl: 'login/login.html',
					controller: 'LoginCtrl as login'
				})
			.when(
				'/sigle_page', {
					templateUrl: 'single-page/single-project.html',
					controller: 'SinglePageCtrl as singlepage'
				})
			.when(
				'/manage_projects', {
					templateUrl: 'manage-projects/manage-projects.html',
					controller: 'ManageProjectsCtrl as manageprojects'
				})
			.otherwise({
				redirectTo: '/'
			})
	});

/**
 * var angular;
angular.module('CiRTEC', ["ngRoute"])
	.config(function ($routeProvider) {
		$routeProvider
			.when("/", {
				url: '',
				templateUrl: 'Landing_page/landingPage.html',
				controller: 'LandingPageCtrl',
				controllerAs: 'home'
			})
			.when(
				'/login', {
					url: '/login',
					templateUrl: './login/login.html',
					controller: 'LoginCtrl',
					controllerAs: 'login'
				})
			.when(
				'/sigle_page', {
					url: '/sigle_page',
					templateUrl: './single-page/single-project.html',
					controller: 'SinglePageCtrl',
					controllerAs: 'singlepage'
				})
	});
 */