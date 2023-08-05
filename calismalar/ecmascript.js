// ! arrow function
// const yazdir = ()=>{
//     console.log("Hello World")
// }
// yazdir()

// const yazdir2 = (firstName, lastName)=>{
//     console.log("Merhaba", firstName , lastName)
// }
// yazdir2("Recep","Urkun")

// ? en kisa hali
// const yazdir_enkisa = firstname=> console.log("Merhaba " + firstname + " Dunyali")

// yazdir_enkisa("Recep")

// const kupAl = x=> x*x*x
// const kareAl = (x)=> x*x

// console.log("Deger: ", kupAl(3))
// console.log("Deger: ", kareAl(3))

// ! Destructing Kullanimi
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

// * eski kullanim
// let isim, soyisim, maas, yas
// isim = person.firstName
// soyisim = person.lastName
// maas = person.salary
// yas = person.age

//yeni kullanim
// let {firstName: isim, lastName: soyisim, salary: maas, age: yas} = person
// console.log(isim,soyisim,maas,yas)

// ! spread operatoru ...
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

const array1 = ["Recep","Ali","Veli","Mehmet"]
//array1[0],array1[1],array1[2],array1[3]
const array2 = [...array1]
console.log(array2)