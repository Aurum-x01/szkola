const body = document.querySelector("body")
const ul = document.createElement("ul")
const li1 = document.createElement("li")
const li2 = document.createElement("li")
const li3 = document.createElement("li")



li1.innerHTML="Jabłko"   
li2.innerHTML="Gruszka"   
li3.innerHTML="Śliwka"   

body.appendChild(ul)
ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)

li1.setAttribute("onclick", "delete1()")
li2.setAttribute("onclick", "delete2()")
li3.setAttribute("onclick", "delete3()")

function delete1(){
    ul.removeChild(li1)
}
function delete2(){
    ul.removeChild(li2)
}
function delete3(){
    ul.removeChild(li3)
}