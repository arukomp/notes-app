var httpServer = require("http-server");
var path = require("path");

var pathToHTMLAndJSFiles = path.join(__dirname, "./");
var server = httpServer.createServer({ root: pathToHTMLAndJSFiles });
server.listen(4567);
console.log('Server is running locally on port 4567');
