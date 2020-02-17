// User specific scripts go here

apiurl = `https://pokeapi.co/api/v2/pokemon/?limit=900`
pokeListLocation = document.querySelector("#pokelist")
let information = document.querySelector(".information")
let comps = document.querySelector("#speedComp")

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
};

function display(){

    let pokemonSelected = document.querySelector("#pokelist").value
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSelected}`, {
    })
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
};

document.getElementById("primarybtn").addEventListener("click", function(){
    document.querySelector(".information").innerHTML = ""
    display()

})

getPokemon()