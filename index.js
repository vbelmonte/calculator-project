let firstOperand = undefined;
let secondOperand = undefined;
let assignOperandFlag = true;
let currentOperator = undefined;
let operatorFlag = false;
let equalClearFlag = false;
let numberHolder = "0";
let finalNumber = 0;
let numberToString = "0";
let firstOperandFlag = false;
let secondOperandFlag = false;
let screenTextHolder = "0";
let decimalFlag = false;
let leadingZeroFlag = true;


/************************************************************** 
 * MATHEMATICAL OPERATORS
 * 
**************************************************************/

function addition(num1, num2 = 0) {
    return num1 + num2;
}

function division(num1, num2 = 1) {
    return num1 / num2;
}

function exponent(base, power = 1) {
    return Math.pow(base, power);
}

function multiplication(num1, num2 = 1) {
    return num1 * num2;
}

function subtraction(num1, num2 = 0) {
    return num1 - num2;
}



/************************************************************** 
 * CASE CHECKERS
 * 
**************************************************************/

function checkAssignOperandFlag() {
    return assignOperandFlag;
}

function checkDecimalInNumberToString() {
    let result  = false;
    let i = 0;
    while (i < numberToString.length) {
        if (numberToString[i] == ".") {
            result = true;
            break;
        }
        i++;
    }
    return result;
}

function checkOperandLength() {
    if (checkDecimalInNumberToString() == false) {
        console.log("The string does not have a decimal");
        if (numberToString.length < 18) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        console.log("The string has a decimal");
        if (numberToString.length < 19) {
            return true;
        }
        else {
            return false;
        }
    }
}

function checkTrailingDecimal() {
    if (screenTextHolder[screenTextHolder.length-1] == ".") {
        screenTextHolder = screenTextHolder.slice(0, screenTextHolder.length-1);
        printToScreen("");
    }
}

function decimalChecker(decimal) {
    if (decimalFlag == false) {
        createStringFromNumber(decimal);
        createNumber(decimal);
        printToScreen(decimal);
        decimalFlag = true;
    }
}

function decimalLeadingZero() {
    if (decimalFlag == false) {
        if (numberToString == "") {
            createNumber("0");
            printToScreen("0");
            createStringFromNumber("0");
        }
    }
}

function infinityNaNCheck(input) {
    if (input == Infinity || input == -Infinity || isNaN(input) || input == undefined) {
        return "Error";
    }
    else {
        return input;
    }
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
        let txt = "<br>" + operator + "<br>";
        replaceLastCharacterOperator(txt);
    }
    else {
        let txt = "<br>" + operator + "<br>";
        assignOperator(operator);
        printToScreen(txt);
    }
}



/************************************************************** 
 * CLEAR, BACKSPACE, AND DELETE FUNCTIONS
 * 
**************************************************************/

function clear() {
    firstOperand = undefined;
    secondOperand = undefined;
    assignOperandFlag = true;
    currentOperator = undefined;
    operatorFlag = false;
    equalClearFlag = false;
    numberHolder = "0";
    finalNumber = 0;
    numberToString = "0";
    firstOperandFlag = false;
    secondOperandFlag = false;
    screenTextHolder = "0";
    decimalFlag = false;
    leadingZeroFlag = true;
    clearScreen();
}

function clearScreen() {
    $(".screen-output").text(screenTextHolder);
}

function clearScreenEmpty() {
    screenTextHolder = "";
    $(".screen-output").text(screenTextHolder);
}

function clearFinalNumber() {
    finalNumber = undefined;
}

function clearNumberHolder() {
    numberHolder = "";
}

function clearCreateNumber() {
    clearNumberHolder();
    clearFinalNumber();
}

function clearNumberToString() {
    numberToString = "";
}

function clearAllValues() {
    firstOperand = undefined;
    secondOperand = undefined;
    assignOperandFlag = true;
    currentOperator = undefined;
    operatorFlag = false;
    equalClearFlag = false;
    numberHolder = "";
    finalNumber = 0;
    numberToString = "";
    firstOperandFlag = false;
    secondOperandFlag = false;
    screenTextHolder = "0";
    decimalFlag = false;
    leadingZeroFlag = true;
    clearScreen();
}

function deleteLastEntry() {
    removeLastCharInNumberToString();
    deleteLastDigitFinalNumber();
    updateScreen();
}

function deleteLastDigitFinalNumber() {
    numberHolder = numberHolder.slice(0, numberHolder.length-1);
    if (numberHolder == "" /*|| numberHolder == "0"*/) {
        finalNumber = undefined;
        leadingZeroFlag = true;
    }
    else {
        finalNumber = Number(numberHolder);
    }
}

function removeLastCharInNumberToString() {
    changeDecimalFlag(numberToString);
    numberToString = numberToString.slice(0, numberToString.length-1);
}




/************************************************************** 
 * OTHER BACKEND FUNCTIONS
 * 
**************************************************************/

function assignOperator(operator) {
    currentOperator = operator;
}

function assignFirstOperand(operand) {
    /** Check if it's an empty operand **/
    if (operand == undefined && screenTextHolder != "Error") {
        firstOperand = 0;
        printToScreen(0);
    }
    else {
        firstOperand = operand;
    }
}

function assignSecondOperand(operand) {
    secondOperand = operand;
}

function assignOperand() {
    if (assignOperandFlag == true) {
        if (firstOperandFlag == false) {
            assignFirstOperand(finalNumber);
            setFirstOperandFlag(true);
            setAssignOperandFlag(false);
            
        }
        else {
            assignSecondOperand(finalNumber);
            setSecondOperandFlag(true);
            setAssignOperandFlag(false);
        }
    }
}

function changeDecimalFlag(entry) {
    if (entry[entry.length-1] == ".") {
        decimalFlag = false;
    }
}

function createNumber(enteredDigit) {
    console.log("entered digit: " + enteredDigit);
    numberHolder = numberHolder + enteredDigit;
    console.log("numberHolder: " + numberHolder);
    if (numberHolder == "") {
        finalNumber = undefined;
    }
    else {
        finalNumber = Number(numberHolder);
    }
}

function resetDecimalFlag() {
    decimalFlag = false;
}

function setEqualClearFlag(trueOrFalse) {
    equalClearFlag = trueOrFalse;
}

function setAssignOperandFlag(trueOrFalse) {
    assignOperandFlag = trueOrFalse;
}

function setLeadingZeroFlag(trueOrFalse) {
    leadingZeroFlag = trueOrFalse;
}

function setFirstOperandFlag(trueOrFalse) {
    firstOperandFlag = trueOrFalse;
}

function setSecondOperandFlag(trueOrFalse) {
    secondOperandFlag = trueOrFalse;
}




/************************************************************** 
 * SCREEN AND TEXT UPDATERS
 * 
**************************************************************/

function createStringFromNumber(entry) {
    numberToString += entry;
}

function replaceLastCharacter(entry) {
    screenTextHolder = screenTextHolder.substring(0, screenTextHolder.length-1);
    numberToString = numberToString.substring(0, numberToString.length-1);
    numberHolder = numberHolder.substring(0, numberHolder.length-1);
    printToScreen(entry);
}

function replaceLastCharacterOperator(entry) {
    screenTextHolder = screenTextHolder.substring(0, screenTextHolder.length-9)
    printToScreen(entry);
}

function printToScreen(entry) {
    screenTextHolder = screenTextHolder + entry;
    $(".screen-output").html(screenTextHolder);
}

function updateScreen() {
    let char = screenTextHolder[screenTextHolder.length-1];

    switch(char) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case ".":
            screenTextHolder = screenTextHolder.slice(0, screenTextHolder.length-1);
            $(".screen-output").html(screenTextHolder);
            break;
    }
}




/************************************************************** 
 * CALCULATION FUNCTIONS
 * 
**************************************************************/

function calculate() {
    let result;
    setFirstOperandFlag(false);
    setSecondOperandFlag(false);
    setAssignOperandFlag(true);

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
        case undefined:
            result = finalNumber;
            break;
    }

    result = infinityNaNCheck(result);
    currentOperator = undefined;

    if (result == "Error") {
        clearCreateNumber();
        clearNumberToString();
        clearScreenEmpty();
        printToScreen(result);
    }
    else {
        clearCreateNumber();
        clearNumberToString();
        createStringFromNumber(result);
        createNumber(result);
        clearScreenEmpty();
        printToScreen(result);
    }
}

function continuousCalculation(entry) {
    if (secondOperandFlag == true) {
        calculate();
        assignOperand();
        secondOperand = undefined;
    }
}




/************************************************************** 
 * BUTTON FUNCTIONS
 * 
**************************************************************/

function operatorButton(key1, key2) {
    animateButton(key2);
    checkTrailingDecimal();
    assignOperand();
    continuousCalculation(key1);
    replaceOperator(key2);
    clearNumberToString();
    clearCreateNumber();
    resetDecimalFlag();
    setLeadingZeroFlag(true);
    setEqualClearFlag(false);
}

function numberButton(key) {
    if (checkOperandLength() == true) {
        if (equalClearFlag == true) {
            clearAllValues();
            setEqualClearFlag(false);
        }
        if (leadingZeroChecker() == true) {
            animateButton(key);
            lastCharacterChecker(key);
            createStringFromNumber(key);
            createNumber(key);
            setLeadingZeroFlag(false);
        }
        else {
            animateButton(key);
            printToScreen(key);
            createStringFromNumber(key);
            createNumber(key);
        }
        setAssignOperandFlag(true);
    }
}

function zeroButton(key) {
    if (checkOperandLength() == true) {
        if (equalClearFlag == true) {
            clearAllValues();
            setEqualClearFlag(false);
        }
        if (leadingZeroChecker() == true && finalNumber == 0) {
            animateButton(key); 
        }
        else if (finalNumber == undefined) {
            createStringFromNumber(key);
            createNumber(key);
            printToScreen(key);
            setLeadingZeroFlag(true);
            setAssignOperandFlag(true);
        }
        else {
            animateButton(key);
            printToScreen(key);
            createStringFromNumber(key);
            createNumber(key);
            setAssignOperandFlag(true);
        }
    }
}

function equalButton(key) {
    animateButton(key);
    assignOperand();
    calculate();
    setEqualClearFlag(true);
    secondOperand = undefined;
}

function decimalButton(key) {
    if (equalClearFlag == true) {
        clearAllValues();
        setEqualClearFlag(false);
    }
    if (leadingZeroChecker() == true) {
        setLeadingZeroFlag(false);
        decimalLeadingZero();
    }
    animateButton(key);
    decimalChecker(key);
    setAssignOperandFlag(true);
}

function backspaceButton(key) {
    deleteLastEntry();
    animateButton(key);
}

function clearButton(key) {
    animateButton(key);
    clear();
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
        case "←":
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
    let enter = "=";
    console.log(key);

    switch(key) {
        case "0":
            zeroButton(key);
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
            numberButton(key);
            break;
        
        case "+":
        case "-":
            operatorButton(key, key);
            break;

        case "*":
            operatorButton(key, multiplication);
            break;

        case "x":
            operatorButton(key, multiplication);
            break;

        case "/":
            operatorButton(key, division);
            break;

        case "÷":
            operatorButton(key, division);
            break;

        case "=":
            equalButton(key);
            break;

        case "Enter":
            equalButton(enter);
            break;
        
        case ".":
            decimalButton(key);
            break;
        
        case "Backspace":
        case "←":
            backspaceButton(key);
            break;
        
        case "clear":
        case "c":
            clearButton(key);
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

$("button").on("mousedown", function() {
    $(".screen").addClass("glow-frame");
}).on("mouseup", function() {
    $(".screen").removeClass("glow-frame");
});

document.addEventListener("keydown", function(event) {
    press(event.key);
    $(".screen").addClass("glow-frame");
});

document.addEventListener("keyup", function() {
    $(".screen").removeClass("glow-frame");
})