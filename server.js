const http = require('http')
const httpProxy = require('http-proxy')

var proxy = httpProxy.createProxyServer({ changeOrigin : true , ignorePath : true })

var server = http.createServer(function(req, res) {
  res.setHeader( 'Access-Control-Allow-Origin' , req.headers['Origin'] || '*' )
  const target = req.url.substring(1)
  console.log( target )
  proxy.web(req, res, { ignorePath : true , target })
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});
