// User specific scripts go here

apiurl = `https://pokeapi.co/api/v2/pokemon/?limit=900`
pokeListLocation = document.querySelector("#pokelist")
let pokemon = "bulbasaur"

function getPokemon(){
    fetch(apiurl, {
        "method": "GET"
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        
        let pokeList = data.results;
        
        pokeList.map(function(pokemon){
            const pokeElement = document.createElement("option")
            pokeElement.value = (pokemon.name)
            pokeElement.textContent = (pokemon.name)
            pokeListLocation.append(pokeElement) 
        })
        console.log(pokeList)
    })
};

getPokemon()