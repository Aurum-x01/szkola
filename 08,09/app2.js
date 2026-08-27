function dodaj(){
    var licz1=document.getElementById("liczba1")
    var licz2=document.getElementById("liczba2")

    var liczba1_przetworzona=Number(licz1.value)
    var liczba2_przetworzona=Number(licz2.value)

    var sum=liczba1_przetworzona+liczba2_przetworzona

    document.getElementById("suma").innerHTML=sum
}

function odejmi(){
    licz1=document.getElementById("liczba1")
    licz2=document.getElementById("liczba2")

    liczba1_przetworzona=Number(licz1.value)
    liczba2_przetworzona=Number(licz2.value)

    sum=liczba1_przetworzona-liczba2_przetworzona

    document.getElementById("suma").innerHTML=sum
}

function mnozyc(){
    licz1=document.getElementById("liczba1")
    licz2=document.getElementById("liczba2")

    liczba1_przetworzona=Number(licz1.value)
    liczba2_przetworzona=Number(licz2.value)

    sum=liczba1_przetworzona*liczba2_przetworzona

    document.getElementById("suma").innerHTML=sum
}

function dzielic(){
    licz1=document.getElementById("liczba1")
    licz2=document.getElementById("liczba2")

    liczba1_przetworzona=Number(licz1.value)
    liczba2_przetworzona=Number(licz2.value)

    sum=liczba1_przetworzona/liczba2_przetworzona

    document.getElementById("suma").innerHTML=sum
}