//! arrow function
// const yazdir = ()=>{
//     console.log("Hello World")
// }
// yazdir()

// const yazdir2 = (firstName, lastName)=>{
//     console.log("Merhaba", firstName , lastName)
// }
// yazdir2("Recep","Urkun")

//? en kisa hali
// const yazdir_enkisa = firstname=> console.log("Merhaba " + firstname + " Dunyali")

// yazdir_enkisa("Recep")

// const kupAl = x=> x*x*x
// const kareAl = (x)=> x*x

// console.log("Deger: ", kupAl(3))
// console.log("Deger: ", kareAl(3))

//! Destructing Kullanimi
// let langs = ["C#","C++","Javascript","Pythom"]
// let lang1, lang2, lang3, lang4

// [lang1,lang2,lang3,lang4] = langs
// console.log(lang1, lang2, lang3, lang4)

// const hesapla = (a,b)=>{
//     const toplam = a+b
//     const cikar = a-b
//     const carp = a*b
//     const bol = a/b

//     const dizi = [toplam,cikar,carp,bol]
//     return dizi
// }

// let [a,b,c,d] = hesapla(10,2)
// console.log(a,b,c,d)

// const person = {
//     firstName: "Recep",
//     lastName: "Ürkün",
//     salary: 15000,
//     age: 24
// };

//* eski kullanim
// let isim, soyisim, maas, yas
// isim = person.firstName
// soyisim = person.lastName
// maas = person.salary
// yas = person.age

//yeni kullanim
// let {firstName: isim, lastName: soyisim, salary: maas, age: yas} = person
// console.log(isim,soyisim,maas,yas)

//! spread operatoru ...
// let numbers = [10,20,30,40]
// function add(a,b,c,d){
//     console.log(a+b+c+d)
// }

//eski yontem
//add(numbers[0],numbers[1],numbers[2],numbers[3])

//yeni yontem
//add(...numbers)
/*
...numbers --> numbers[0],numbers[1],numbers[2],numbers[3]
    bu anlama geliyor
*/

// const diller1 = ["Java","C#"]
//const diller2 = ["Php","Python", diller1[0], diller1[1]]
// const diller2 = ["Php","Python", ...diller1]

// console.log(diller2)

// const numbers2 = [1,2,3,4,5,6,7,8,9]

// let [a,b, ...kalanSayilar] = numbers2
// console.log(a,b, kalanSayilar)

//const array1 = ["Recep","Ali","Veli","Mehmet"]
//array1[0],array1[1],array1[2],array1[3]
// const array2 = [...array1]
// console.log(array2)

//! for in & for of donguleri
//let names = ["Recep","Ali","Veli","Cevdet","Hamsi"]
// names.forEach(function(name){
//     console.log(name)
// })

// names.forEach(name2=> console.log(name2)
// )

// * for in dongusu | index numarasi lazimsa for in kullan
// degiskenTanimlama, in, diziIsmi 
// for(let name in names){
//     console.log(name + " - " +names[name])
// }
// * for of dongusu | deger lazimsa for of kullan
// for(let isim of names){
//     console.log(isim + " - " , names.indexOf(isim))
// }

//! Map kullanimi
// const map1 = new Map();
// let value;

//  Set
//  map1.set(34,"Istanbul")
//  map1.set(35,"Izmir")
//  map1.set(6,"Ankara")
//  map1.set(16,"Bursa")

 //Get
 //console.log(map1.get(16))

 //Size
//value = map1.size;

//Delete
// value = map1.delete(6)
// console.log(map1.size)
// console.log(value)

//Has
// console.log(map1.has(55))

//For OF map uzerinde donebiliriz
// for(let [key,value] of map1){ //destructing
//     console.log(key,value)
// }

// const keys = Array.from(map1.keys())
// console.log(keys)
// keys.forEach((key)=>{
//     console.log(key, map1.get(key))
// })

//sadece keyleri al
// for(let key of map1.keys()){
//     console.log(key)
// }

//sadece value'lari al
// for(let key of map1.values()){
//     console.log(key)
// }

//mapten array'e cevirmek
// const array = Array.from(map1)
// console.log(map1)
// console.log(array)

// array.forEach((value)=>{
//     console.log(value[0] + " - " +value[1])
// })

//array'den map'e cevirme
// const array2 = [
//     [34,"İstanbul"],
//     [35,"İzmir"],
//     [6,"Ankara"],
//     [16,"Bursa"]
// ]

// const myMap = new Map(array2)
// console.log(myMap)

// const myArray = Array.from(myMap)
// console.log(myArray)

// map1.set(34,"Istanbul")
// map1.set(35,"Izmir")
// map1.set(6,"Ankara")
// map1.set(16,"Bursa")
//map1.set([1,2,3], "Array") //-> bunu bulamaz 
//objeleri bulamazlar, undefined gozukurler
//console.log(map1.get([1,2,3])) //-> cunku farkli yerleri gosteriyorlar(referans ediyorlar)
//ama bu sekilde yaparsak calisirlar
//let key = [1,2,3]
//map1.set(key,"Array")
//console.log(map1.get(key)) //bu sekilde erisebiliriz

//! Set
//bir degeri yalniz bir kere tutulmasini istiyorsaniz set kullanacaksiniz.
//const set = new Set();

//add metodu
// set.add(true)
// set.add(3.14)
// set.add("Recep")
// set.add("7")
// set.add({username:"recep", password: "1"})
// set.add([1,2,3,4]) //bunlari silmek istiyorsak bir degiskene ata ve oyle sil
// let id = [6,7,8,9]
// set.add(id)
//size
//console.log(set.size)

//delete
// set.delete("Recep")
// set.delete(id) //silindi
// console.log(set.size) //silindi

//has 
// console.log(set.has("Recep"))
// console.log(set.has(3.14))

//for of dongusu
// for(let value of set){
//     console.log(value)
// }

// const values = Array.from(set)
// values.forEach((value)=>{
//     console.log(value)
// })

//set'ten array olusturma
//const values = Array.from(set)

//array'den set olusturmak
// let array = [1,"Recep",false,"Fatma",15,[1,2,3]]
// const newSet = new Set(array)
// console.log(newSet)

//! Template Literals
// function write(firstName, lastName){
//     //eski yontem
//     console.log("İsim: " + firstName + " Soyisim: " + lastName)
//     //yeni yontem
//     console.log(`İsim: ${firstName} Soyisim: ${lastName}`)
// }
//write("Recep","Ürkün")

//dinamik olarak farkli kullanicilari almak icin
// function getUserById(userId){
//     console.log(`http:localhost:8080/users/${userId}`)
// }
// getUserById(8)

//! OOP'ye giris(Nesne yonelimli)