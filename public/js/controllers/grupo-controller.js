angular.module('cadastroclientes')
	.controller('GrupoController', function($scope, $http) {
		
		$http.get('/v1/grupos')
			.success(function(grupos) {
				$scope.grupos = grupos;
			})
			.error(function(error) {
				console.log(error);
			});
	});