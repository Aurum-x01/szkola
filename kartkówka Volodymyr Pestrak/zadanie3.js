const body = document.querySelector("body")
const h3 = document.createElement("h3")
const p = document.createElement("p")

h3.innerHTML="Pokaz opis"
p.innerHTML="To jest opis"

h3.setAttribute("onclick", "pokaz()")

function pokaz(){
    if(p.style.display==="none"){
        p.style.display="block"
    }else{
        p.style.display="none"
    }
}



body.appendChild(h3)
body.appendChild(p)