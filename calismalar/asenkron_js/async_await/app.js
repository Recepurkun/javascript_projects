//? Async - await
//* promise'lerde then().then().then() zinciri olusuyor. Bu da callback hell dedigimiz olaya evriliyor.
//* Bu yuzden async-await yapilarini kullaniyoruz yazimi daha temiz ve basit ayrica daha okunakli.

// document.querySelector("button").addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((post)=>{
//         fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//         .then((response) => response.json())
//         .then((comments) => console.log(comments))
//     })
// })

//* async await ile yapilisi
// document.querySelector("button").addEventListener("click", async () => {
//     const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     const post = await responsePost.json()

//     const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)

//     const comments = await responseComments.json()
//     console.log(comments)
// })

//* kisaltilmis hali
document.querySelector("button").addEventListener("click", async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
    console.log(post,comments)
})