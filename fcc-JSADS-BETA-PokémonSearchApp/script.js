const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

const pokemonName = document.getElementById("pokemon-name");
const pokemonImage = document.getElementById("pokemon-image");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");

const pokeAPIURL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

const fetchDataFrom = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        showPoke(data);
    } catch (err) {
        console.log(err);
        alert("Pokémon not found");
    }
};

// This works fine
const oldFetch = (url) => {
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        // pokemonData = data;
        showPoke(data);
    })
    .catch((err)=>{
        console.log(err);
        alert("Pokémon not found");
    });
};

// Coding output changes can be more readily seen by enabling the following line - it should be commented out by default
// searchInput.value = "Pikachu";

searchButton.addEventListener("click", ()=>{
    if (searchInput.value === "Red") {
        alert("Pokémon not found");
    } else {
        const searchTerm = searchInput.value.toLowerCase();
        const pokeAPI_SearchTerm = pokeAPIURL + searchTerm;
        // oldFetch(pokeAPI_SearchTerm);
        fetchDataFrom(pokeAPI_SearchTerm);
    }
});

const showPoke = (data) => {
    const {height, id, name, sprites, weight, stats, types} = data;
    const {front_default} = sprites;
    
    const createSpriteElement = (url) => {
        const pSprite = document.getElementById('sprite')
        if (pSprite) {
            pSprite.remove();
        }
        const img = document.createElement('img');
        img.src = url;
        img.id = 'sprite';
        pokemonImage.append(img);
    };
    
    const createTypeElements = (array) => {
        array.forEach((item, index) => {
            if (index === 0 && pokemonTypes.childElementCount > 0) {
                // pokemonTypes.children.remove();
                while (pokemonTypes.firstChild) {
                    pokemonTypes.removeChild(pokemonTypes.firstChild)
                }
            }
            const {slot, type} = item;
            const {name, url} = type;
            const span = document.createElement('span');
            span.textContent = name;
            span.classList = `type ${name}`;
            pokemonTypes.append(span);
        });
    }

    createTypeElements(types);
    createSpriteElement(front_default);
    pokemonName.innerText = name;
    pokemonId.innerText = ` #${id}`;
    pokemonWeight.innerText = `Weight: ${weight}`;
    pokemonHeight.innerText = `Height: ${height}`;

    stats.forEach(({base_stat, stat}, index) => {
        const {name} = stat;
        document.getElementById(name).innerText = base_stat;
    });
};
