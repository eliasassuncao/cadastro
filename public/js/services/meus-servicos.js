angular.module('meusServicos', ['ngResource'])
	.factory('serviceClientes', function($resource) {

		return $resource('/v1/clientes/:clienteId', null, {
			'update' : {
				method: 'PUT'
			}
		});
	})
	.factory("cadastrarCliente", function(serviceClientes, $q, $rootScope) {
		var service = {};
		var evento = 'fotoCadastrada';

		service.cadastrar = function(cliente) {
			return $q(function(resolve, reject) {

				if(cliente._id){
					serviceClientes.update({clienteId: cliente._id}, cliente, 
					function() {
						$rootScope.$broadcast(evento);
						resolve({
							mensagem: 'Cliente ' + cliente.nome + ' atualizado com sucesso',
							inclusao: false
						},
						function(error) {
							console.log(error);
							reject({
								mensagem: 'Não foi possivel atualizar o cliente ' + cliente.nome
							});
						});
					})
				} else {
					serviceClientes.save(cliente, 
						function() {
							$rootScope.$broadcast(evento);
							resolve({
								mensagem: 'Cliente ' + cliente.nome + ' incluido com sucesso',
								inclusao: true
							});
						}, function(error) {
							console.log(error);
							reject({
								mensagem: 'Erro ao incluir o ' + cliente.nome
							});
						});
				}
			});
		}

		return service;
	});