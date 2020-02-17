

const apiurl = `https://pokeapi.co/api/v2/pokemon/?limit=964`
let information = document.querySelector(".information")
let pokeSearchList = []
let pokeSprites = document.querySelector('.pokeSprite')

function updateArrayCallback(pokeList) {
    pokeList.map(function (pokemon) {
        pokeSearchList.push(pokemon.name)
    });
}

async function getPokemon() {
    await fetch(apiurl, {
        "method": "GET"
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            let pokeList = data.results;

            updateArrayCallback(pokeList);
            return pokeList
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

        })
};

document.getElementById("primarybtn").addEventListener("click", function () {
    document.querySelector(".information").innerHTML = "abilities"
    document.querySelector(".pokeSprite").innerHTML = ""
    display()

})

function displayrandom(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
        "method": "GET"
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log("What is my data here ", data);
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

        })
};

function randomPokes() {
    getPokemon().then(function () {
        let RNG = (Math.floor(Math.random() * Math.floor(964)));
        let pokemongrandom = pokeSearchList[RNG]
        console.log(pokemongrandom)
        displayrandom(pokemongrandom);
    }
    );
}


document.querySelector('.randomButton').addEventListener('click', function () {
    document.querySelector(".information").innerHTML = ""
    document.querySelector(".pokeSprite").innerHTML = ""
    randomPokes();
});


$("#searchbar").autocomplete({
    source: pokeSearchList
});