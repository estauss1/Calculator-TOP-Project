const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal"); 
const screen  = document.querySelector("#screen");

numbers.forEach((number) => number.addEventListener("click", numberPushed));
operators.forEach((operator) => operator.addEventListener("click", operatorPushed));
equal.addEventListener("click", equate)
clear.addEventListener("click", clearAll);


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

function operate(stringNum1, operator, stringNum2){
    let num1 = Number(stringNum1);
    let num2 = Number(stringNum2);
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

function numberPushed(event){
    const digit = event.target.textContent;
    if(equation.length == 1){       // last answer in equation[] or clear
        clearAll();
        screen.textContent = digit;
        digitArray.push(digit);
    } else if(equation.length == 2 || equation.length == 0){
        screen.textContent += digit;
        digitArray.push(digit);
    }

}

function operatorPushed(event){
    const operator = event.target.textContent;
    condenseAndAdd();
    if(equation.length == 3){
        let expAns = operate(equation[0], equation[1], equation[2]);
        screen.textContent = expAns + operator;
        clearArray(equation);
        equation.push(expAns);
        equation.push(operator);
    } else if(equation.length == 1){
        screen.textContent += operator;
        condenseAndAdd();
        equation.push(operator);
    }
}

function equate(event){
    condenseAndAdd();
    if(equation.length == 3){
        const answer = operate(equation[0], equation[1], equation[2]);
        screen.textContent = answer;
        clearArray(equation);
        equation.push(answer);
    } else {
        clearAll();
    }

}

function condenseAndAdd(){
    if(digitArray.length != 0){
        const numToAdd = digitArray.join("");
        clearArray(digitArray);
        equation.push(numToAdd);
    }
}

function clearAll(){
    screen.textContent = "";
    clearArray(equation);
    clearArray(digitArray);
}

function clearArray(array){
    while(array.length != 0){
        array.pop();
    }
}