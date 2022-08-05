//number veri türü tanımlamak

let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax

console.log("Fiyat:", price , " KDV:", priceTax , " Toplam Fiyat:", total)



//arttırma ve azaltma
let counter = 0;
counter++; //counter = counter +1 , counter += 1

counter--; // counter = counter -1 , counter -= 1

//mod alma 
let number = 15

let mod = number%2

console.log(mod)

//us alma
console.log(2*2*2*2)
console.log(2**4)

//asagi yuvarlama
console.log(Math.floor(1.7))

//yukari yuvarlama
console.log(Math.ceil(1.9))

//yakina yuvarlama
console.log(Math.round(1.2))
console.log(Math.round(1.4))
console.log(Math.round(1.5))

//veri donusumu
let stringNumber = "101"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
