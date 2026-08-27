var licznik=0
const button = document.querySelector("button")
button.setAttribute("onclick", "dodaj()")
function dodaj(){

    licznik++
    const span = document.querySelector("span").innerHTML=licznik
}