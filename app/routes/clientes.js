module.exports = function(app) {

	var api = app.api.clientes;

	app.route('/v1/clientes')
		.get(api.lista)
		.post(api.adicionaCliente);

	app.route('/v1/clientes/:id')
		.get(api.buscaCliente)
		.delete(api.deletaCliente)
		.put(api.editarCliente);
}