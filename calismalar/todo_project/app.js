//Tum elemenleti secmek

const form = document.querySelector("#todoAddForm")
const addInput = document.querySelector("#todoName")
const todoList = document.querySelector(".list-group")
const firstCardBody = document.querySelectorAll(".card-body")[0]
const secondCardBody = document.querySelectorAll(".card-body")[1]
const clearButton = document.querySelector("#todoClearButton")
const filterInput = document.querySelector("#todoSearch")
let todos = []

runEvents()

function runEvents(){
    form.addEventListener("submit", addTodo)
    document.addEventListener("DOMContentLoaded",showTodosFromLocalStorage)//sayfam yuklendiginde bu metodu calistir 
    secondCardBody.addEventListener("click",removeTodoUI)
    clearButton.addEventListener("click",allTodoClear)
    filterInput.addEventListener("keyup",filter)
}

function filter(e){
    const filterValue = e.target.value.toLowerCase().trim()
    const todoListesi = document.querySelectorAll(".list-group-item")
    if(todoListesi.length>0){
        todoListesi.forEach(function(todo){
            if(todo.textContent.toLowerCase().trim().includes(filterValue)){
                todo.setAttribute("style","display: block")
            }
            else{
                todo.setAttribute("style","display: none !important")
            }
        })
    }
    else{
        showAlert("warning","Filtreleme yapmak icin en az bir todo olmalidir!")
    }
}

function showTodosFromLocalStorage(){ //local storage'de olan todo'lari on yuzde goster
    checkTodoFromStorage()
    todos.forEach(function(todo){
        addTodoToUI(todo)
    })
}

function removeTodoUI(e){
    if(e.target.className === "fa fa-remove"){
        //ekrandan silmek
        const Question = confirm('Bu Todoyu Silmek İstediğinize Emin misiniz?');
        const todo = e.target.parentElement.parentElement
        if(Question == true){
            todo.remove()
            showAlert("success","Todo basariyla silindi.")
        }
        else{
            showAlert("info","Silme İşleminden Vazgeçildi.")
        }
        //storage'den silmek
        removeTodoLocalStorage(todo.textContent)
        //console.log(e.target.value) üzerinde çalış
    }
    e.preventDefault()
}
function removeTodoLocalStorage(removeTodo){
    checkTodoFromStorage()
    //text contenti ayni olan her seyi siliyor, buna cozum bul
    todos.forEach(function(todo,index){
        if(removeTodo === todo){
            todos.splice(index,1)
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos))
}

function allTodoClear(){
    const todoListesi = document.querySelectorAll(".list-group-item")
    if(todoListesi.length > 0){
        //ekrandan silme
        todoListesi.forEach(function(todo){
            todo.remove()
        })
    todos = []
    localStorage.setItem("todos",JSON.stringify(todos))
    showAlert("success","Basarili bir sekilde silindi.")
    }
    else{
        showAlert("warning","Silmek icin en az 1 Todo olmalidir.")
    }
}

function addTodo (e){
    const inputText = addInput.value.trim()
    if(inputText == null || inputText == ""){
        showAlert("warning","Lutfen bos birakmayiniz")
    }
    else{
        addTodoToUI(inputText) //arayuze ekleme
        addTodoToLocalStorage(inputText) //storage ekleme
        showAlert("success","Todo Eklendi") //alert icin gerekli olan typei ve mesaji gonder
    }
    e.preventDefault() //sayfayi yeniden yuklemeyi engelle
}

function addTodoToUI(newTodo){ // ekledigimiz todolari ekranda gosterebilmek icin
    /*
    <li class="list-group-item d-flex justify-content-between">Todo 1
        <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
        </a>
        </li>
    */
   const todo_li = document.createElement("li")
   todo_li.className = "list-group-item d-flex justify-content-between"
   todo_li.textContent = newTodo
   
   const todo_a = document.createElement("a")
   todo_a.className = "delete-item"
   todo_a.href = "#"
   
   const todo_i = document.createElement("i")
   todo_i.className = "fa fa-remove"

   todo_a.appendChild(todo_i) //olusturdugumuz i'yi a'nin icine ekliyoruz
   todo_li.appendChild(todo_a) //olusturdugumuz a'yi li'nin icine ekliyoruz
   todoList.appendChild(todo_li) //olusturdugumuz li'yi on yuzde gosterebilmek icin listeye(list_group'a) ekliyoruz
   addInput.value = "" // yeni bir todo ekledikten sonra input bos gelsin diye
}

function addTodoToLocalStorage(newTodo){ //ekledigimiz todolari local storage'de kaydedebilmek icin
    checkTodoFromStorage()
    todos.push(newTodo)
    localStorage.setItem("todos",JSON.stringify(todos))
}

function checkTodoFromStorage(){//daha onceden boyle bir todo olusturulmus mu kontrol et
    if(localStorage.getItem("todos")==null){ //eger olusturulmamis ise bos bir dizi olustur
        todos = []
    }   
    else{ //eger olusturulmus ise de gelen todoslari diziye ekle
        todos = JSON.parse(localStorage.getItem("todos"))//bunu da dizi olarak don
    }
}

function showAlert(type,messsage){ //ekranda duruma gore alert goster
    /*
        <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
        </div>
    */

   const div = document.createElement("div")
   //div.className = "alert alert-" + type
   div.className = ` alert alert-${type} ` // template literals
   div.role = "alert"
   div.textContent = messsage
   firstCardBody.appendChild(div)
   
   //2 sn sonra ekledigimiz alert mesajini kaldir(yani divi sil)
   setTimeout(() => { 
    div.remove()
   }, 2000);
}












// console.log(form)
// console.log(addInput)
// console.log(todoList)
// console.log(firstCardBody)
// console.log(secondCardBody)
// console.log(clearButton)
