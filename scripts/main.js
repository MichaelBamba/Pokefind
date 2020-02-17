

const apiurl = `https://pokeapi.co/api/v2/pokemon/?limit=964`
let information = document.querySelector(".information")
let pokeSearchList = []
let pokeSprites = document.querySelector('.pokeSprite')



function getPokemon() {
    fetch(apiurl, {
        "method": "GET"
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            let pokeList = data.results;
            pokeList.map(function (pokemon) {
                pokeSearchList.push(pokemon.name)
            })

        })
};

function display() {
    let pokemonSelected = document.querySelector("#searchbar").value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`, {
        "method": "GET"
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            let sprites = data.sprites.front_default
            console.log(sprites)
            let abilities = data.abilities
            abilities.map(function (abilities) {
                const pokeAbilities = document.createElement("p")
                pokeAbilities.value = (abilities.ability.name)
                pokeAbilities.textContent = (abilities.ability.name)
                information.append(pokeAbilities)
            })

            let stats = data.stats
            stats.map(stat => {
                const pokeStat = document.createElement('li')
                pokeStat.value = stat.stat.name
                pokeStat.textContent = stat.stat.name + ": " + stat.base_stat
                information.append(pokeStat)
            })


            let pokeSprite = document.createElement('img')
            pokeSprite.src = sprites
            pokeSprites.append(pokeSprite)

        })
};

document.getElementById("primarybtn").addEventListener("click", function () {
    document.querySelector(".information").innerHTML = "abilities"
    document.querySelector(".pokeSprite").innerHTML = ""
    display()

})
console.log(pokeSearchList.length)
console.log(pokeSearchList)
getPokemon()
function randomPokes() {

    let RNG = (Math.floor(Math.random() * Math.floor(899)));
    console.log(RNG)
}
document.querySelector('.randomButton').addEventListener('click', randomPokes())


randomPokes()

$("#searchbar").autocomplete({
    source: pokeSearchList
});