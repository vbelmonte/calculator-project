let firstOperand = undefined;
let secondOperand = undefined;
let assignOperandFlag = true;
let currentOperator = undefined;
let operatorFlag = false;
let numberHolder = 0;
let finalNumber = 0;
let firstOperandFlag = false;
let secondOperandFlag = false;
let screenTextHolder = "0";
let decimalFlag = false;
let leadingZeroFlag = true;


/************************************************************** 
 * MATHEMATICAL OPERATORS
 * 
**************************************************************/

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



/************************************************************** 
 * CASE CHECKERS
 * 
**************************************************************/

function decimalChecker(decimal) {
    if (decimalFlag == false) {
        createNumber(decimal);
        printToScreen(decimal);
        decimalFlag = true;
    }
}

function decimalLeadingZero() {
    if (decimalFlag == false) {
        if (screenTextHolder.substring(screenTextHolder.length-1) != 0) {
            createNumber("0");
            printToScreen("0");
        }
    }
}

function infinityNaNCheck(input) {
    if (input == Infinity || input == NaN) {
        return "Error";
    }
    else {
        return input;
    }
}

function resetDecimalFlag() {
    decimalFlag = false;
}

function leadingZeroChecker() {
    return leadingZeroFlag;
}

function lastCharacterChecker(entry) {
    if (screenTextHolder.substring(screenTextHolder.length-1) == 0) {
        replaceLastCharacter(entry);
    }
    else {
        printToScreen(entry);
    }
}

function replaceOperator(operator) {
    if (currentOperator != undefined) {
        assignOperator(operator);
        replaceLastCharacter(operator);
    }
    else {
        assignOperator(operator);
        /*assignOperand();*/
        printToScreen(operator);
    }
}



/************************************************************** 
 * CLEAR AND BACKSPACE
 * 
**************************************************************/

function clear() {
    firstOperand = undefined;
    secondOperand = undefined;
    assignOperandFlag = true;
    currentOperator = undefined;
    operatorFlag = false;
    numberHolder = 0;
    finalNumber = 0;
    firstOperandFlag = false;
    secondOperandFlag = false;
    screenTextHolder = "0";
    decimalFlag = false;
    leadingZeroFlag = true;
    clearScreen();
}

function clearScreen() {
    $("p").text("0");
}



/************************************************************** 
 * OTHER BACKEND FUNCTIONS
 * 
**************************************************************/

function replaceLastCharacter(entry) {
    screenTextHolder = screenTextHolder.substring(0, screenTextHolder.length-1);
    printToScreen(entry);
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


function assignOperand() {
    if (assignOperandFlag == true) {
        if (firstOperandFlag == false) {
            assignFirstOperand(finalNumber);
            firstOperandFlag = true;
            assignOperandFlag = false;
            
        }
        else {
            assignSecondOperand(finalNumber);
            secondOperandFlag = true;
            assignOperandFlag = false;
        }
    }
}

function checkAssignOperandFlag() {
    return assignOperandFlag;
}

function calculate() {
    let result;
    firstOperandFlag = false;
    secondOperandFlag = false;

    switch(currentOperator) {
        case "+":
            result = addition(firstOperand, secondOperand);
            break;

        case "-":
            result = subtraction(firstOperand, secondOperand);
            break;
        
        case "*":
            result = multiplication(firstOperand, secondOperand);
            break;
        
        case "x":
            result = multiplication(firstOperand, secondOperand);
            break;

        case "÷":
            result = division(firstOperand, secondOperand);
            break;

        case "/":
            result = division(firstOperand, secondOperand);
            break;
    }

    result = infinityNaNCheck(result);

    clearCreateNumber();
    createNumber(result);
    clearScreenEmpty();
    printToScreen(result);
}


function continuousCalculation(entry) {
    if (secondOperandFlag == true) {
        calculate();
        /*printToScreen(entry);
        assignOperand();*/
    }
}


function createNumber(enteredDigit) {
    numberHolder = numberHolder + enteredDigit;
    finalNumber = Number(numberHolder);
}


function clearScreenEmpty() {
    screenTextHolder = "";
    $("p").text(screenTextHolder);
}


function clearFinalNumber() {
    finalNumber = undefined;
}


function clearNumberHolder() {
    numberHolder = 0;
}


function clearCreateNumber() {
    clearNumberHolder();
    clearFinalNumber();
}



/************************************************************** 
 * BUTTON FUNCTIONS
 * 
**************************************************************/


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

        case "clear":
            activeButton = document.getElementById("clear");
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
            if (leadingZeroChecker() == true && finalNumber == 0) {
                animateButton(key); 
            }
            else if (finalNumber == undefined) {
                createNumber(key);
                printToScreen(key);
                leadingZeroFlag = true;
            }
            else {
                animateButton(key);
                printToScreen(key);
                createNumber(key);
            }
            break;

        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if (leadingZeroChecker() == true) {
                animateButton(key);
                lastCharacterChecker(key);
                /*replaceLastCharacter(key);*/
                createNumber(key);
                leadingZeroFlag = false;
            }
            else {
                animateButton(key);
                printToScreen(key);
                createNumber(key);
            }
            assignOperandFlag = true;
            break;
        
        case "+":
        case "-":
            animateButton(key);
            assignOperand();
            /*printToScreen(key);*/
            continuousCalculation(key);
            replaceOperator(key);
            /*assignOperand();*/
            /*assignOperator(key);*/
            clearCreateNumber();
            resetDecimalFlag();
            leadingZeroFlag = true;
            break;

        case "*":
            animateButton(multiplication);
            assignOperand();
            /*printToScreen(multiplication);*/
            continuousCalculation(key);
            replaceOperator(multiplication);
            /*assignOperand();*/
            /*assignOperator(key);*/
            clearCreateNumber();
            resetDecimalFlag();
            leadingZeroFlag = true;
            break;

        case "x":
            animateButton(multiplication);
            assignOperand();
            /*printToScreen(multiplication);*/
            continuousCalculation(key);
            replaceOperator(multiplication);
            /*assignOperand();*/
            /*assignOperator(key);*/
            clearCreateNumber();
            resetDecimalFlag();
            leadingZeroFlag = true;
            break;

        case "/":
            animateButton(division);
            assignOperand();
            /*printToScreen(division);*/
            continuousCalculation(key);
            replaceOperator(division);
            /*assignOperand();*/
            /*assignOperator(key);*/
            clearCreateNumber();
            resetDecimalFlag();
            leadingZeroFlag = true;
            break;

        case "÷":
            animateButton(division);
            assignOperand();
            /*printToScreen(division);*/
            continuousCalculation(key);
            replaceOperator(division);
            /*assignOperand();*/
            /*assignOperator(key);*/
            clearCreateNumber();
            resetDecimalFlag();
            leadingZeroFlag = true;
            break;

        case "=":
            animateButton(key);
            assignOperand();
            calculate();
            break;
        
        case ".":
            if (leadingZeroChecker() == true) {
                leadingZeroFlag = false;
                decimalLeadingZero();
            }
            animateButton(key);
            decimalChecker(key);
            break;
        
        case "Backspace":
            animateButton(key);
            break;
        
        case "clear":
            animateButton(key);
            clear();
            break;
        
        case "c":
            animateButton(key);
            clear();
            break;
    }
}


/************************************************************** 
 * CLICK AND TYPE FUNCTIONS
 * 
**************************************************************/

$("button").click(function()  {
    press($(this).text());
});

document.addEventListener("keydown", function(event) {
    press(event.key);
});