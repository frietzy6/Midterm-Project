// Function to check if all fields are filled in the Items tab
function checkItemsFields() {
    var name = document.getElementById("nameItems").value.trim();
    var email = document.getElementById("emailItems").value.trim();
    var phoneNumber = document.getElementById("phoneNumberItems").value.trim();
    var location = document.getElementById("locationItems").value.trim();
    var itemType = document.getElementById("itemType").value.trim();
    var itemDescription = document.getElementById("itemDescription").value.trim();
    var quantity = document.getElementById("quantityItems").value.trim();

    if (!name || !email || !phoneNumber || !location || !itemType || !itemDescription || !quantity) {
        return false; // Not all fields are filled
    }
    return true; // All fields are filled
}

// Function to check if all fields are filled in the Food tab
function checkFoodFields() {
    var name = document.getElementById("nameFood").value.trim();
    var email = document.getElementById("emailFood").value.trim();
    var phoneNumber = document.getElementById("phoneNumberFood").value.trim();
    var location = document.getElementById("locationFood").value.trim();
    var foodType = document.getElementById("foodType").value.trim();
    var foodDescription = document.getElementById("foodDescription").value.trim();
    var quantity = document.getElementById("quantityFood").value.trim();

    if (!name || !email || !phoneNumber || !location || !foodType || !foodDescription || !quantity) {
        return false; // Not all fields are filled
    }
    return true; // All fields are filled
}

// Function to check if all fields are filled in the Money tab
function checkMoneyFields() {
    var name = document.getElementById("nameMoney").value.trim();
    var email = document.getElementById("emailMoney").value.trim();
    var phoneNumber = document.getElementById("phoneNumberMoney").value.trim();
    var location = document.getElementById("locationMoney").value.trim();
    var paymentMethod = document.getElementById("paymentMethod").value.trim();

    if (!name || !email || !phoneNumber || !location || !paymentMethod) {
        return false; // Not all fields are filled
    }
    return true; // All fields are filled
}

// Function to submit the Items form if all fields are filled
function submitItems() {
    if (checkItemsFields()) {
        // Perform submission logic here (e.g., AJAX request)
        alert("Items donation submitted successfully!");
        // Optionally, close the modal or reset the form after submission
    } else {
        alert("Please fill in all fields in the Items tab.");
    }
}

// Function to submit the Food form if all fields are filled
function submitFood() {
    if (checkFoodFields()) {
        // Perform submission logic here (e.g., AJAX request)
        alert("Food donation submitted successfully!");
        // Optionally, close the modal or reset the form after submission
    } else {
        alert("Please fill in all fields in the Food tab.");
    }
}

// Function to submit the Money form if all fields are filled
function submitMoney() {
    if (checkMoneyFields()) {
        // Perform submission logic here (e.g., AJAX request)
        alert("Money donation submitted successfully!");
        // Optionally, close the modal or reset the form after submission
    } else {
        alert("Please fill in all fields in the Money tab.");
    }
}



// Function to show the pop-up info form based on the selected payment method
function showPaymentInfo() {
    var paymentMethod = document.getElementById("paymentMethod").value;
    // Hide all pop-up info forms first
    document.getElementById("gcashInfo").style.display = "none";
    document.getElementById("creditCardInfo").style.display = "none";

    // Show the selected payment method's pop-up info form
    if (paymentMethod === "GCash") {
        document.getElementById("gcashInfo").style.display = "block";
    } else if (paymentMethod === "CreditCard") {
        document.getElementById("creditCardInfo").style.display = "block";
    }
}

