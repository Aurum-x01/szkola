async function getData() {
  // ✅ отримуємо дані про країни
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital");
  const countries = await response.json();

  // ✅ робимо масив випадкових індексів
  let indexes = [];
  while (indexes.length < 2) {
    let rand = Math.floor(Math.random() * countries.length);
    if (!indexes.includes(rand)) {
      indexes.push(rand);
    }
  }

  // ✅ знаходимо div-и
  const div1 = document.getElementById("div1");
  const div2 = document.getElementById("div2");

  // очищаємо їх
  div1.innerHTML = "";
  div2.innerHTML = "";

  // ✅ створюємо картинки
  const img1 = document.createElement("img");
  img1.src = countries[indexes[0]].flags.png;
  img1.alt = countries[indexes[0]].name.common;
  img1.classList.add("img");

  const img2 = document.createElement("img");
  img2.src = countries[indexes[1]].flags.png;
  img2.alt = countries[indexes[1]].name.common;
  img2.classList.add("img");

  // ✅ вставляємо у div-и
  div1.appendChild(img1);
  div2.appendChild(img2);
}

getData();
