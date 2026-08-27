const body = document.querySelector("body")
const ul = document.createElement("ul")
const button = document.createElement("button")
var x = 0 

button.innerHTML="Dodaj owoc"
button.setAttribute("onclick", "dodaj()")


function dodaj(){
    const li = document.createElement("li")
    x++
    console.log(x)

    if(x==1){
        li.innerHTML="Jabłko"
    }else if(x==2){
        li.innerHTML="Gruszka"
    }else{
        li.innerHTML="Śliwka"
        x=0
    }
    ul.appendChild(li)
}



body.appendChild(button)
body.appendChild(ul)