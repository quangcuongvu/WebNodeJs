var fs=require('fs');


//open file
// đọc file đồng bộ
// fs.open('data.txt','r+',function(err,file){
//     if(err){
//         console.log("Open file is Error");
//         return;
//     }
//     else{
//         console.log("Open file is successfully");
//     }
// });

// var data=fs.readFileSync('data.txt');
// console.log(data.toString());

// đọc file bất đồng bộ
// fs.readFile('data.txt',function(err,data){
//     if(err){
//         console.log("Error read file");
//     } else{
//         console.log(data.toString());
//     }
// });

// ghi file
// fs.writeFile('data.txt','New content file',function(err){
//     if(err){
//         console.log("Write file error");
//     }else{
//         fs.readFile('data.txt',function(err,data){
//             if(err){
//                 console.log("Read file is error");
//             }else{
//                 console.log(data.toString())
//             }
//         });
//     }
// })

// tạo thư mục bằng fs
fs.mkdir('New_folder',function(err){
    if(err){
        console.log("error");
    }else{
        console.log("succsess");
    }
});