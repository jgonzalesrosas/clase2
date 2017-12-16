/*var http = require('http');
var puerto = 3000;
http.createServer(function(req, res){
	res.writeHead(200);
	res.write("Hola mundo\n");
	res.end();
}).listen(puerto);

console.log("Estamos escuchando en el puerto", puerto);
*/

var http = require('http');
var puerto = 3000;

var manejador = function(req, res){
	res.writeHead(200);
	console.log("Esta respuesta solo lo ve el servidor");
	res.write('Hola mundo\n');
	res.end();
}

var servidor = http.createServer(manejador);
servidor.listen(puerto);
console.log("Estamos escuchando en el puerto", puerto);