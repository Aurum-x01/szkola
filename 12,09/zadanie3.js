function sprawdz(){
    var input1 = document.getElementById("input1").value
    var input2 = document.getElementById("input2").value        
    var h1 = document.querySelector("h1")

    console.log(input1.toUpperCase()) //zamienia wszystkie litery na duże
    console.log(input1.toLowerCase()) //zamienia wszystkie litery na małe


    if(input1.toLowerCase()===input2.toLowerCase()){
        h1.innerHTML="Teksty są takie same" 
        console.log("Teksty są takie same")
        document.querySelector("body").style.backgroundColor="Green"
    }else{
        h1.innerHTML="Nie są takie same" 
        console.log("Nie są takie same")   
        document.querySelector("body").style.backgroundColor="Red"
    }
}

