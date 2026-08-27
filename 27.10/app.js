async function getData() {
  var response = await fetch("https://restcountries.com/v3.1/region/europe?fields=name,population")
  var json_response = await response.json()




  var imie = []
  var populacja = []
  var color = []
  var allPop=0
  for(let y=0; y<json_response.length-1; y++){
    allPop = allPop+json_response[y].population
  }
  for(let i=0; i<json_response.length-1; i++){
    var name = json_response[i].name.common
    var population = json_response[i].population
    imie.push(name)
    populacja.push(population/allPop*100)
    if(population/allPop*100<5){
      color.push("red")
    }else{
      color.push("green")
    }
  }

  console.log(imie)
  console.log(populacja)
  new Chart("myChart", {
    type: "bar",
    data: {
      labels: imie,
      datasets: [{
        backgroundColor: color,
        borderColor: "black",
        borderWidth: 1,
        data: populacja
      }]
    },
    options: {}
  });
}

getData()   
