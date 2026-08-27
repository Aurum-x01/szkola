async function getData() {
  var response = await fetch("https://restcountries.com/v3.1/all?fields=name&fields=region&fields=flags&fields=capital&fields=population")
  var json_response = await response.json()

    var a = []
    var b = []
    var c = []
    var d = []
    var e = []
    var f = []
    var g = []
    var h = []
    var i = []
    var j = []
    var g = []
    var k = []
    var l = []
    var m = []
    var n = []
    var o = []
    var p = []
    var q = []
    var r = []
    var s = []
    var t = []
    var u = []
    var v = []
    var w = []
    var x = []
    var y = []
    var z = []



  var tableN = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var tableL = []
  for (var vo = 0; vo<=json_response.length-1; vo++) {

    var name = json_response[vo].name.common

    if(name.startsWith('A')){
        a.push(name)
    }
    if(name.startsWith('B')){
        b.push(name)
    }
    if(name.startsWith('C')){
        c.push(name)
    }
    if(name.startsWith('D')){
        d.push(name)
    }
    if(name.startsWith('E')){
        e.push(name)
    }
    if(name.startsWith('F')){
        f.push(name)
    }
    if(name.startsWith('G')){
        g.push(name)
    }
    if(name.startsWith('H')){
        h.push(name)
    }
    if(name.startsWith('I')){
        i.push(name)
    }
    if(name.startsWith('J')){
        j.push(name)
    }
    if(name.startsWith('K')){
        k.push(name)
    }
    if(name.startsWith('L')){
        l.push(name)
    }
    if(name.startsWith('M')){
        m.push(name)
    }
    if(name.startsWith('N')){
        n.push(name)
    }
    if(name.startsWith('O')){
        o.push(name)
    }
    if(name.startsWith('P')){
        p.push(name)
    }
    if(name.startsWith('Q')){
        q.push(name)
    }
    if(name.startsWith('R')){
        r.push(name)
    }
    if(name.startsWith('S')){
        s.push(name)
    }
    if(name.startsWith('T')){
        t.push(name)
    }
    if(name.startsWith('U')){
        u.push(name)
    }
    if(name.startsWith('V')){
        v.push(name)
    }
    if(name.startsWith('W')){
        w.push(name)
    }
    if(name.startsWith('X')){
        x.push(name)
    }
    if(name.startsWith('Y')){
        y.push(name)
    }
    if(name.startsWith('Z')){
        z.push(name)
    }

  }

console.log(a.length, b.length, c.length)

tableL.push(a.length, b.length, c.length, d.length, e.length, f.length, g.length, h.length, i.length, j.length, k.length, l.length, m.length, n.length, o.length, p.length, q.length, r.length, s.length, t.length, u.length, v.length, w.length, x.length, y.length, z.length)

  new Chart("myChart", {
    type: "bar",
    data: {
      labels: tableN,
      datasets: [{
        label: "Coś",
        backgroundColor: "green",
        borderColor: "black",
        borderWidth: 1,
        data: tableL
      }]
    },
    
    options: {}
  })
} 
getData()