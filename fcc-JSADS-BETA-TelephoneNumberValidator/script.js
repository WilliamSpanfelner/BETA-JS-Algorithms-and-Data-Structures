const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

function telephoneCheck(str) {
    const regex = /^(1\s\d{3}|1\s\(\d{3}|1\(\d{3}|\(\d{3}|\d{3})(\)\s|\)|\s|-)?\d{3}(\s|-)?\d{4}$/g;  

    if (str.includes('(') && str.includes(')') || !str.includes('(') && !str.includes(')')) {
        return regex.test(str); 
    }
    return false;
}

checkButton.addEventListener("click", ()=>{
    const numberToQuery = userInput.value;
    if (numberToQuery === '') {
        console.log("Empty input");
        alert("Please provide a phone number");
    } else {
        results.innerText = telephoneCheck(numberToQuery) ? 
        `Valid US number: ${numberToQuery}` :
        `Invalid US number: ${numberToQuery}`;
    }
});

clearButton.addEventListener("click", ()=>{
    results.innerText = '';
});
