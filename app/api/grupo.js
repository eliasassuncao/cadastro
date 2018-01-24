var api = {};

api.lista = function(req, res){
	
	var sexo = [
		{
			_id: 1,
			sexo: 'Masculino'	
		},
		{
			_id: 2,
			sexo: 'Feminino'	
		}
	];

	res.json(sexo);

};

module.exports = api;