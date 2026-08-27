function malpa(){
    var input = document.getElementById("input1").value
    var h1 = document.querySelector("h1")

    if(input.includes("@")){
        h1.innerHTML= "Zawiera @"
    }else{
        h1.innerHTML= "nie zawiera @"
    }
}