const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const pokemonCard = document.getElementById("pokemon-card");
// const pokemonName = document.getElementById("pokemon-name");
// const pokemonId = document.getElementById("pokemon-id");
// const pokemonWeight = document.getElementById("weight");
// const pokemonHeight = document.getElementById("height");
// const pokemonHP = document.getElementById("hp");
// const pokemonAttack = document.getElementById("attack");
// const pokemonDefense = document.getElementById("defense");
// const pokemonSpecialAttack = document.getElementById("special-attack");
// const pokemonSpecialDefense = document.getElementById("special-defense");
// const pokemonSpeed = document.getElementById("speed");

const pokemonDataBaseURL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/"
let pokemonData = [];

searchButton.addEventListener("click", ()=>{
    if (searchInput.value === "Red") {
        alert("Pokémon not found");
    } else {
        const nameOrId = searchInput.value.toLowerCase();
        const pokemonDataURL = pokemonDataBaseURL + nameOrId;
        fetch(pokemonDataURL)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            pokemonData = data;
            displayRetrieved(pokemonData);
        })
    }
});

const displayRetrieved = (data) => {
    const {height, id, name, weight, stats} = data;
    // data.forEach(({name, id, weight, height, order,}) => {
        pokemonCard.innerHTML += `
        <div id="pokemon-name">${name}</div>
        <div id="pokemon-id">${id}</div>
        <div id="weight">Weight: ${weight}</div>
        <div id="height">${height}</div>
        `;      
    // });
    stats.forEach(({base_stat, stat}, index) => {
        if (stat.name == 'hp') {
            pokemonCard.innerHTML += `<div id="hp">${base_stat}</div>`
        } else if (stat.name == 'attack') {
            pokemonCard.innerHTML += `<div id="hp">${base_stat}</div>`
        } else if (stat.name == 'defense') {
            pokemonCard.innerHTML += `<div id="hp">${base_stat}</div>`
        } else if (stat.name == 'special-attack') {
            pokemonCard.innerHTML += `<div id="hp">${base_stat}</div>`
        } else if (stat.name == 'special-defense') {
            pokemonCard.innerHTML += `<div id="hp">${base_stat}</div>`
        } else if (stat.name == 'speed') {
            pokemonCard.innerHTML += `<div id="hp">${base_stat}</div>`
        }
    });
};
