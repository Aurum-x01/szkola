async function Data() {
    var body = document.querySelector("body")
    var main = document.querySelector("main")
    var response = await fetch("https://restcountries.com/v3.1/all?fields=name")
    data = await response.json()
    console.log(data)
   
    var tab = []
   
    for(let i = 0; data.length-1 >= i; i++) {
        var name = data[i].name.common
        tab.push(name)
    }
 
    tab.sort()
 
    for(let j = 0; j <= tab.length-1; j++) {
        var div = document.createElement("div")
        div.setAttribute('data-aos', "fade-up")
        div.innerHTML = tab[j]
        main.appendChild(div)
    }
 
}
 
Data()