const body = document.querySelector("body")
const button = document.createElement("button")

button.innerHTML="Dodaj tekst"

button.setAttribute("onclick", "nowyAkapit()")

function nowyAkapit(){
const p = document.createElement("p")
p.innerHTML="Nowy akapit"

body.appendChild(p)
}



body.appendChild(button)
