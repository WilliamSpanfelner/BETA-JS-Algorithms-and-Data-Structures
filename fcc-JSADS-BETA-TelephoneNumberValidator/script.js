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
        if (telephoneCheck(numberToQuery)) {
            results.innerText = `Valid US number: ${numberToQuery}`;
            results.style.border = "2px solid green";
            results.style.color = "green";
        } else {
            results.innerText = `Invalid US number: ${numberToQuery}`;
            results.style.border = "2px solid red";
            results.style.color = "red";
        }
    }
});

clearButton.addEventListener("click", ()=>{
    results.innerText = '';
    results.style.border = "none";
    userInput.value = '';
});
