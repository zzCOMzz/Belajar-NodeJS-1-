var server = require('http');
var fs = require('fs');
var url  = require('url');

function switchUrl(req,res){
    var pathUrl = url.parse(req.url).pathname;

    switch (pathUrl){
        case '/' :
            templateUrl('./pages/Home.html',res);
            break;
        case '/one':
            templateUrl('./pages/PageOne.html',res);
            break;
        default :
            res.writeHead(404,{'Content-type':'text/html'});
            res.end('File not found');
            break;
    }
}

function templateUrl(fileName,res){
    fs.readFile(fileName,function (err,data){
       res.writeHead(200,{'Content-type':'text/html'});
       res.write(data);
       res.end();
    });
}

// function httpRequest(){
//     server.request({
//
//     },function (response){
//
//     });
// }

var createdServer = server.createServer(function (request,response) {
    response.writeHead(200,{'Content-type':'text/html'});
    switchUrl(request,response);
});


createdServer.listen(8080,function (){
    console.log('Server di port 8080 berjalan ...')
});