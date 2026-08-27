const body = document.querySelector("body")

var button = document.querySelector("button")

for(var i=0; i<=10000; i++){
   const div = document.createElement("div")
   div.style.width="10px"
   div.style.height="10px"
   div.style.border="1px solid black"
   div.addEventListener("mouseover", function(){
    div.style.backgroundColor="green"

    // div.style.transition="2s"
    
   })
button.addEventListener("click", function reset(){
    div.style.backgroundColor = "White"
})

    // div.style.transition="2s"
    
   



    body.appendChild(div)
}   




