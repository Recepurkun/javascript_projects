//asenkron problemine ornek
//http istekleri

const users = [
    {
        userId : 5,
        post : "Recep Post 1"
    },
    {
        userId : 5,
        post : "Recep Post 2"
    },
    {
        userId : 5,
        post : "Recep Post 3"
    },
    {
        userId : 6,
        post : "Ali Post 1"
    },
    {
        userId : 7,
        post : "Veli Post 1"
    },
]

//? Burada yasanilan problemi asenkrondan senkrona cevirerek cozecegiz.
//? callback - promise - async & await
// function getUserById(){
//     setTimeout(() => {
//         //servise gittik ve cevabimizi aldik.
//         return 5;
//     }, 1000);
// }

// function getPostByUserId(userId){
//     //gercek bir rest api'ya istek atacagiz.
//     console.log(userId)
//     setTimeout(() => {
//         users.forEach((user)=>{
//             if(user.userId === userId){
//                 console.log(user.post)
//             }
//         })
//     }, 2000);
// }

//? Callback nedir?
/*
callback: bir fonksiyonu bir fonksiyona parametre olarak veriyoruz ve
asenkron yapiyi senkrona ceviririz
*/


// function getName(callback){
//     setTimeout(() => {
//         //servisten ismimi getirdi
//         //console.log("Recep")
//         let name = "Recep" //web servisten geldi
//         callback(name)
//     }, 1000);
// }

// function getSurname(name){
//     setTimeout(() => {
//         //console.log("Urkun")
//         let surname = "Urkun" //web servisten geldi
//         console.log(name , surname)
//     }, 500);
// }

// getName(getSurname)
//getSurname()

//* arrow function ile kullanimi -> callback (yani isimsiz fonsksiyon) versiyonu
// function getName(callback){
//     setTimeout(() => {
//         //servisten ismimi getirdi
//         //console.log("Recep")
//         let name = "Recep" //web servisten geldi
//         callback(name)
//     }, 1000);
// }

// function getSurname(name, callback){
//     setTimeout(() => {
//         //console.log("Urkun")
//         let surname = "Urkun" //web servisten geldi
//         callback(surname)
//     }, 500);
// }

// function getAge(name, surname, callback){
//     setTimeout(() => {
//         let age = 24;
//         callback(age)
//     }, 300);
// }

//! "callback hell"
// getName((name)=>{
//     getSurname(name, (surname)=>{
//         getAge(name, surname, (age)=>{
//             console.log(name, surname, age)
//         })
//     })
// })

//? -- callback ile cozum --
// function getUserById(callback){
//     setTimeout(() => {
//         //servise gittik ve cevabimizi aldik.
//         let userId = 5;
//         //return userId;
//         callback(userId)
//     }, 2000);
// }

// function getPostByUserId(userId){
//      //gercek bir rest api'ya istek atacagiz.
//     setTimeout(() => {
//         users.forEach((user)=>{
//             if(user.userId == userId ){
//                 console.log(user.post)
//             }
//         })
//     }, 1000);
// }

// getUserById(getPostByUserId)


//? Ajax nedir? -- veri cekimi
// const xhr = new XMLHttpRequest()
// console.log(xhr)

// function prepareURL(url, id){
//     if(id===null){
//         return url;
//     }
//     return `${url}?postId=${id}`
// }

// function getComments(url, id){
//     let newURL= prepareURL(url, id)
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", ()=>{
//         if(xhr.readyState===4 && xhr.status===200){
//             //console.log(xhr.responseText) //gelen veri string, bana json lazım
//             console.log(JSON.parse(xhr.responseText)) //json seklinde almak icin
//         }
//     })

//     xhr.open("GET",newURL)
//     xhr.send()
// }

//getComments("https://jsonplaceholder.typicode.com/comments",null)
//getComments("https://jsonplaceholder.typicode.com/comments",1) //userId'ye gore filtreli veri icin

// function getData(url){
//     const xhr = new XMLHttpRequest();
//     xhr.addEventListener("readystatechange", ()=>{
//         if(xhr.readyState===4 && xhr.status===200){
//             console.log(JSON.parse(xhr.response))
//         }
//     })

//     xhr.open("GET", url);
//     xhr.send()
// }

// getData("https://jsonplaceholder.typicode.com/users")