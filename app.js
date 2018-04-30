var static = require('node-static');
var file = new static.Server();

require('https').createServer(function (res, req){
  req.addListner('end', function(){
    file.server(req, res);
  }).resume();
}).listen(process.env.PORT || 3000);
