var http = require('http');
var puerto = 3000;

http.createServer(function(req, res)){
	res.writeHead(200);
	res.write('Hola mundo');
	setTimeout(function(){
		res.end();
		console.log("El proceso termino");
	}, 5000);
}).listen(puerto);

console.log("Estamos escuchando en el puerto", puerto);
