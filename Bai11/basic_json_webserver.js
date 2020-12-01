var http=require("http");

var server=http.createServer(function(req,res){
    console.log(req.url);
    console.log(req.method);

    //Return Json data
    var data={
        'status':200,
        'message':"this is message",
        'err':false
    }
    res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(3000,function(){
    console.log("Server is running on port 3000");
})