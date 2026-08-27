var licznik = 0

function color(){
    if(licznik==10){
    document.getElementById("body").style.backgroundColor = "green"}
    else if(licznik==-10){
    document.getElementById("body").style.backgroundColor = "red"
    }else{
    document.getElementById("body").style.backgroundColor = "white"
}

}


function dodac1() {
    licznik++
    console.log(licznik)
    document.getElementById("licznikCyfraHtml").innerHTML=licznik
    color()
}




function minus1() {
    licznik--
    console.log(licznik)
    document.getElementById("licznikCyfraHtml").innerHTML=licznik
    color()
}



function dodaj() {    

    var zabrac_dane_z_textu = document.getElementById("wpisany_text")

    var text_z_pola = Number(zabrac_dane_z_textu.value)
    licznik=licznik+text_z_pola
    console.log(licznik)
    document.getElementById("licznikCyfraHtml").innerHTML=licznik
    color()
}


function odejmi(){

    zabrac_dane_z_textu = document.getElementById("wpisany_text")

    text_z_pola = Number(zabrac_dane_z_textu.value)

    licznik=licznik-text_z_pola
    console.log(licznik)
    document.getElementById("licznikCyfraHtml").innerHTML=licznik
    color()
}
