const h1 = document.querySelector("h1")

async function getData(){

var response = await fetch("https://restcountries.com/v3.1/all?fields=name&fields=flags&fields=capital&fields=population")
var json_response = await response.json()  
console.log(json_response)

let text = json_response[0].name.common
h1.innerHTML=text.toUpperCase()


}

getData()