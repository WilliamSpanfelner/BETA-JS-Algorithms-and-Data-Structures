const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// const pokemonCard = document.getElementById("pokemon-card");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonHP = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

const pokeAPIURL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
let pokemonData;

const fetchDataFrom = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
    } catch (error) {
        
    }
};

// This works fine
const oldFetch = (url) => {
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        pokemonData = data;
        displayRetrieved(pokemonData);
    })
};

// Coding output changes can be more readily seen by enabling the following line - it should be commented out by default
searchInput.value = "Pikachu";

searchButton.addEventListener("click", ()=>{
    if (searchInput.value === "Red") {
        alert("Pokémon not found");
    } else {
        const searchTerm = searchInput.value.toLowerCase();
        const pokeAPI_SearchTerm = pokeAPIURL + searchTerm;
        oldFetch(pokeAPI_SearchTerm);
    }
});

const displayRetrieved = (data) => {
    const {height, id, name, weight, stats} = data;
    // data.forEach(({name, id, weight, height, order,}) => {
        // pokemonCard.innerHTML += `
        // <div id="pokemon-name">${name}</div>
        // <div id="pokemon-id">${id}</div>
        // <div id="weight">Weight: ${weight}</div>
        // <div id="height">Height: ${height}</div>
        // `;      
    // });
    pokemonName.innerHTML = name;
    pokemonId.innerHTML = id;
    pokemonWeight.innerHTML = `Weight: ${weight}`;
    pokemonHeight.innerHTML = `Height: ${height}`;

    stats.forEach(({base_stat, stat}, index) => {
        if (stat.name == 'hp') {
            pokemonHP.innerHTML = base_stat;
        } else if (stat.name == 'attack') {
            pokemonAttack.innerHTML = base_stat;
        } else if (stat.name == 'defense') {
            pokemonDefense.innerHTML = base_stat;
        } else if (stat.name == 'special-attack') {
            pokemonSpecialAttack.innerHTML = base_stat;
        } else if (stat.name == 'special-defense') {
            pokemonSpecialDefense.innerHTML = base_stat;
        } else if (stat.name == 'speed') {
            pokemonSpeed.innerHTML = base_stat;
        }
    });
};
