var http = require('http');
var _ = require('lodash');
var arr = [1,2,3,4,"Gato"];
var puerto = 8000;

http.createServer(function(req, res){
	res.writeHead(200);
	res.write('Saludos a todos');
	_.each(arr, function(val, i){
		console.log(val, "Texto extra");
	})
	res.end();
}).listen(puerto);
console.log("Estamos escuando en el puerto", puerto);