// không có promise

// function1(function(err,data1){
//     function2(function(err,data2){
//         function3(function(err,data3){

//         })
//     })
// })


// Sử dụng promise
var q =require("q")

function show(err,data) { 
    var defer=q.defer();
    if (err){
        defer.reject("Có lỗi");
    }else{
        defer.resolve(data);
    }
    return defer.promise;
 }

show(true,'data 1')
.then(function(data){
    // step 1
    console.log(data);
    var data2="data 2";
    return data2;
})

.then(function(data2){
    console.log(data2);
})
.catch(function(err){
    console.log(err);
})