var http = require('http'),
	fs = require('fs'),
	puerto = 2500,

var file = fs.readFileSync('archivo.csv', (err, data)=> {
	if (err) throw err;
});

http.createServer(function(req, res){
	var archivo = file.toString();
	var arr = archivo.split("\n");
	res.writeHead(200, {"Content-Type": "application/json"});
    res.write(JSON.stringfy({ arreglo: arr}));
	res.end();    	
}).listen(puerto);

console.log("Escuchando en el puerto" , puerto);