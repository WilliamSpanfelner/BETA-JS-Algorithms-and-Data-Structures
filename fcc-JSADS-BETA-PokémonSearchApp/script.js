const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


searchButton.addEventListener("click", ()=>{
    if (searchInput.value === "Red") {
        alert("Pokémon not found");
    }
});
