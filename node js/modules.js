const { log } = require("node:console");

function add(a,b){
console.log("Addition:" + (a+b));
}
function sub(a,b){
    console.log("Subtraction:" + (a-b));
}
function mul(a,b){
    console.log("multiplication:" + (a*b));
}
function div(a,b){
    console.log("Division:"+ (a/b));
}
module.exports={add,sub,mul,div}