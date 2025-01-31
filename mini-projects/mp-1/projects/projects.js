function addition() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (isNaN(num1+num2)) {
        document.getElementById("output").innerHTML = "Please enter two numbers.";
    } else {
        document.getElementById("output").innerHTML = String(num1+num2);
    }
}

function subtract() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (isNaN(num1-num2)) {
        document.getElementById("output").innerHTML = "Please enter two numbers.";
    } else {
        document.getElementById("output").innerHTML = String(num1-num2);
    }
}

function divide() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    if (isNaN(num1/num2)) {
        document.getElementById("output").innerHTML = "Please enter two numbers.";
    } else if (num2 === 0) {
        document.getElementById("output").innerHTML = "Cannot divide by zero";
    } else {
        document.getElementById("output").innerHTML = String(num1/num2);
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

    if (isNaN(numOut) || isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerHTML = "Please enter two numbers.";
    } else {
        document.getElementById("output").innerHTML = String(numOut);
    }
}

function clearInputs() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}