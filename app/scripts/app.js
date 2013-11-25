'use strict';

angular.module('fxOsApp', ['ngRoute', 'fxelement'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/main', {
				templateUrl: '/views/main.html',
				controller: 'MainCtrl'
			})
			.when('/main2', {
				templateUrl: '/views/main2.html',
				controller: 'Main2Ctrl'
			})
			.otherwise({ redirectTo: '/main' });
	});