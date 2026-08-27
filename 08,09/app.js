// console.log("Witaj świecie!")

// const wiek=2         



// if(wiek>=18){
//     for (var i = 0; i <= 100; i++) {
//         console.log(i);
// }
// } else {
//     for (var y = 100; y >= 0; y--) {
//         console.log(y);
// }}


var licznik = 0

function dodaj1(){
    licznik++
    console.log(licznik)

    document.getElementById("licznik_cyfra").innerHTML=licznik

    if(licznik%2==0){
        document.getElementById("body").style.backgroundColor = "green"
    }else{
        document.getElementById("body").style.backgroundColor = "red"

    }
}

function minus1(){
    licznik--       
    console.log(licznik)

    document.getElementById("licznik_cyfra").innerHTML=licznik

    if(licznik%2==0){
        document.getElementById("body").style.backgroundColor = "green"
    }else{
        document.getElementById("body").style.backgroundColor = "red"

    }
}

function theme(){
    
}

