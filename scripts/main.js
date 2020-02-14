// User specific scripts go here

<<<<<<< HEAD
apiurl = `https://pokeapi.co/api/v2/pokemon/?limit=900`
pokeListLocation = document.querySelector("#pokelist")
let information = document.querySelector(".information")
let comps = document.querySelector("#speedComp")
=======
const apiurl = `https://pokeapi.co/api/v2/pokemon/?limit=900`
let information = document.querySelector(".information")
let pokeSearchList = []
let pokeSprites = document.querySelector('.pokeSprite')
>>>>>>> fdc1ef50b83d1660a35f431c622135eec49499cc

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
<<<<<<< HEAD
    })
=======
>>>>>>> fdc1ef50b83d1660a35f431c622135eec49499cc
};

function display() {
    let pokemonSelected = document.querySelector("#searchbar").value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`, {
    })
<<<<<<< HEAD
    .then(response => {
        return response.json()
    })
    .then(data => {
        
        let abilities = data.abilities
        abilities.map(function(abilities){
            const pokeAbilities = document.createElement("p")
            pokeAbilities.value = (abilities.ability.name)
            pokeAbilities.textContent = (abilities.ability.name)
            information.append(pokeAbilities)
            })
        let stats = data.stats
        stats.map(stats => {
            const pokeStat = document.createElement('li')
            pokeStat.value = (stats.stat.name)
            pokeStat.textContent = (stats.stat.name) + ": " + (stats.base_stat)
            information.append(pokeStat)
            
    })
    })
};

function getPokemon(){
    fetch(apiurl, {
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
    })
=======
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

            // // document.createElement(img)
            // let pokeSprite = "sprite"

            let pokeSprite = document.createElement('img')
            pokeSprite.src = sprites
            pokeSprites.append(pokeSprite)
            console.log(pokeSprite)
        })
>>>>>>> fdc1ef50b83d1660a35f431c622135eec49499cc
};

document.getElementById("primarybtn").addEventListener("click", function () {
    document.querySelector(".information").innerHTML = ""
    display()

})

getPokemon()

$("#searchbar").autocomplete({
    source: pokeSearchList
});