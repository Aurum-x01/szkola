const body = document.querySelector("body")
const input = document.createElement("input")
const button = document.createElement("button")
const ul = document.createElement("ul")

input.type="text"
button.innerHTML="Dodać"

button.setAttribute("onclick", "dodaj()")

function dodaj(){
    const li = document.createElement("li")
    const btnDlt = document.createElement("button")

    btnDlt.innerHTML="USUN"
    li.innerHTML=input.value

    btnDlt.onclick = () => ul.removeChild(li)

    ul.appendChild(li)
    li.appendChild(btnDlt)
}

body.appendChild(input)
body.appendChild(button)
body.appendChild(ul)


