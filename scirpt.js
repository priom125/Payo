// login button functionality

document.getElementById('loginButton').addEventListener('click', function(e) {
  
    e.preventDefault(); // Prevent default form submission
     const number = 1613347903
        const pin = 1234
    const enteredNumber = document.getElementById('mobileNumber').value;
    const mobileNumberConverted = parseInt(enteredNumber, 10);
    const enteredPin = document.getElementById('pin').value;
    const pinConverted = parseInt(enteredPin, 10);

    if (mobileNumberConverted === number && pinConverted === pin) {
        window.location.href = './home.html'; // Redirect to home.html
        
    }
    else {
        alert('Invalid mobile number or pin. Please try again.');
    }
})

