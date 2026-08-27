
const body = document.querySelector("body")

async function getData(){

var response = await fetch("https://restcountries.com/v3.1/all?fields=name&fields=flags&fields=capital&fields=population")
var json_response = await response.json()  


var nameL=[]

    var div = document.createElement("div")
    var div2 = document.createElement("div")
    var h2 = document.createElement("h2")
    var h02 = document.createElement("h2")

for(let i=0; i<=json_response.length-1; i++){
    var nameLen = (json_response[i].name.common).length
    div.setAttribute('data-aos', 'fade-up');
    nameL.push(nameLen)

}


    h2.innerHTML=Math.max(...nameL)
    h02.innerHTML=Math.min(...nameL)
    console.log(nameL)  

    body.appendChild(div)
    body.appendChild(div2)
    div.appendChild(h2)
    div2.appendChild(h02)

}

getData()
