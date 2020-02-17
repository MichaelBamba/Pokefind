// set up glossary

const apiUrl = `https://pokeapi.co/api/v2/pokemon/?limit=900`
let nameArray = []
let speedStat = []
let specialDefenseStat = []
let specialAttackStat = []
let defenseStat = []
let attackStat = []
let hpStat = []

function mapFunction(info) {
    let infoResults = info.results;

    let dictionaryStart = document.querySelector('#dictionary')
    infoResults.map(result => {
        const pokeElement = document.createElement('li')
        pokeElement.className = 'nameClass'
        pokeElement.value = (result.name)
        pokeElement.textContent = (result.name)
        nameArray.push(result.name)
        dictionaryStart.append(pokeElement)
    })
}

function statsFunction(info) {
    let infoResults = info.stats;

    let listStart = document.querySelectorAll('.nameClass')
    infoResults.map(result => {
        
    })
}

console.log(nameArray)

function getStats(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    }).then(response => {
        return response.json()
    })
    .then(data => {

        let result = statsFunction(data);
    })
    .catch(e => {
        console.log(e)
    })
}

function getItems() {
    fetch(apiUrl, {
    }).then(response => {
        return response.json()
    })
    .then(data => {

        let result = mapFunction(data);
    })
    .catch(e => {
        console.log(e)
    })
}

getItems();