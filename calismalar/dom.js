// * selector - style ozellikleri
// classname, id, tag name

// ? getElementById: id'ye gore element yakalar 
// ? getElementByClassName: class ismine gore yakala
// ? getElementByTagName: etiket ismine gore yakalar

// const button = document.getElementById("todoAddButton")

// console.log(button.id)
// console.log(button.getAttribute("id"))

//console.log(button.className)
//console.log(button.getAttribute("class"))

// const classListesi = button.classList[3]
// console.log(classListesi)

// const classListem = button.classList
// classListem.forEach(function(className)
// {
//     console.log(className)
// })

// let buttonText = button.textContent
// let buttonText2 = button.innerHTML
// console.log(buttonText)
// console.log(buttonText2)

// button.textContent="<b>Todo Ekleyin</b>" //string olarak ekler
// button.innerHTML="<b>Todo Ekleyin</b>" //html etiketi olarak ekler ve etki eder

// const todoList = document.getElementsByClassName("list-group-item")
// console.log(todoList)

/*
const todoList2 = Array.from(document.getElementsByClassName("list-group-item"))
/todoList2.forEach(function(todo){
      //console.log(todo.className)
        console.log(todo.textContent)
})
*/

// const forms = document.getElementsByTagName("form")
// console.log(forms[1].id)

// const todoList_li = document.getElementsByTagName("li")
// console.log(todoList_li)

// ! querySelector - querySelectorAll

// const clearButton = document.querySelector("#todoClearButton")
// console.log(clearButton)

// const todoList_listGroup = document.querySelector(".list-group")
// console.log(todoList_listGroup)

// const todo_listGroup_item = document.querySelector(".list-group-item")
// console.log(todo_listGroup_item)
/* class'lardan 4-5 tane varsa ve hepsini almak istiyorsan querySelectorAll kullanman gerekiyor */
// const todo_listGroup_item_All = document.querySelectorAll(".list-group-item")
// console.log(todo_listGroup_item_All)

/*
const todoList = Array.from(document.querySelectorAll("li:nth-child(even)"))
// todoList.forEach(function(todo){
    //todo.style.backgroundColor = "orange"
})
console.log(todoList)
*/

// * Style ozelligini anlamak

// const todo = document.querySelectorAll(".list-group-item")[0]
// const todoList = document.querySelector(".list-group")
// const clearButton = document.querySelector("#todoClearButton")
// console.log(clearButton)

/*
// todo.style.color = "white"
// todo.fontWeight = "bold"
// todo.style.backgroundColor = "purple"
// todo.style.paddingTop = "20px"

// todoList.style.marginTop = "30px"
// todoList.style.marginLeft = "20px"
*/

// clearButton.style.backgroundColor = "red"
// clearButton.style.fontWeight = "bold"
// clearButton.style.padding = "10px"
// clearButton.style.borderRadius = "10px"
// clearButton.style.border = "1px white solid"

// * HTML elementleri uzerinde gezinmek
// const todo = document.querySelector(".list-group-item")
// const todoList = document.querySelector(".list-group")
// const todoLastChild = document.querySelector(".list-group-item:nth-child(4)")
// /* const card = document.getElementsByClassName("card")[0] */
// const card = document.querySelector(".card")

// let value;

// ? anneden cocuklara erismek
// value = todoList;
// value = todoList.children[3]
// value = todoList.children[todoList.children.length-1] //son cocuga erismek icin
// value = todoList.children[3].textContent = "Degisti"

// value = Array.from(todoList.children)

// value.forEach(function(array){
//   console.log(array.textContent)
// })

// ? cocuktan anneye erismek
//value = todo
//value = todo.parentElement.parentElement.parentElement
//value = value.parentElement
// let ul = todo.parentElement
// let cardBody = ul.parentElement
// let cardElement = cardBody.parentElement
// let row = cardElement.parentElement
// let container = row.parentElement
// console.log(container)

// ? kardesler arasinda gezinmek
// value = todo
// value = todo.nextElementSibling.nextElementSibling

// value = todoLastChild
// value = todoLastChild.previousElementSibling.nextElementSibling

// const todoListesi = document.querySelectorAll(".card-title")[1]
// value = todoListesi.textContent = "Todo Listesi - 2"

// const rowSec = document.querySelector(".row")
// value = rowSec.children[0].children[3].children[0].textContent = " - Todo Listesi 2 -"

// ? en ustten baslayarak alta dogru inmek
// let row = document.querySelector(".container")
// value = row.children[0].children[0].children[3].children[2].children[2]
// value.textContent = " Todo Degisti 3 "
// value.style.backgroundColor = "green"
// value.style.color = "white"
// console.log(value)

// * Dinamik olarak element olusturmak
// const cardBody = document.querySelectorAll(".card-body")[1]
// const link = document.createElement("a")

// link.id = "goBlogWebsite"
// link.classList = "btn btn-dark btn-sm mt-3"
// link.href = "https://github.com/Recepurkun"
// link.target = "_blank"
// link.innerHTML = "Github Hesabima Git"

// cardBody.appendChild(link) // createElement ile olusturdugumuz butonu ekliyoruz cardBody class'ina
// console.log(link)
// console.log(cardBody)


// // yeni bir todo eklemek
// const yeniTodoEkle = document.querySelector(".list-group")
// const todo = document.createElement("li")//once li'yi olusturup classlarini atiyoruz

// todo.className = "list-group-item d-flex justify-content-between" 
// todo.innerHTML = "Todo 5"

// const todo_a = document.createElement("a")//sonra li'nin icerisindeki a'yi olusturuyoruz ve classlari atiyoruz
// todo_a.className = "delete-item"
// todo_a.href = "#"

// const todo_i = document.createElement("i")//en son olarak da a'nin icerisindeki i'yi olusturup classlari atiyoruz
// todo_i.className = "fa fa-remove"

// // asagidaki yorum satiri yeni bir todo eklenirken kullanilacak olan class'lari gosteriyor
// /*
// <li class="list-group-item d-flex justify-content-between">Todo 1
//                             <a href="#" class="delete-item">
//                                 <i class="fa fa-remove"></i>
//                             </a>
//                         </li>
// */
// todo_a.appendChild(todo_i) //en icten baslayarak i'yi a'nin icine atiyoruz
// todo.appendChild(todo_a)  //daha sonra li'nin icine de a'yi atiyoruz
// yeniTodoEkle.appendChild(todo) //en sonda da list-group icine li'yi atiyoruz 
// //(li(a(i))) seklinde oluyorlar ic ice
//

// * Element Silme
// let todoList = document.querySelector(".list-group")
// let todos = document.querySelectorAll(".list-group-item")
// const todo1 = document.querySelector(".list-group-item")

// todos[0].remove() //todo 1 silindi
// todos[1].remove() //todo 2 silindi
//todos[todos.length-1].remove() //todo 4 silindi
//todo1.remove() //sectigimiz elementi direkt silebiliriz | todo 1 silindi

//todoList.removeChild(todos[0])
//todoList.removeChild(todo1) //buraya node vermek gerekiyor index numarasi degil
//todoList.removeChild(todos[todos.length-1]) // son child'i sildik
//todoList.removeChild(todoList.lastElementChild) //son child'i bu sekilde de silebiliriz


// * Elementleri Yer degistirmek
// const cardBody = document.querySelectorAll(".card-body")[1]
// /* <h5 class="card-title">Todo Listesi</h5> */
// const baslikOlustur = document.createElement("h2")
// baslikOlustur.className="card-title"
// baslikOlustur.textContent="Todo Listesi - Yeni"
// console.log(cardBody.childNodes[1])
// cardBody.replaceChildren(baslikOlustur,cardBody.childNodes[1])

 // * Eventler (Olaylar)
// const clearButton = document.querySelector("#todoClearButton")

// clearButton.addEventListener("click",changeTitle)

// function changeTitle(e){
/* //document.querySelectorAll(".card-title")[1].textContent = " -Todo Basligi Degisti- " */
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.target.textContent);
//   console.log(e.target.className);
// }

// * Mouse Eventleri
//document.addEventListener("DOMContentLoaded",run)
// window.addEventListener("DOMContentLoaded",run)
// function run(){
//   alert("Sayfa yüklendi")
// }

// const cardTitle = document.querySelectorAll(".card-title")[1]
// const cardBody = document.querySelectorAll(".card-body")[1]
/* //cardTitle.addEventListener("click",run) */
// cardTitle.addEventListener("dblclick",run)
// cardBody.addEventListener("mouseover",run)
// cardBody.addEventListener("mouseout",run)
// cardBody.addEventListener("mouseenter",run)//sadece secilmis olan elementin ustune gelince tetiklenir
// cardBody.addEventListener("mouseleave",run)
// function run(e){
//   console.log(e.type)
// }

// * Klavye Eventleri

//keypress: harf ve sayilarda tetiklenen eventtir
//keydown: klavyedeki butun tuslarda tetiklenen eventtir(hepsinde calisir)
//keyup: tustan elini kaldirdiginda calisan eventtir

//document.addEventListener("keypress",run)
//document.addEventListener("keydown",run)
//document.addEventListener("keyup",run)
//function run(e){
  //console.log(e.key)
  //console.log(e.which)
//   console.log(e.keyCode)
//   if(e.keyCode == 116)
//   {
//     alert("Sayfa yenileme engellendi.")
//   }

//   e.preventDefault()
// }

// ? input'a girdigin kelimeleri harf harf konsola yazdirma
// const cardTitle = document.querySelectorAll(".card-title")[0]
// const input = document.querySelector("#todoName")

// input.addEventListener("keyup",run)

// function run(e){
//   cardTitle.textContent = e.target.value
//   console.log(e.target.value)
// }

// * Input Eventleri
//focus: inputun icine tikladiginda tetiklenir.
//blur: inputun icinden cikarken tetiklenir.
//copy: inputun icerisindeki metni kopyaladıgında tetiklenir.
//paste: inputun icerisine metin yapistirdiginizda tetiklenir.
//cut: inputun icerisindeki metni kestiginizde tetiklenir.
//select: inputun icerisindeki metni secip biraktiginzda tetiklenir.

// let todo = document.querySelector("#todoName")
// todo.addEventListener("focus", run)
// todo.addEventListener("blur", run)
// todo.addEventListener("copy", run)
// todo.addEventListener("paste", run)
// todo.addEventListener("cut", run)
// todo.addEventListener("select", run)
// function run(e){
//   console.log(e.type)
// }

// * Session Storage Kullanimi
// Deger ekleme
// sessionStorage.setItem("350","Recep")
// sessionStorage.setItem("146","Ali")
// sessionStorage.setItem("612","Veli")
// sessionStorage.setItem(131,27) //numerik bir deger eklesen bile string olarak kaydedilir.

// Deger silme
// sessionStorage.removeItem("612")

// let value = sessionStorage.getItem("350")//keyini ver karsilik gelen valueyi al
// console.log(value)

// Hepsini sil
// sessionStorage.clear()

// let value = sessionStorage.getItem(131)
// console.log(typeof value) //string

// ? Session Storage - Array Yazdirma
// let names = ["Recep","Ali","Veli","Mehmet","Gokturk"]
// sessionStorage.setItem("Names",JSON.stringify(names)) //array olarak veriyoruz

// let value = JSON.parse(sessionStorage.getItem("Names")) //array olarak alıyoruz
// value.forEach(name => {
//   console.log(name)
// });
// console.log(typeof value)

// * Local Storage Kullanimi
// Deger ekleme
// localStorage.setItem("motion1","Push Up")
// localStorage.setItem("motion2","Barfix")
// localStorage.setItem("motion3","Burpee")
// localStorage.setItem("motion4","Squat")

// Degeri Almak
// let value = localStorage.getItem("motion2")
// console.log(value)

// Degeri Silmek
//localStorage.removeItem("motion4")

// Tumunu Temizle
// localStorage.clear()

// ? Local Storage - Array Yazdirma
// let motions = ["Push Up","Barfix","Burpee","Squat","Chin Up"]
// localStorage.setItem("motions",JSON.stringify(motions))
// let value = JSON.parse(localStorage.getItem("motions"))
// value.forEach(motion => {
//   console.log(motion)
// });
// console.log(typeof value)