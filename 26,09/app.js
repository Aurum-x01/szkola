var osoba_json = {
    imie: "Wlodek", 
    nazwisko: "Pestrak",
    wiek: 16,
    czy_m: true,
    samochody: [
        {
         marka: "Fiat",
         przebieg: 
          1000
        },
        {
         marka: "BMW",
         przebieg: 2000

        }]
}
//osoba_json.samochody.length - 1, bo tablicz zaczyna się od indeksu 0 
for(let i = 0; i<= osoba_json.samochody.length - 1; i++){
    console.log(osoba_json.samochody[i].marka)
} 

osoba_json.samochody[0].marka="seat"//zmieniamy nazwę samochodu o indeksie 0 na seat
console.log(osoba_json.samochody[0].marka)
