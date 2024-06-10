const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");

checkButton.addEventListener("click", ()=>{
    if (userInput.value === '') {
        console.log("Empty input");
        alert("Please provide a phone number");
    }
});
