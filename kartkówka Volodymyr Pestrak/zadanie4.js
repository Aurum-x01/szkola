const body = document.querySelector("body")
const input = document.createElement("input")
const button = document.createElement("button")
const ul = document.createElement("ul")
const span = document.createElement("span")
var licznik=0


button.innerHTML="Dodaj"
button.setAttribute("onclick", "dodaj()")


function dodaj(){
    console.log(licznik)
    licznik++
    span.innerHTML=licznik
    const li = document.createElement("li")
    const ButtonDel = document.createElement("button")
    ButtonDel.innerHTML="Usuń"

    li.innerHTML = document.querySelector("input").value
    ButtonDel.onclick = () => ul.removeChild(li)&&licznik--
    ul.appendChild(li)
    li.appendChild(ButtonDel)
    
}






body.appendChild(input)
body.appendChild(button)
body.appendChild(span)
body.appendChild(ul)