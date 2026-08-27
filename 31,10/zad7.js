
const body = document.querySelector("body")

async function getData(){

var response = await fetch("https://restcountries.com/v3.1/all?fields=name&fields=flags&fields=capital&fields=population")
var json_response = await response.json()  




for(let i=0; i<=json_response.length-1; i++){
    var name = json_response[i].name.common
    var div = document.createElement("div")
    div.setAttribute('data-aos', 'fade-up');
    var h2 = document.createElement("h2")
    
    const country = json_response[i].name.common
    if(country.startsWith("A")){
        h2.innerHTML=country
        body.appendChild(div)
        div.appendChild(h2)
    }

}


}

getData()