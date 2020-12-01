var http=require('http');

var server = http.createServer(function(req,res){
    // res.writeHead(200,{"Content-Type":"text/plain"});
    // res.write("This is the first1 server with Nodejs");
    
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1> My name is Cuong Vu Quang</h1>")
    res.end();
});

server.listen(3000,function(){
    console.log("Server is running on port 3000");
});