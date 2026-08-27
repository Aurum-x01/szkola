const h3 = document.querySelector("h3")
h3.setAttribute("onclick", "ukryty()")

function ukryty(){
    const x = document.querySelector("p")
    if(x.style.display === "none"){
        x.style.display = "block"
    }else{
        x.style.display = "none"
    }
}