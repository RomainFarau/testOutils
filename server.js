var http = require('http'); //On recupere le package.
var server = http.createServer();
server.on('request', function(req, res){
	console.log("gop");
	res.writeHead(200, {'content-type': 'text/plain'});
	res.write('Bonjour Nantes');
	res.end();
});

var port = 8080;
server.listen(port);
server.once('listening',function(){
	console.log('Server démarré sur le port %d', port);
});