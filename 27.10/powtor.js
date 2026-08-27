async function getData() {
  var response = await fetch("https://restcountries.com/v3.1/region/europe?fields=name,population")
  var json_response = await response.json()
  console.log(json_response)

    var tableN= []
    var tableP= []
    var color= []

    for(x=0; x<json_response.length; x++){
        var name = json_response[x].name.common
        var populacja = json_response[x].population
        tableN.push(name)
        tableP.push(populacja)
    }

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: tableN,
      datasets: [{
        backgroundColor: color,
        borderColor: "black",
        borderWidth: 1,
        data: tableP
      }]
    },
    options: {}
  });
}
getData()