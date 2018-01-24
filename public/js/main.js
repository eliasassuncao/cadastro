angular.module('cadastroclientes', ['minhasDiretivas', 'ngRoute', 'ngResource', 'meusServicos','ui.utils.masks'])
	.config(function($routeProvider, $locationProvider, $httpProvider){

		//$locationProvider.html5Mode(true);

		$routeProvider.when('/clientes', {
			templateUrl: 'partials/principal.html',
			controller: 'ClientesController'
		});

		$routeProvider.when('/clientes/new', {
			templateUrl: 'partials/form.html',
			controller: 'FormularioController'
		});

		$routeProvider.when('/clientes/edit/:clienteId', {
			templateUrl: 'partials/form.html',
			controller: 'FormularioController'
		});

		$routeProvider.otherwise({redirectTo: '/clientes'});
	});