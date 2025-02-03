function checkAge() {
    const ageInput = document.getElementById("age-input").value;
    const age = Number(ageInput);
    let errorMessage = "";

    // check age input
    if (isNaN(age) || !((age > 18) && (age <= 120)) || ((age % 1) !== 0)) {
        // bad case
        errorMessage = "Please enter an integer age between 18 and 120";
    } else {
        // good case
       errorMessage = "";
    }


    if (errorMessage === "") {
        document.getElementById("main-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("main-content").style.visibility = "hidden";
        document.getElementById("error-content").style.visibility = "visible";
    }
}