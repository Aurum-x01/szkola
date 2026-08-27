
const body = document.querySelector("body")
var input = document.querySelector("#text")

async function getData(){

var response = await fetch("https://restcountries.com/v3.1/all?fields=name&fields=flags&fields=capital&fields=population")
var json_response = await response.json()  

var content = input.value

console.log(content)
for(let i=0; i<=json_response.length-1; i++){
    var name = json_response[i].name.common

    if(name.toLowerCase().includes(content)){
    var div = document.createElement("div")

    div.setAttribute('data-aos', 'fade-up');

    var h2 = document.createElement("h2")
    h2.innerHTML=name

    body.appendChild(div)
    div.appendChild(h2)
    }   }
}


