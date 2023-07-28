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

const todoList = Array.from(document.querySelectorAll("li:nth-child(even)"))
todoList.forEach(function(todo){
    todo.style.backgroundColor = "orange"
})
console.log(todoList)
