let firstOperand = undefined;
let secondOperand = undefined;
let currentOperator = undefined;
let operatorFlag = false;
let numberHolder = 0;
let finalNumber = 0;
let firstOperandFlag = false;
let secondOperandFlag = false;
let screenTextHolder = 0;
let decimalFlag = false;


function addition(num1, num2) {
    return num1 + num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function exponent(base, power) {
    return Math.pow(base, power);
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function printToScreen(entry) {
    screenTextHolder = screenTextHolder + entry;
    $("p").text(screenTextHolder);
}


function assignOperator(operator) {
    currentOperator = operator;
}

function assignFirstOperand(operand) {
    firstOperand = operand;
}

function assignSecondOperand(operand) {
    secondOperand = operand;
}

function createNumber(enteredDigit) {
    numberHolder = numberHolder + enteredDigit;
    finalNumber = Number(numberHolder);
}


function decimalChecker(decimal) {
    if (decimalFlag == false) {
        createNumber(decimal);
        printToScreen(decimal);
        decimalFlag = true;
    }
}


function animateButton(currentKey) {
    var activeButton;

    switch(currentKey) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            activeButton = document.querySelector(".n"+currentKey);
            break;

        case ".":
            activeButton = document.querySelector(".decimal");
            break;

        case "+":
            activeButton = document.querySelector(".add");
            break;

        case "-":
            activeButton = document.querySelector(".subtract");
            break;

        case "*":
            activeButton = document.querySelector(".multiply");
            break;

        case "/":
            activeButton = document.querySelector(".divide");
            break;

        case "x":
            activeButton = document.querySelector(".multiply");
            break;

        case "÷":
            activeButton = document.querySelector(".divide");
            break;

        case "=":
            activeButton = document.getElementById("equal");
            break;

        case "Backspace":
            activeButton = document.querySelector(".backspace");
            break;

        case "c":
            activeButton = document.getElementById("clear");
            break;    
    }

    activeButton.classList.add("buttonPressed");
    setTimeout(function() {
        activeButton.classList.remove("buttonPressed");
    }, 100);
}


function press(key) {
    let division = "÷";
    let multiplication = "x";

    switch(key) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            animateButton(key); 
            printToScreen(key);
            createNumber(key);
            break;
        
        case "+":
        case "-":
            animateButton(key);
            printToScreen(key);
            break;

        case "*":
            animateButton(multiplication);
            printToScreen(multiplication);
            break;

        case "/":
            animateButton(division);
            printToScreen(division);
            break;

        case "x":
            animateButton(multiplication);
            printToScreen(multiplication);
            break;

        case "÷":
            animateButton(division);
            printToScreen(division);
            break;

        case "=":
            animateButton(key);
            printToScreen(key);
            break;
        
        case ".":
            animateButton(key);
            decimalChecker(key);
            break;
        
        case "Backspace":
            animateButton(key);
            break;
        
        case "c":
            animateButton(key);
            break;
    }
}


$("button").click(function()  {
    press($(this).text());
});

document.addEventListener("keydown", function(event) {
    press(event.key);
});