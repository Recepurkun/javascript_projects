// * notlar enes bayram adli youtube kanalina aittir.
// ! use "better Comments" for better documentation

// Dizinin Metotları
/*
push    : dizinin sonuna eleman ekler , ayrıca dizinin uzunluğunu döner
unshift : dizinin başına eleman ekler , eleman sayısını geriye döner

pop     : dizinin sonundan eleman siler , eleman sayısını döner
shift   : dizinin başından eleman siler , eleman sayısını döner

splice(index,incdex)  :eleman eklemek ve silmek için kullanılır.

toString: diziyi stringe çevirebiliriz.
join    : diziyi stringe çevirir . Farkı ise araya eleman ekleyebiliriz

concat  : dizileri birleştirmek için kullanılır.
slice(dilimlemek)   : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
length  : dizinin uzunluğunu verir.
reverse : dizinin elemanlarını ters çevirmek
split(bölmek)   : belirli bir ifadeye göre bölüp diziye çevirmek.
indexOf : elemanın index numarasını verir.
includes: verilen elemanı içeriyor mu ona bakar

*/

let arabalar = ["bmw","toyota","renault","mercedes","porsche"];
// let arabalar2 = ["hundai","tofaş"];

// * Push Metot
// console.log(arabalar.length);
// arabalar.push("opel");
// console.log(arabalar);

// * Unshift Metot
// arabalar.unshift("hundai");
// console.log(arabalar);

// * Pop Metot
// let silinenEleman = arabalar.pop();
// console.log(arabalar);
// console.log(silinenEleman);

// * Shift Metot
// let silinenEleman =arabalar.shift();
// console.log(arabalar);
// console.log(silinenEleman);

// * Splice Metot
//console.log(arabalar);
//arabalar.splice(3,0,"hundai");
/* arabalar.splice(3, 0, "hundai");: splice() yöntemi dizinin belirli bir bölgesine eleman eklemek için kullanılır. 
? İlk parametre olan 3, "mercedes" elemanının dizideki indeksini belirtir. 
? İkinci parametre olan 0, diziden hiçbir elemanın çıkarılmayacağını gösterir. 
? Üçüncü parametre olan "hundai", eklemek istediğimiz yeni elemanı temsil eder. 
* Yani, "hundai" elemanı "mercedes" ile "porsche" arasına eklenir.
*/
//console.log(arabalar);

// arabalar.splice(1,2);
// console.log(arabalar);

//arabalar.splice(2,2,"hundai"); //renault', 'mercedes' => ogelerini sil
//console.log(arabalar);

// * toString Metot
// console.log(typeof arabalar);
// let stringArabalar = arabalar.toString();
// console.log(typeof stringArabalar);
// console.log(stringArabalar);

// * Join Metot
// let stringArabalar = arabalar.join("?");
// console.log(stringArabalar);

// * Concat Metot 
// let birlesmisDizi =  arabalar1.concat(arabalar2);
// console.log(birlesmisDizi);

// * Slice  Metot
// console.log(arabalar);
// let ayriDizi = arabalar.slice(2);
// console.log(ayriDizi);

// * Length ozelligi
// console.log(arabalar.length);

// * Reverse Metot
// console.log(arabalar);
// arabalar.reverse();
// console.log(arabalar);

// * Split Metot
// let isimler = "Enes,Ali,Veli";
//  let isimlerDizi = isimler.split(",");
//  console.log(typeof isimlerDizi);

// * Indexof Metot
// let index = arabalar.indexOf("renault");
// console.log(index)

// * Includes Metot
// let sonuc = arabalar.includes("renault");
// if(sonuc){
//     console.log("eleman vardır");
// }else{
//     console.log("eleman yoktur");
// }