const body = document.querySelector("body")
const div = document.createElement("div")
const header = document.createElement("header")
const p = document.createElement("p")
div.setAttribute("class", "card")

header.innerHTML= "Nagłówek"
header.style.backgroundColor="red"
header.style.borderTopLeftRadius="20px"
header.style.borderTopRightRadius="20px"
header.style.fontSize = "30px"
header.style.fontWeight="bold"
header.style.padding = "10px"
header.style.font = "center"

div.style.backgroundColor = "grey"
div.style.width = "80%"
div.style.height = "auto"
div.style.borderRadius = "20px"
div.style.textAlign = "center"

p.innerHTML="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi porro accusantium, maxime dignissimos eos architecto. Debitis, cum exercitationem porro atque asperiores alias aliquam sed quisquam, veniam deserunt impedit delectus facere vero sequi aspernatur ut consequuntur quasi, eveniet possimus! Beatae facere, repudiandae labore aliquam magnam rerum expedita. Iusto voluptate consequuntur ea amet. Molestiae praesentium animi, reprehenderit, veniam optio voluptas fugiat porro aut accusamus impedit tempore aliquid ex aspernatur temporibus neque consequuntur tenetur magni ea. Dolor, fugit iure maxime aperiam repellat, earum voluptatem molestias, reprehenderit temporibus vitae eligendi quia et qui! Praesentium dicta perferendis consequatur repellat deleniti ipsa, eius maxime qui animi ratione deserunt vitae omnis neque nisi libero inventore, aliquid vel fuga autem minima esse! Dolorem repellendus voluptas dicta, a, minima odit sit laudantium expedita ullam, est voluptatibus. Quam laborum perferendis placeat, animi illo earum, similique fugiat voluptas natus, provident sint consectetur numquam! Ipsam voluptate, autem accusamus, perferendis voluptas dolore, vitae at a voluptatum quas possimus eos exercitationem repellat debitis. Ratione et temporibus nulla maiores iste. Beatae, laborum repellat? Quae eaque rem earum esse corporis delectus molestias consectetur, beatae minus deserunt facilis repellendus, quam id odit nemo qui! Maiores voluptatum itaque, ex aut illum est ipsa consectetur libero corporis asperiores reprehenderit?"
p.style.padding="15px"
div.appendChild(header)
div.appendChild(p)
body.appendChild(div)