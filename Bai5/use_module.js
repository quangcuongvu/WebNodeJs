var my_module=require('./my_module.js')

var my_message=my_module.message("Hello, I'm Cuong.");
console.log(my_message);

var result=my_module.add(4,9);
console.log(result);

var res=my_module.sub(26,14);
console.log(res);