const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
results.innerText = "Hello";

checkButton.addEventListener("click", ()=>{
    if (userInput.value === '') {
        console.log("Empty input");
        alert("Please provide a phone number");
    }
});

clearButton.addEventListener("click", ()=>{});
