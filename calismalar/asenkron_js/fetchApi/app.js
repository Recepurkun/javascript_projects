//? -- Fetch API --

// callback -> promise
// ajax(xmlhttprequest) -> fetch api

//* yerel dosyadan(jsondan) veri cekmek
// function getStudents(url){
//     fetch(url)
//         .then((response)=>{
//             return response.json()
//         })
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err))
// }

// getStudents("../promise/students.json")

// function getData(url){
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) =>{
//         data.forEach(user=> {
//             console.log( user.id + " - " + user.name + " - " + user.username)
//         })
//     })
//     .catch((err) => console.log(err))
// }

// getData("https://jsonplaceholder.typicode.com/users")

//* en basit hali
// function getData(url){
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }
// getData("https://jsonplaceholder.typicode.com/users")