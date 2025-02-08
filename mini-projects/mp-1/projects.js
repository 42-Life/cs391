function addition() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let numOut = num1 + num2;
    outputProcessing(numOut);
}

function subtract() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let numOut = num1 - num2;
    outputProcessing(numOut);
}

function divide() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let numOut = num1 / num2;
    ifNegative(numOut);

    if (isNaN(numOut)) {
        document.getElementById("output").innerHTML = "Please enter two numbers.";
    } else if (num2 === 0) {
        document.getElementById("output").innerHTML = "Cannot divide by zero";
    } else {
        document.getElementById("output").innerHTML = String(numOut);
    }
}

function power() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let numOut = 1;

    // handling negative exponent inputs
    if (num2 >= 0) {
        for (let i = 0; i < num2; i++) {
            numOut *= num1;
        }
    } else {
        for (let i = 0; i < (num2*-1); i++) {
            numOut *= num1;
        }
        numOut = 1/numOut;
    }

    outputProcessing(numOut);
}

function clearInputs() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("output").innerHTML = "";
}

// Helper functions for better abstraction
// reference: https://www.w3schools.com/js/js_htmldom_css.asp
function ifNegative(numOut) {
    if (numOut < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function outputProcessing(numOut) {
    ifNegative(numOut);
    if (isNaN(numOut)) {
        document.getElementById("output").innerHTML = "Please enter two numbers.";
    } else {
        document.getElementById("output").innerHTML = String(numOut);
    }
}