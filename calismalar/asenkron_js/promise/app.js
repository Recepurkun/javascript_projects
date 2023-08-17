//? Promise nedir?
// let check = true;

// const promise1 = new Promise((resolve, reject)=>{
//     if(check)
//         resolve("Promise basarili")
//     else
//         reject("Promise basarisiz")
// })

// console.log(promise1)

/*
?Asenkron yapilari senkrona cevirmek icin kullaniyoruz.
!Callback'lerin alternatifi olarak gelistirildi.
*ES6 ile getirildi.
*/

// let check = true
// function createPromise(){
//     return new Promise((resolve, reject)=>{
//         if(check)
//             resolve("Promise'te herhangi bir sikinti yok")
//         else
//             reject("Sikinti buyuk")
//     })
// }

// createPromise()
// .then((response)=>{
//     console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=> console.log("Her zaman calisir"))

//* gercek bir ornek -- local'deki jsondan cekiyoruz veriyi
// function readStudents(url){
//     return new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest();
//         try {
//             xhr.addEventListener("readystatechange", ()=>{
//                 if(xhr.readyState===4 && xhr.status===200){
//                     resolve(JSON.parse(xhr.responseText))
//                 }
//             })
//         } catch (error) {
//             reject(error)
//         }

//         xhr.open("GET",url);
//         xhr.send()
//     })
// }

// readStudents("students.json")
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

//* gercek bir ornek-2 -- jsonplaceholder'den veri cekmek
// function getUsers(url){ //kullanicilari getir
//     return new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", ()=>{
//             try {
//                 if(xhr.readyState===4 && xhr.status===200){
//                     resolve(JSON.parse(xhr.responseText))
//                 }
//             } catch (error) {
//                 reject(error)
//             }
//         })
//         xhr.open("GET", url)
//         xhr.send();
//     })
// }

// function getCommentsByUserID(url){ //postu getir
//     return new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.addEventListener("readystatechange", ()=>{
//             try {
//                 if(xhr.readyState===4 && xhr.status===200){
//                     resolve(JSON.parse(xhr.responseText))
//                 }
//             } catch (error) {
//                 reject(error)
//             }
//         })
//         xhr.open("GET", url)
//         xhr.send();
//     })
// }

// getUsers("https://jsonplaceholder.typicode.com/users/3")
// .then((data)=> {
//     console.log(data)
//     return getCommentsByUserID(`https://jsonplaceholder.typicode.com/comments/${data.id}`) //data id'si 3 olanin postlarini getir
// }) 
// .then((res)=> console.log(res))//diger promise'den firlatilanlari yakala
// .catch((err)=> console.log(err))
// .finally(()=>{
//     //gereken kodlar yazilir vsvsvs...
// })

//* promise.all()

const p1 = Promise.resolve("birinci promise basarili")
const p2 = Promise.resolve("ikinci promise basarili")
const p3 = new Promise((resolve, reject) => {
    resolve("ucuncu promise de basarili")
})
const p4 = Promise.reject("Hata var reyiz")

Promise.all([p1,p2,p3,p4])
.then((res)=>{
    console.log(res)
})
.catch((err)=> console.log(err))