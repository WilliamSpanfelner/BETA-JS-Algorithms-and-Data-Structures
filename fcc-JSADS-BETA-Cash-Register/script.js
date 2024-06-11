let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
const priceToPay = document.getElementById("to-pay");
priceToPay.innerText = price;

function checkCashRegister(price, cash, cid) {
    /**
     * Append a denomination value based on smallest currency unit
     * (one cent) to each element of the cid array
     * @param {*} array 
     * @returns the cid array with denomination values
     */
    function addDenominationsTo(array) {
      // Append the denomination value to each cid element
      return array.reduce((arr, element) => {
        arr.push(element);
        switch (element[0]) {
          case "ONE HUNDRED":
            arr[arr.length - 1].push(10000);
            break;
          case "TWENTY":
            arr[arr.length - 1].push(2000);
            break;
          case "TEN":
            arr[arr.length - 1].push(1000);
            break;
          case "FIVE":
            arr[arr.length - 1].push(500);
            break;
          case "ONE":
            arr[arr.length - 1].push(100);
            break;
          case "QUARTER":
            arr[arr.length - 1].push(25);
            break;
          case "DIME":
            arr[arr.length - 1].push(10);
            break;
          case "NICKEL":
            arr[arr.length - 1].push(5);
            break;
          // case "PENNY":
            
          //   break;
          default:
            arr[arr.length - 1].push(1);
            break;
        }
        return arr;
      }, []);
    }
  
    /**
     * Create an array with change denominations to issue
     * from the availableChange array
     * @param {*} availableChange 
     */
    function makeChangeFrom(availableChange) {
      for (let index = 0; index < availableChange.length; index++) {
        const element = availableChange[index];
        // if the denomination available <= balance give the value available
        balance = Number(balance.toFixed(2));
  
        if (balance == 0) {
          break;
        } else {
          // How many coins/notes of the given denomination are required?
          const denomUnitsReqd = Math.floor(balance * 100 / element[2]);
          // What is the denomination value of the units reqd?
          const denomValue = denomUnitsReqd * element[2] / 100;
          // How many coins/notes are available?
          const denomUnitsAvail = Math.floor(element[1] * 100 / element[2]);
  
          if (denomUnitsReqd > 0) {
            if (denomUnitsReqd <= denomUnitsAvail) { // if coins/notes <= those on hand
              makeChange.push([element[0], denomValue]);
              balance -= denomValue;
              element[1] -= denomValue;
            } else if (element[1] > 0) {  // otherwise use remaining coins/notes and move on
              makeChange.push([element[0], element[1]]);
              balance -= element[1];
              element[1] -= element[1];
            }
          }
        };
      }
    }
  
    // Calculate balance.
    let balance = cash - price;
    const cashInDrawer = JSON.parse(JSON.stringify(cid));  // Create a deep copy of cid since cid is multidimensional 
  
    // Create array from which to issue change 
    let makeChange = [];
  
    // Get the relevant denominations from cid
    const availableChange = addDenominationsTo(cashInDrawer)
    .filter(element => element[2] <= balance * 100)
    .sort(function (a, b) { return b[2] - a[2] });  // sort descending by the denomination value
  
    // Get the value of the change available
    const valueAvailableChange = availableChange
    .reduce((sum, element) => sum += element[1], 0);
  
    // Make change if sufficient change exists
    const canReturnExactChange = valueAvailableChange >= balance;
  
    if (!canReturnExactChange) {
      return { status: "INSUFFICIENT_FUNDS", change: [] }
    } else if (valueAvailableChange == balance) {
      return { status: "CLOSED", change: [...cid] }
    }
    makeChangeFrom(availableChange);
    return { status: "OPEN", change: [...makeChange] };
  }

purchaseBtn.addEventListener("click", () => {
    if (Number(cash.value) < price) {
        alert("Customer does not have enough money to purchase the item");
    } else if (Number(cash.value) === price) {
        changeDue.innerText = "No change due - customer paid with exact cash";
    } else {
        const result = checkCashRegister(price, Number(cash.value), cid);
        const changeBreakdown = result.change.reduce((acc, item)=> acc += `${item[0]}: $${item[1]} `, '');
        changeDue.innerText = `Status: ${result.status} ${changeBreakdown}`;
    }
});
