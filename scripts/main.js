

const apiurl = `https://pokeapi.co/api/v2/pokemon/?limit=900`
let information = document.querySelector(".information")
let pokeSearchList = []
let pokeSprites = document.querySelector('.pokeSprite')

Math.floor(Math.random() * pokeSearchList)
function getPokemon() {
    fetch(apiurl, {
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
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            let sprites = data.sprites.front_default
            console.log(sprites)
            let abilitiesHeading = document.createElement('p')
            abilitiesHeading.value = 'Abilities'
            abilitiesHeading.textContent = 'Abilities:'
            information.append(abilitiesHeading)
            let abilities = data.abilities
            abilities.map(function (abilities) {
                const pokeAbilities = document.createElement("li")
                pokeAbilities.value = (abilities.ability.name)
                pokeAbilities.textContent = (abilities.ability.name)
                information.append(pokeAbilities)
            })
            // show type
            let typesHeading = document.createElement('p')
            typesHeading.value = 'Types'
            typesHeading.textContent = 'Type(s):'
            information.append(typesHeading)
            let type = data.types
            type.map(type => {
                const pokeType = document.createElement('li')
                pokeType.value = type.type.name
                pokeType.textContent = type.type.name
                information.append(pokeType)
            })

            // creates stats list
            let statsHeading = document.createElement('p')
            statsHeading.value = 'Stats'
            statsHeading.textContent = 'Stats:'
            information.append(statsHeading)
            let stats = data.stats
            stats.map(stat => {
                const pokeStat = document.createElement('li')
                pokeStat.value = stat.stat.name
                pokeStat.textContent = stat.stat.name + ": " + stat.base_stat
                information.append(pokeStat)
            })
            // document.createElement(img)
            // let pokeSprite = "sprite"


            let pokeSprite = document.createElement('img')
            pokeSprite.src = sprites
            pokeSprites.append(pokeSprite)
            console.log(pokeSprite)
        })
};

document.getElementById("primarybtn").addEventListener("click", function () {
    document.querySelector(".pokeSprite").innerHTML = ""
    display()

})

getPokemon()

$("#searchbar").autocomplete({
    source: pokeSearchList
});


