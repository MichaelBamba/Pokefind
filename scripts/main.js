

const apiurl = `https://pokeapi.co/api/v2/pokemon/?limit=900`
let information = document.querySelector(".information")
let pokeSearchList = []
let pokeSprites = document.querySelector('.pokeimg')



Math.floor(Math.random() * pokeSearchList)
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
            console.log(pokeSprite)
        })
};

document.getElementById("primarybtn").addEventListener("click", function () {
    let name = document.querySelector("#searchbar").value
    let capitalName = name.charAt(0).toUpperCase() + name.slice(1)
    document.querySelector(".information").innerHTML = "abilities"
    document.querySelector(".pokeimg").innerHTML = ""
    document.querySelector("#pokename").innerHTML = capitalName
    display()
    document.querySelector(".pokeSprite").style.visibility = "visible";
})

getPokemon()

$("#searchbar").autocomplete({
    source: pokeSearchList
});



