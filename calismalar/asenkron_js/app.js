/*
1-Javascript senkron calisan bir programlama dilidir.
Ancak "asenkron" olarak calistigi yerler vardir.
--asenkron calismasina sebep olanlar--
1-Timing
2-Eventler
3-HTTP istekleri

--asenkron calisan yapilari yonetmek icin callback - promise - async&await-- yapilarina sahibiz.
-> asenkron yapilari senkrona cevirip yonetiyoruz

*/


//* senkron
// selamla()
// console.log("hello")
// console.log("world")
// function selamla(){
//     console.log("Hello World!")
// }

//* asenkron
// setTimeout(() => {
    
// }, timeout);


//? asenkron calismaya bir ornek
//  console.log("Recep")

//  setTimeout(() => {
//     console.log("Sure doldu ve calisti.")
//  }, 2500);

//  setTimeout(() => {
//     console.log("1500 ms bekledi ve calisti.")
//  }, 1500);
//  console.log("Urkun")


/*
? Kisa bir özet
? Javascript "senkron" calisan bir programlama dilidir..
? Fakat asenkron calismasina sebep olan durumlar vardir
    *1-Timing
    *2-Event(Olaylar)
    *3-HTTP Istekleri
        -xmlHttpRequest
        -Fetch Api
        -Axios

!Asenkron yapiyi yonetmek icin
*1-Callback      -ES6 öncesi-> "callback hell" 'e sebebiyet veriyordu.
*2-Promise       -ES6       -> "promise chain" 'in olusmasina sebep oldu.
*3-Async-Await   -ES7       -> En son cikan yapi(en gelismis hali)
*/