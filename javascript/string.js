let email ="huzeyfeyetkiner@gmail.com"
let firstName = "Huzeyfe"
let lastName ="yetkiner"


//string karakter sayisi => length

console.log("Email karakter sayisi: ", email.length)

//Ilk karakteri bulmak
console.log(firstName[0])
console.log(firstName[4])


//Büyük harf

firstName = firstName.toUpperCase()
console.log(firstName)

//string içerisinde bilgi aramak -> search
console.log(email.search('@'))
console.log(email.search('ş')) //olmayan bir şeyin araması için -1 döner

//belli bir yere kadar al -> slice
let DOMAIN = email.slice(email.search('@')+1)    
console.log(DOMAIN) 
console.log(DOMAIN.slice(0,DOMAIN.indexOf('.')))

//replace
email = email.replace('gmail.com','kodluyoruz.org')
console.log(email)

//istediğim bilgi var mı? -> includes
console.log(email.includes('kodluyoruz.org')) 
console.log(email.includes('kodlz.org')) 

//istedigim seyle basladi mi bitti mi? startsWith endsWith
console.log(email.endsWith("kodluyoruz.org"))
console.log(email.startsWith("kodluyoruz.org"))

//ilk harfleri büyük yapmak
firstName = firstName.toLowerCase()
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1)} ${lastName[0].toUpperCase()}${lastName.slice(1)}`

console.log(fullName)