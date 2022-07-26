const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal"); 
const screen  = document.querySelector("#screen");

numbers.forEach((number) => number.addEventListener("click", addToScreen));


let equation = [];
let digitArray = [];

function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

function operate(operator, num1, num2){
    switch(operator){
        case "+":
            return add(num1, num2);
        case "-":
           return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/": 
            return divide(num1, num2);
    }
}

function addToScreen(event){
    const char = event.target.textContent;
    screen.textContent += char;
    let converted = parseInt(char);
    if(typeof converted == "number"){
        digitArray.push(converted);
    } else{   // is an operator
        let wholeNumber = digitArray.join("");
        equation.push(wholeNumber);
        clearArray(digitArray);
        equation.push(char);
    }
}

function clearArray(array){
    while(array.length != 0){
        array.pop();
    }
}