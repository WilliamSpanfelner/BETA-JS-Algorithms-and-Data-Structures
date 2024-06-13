const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

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
        })
    }
});

const displayRetrieved = (data) => {};
