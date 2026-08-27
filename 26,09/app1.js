const body = document.querySelector("body")

async function getData(){
var response = await fetch("https://restcountries.com/v3.1/all?fields=name&fields=flags&fields=capital")
var json_response = await response.json()
console.log(json_response)

for(let i=0; i<=json_response.length-1; i++){
    const div = document.createElement("div")
    div.classList.add("div")
     const img = document.createElement("img")
     img.classList.add("img")
     img.setAttribute("src", json_response[i].flags.png)

    const h1 = document.createElement("h1")
    const h2 = document.createElement("h1")
    h1.innerHTML = json_response[i].name.common
    h2.innerHTML = json_response[i].capital

    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(h2)
    body.appendChild(div)
}

}


getData()