
const body = document.querySelector("body")

async function getData(){

var response = await fetch("https://restcountries.com/v3.1/all?fields=name&fields=region&fields=flags&fields=capital&fields=population")
var json_response = await response.json()  

for(let i=0; i<=json_response.length-1; i++){
    var div = document.createElement("div")
    var h2 = document.createElement("h2")


    var x = json_response[i].name.common
    var y = json_response[i].region
    var z = json_response[i].population.toLocaleString()
    
    div.setAttribute('data-aos', 'fade-up')

    h2.innerHTML= `Kraj ${x} znajduje się w regionie ${y} i ma populację ${z}`
    
    body.appendChild(div)
    div.appendChild(h2)
}




}

getData()
