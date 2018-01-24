var api = {};

var CONTADOR = 2;

var clientes = [
	{
		_id: 1,
		nome: 'Elias',
		sexo: 'masculino',
		cpf: '540.530.312/64',
		ddn: '19/03/1998',
		telefone: '35533-2731'
	},
	{
		_id: 2,
		nome: 'seila',
		sexo: 'n sei',
		cpf: '540.5330.312/64',
		ddn: '19/03/2018',
		telefone: '35533-2731'
	}
];

api.lista = function(req, res) {
	res.json(clientes);
};

api.adicionaCliente = function(req, res) {
	var cliente = req.body; //conteudo pego no formulario
	cliente._id = ++CONTADOR;
	clientes.push(cliente);

	res.json(cliente);
};


api.buscaCliente =  function(req, res) {

	var cliente = clientes.find(function(cliente) {
		return cliente._id == req.params.id;
	});

	res.json(cliente);
};

api.deletaCliente = function(req, res) {

	clientes = clientes.filter(function(cliente) {
		return cliente._id != req.params.id;
	});	
	
	res.sendStatus(204);	 

};

api.editarCliente = function(req, res) {

	var cliente = req.body;
	var clienteId = req.params.id;

	var indice = clientes.findIndex(function(cliente) {
		return cliente._id == clienteId;
	});

	clientes[indice] = cliente;

	res.sendStatus(200);
}

module.exports = api;