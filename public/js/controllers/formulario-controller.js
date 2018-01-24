angular.module('cadastroclientes')
	.controller('FormularioController', function($scope, cadastrarCliente, $routeParams, serviceClientes, $interval) {

	//$scope.date = new Date();
	$scope.cliente = {};
	$scope.mensagem = '';

	if($routeParams.clienteId) {
		serviceClientes.get({clienteId: $routeParams.clienteId}, function(cliente) {
			$scope.cliente = cliente;
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível obter os dados do cliente'
		});
	}

	$scope.submit = function() {
		
		if($scope.formulario.$valid){
			cadastrarCliente.cadastrar($scope.cliente) 
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao)  $scope.cliente = {};
			})
			.catch(function(error){
				console.log('DEU PAL');
				$scope.mensagem = error.mensagem;
			});
		}	
	}

});