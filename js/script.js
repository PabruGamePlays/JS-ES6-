// 1 - var, let e const

var x = 10
var y = 15

if (y > 10){
    var x = 5
    console.log(x);
}
console.log(x);

console.log("------");

let a = 10;
let b = 15;

if (b > 10){
    let a = 5;
    console.log(a);
}
console.log(a);

console.log("------");

function logName(){
    const name = "Pablo";
    console.log(name);
}

const name = "Miguel";

logName();

console.log(name);