const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let feet = document.querySelector("#feet").value;
    let inches = document.querySelector("#inches").value;
    const results = document.querySelector("#results");

    feet = parseInt(feet);
    inches = parseInt(inches);

    if (isNaN(feet) || isNaN(inches)) {
        results.textContent = "Please enter a valid number!";
    } else if (feet < 0) {
        results.textContent = "Please enter a feet value > 0";
    } else if (inches < 0 || inches >= 12) {
        results.textContent = "Please enter an inch value between 0 and 12";
    } else {
        // Convert height to centimeters
        let totalInches = (feet * 12) + inches;
        let cm = totalInches * 2.54;
        results.textContent = `${cm.toFixed(2)} cm`;

        // Clear input fields
        document.querySelector("#feet").value = "";
        document.querySelector("#inches").value = "";
    }
});
