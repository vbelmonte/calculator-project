let firstNumber;


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

function printToScreen() {
    $("screen").text($(this).text());
    console.log($(this).text());
}


function animateButton(currentKey) {
    var activeButton = document.querySelector(".n"+currentKey);
    activeButton.classList.add("buttonPressed");
    setTimeout(function() {
        activeButton.classList.remove("buttonPressed");
      }, 100);
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
    }
}


$("button").click(function() {
    $("p").text($(this).text());
    console.log($(this).text());
});

document.addEventListener("keypress", function(event) {
    console.log(event.key);
    press(event.key);
});