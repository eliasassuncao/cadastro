angular.module('cadastroclientes').controller('ClientesController', function($scope, serviceClientes) {

	$scope.clientes = [];
	$scope.mensagem = '';
	$scope.filtro = '';

	serviceClientes.query(function(clientes) {
		$scope.clientes = clientes;
		//console.log('Adicionei os clientes no scopo.');
	}, function(error) {
		console.log(erro);
	});

	
	$scope.remover = function(cliente) {

		serviceClientes.delete({clienteId: cliente._id}, function() {
			var indice = $scope.clientes.indexOf(cliente);
			$scope.clientes.splice(indice, 1);
			$scope.mensagem = 'Cliente ' + cliente.nome + ' removido com sucesso!!';
			console.log('Removido com sucesso');
		}, function(erro) {
			console.log('Erro ao apagar');
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar';
		});
	}
});