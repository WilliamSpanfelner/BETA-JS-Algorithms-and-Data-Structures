const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// const pokemonCard = document.getElementById("pokemon-card");
const pokemonName = document.getElementById("pokemon-name");
const pokemonImage = document.getElementById("pokemon-image");
const pokemonId = document.getElementById("pokemon-id");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const pokemonTypes = document.getElementById("types");
const pokemonHP = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpecialAttack = document.getElementById("special-attack");
const pokemonSpecialDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

const pokeAPIURL = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
// let pokemonData;

const fetchDataFrom = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        showPoke(data);
    } catch (err) {
        console.log(err)
    }
};

// This works fine
const oldFetch = (url) => {
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        pokemonData = data;
        showPoke(pokemonData);
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
                pokemonTypes.children.remove();
            }
            const {slot, type} = item;
            const {name, url} = type;
            const span = document.createElement('span');
            span.textContent = name.toUpperCase();
            span.classList = `type ${name}`;
            pokemonTypes.append(span);
        });
        
    }


    if (name == "pikachu") {
        // const newImgElement = document.createElement('img');
        // newImgElement.src = front_default;
        // newImgElement.alt = "front veiw of pokemon";
        // document.body.appendChild(newImgElement);
        pokemonTypes.innerHTML = `<p>ELECTRIC</p>`;
    }
    createImageElement(front_default);
    createSpriteElement(front_default);
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
