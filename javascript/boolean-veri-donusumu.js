let isActive = false;
isActive = true;

// console.log(isActive)

let userName = 11; 
let isUserName = Boolean(userName); //true

console.log(isUserName)

var z = {2:'js'};
console.log(Boolean(z));

var a = true;
console.log(Boolean(a));

let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price:",
    typeof(price)
)
console.log(
    "stringUserName:",
    typeof(stringPrice)
)
console.log(
    "isUserName",
    typeof(isUserName)
)

//veri dönüşümü

let num1 = "11"
console.log("num1 type:",typeof(num1))

console.log("Number: ", parseInt(num1));

console.log("num1 type:", typeof(parseInt(num1)))

//parse ile dönüştürürken sayıdan sonra metinsel ifade olabilir
let num2 = "11.4px"
let convertedNum = parseFloat(num2)
console.log("convertedNum:", convertedNum , " ", typeof(convertedNum));

// let num3 = "11.4px" number ile dönüştürülmeye çalışılan değişken içerisinde metinsel ifade olmamalı
// let convertedNum2 = number(num3)
// console.log("convertedNum:", convertedNum , " ", typeof(convertedNum));

//sayısal veri türünü stringe dönüştürme
let num4 = 55
let convertedString = num4.toString()
console.log("convertedNum:", convertedString , " ", typeof(convertedString));