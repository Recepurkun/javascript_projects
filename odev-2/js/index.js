//Gerekli olan elementleri secmek
const addInput = document.querySelector("#task")
//const addButton = document.querySelector("#liveToastBtn")
const todo_ul = document.querySelector("#list")
const toasts = document.querySelectorAll("#liveToast")
const toastBody = document.querySelector(".toast-body")
const clearButton = document.querySelector("#allTodoClearbtn")
let todos = [] //local storage'de girilen todo'lari tutmak icin bos array


/*
bir todo sildikten sonra yeni bir todo eklemeye calistiginde bir onceki alert tetikleniyor
bunun sebebini bul.
gecici cozum: todo silme islemlerinden sonra sayfayi yenile | reload() fonk. ile
*/
runEvents()

function runEvents(){ //eventleri calistir
    document.addEventListener("DOMContentLoaded",showTodosFromLocalStorage)
    document.addEventListener("DOMContentLoaded",clicked)
    todo_ul.addEventListener("click",removeTodoUI)
    clearButton.addEventListener("click",allTodoClear)
    document.querySelector('#task').addEventListener("keypress", (event) => {
        if(event.key === "Enter") newElements();
    });
}


function newElements(){ //onclick eventi ile tetiklenince addTodo fonksiyonunu calistir
    addTodo()
}

function addTodo(e){//girilen metni on yuze ve localstorage'a eklemek icin gerekli olan fonksiyon
    const inputText = addInput.value.trim() //text olarak girilen metni trimleyerek al
    if(inputText == null || inputText == ""){
        $(toasts[1]).toast('show') //bos giremezsiniz diye uyari(toasts) ver
    }
    else{
        addTodoToUI(inputText) //yazilan metni on yuzde gostermek icin addTodoUI fonksiyonuna gonder
        addTodoToLocalStorage(inputText) //local storage kaydetmek icin de addTodoToLocalStorage fonksiyonuna gonder
        $(toasts[0]).toast('show') //basarili oldu diye uyari(toasts) ver
    }
}


function addTodoToUI(newTodo){ // text olarak yazilan todolarimizi listeye(list) ekleyerek on yuzde goster
    /*  // * bu sekilde olusturuluyor butun listeler
        <li class="d-flex justify-content-between">50 Sayfa Kitap Oku
        <i class="fa fa-remove close"></i>
        </li>
    */
    const todo_li = document.createElement("li")
    todo_li.textContent = newTodo

    const todo_i = document.createElement("i")
    todo_i.className = "fa fa-remove close"

    todo_li.appendChild(todo_i)
    todo_ul.append(todo_li)
    addInput.value = ""
}

function addTodoToLocalStorage(newTodo){ //local storage'de ekle todolari
    checkTodoFromStorage()
    todos.push(newTodo) //eger hali hazir da varsa bir dizimiz oraya eleman olarak gonder
    localStorage.setItem("todos",JSON.stringify(todos))
}

function showTodosFromLocalStorage(){//local storage de olanlari goster
    checkTodoFromStorage()
    todos.forEach(function(todo){
        addTodoToUI(todo)
    })
}

function checkTodoFromStorage(){ //local storage'da herhangi bir veri var mi kontrol et varsa getir yoksa bos olarak yarat
    if(localStorage.getItem("todos")==null){
        todos = []
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"))
    }
}

function removeTodoUI(e) { //silmek istenilen todo'yu on yuzden kaldır
    if (e.target.className === "fa fa-remove close") {
      // ? ekrandan silmek
      const question = confirm("Bu Todo'yu silmek istediğinize emin misiniz?");
      const todo = e.target.parentElement;
      if(question == true){
        todo.remove()
        showAlert("success","Todo basariyla silindi.")
        //alert("Todo basariyla silindi.")
        // ? storage'den silmek
        removeTodoLocalStorage(todo.textContent)
        reload()
    }
    else{
        showAlert("info","Silme İşleminden Vazgeçildi.")
        reload()
        //alert("Silme İşleminden Vazgeçildi.")
    }
    }
}
  
function removeTodoLocalStorage(removeTodo){ //silmek istenilen todo'yu local storageden kaldir
    checkTodoFromStorage()
    todos.forEach(function(todo,index){
        if(removeTodo === todo){
            todos.splice(index,1)
        }
    })
    localStorage.setItem("todos",JSON.stringify(todos))
}

function showAlert(type, message, callback) { //kullaniciya alert ile on yuzde mesaj goster
    const toast = document.getElementById("liveToast");
    const toastBody = toast.querySelector(".toast-body");
  
    toast.classList.add(`toast-${type}`);
    toastBody.textContent = message + " | showAlert calisti"
  
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
  
    // Bildirim gösterildikten sonra callback fonksiyonu çağır
    setTimeout(() => {
        if(typeof callback === "function")
        {
            callback();
        }
    }, 2000);
}


function allTodoClear(){
    const todoListesi = document.querySelectorAll("#list li")
    if(todoListesi.length > 0){
        //ekrandan silme
        todoListesi.forEach(function(todo){
            todo.remove()
        })
    todos = []
    localStorage.setItem("todos",JSON.stringify(todos))
    showAlert("success","Basarili bir sekilde silindi - Todo Clear Alert ")
    //alert("Basarili bir sekilde silindi - Todo Clear Alert ")
    reload()
    }
    else{
        showAlert("warning","Silmek icin en az 1 Todo olmalidir. - Todo Clear Alert")
        //alert("Silmek icin en az 1 Todo olmalidir. - Todo Clear Alert")
    }
    reload()
}
  

function clicked(){ //liste uzerinde tiklandiginde ustunu cizen fonksiyon
    document.querySelectorAll("#list li").forEach((item) => { 
        item.addEventListener("click" , () => {
            if(item.classList.contains("checked"))
                item.classList.remove("checked");
            else
                item.classList.add("checked");
        })
    })
}

function reload(){
    setTimeout(() => {
        location.reload();
    }, 2500);
}