let firstOperand;
let secondOperand;
let currentOperator = undefined;
let operatorFlag = false;


function addition(num1, num2) {
    firstNumber = num1 + num2;
    return num1 + num2;
}

function division(num1, num2) {
    firstNumber = num1 / num2;
    return num1 / num2;
}

function exponent(base, power) {
    firstNumber = Math.pow(base, power);
    return Math.pow(base, power);
}

function multiplication(num1, num2) {
    firstNumber = num1 * num2;
    return num1 * num2;
}

function subtraction(num1, num2) {
    firstNumber = num1 - num2;
    return num1 - num2;
}

function printToScreen(entry) {
    $("p").text(entry);
}


function assignOperand() {

}

function assignFirstOperand() {

}

function assignSecondOperand() {

}

function assignOperator(operator) {
    switch(operator) {
        case "+":
        case "-":
        case "x":
        case "÷":
            currentOperator = operator;
    }
}

function animateButton(currentKey) {
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
            var activeButton = document.querySelector(".n"+currentKey);
            activeButton.classList.add("buttonPressed");
            setTimeout(function() {
                activeButton.classList.remove("buttonPressed");
            }, 100);
            break;

        case ".":
            var activeButton = document.querySelector(".decimal");
            activeButton.classList.add("buttonPressed");
            setTimeout(function() {
                activeButton.classList.remove("buttonPressed");
            }, 100);
            break;

        case "+":
            var activeButton = document.querySelector(".add");
            activeButton.classList.add("buttonPressed");
            setTimeout(function() {
                activeButton.classList.remove("buttonPressed");
            }, 100);
            break;

        case "-":
            var activeButton = document.querySelector(".subtract");
            activeButton.classList.add("buttonPressed");
            setTimeout(function() {
                activeButton.classList.remove("buttonPressed");
            }, 100);
            break;

        case "*":
            var activeButton = document.querySelector(".multiply");
            activeButton.classList.add("buttonPressed");
            setTimeout(function() {
                activeButton.classList.remove("buttonPressed");
            }, 100);
            break;

        case "/":
            var activeButton = document.querySelector(".divide");
            activeButton.classList.add("buttonPressed");
            setTimeout(function() {
                activeButton.classList.remove("buttonPressed");
            }, 100);
            break;

        case "=":
            var activeButton = document.getElementById("equal");
            activeButton.classList.add("buttonPressed");
            setTimeout(function() {
                activeButton.classList.remove("buttonPressed");
            }, 100);
            break;

        case "Backspace":
            var activeButton = document.querySelector(".backspace");
            activeButton.classList.add("buttonPressed");
            setTimeout(function() {
                activeButton.classList.remove("buttonPressed");
            }, 100);
            break;

        case "c":
            var activeButton = document.getElementById("clear");
            activeButton.classList.add("buttonPressed");
            setTimeout(function() {
                activeButton.classList.remove("buttonPressed");
            }, 100);
            break;
    }
}


function press(key) {
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
            $("p").text(key);
            break;
        
        case "+":
        case "-":
        case "*":
        case "/":
        case "=":
            animateButton(key);
            break;
        
        case ".":
            animateButton(key);
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
    printToScreen($(this).text());
});

document.addEventListener("keydown", function(event) {
    press(event.key);
    console.log(event.key);
});