function imie() {
    var input = document.getElementById("input1").value;
    var h1 = document.querySelector("h1");

    // знайдемо позицію останньої "a"
    var ostatniaLiteraA = input.toLowerCase().lastIndexOf("a");

    if (ostatniaLiteraA === input.length - 1) {
        h1.innerHTML = "imie żeńskie";
    } else {
        h1.innerHTML = "imie męskie";
    }
}
