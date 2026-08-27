const body = document.querySelector("body")
function zmien(){
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)

    body.style.backgroundColor=`rgb(${x}, ${y}, ${z})`
}