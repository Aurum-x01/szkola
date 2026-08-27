const ul = document.querySelector("ul")
// const input1 = document.getElementById("text").value

function dodaj(){
    const li = document.createElement("li")
    li.innerHTML = document.getElementById("text").value
    ul.appendChild(li)
}
