// User specific scripts go here

apiurl = `https://pokeapi.co/api/v2/pokemon/?limit=900`
pokeListLocation = document.querySelector("#pokelist")

let information = document.querySelector(".information")

function getPokemon() {
    fetch(apiurl, {

    })
        .then(response => {
            return response.json()
        })
        .then(data => {

            let pokeList = data.results;

            pokeList.map(function (pokemon) {
                const pokeElement = document.createElement("option")
                pokeElement.value = (pokemon.name)
                pokeElement.textContent = (pokemon.name)
                pokeListLocation.append(pokeElement)
            })

        })
};

function display() {

    let pokemonSelected = document.querySelector("#pokelist").value

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`, {
        "method": "GET"
    })
        .then(response => {
            return response.json()
        })
        .then(data => {

            let abilities = data.abilities
            abilities.map(function (abilities) {
                const pokeAbilities = document.createElement("p")
                pokeAbilities.value = (abilities.ability.name)
                pokeAbilities.textContent = (abilities.ability.name)
                information.append(pokeAbilities)

            })
        })
};

document.getElementById("primarybtn").addEventListener("click", function () {
    document.querySelector(".information").innerHTML = ""
    display()

})

getPokemon()