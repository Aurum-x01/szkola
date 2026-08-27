const body = document.querySelector("body")

function create(){
    const table = document.createElement("table")
    const width = document.getElementById("input1").value
    const height = document.getElementById("input2").value
    table.style.borderCollapse = "Collapse"

    for(i=1; i<=width; i++){
        const tr = document.createElement("tr")
        tr.style.border = "1px solid black"
        table.appendChild(tr)

    for(y=1; y<=height; y++){
         const td = document.createElement("td")
        td.style.border = "1px solid black"
        table.appendChild(td)
    }
    }


    
    body.appendChild(table)

}