function zadanie1(){
    var input1 = document.querySelector("#input1").value 
    var input2 = document.getElementById("input2").value 
    var h1 = document.querySelector("h1")

    console.log(input1)
    console.log(input2)
    console.log(input1.length)


   if(input1==input2){
    h1.innerHTML= "Ok"
    h1.style.color = "green"

    if(input1.length<=7){
        h1.innerHTML = "za krotkie"
        h1.style.color = "red"
    }

   }else{
    h1.innerHTML = "Nie ok"
    h1.style.color = "red"
   }

   
}