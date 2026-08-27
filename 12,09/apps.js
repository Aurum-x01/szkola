function zadanie1(){
    var input1 = parseInt( document.getElementById("input1").value )
    var input2 = parseInt( document.getElementById("input2").value )
    var input3 = parseInt( document.getElementById("input3").value )
    var h1 = document.querySelector("h1")
    

    if(input1>input2 && input1>input3){
        console.log(input1)
        h1.innerHTML = input1
    }
    if(input2>input1 && input2>input3){
        console.log(input2)
        h1.innerHTML = input2
    }
    if(input3>input1 && input3>input2){
        console.log(input3)
        h1.innerHTML = input3
    }


}