const body = document.querySelector("body")
const ul = document.createElement("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")
input.setAttribute("id", "lista");
button.setAttribute("onclick", "dodaj()")   

function dodaj(){
    const li = document.createElement("li")
    li.innerHTML = document.getElementById("lista").value
    ul.appendChild(li)
}

body.appendChild(ul)
