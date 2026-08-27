const body = document.querySelector("body")
const flag1 = document.getElementById("flag1")
const flag2 = document.getElementById("flag2")
const score = document.getElementById("score")
const main = document.querySelector("main")
const stopper = document.createElement("div")
const population1 = document.createElement("h3")
const population2 = document.createElement("h3")

const hp1 = document.getElementById("hp1")
const hp2 = document.getElementById("hp2")
const hp3 = document.getElementById("hp3")

var licz = 0

stopper.style.width="100%"
stopper.style.height="100vh"
stopper.style.position="absolute"
stopper.style.zIndex=999

var hp = 3


function animacja() {
    
    flag1.style.animation = "none"
    flag2.style.animation = "none"

    void flag1.offsetWidth  
    void flag2.offsetWidth

    flag1.style.animation = "slide-in-left .5s cubic-bezier(.25,.46,.45,.94) both"
    flag2.style.animation = "slide-in-right .5s cubic-bezier(.25,.46,.45,.94) both"

    flag1.addEventListener("animationend", () => { flag1.style.animation = "", console.log("Animacja flaga1") }, { once: true })
    flag2.addEventListener("animationend", () => { flag2.style.animation = "", console.log("Animacja flaga2") }, { once: true })

}




async function getData(){

var response = await fetch("https://restcountries.com/v3.1/all?fields=name&fields=flags&fields=capital&fields=population")
var json_response = await response.json()   

console.log("Wynnik: ",licz)


flag1.innerHTML=""
flag2.innerHTML=""



const a = Math.floor(Math.random()*json_response.length-1)
const b = Math.floor(Math.random()*json_response.length-1)
const h1YesNO = document.createElement("h1")
main.appendChild(h1YesNO)

const img1 = document.createElement("img")
const img2 = document.createElement("img")
const name1 = document.createElement("h3")
const name2 = document.createElement("h3")

h1YesNO.style.position="absolute"
h1YesNO.style.bottom="20px"

img1.classList.add("img")
img2.classList.add("img")
img1.setAttribute("src", json_response[a].flags.png)
img2.setAttribute("src", json_response[b].flags.png)

name1.innerHTML = json_response[a].name.common
name2.innerHTML = json_response[b].name.common


// -----------------------------------PIRWSZA FLAGA-----------------------------------
if( a===b ){
    getData()
}
flag1.onclick = () => {
    if (json_response[a].population > json_response[b].population) {
        licz++
        score.innerHTML = licz
        main.style.background = "green"
        body.appendChild(stopper)
        h1YesNO.innerHTML="Dobrze"

        population1.innerHTML=json_response[a].population.toLocaleString('pl-PL')
        population2.innerHTML=json_response[b].population.toLocaleString('pl-PL')


        setTimeout(() => {
            main.style.background = "linear-gradient(135deg, #A855F7, #7E22CE)"
            h1YesNO.innerHTML=""
            body.removeChild(stopper)
            population1.innerHTML=""
            population2.innerHTML=""
            getData()
        }, 3000)

        return
    }else{
        hp--
        main.style.background = "red"
        h1YesNO.innerHTML="Źle, poprawna odpowiedź to: " + json_response[b].name.common
        population1.innerHTML=json_response[a].population.toLocaleString('pl-PL')
        population2.innerHTML=json_response[b].population.toLocaleString('pl-PL')
        body.appendChild(stopper)

        console.log("hp = ", hp)
        if(hp === 2) hp3.innerHTML = ""
        if(hp === 1) hp2.innerHTML = ""
        if(hp===0){
            hp1.innerHTML = ""
            
            const divGG = document.createElement("div")
            const h1GG = document.createElement("h1")
            const buttonRestart = document.createElement("button")
            const result = document.createElement("h3")
            const cardGG = document.createElement("div")
            cardGG.classList.add("cardGG")


            buttonRestart.innerHTML="Restart"

            divGG.classList.add("GG")

            h1GG.innerHTML="Gra skończona"
            result.innerHTML="Twój wynik: " + licz

            buttonRestart.setAttribute("onclick", "restart()")

            body.appendChild(divGG)
            cardGG.appendChild(h1GG)
            cardGG.appendChild(result)
            cardGG.appendChild(buttonRestart)
            divGG.appendChild(cardGG)
            body.removeChild(stopper)
            return
        }
    }
    setTimeout(() => {
        main.style.background = "linear-gradient(135deg, #A855F7, #7E22CE)"
        h1YesNO.innerHTML=""
        body.removeChild(stopper)
        population1.innerHTML=""
        population2.innerHTML=""
        getData()
    }, 3000)
}

// -----------------------------------DRUGA FLAGA-----------------------------------
flag2.onclick = () => {
    if (json_response[b].population > json_response[a].population) {
        licz++;
        score.innerHTML = licz;
        main.style.background = "green"
        body.appendChild(stopper)
        h1YesNO.innerHTML="Dobrze"
        population1.innerHTML=json_response[a].population.toLocaleString('pl-PL')
        population2.innerHTML=json_response[b].population.toLocaleString('pl-PL')

        setTimeout(() => {
            main.style.background = "linear-gradient(135deg, #A855F7, #7E22CE)"
            h1YesNO.innerHTML=""
            body.removeChild(stopper)
            population1.innerHTML=""
            population2.innerHTML=""
            getData()
        }, 3000)
        return;
    }else{
        hp--
        main.style.background = "red"
        h1YesNO.innerHTML="Źle, poprawna odpowiedź to: " + json_response[a].name.common
        body.appendChild(stopper)
        population1.innerHTML=json_response[a].population.toLocaleString('pl-PL')
        population2.innerHTML=json_response[b].population.toLocaleString('pl-PL')

        console.log("hp = ", hp)
        if(hp === 2) hp3.innerHTML = ""

        if(hp === 1) hp2.innerHTML = ""
        if(hp===0){
            hp1.innerHTML = ""
            
            const divGG = document.createElement("div")
            const h1GG = document.createElement("h1")
            const buttonRestart = document.createElement("button")
            const result = document.createElement("h3")
            const cardGG = document.createElement("div")
            cardGG.classList.add("cardGG")

            buttonRestart.innerHTML="Restart"

            divGG.classList.add("GG")

            h1GG.innerHTML="Gra skończona"
            result.innerHTML="Twój wynik: " + licz

            buttonRestart.setAttribute("onclick", "restart()")

            body.appendChild(divGG)
            cardGG.appendChild(h1GG)
            cardGG.appendChild(result)
            cardGG.appendChild(buttonRestart)
            divGG.appendChild(cardGG)
            body.removeChild(stopper)
            return
        }
    }
    setTimeout(() => {
        main.style.background = "linear-gradient(135deg, #A855F7, #7E22CE)"
        h1YesNO.innerHTML=""
        body.removeChild(stopper)
        population1.innerHTML=""
        population2.innerHTML=""
        getData()
    }, 3000)
    
}



flag1.appendChild(img1)
flag2.appendChild(img2)
flag1.appendChild(name1)
flag2.appendChild(name2)
flag1.appendChild(population1)
flag2.appendChild(population2)
animacja()

}

function restart() {
    location.reload()
}



getData()
