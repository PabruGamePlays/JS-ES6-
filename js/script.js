// // 1 - var, let e const

// var x = 10
// var y = 15

// if (y > 10){
//     var x = 5
//     console.log(x);
// }
// console.log(x);
// console.log("------");

// let a = 10;
// let b = 15;
// if (b > 10){
//     let a = 5;
//     console.log(a);
// }
// console.log(a);
// console.log("------");

// function logName(){
//     const name = "Pablo";
//     console.log(name);
// }
// const name = "Miguel";
// logName();
// console.log(name);
// console.log("------");

// //2 - arrow function
// console.log("arrow function");
// const sum = function(a,b){
//     return a + b
// }

// const arrowSum = (a, b) => a + b;

// console.log(sum(5,5));
// console.log(arrowSum(10,10));
// console.log("------");

// const greeting = (nome) => {
//     if(nome){
//         return `Hello ${nome}!`
//     }else{
//         return "Hello!"
//     }
// }

// console.log(greeting("Pablo"));
// console.log(greeting());
// const user ={
//     name: "Pablo",
//     sayUserName(){
//         setTimeout(function(){

//             console.log(this);
//             console.log(`Username: ${this.name}`);
//         }, 1000);
//     },
//     sayUserNameArrow(){
//         setTimeout(() =>{
//             console.log(this);
//             console.log(`Username: ${this.name}`);
//         }, 2000);
//     },
// };
// //user.sayUserName();
// //user.sayUserNameArrow();

// //3 - filter
// const arr = [1, 2, 3, 4, 5, 6]
// const highNumbers = arr.filter((n)=>{
//     if(n >=3){
//         return n
//     }
// });
// console.log (highNumbers)
// const users = [
//     {name: "Pablo", available: true},
//     {name: "João", available: false},
//     {name: "Maria", available: true},
//     {name: "Jose", available: false},
//     {name: "Matheus", available: true},
// ]
// const availableUsers = users.filter((user) => user.available);
// console.log(availableUsers);


//4 - map
const products = [
    {name: "Camisa", price: 15.99, category: "Roupas"},
    {name: "Chaleira", price: 150.99, category: "Eletro"},
    {name: "Fogão", price: 499.99, category: "Eletro"},
    {name: "Calça Jeans", price: 87.99, category: "Roupas"}
]

products.map((product) => {
    if(product.category === "Roupas"){
        product.onSale = true
    }
});
console.log(products)


//5 - template literals
const userName = "Pablo";
const age = 21;
console.log(`Olá, eu sou ${userName} e tenho ${age} anos`);


//6 - Destructuring
const fruits = ["maçã", "mamão", "laranja", "banana"];
const [f1, f2, f3, f4] = fruits;
console.log(f2, f4);

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periferico",
    color: "cinza"
}

const {name, price, category, color} = productDetails;
console.log(`O nome do produto é ${name}, ele é da cor ${color} e custa R$${price}.`);


//7 - Spread operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = [...a1, ...a2];
console.log(a3)
const a4 = [0, ...a3, 7];
console.log(a4)

const carName = {name: "Cruze"};
const carBrand = {brand: "Chevrolet"};
const otherInfos = {km: 80000, price: 75000}
const car = { ...carName, ...carBrand, ...otherInfos}
console.log(car)


//8 - Classes
class Product{
    constructor(name, price){
        this.name = name
        this.price = price
    }

    productWithDiscount(discount){
        return this.price *((100 - discount) / 100)
    }
}

const shirt1 = new Product("Camisa Overside", 120.00);
console.log(shirt1);
console.log(shirt1.productWithDiscount(15));//15% de desconto


//9 - Herança
class ProductWithAttributes extends Product{
    constructor (name, price, colors){
        super(name, price);
        this.colors = colors;
    }

    showColors(){
        console.log("As cores são: ");
        this.colors.forEach((color) =>{
            console.log(color);
        })
    }
}

const hat = new ProductWithAttributes ("Cartola", 35.50, ["Preto", "Roxo", "Azul escuro", "Vermelho", "Marrom"]);
console.log(hat);
console.log(hat.name);
hat.showColors();