// ! use "better Comments" for better documentation

// function method1(){
//     var sayi = 10
// }

// console.log(sayi)

// method1()

// var: function scope -- ram bellekte cok fazla yer kaplıyo
// let/const: block scope özelliğine sahiptir.

// * ekranda once 5, sonra da 10 degeri gözüküyor
// var a = 5  # 5
// var a = 10 # 10
// console.log(a) 

// * hata verir daha onceden a diye bir degisken tanimladiniz diye
// if(true){
// let a = 5;
// let b = 10;
// console.log(a)
// }
// ? ama şöyle yapabiliyorsun
// let a = 5 
// a = 10 
// console.log(a) 

// * Let & const arasindaki fark
// const (constant) : sabit, degismez

/*
&&: ve
||: veya
! : değil
*/

// let vize = Number(prompt("vize giriniz"))
// let final = Number(prompt("final giriniz"))
// ort = (vize * 0.4) + (final * 0.6)
// if(ort>50)
// {
//     console.log("basarili");
// }
// else
// {
//     console.log("basarisiz");
// }
// console.log(ort)

// let metin = prompt("bir metin giriniz: ")
// let dizi = []
// for(i=0; i<=metin.length-1;i++)
// {
//     dizi.push(metin[i])
// }
// console.log(dizi)

// for(let i=0; i <= 20; i++){
//     if(i % 2 == 0)
//     {
//         console.log("Merhaba -", i)
//     }
//     else
//     {
//         console.log("Recep - ", i)
//     }
// }
// let toplam=0
// for(i=50; i>=0; i--)
// {
//     toplam +=i 
//     console.log(i)
// }
// console.log(toplam)

// * carpim tablosu
// for(let i=0; i<=10; i++){
//     for(let j=0; j<=10; j++)
//     {
//         console.log(i + "x" + j + "=" + i*j)
//     }
//     console.log("--------------------------------")
// }

// * asal sayi
// let sayi = Number(prompt("bir sayi giriniz: "))
// if(sayi>1)
// {
//     for(let i=2; i<sayi; i++)
//     {
//         if(sayi % i == 0)
//         {
//             alert(sayi + " asal degildir.")
//             break;
//         }
//         else
//             alert(sayi + " asaldir")
//             break;
//     }   
// }
// else
//     alert(sayi + " asal degildir.")

// * faktoriyel
// let sayi = Number(prompt("bir sayi giriniz: "))
// let sonuc = 1
// for(let i=sayi; i>0; i--)
// { 
//     sonuc *= i
// }
// console.log("sonuc: " + sonuc)

// * armstrong sayisi
// let sayi = (prompt("bir sayi giriniz: "))
// let toplam = 0
// for(let i=0; i<sayi.length; i++)
// {
//     let rakam = sayi.charAt(i)
//     toplam += Math.pow(rakam, 3)
// }
// if(toplam == sayi)
//     alert("Girdiginiz sayi armstrong sayisidir. " + sayi)
// else
//     alert("Girdiginiz sayi armstrong sayisi degildir. " + sayi)

// console.log(toplam)

// let sayi = (prompt("bir sayi giriniz: "))
// let donenDeger = cube(sayi)
// function cube(sayi)
// {
//     let sonuc = Math.pow(sayi, 3)
//     return sonuc
// }

// console.log(donenDeger)

// * Harf Sayısı bulma uygulaması
// let metin = "Şuanda Yalova 'da Javascript eğitimi çekmekteyim."
// let harf = prompt("Harfi giriniz: ")

// function harfBul(harf){
//     let toplam = 0;
//     for(let i=0; i < metin.length; i++)
//     {
//         if(metin.charAt(i)  == harf){
//             toplam +=1
//         }
//     }
//     return toplam;
// }
// console.log("Kullanicidan alinan " + harf + " harfi, cumlede " + harfBul(harf) + " kez vardir.")

// * Harf Sayısı bulma uygulaması | Farklı Versiyonu
//let metin = "Şuanda Yalova 'da Javascript eğitimi çekmekteyim."
// harfBul("a")
// harfBul("i")
// harfBul("e")

// function harfBul(harf){
//     let toplam = 0;
//     for(let i=0; i < metin.length; i++)
//     {
//         if(metin.charAt(i)  == harf){
//             toplam +=1
//         }
//     }
//     console.log("Kullanicidan alinan " + harf + " harfi, cumlede " + toplam + " kez vardir.")
// }

// * Mükemmel sayi uygulaması
// ? => 6 = 1,2,3,4 = 12 = 6*2 -> mükemmel sayi, 28-496 
// let sayi = (prompt("bir sayi giriniz: "))

// function mukSayi(sayi){
//     let bolenler = 0
//     for(let i=1; i <= sayi; i++){
//         if(sayi % i == 0)
//         {
//             bolenler += i 
//         }
//     }
//     if(bolenler== (sayi * 2))
//         alert("Girdiginiz sayi mukemmel sayidir.")
//     else
//     alert("Girdiginiz sayi mukemmel sayi degildir.")
// }
// mukSayi(sayi)

// * Decimal to Binary Conversion(10'luk sayiyi 2'lige cevirme)
// let sayi = prompt("Bir sayi giriniz: ")
// convertDecimalToBinary(sayi)

// function convertDecimalToBinary(number){
//   let binary = "" //binary karsiligini tutmasi icin boyle bir degisken tanimladik
//   while(true){
//     binary += (number % 2).toString() // number'in mod 2sini alinca kalan sayiyi binary'e ekle 
//     number = Math.floor((number / 2)) // daha sonra numberi 2ye bol 
//     if(number == 1) // bolum artik 1 oldugunda daha fazla bolunemeyecegi icin donguyu kir
//     {
//       binary+=1 //binarynin sonunda 1 ekle
//       break
//     }
// }
//   let sonuc = tersCevir(binary) 
//   console.log("Sonuc: " + sonuc)
// }

// function tersCevir(binary){ //ters elde edilen binaryi duzgon hale cevirmek icin yazilmis fonksiyon
//   let tersCevrilmisHali = ""
//   binary = binary.toString()
//   for(let i=binary.length-1; i >= 0; i--){
//     tersCevrilmisHali += binary.charAt(i) // sonuncu indexteki sayiyi basa geetir
//   }
//   return tersCevrilmisHali
// }

// * Binary to Decimal Conversion(2'lik sayiyi 10'luga cevirme)
// let sayi = prompt("Bir sayi giriniz: ")
// convertBinaryToDecimal(sayi)

// function convertBinaryToDecimal(sayi)
// {
//   let ust= sayi.length - 1
//   let toplam=0
//   for(let i=0; i < sayi.length ; i++)
//   {
//     toplam += Math.pow(2, ust) * sayi.charAt(i)
//     ust--
//   }
//   console.log("toplam:"  + toplam)
// }

// * Ürün Arama Uygulaması
let urun1 = {
  isim: "ACER Swiftt",
  kategori: "Teknoloji",
  fiyat: 6.219
}

let urun2 = {
  isim: "ACER Nitro 5",
  kategori: "Teknoloji",
  fiyat: 15.475
}

let urun3 = {
  isim: "LENOVO V15",
  kategori: "Teknoloji",
  fiyat: 10.999
}
let urun4 = {
  isim: "LENOVO V14",
  kategori: "Teknoloji",
  fiyat: 4.399
}
let urun5 = {
  isim: "LENOVO Ideapad",
  kategori: "Teknoloji",
  fiyat: 4.510
}

let urunler = [urun1,urun2,urun3,urun4,urun5]
let arananUrun = prompt("Lutfen aramak istediginiz urunu girin: ")
let secilenUrun = []

secilenUrunleriDoldur(urunler)
secilenUrunleriYazdir(secilenUrun)

function secilenUrunleriDoldur(urunler)
{
  urunler.forEach(function(urun)
  { 
    if(urun.isim.toUpperCase().includes(arananUrun.toUpperCase(),0))
    {
      secilenUrun.push(urun)
    }
  })
}

function secilenUrunleriYazdir(urunler)
{
  urunler.forEach(function(urun)
  {
    console.log("-------------------------------------")
    console.log(" | " + urun.isim + " | " + urun.kategori + " | " + urun.fiyat)
  })
}