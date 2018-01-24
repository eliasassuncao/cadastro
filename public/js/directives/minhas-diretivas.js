angular.module('minhasDiretivas', [])
	.directive('meusClientes', function() {
		var ddo = {};

		ddo.restrict = "AE";

		ddo.transclude = true;

		ddo.scope = {
			nome: '@',
			sexo: '@',
			cpf: '@',
			ddn: '@',
			telefone: '@'
		};

		ddo.templateUrl = 'js/directives/meus-clientes.html';

		return ddo;
	})
	.directive('relogio', function($interval){
  return{
    restrict: 'AE',
    link: function(scope, element, attrs){

      var timer = $interval(function(){
        mudaTempo();
      },1000);

      function mudaTempo(){
         element.text((new Date()).toLocaleString());
      }
    }
	}
});