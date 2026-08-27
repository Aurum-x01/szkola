const body = document.querySelector("body")
let m

function Europa() {
    m.setView([50, 13], 4.5)
}
function AmerykaPol() {
    m.setView([-18, -60], 4)
}
function AmerykaGora() {
    m.setView([50, -100], 3.5)
}
function Afryka() {
    m.setView([5, 20], 3.5)
}
function Australia() {
    m.setView([-27, 130], 5)
}

async function getData() {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,population,latlng,languages,currencies")
    const json_response = await response.json()
    console.log(json_response)

    m = L.map('map').setView([20, 0], 2)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { noWrap: true }).addTo(m)
    noWrap=true
    

    const markers = []

    for (let i = 0; i < json_response.length; i++) {
        const country_Info = json_response[i]
        const country_Name = country_Info.name.common
        const country_Flag = country_Info.flags.png
        const country_Capital = country_Info.capital
        const country_Population = country_Info.population

        let country_Waluta = "Brak danych"
        if (country_Info.currencies) {
            const currencies = Object.values(country_Info.currencies)
            if (currencies.length > 0) {
                country_Waluta = currencies[0].name || "Brak danych"
            }
        }

        let country_Language = "Brak danych"
        if (country_Info.languages) {
            country_Language = Object.values(country_Info.languages) 
        }

        const div_Info = document.createElement("div")
        const img_Flag = document.createElement("img")
        const p_Name = document.createElement("p")
        const p_Capital = document.createElement("p")
        const p_Populacja = document.createElement("p")
        const p_Waluta = document.createElement("p")
        const p_Language = document.createElement("p")

        img_Flag.setAttribute("src", country_Flag)
        img_Flag.style.width = "100px"
        img_Flag.style.borderRadius = "10px"
        img_Flag.style.border = "solid black 1px"
        div_Info.style.lineHeight = "1.2"

        p_Name.innerHTML = "<b>Nazwa państwa: </b>" + country_Name
        p_Capital.innerHTML = "<b>Stolica państwa: </b>" + country_Capital
        p_Populacja.innerHTML = "<b>Populacja państwa: </b>" + country_Population
        p_Waluta.innerHTML = "<b>Waluta państwa: </b>" + country_Waluta
        p_Language.innerHTML = "<b>Język państwa: </b>" + country_Language

        div_Info.appendChild(img_Flag)
        div_Info.appendChild(p_Name)
        div_Info.appendChild(p_Capital)
        div_Info.appendChild(p_Populacja)
        div_Info.appendChild(p_Waluta)
        div_Info.appendChild(p_Language)

        const marker = L.marker(country_Info.latlng).addTo(m).bindPopup(div_Info)

        markers.push(marker)

        marker.on('popupopen', function () {
            m.flyTo(marker.getLatLng(), 5, { duration: 1.5 }); 
            markers.forEach(mk => {
                if (mk !== marker) {
                    m.removeLayer(mk); 
                }
            })
        })
        marker.on('popupclose', function () {
            markers.forEach(mk => {
                if (!m.hasLayer(mk)) {
                    mk.addTo(m)
                }
            })
        })
    }
}

getData()
