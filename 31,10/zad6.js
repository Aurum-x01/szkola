const input = document.querySelector("#input")


async function getData() {
    const regionW=input.value
    console.log(regionW)
  var response = await fetch(`https://restcountries.com/v3.1/region/${regionW}?fields=name`)
  var json_response = await response.json()

  var tableN = []
  var tableL = []
  var color = []
  for (var i = 0; i<json_response.length; i++) {
    var name = json_response[i].name.common
    var lengthName = json_response[i].name.common.length
    tableL.push(lengthName)
    tableN.push(name)
  }



  new Chart("myChart", {
    type: "bar",
    data: {
      labels: tableN,
      datasets: [{
        label: "Coś",
        backgroundColor: color,
        borderColor: "black",
        borderWidth: 1,
        data: tableL
      }]
    },
    
    options: {}
  })
} 
getData()