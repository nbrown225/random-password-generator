
// DOM ELEMENTS
var startBtn = document.querySelector("#generate")
var generatedPassword = "";

function includeUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function confirmPassword() {
    var confirmUpperCase = confirm("WOULD YOU UPPER CASE?");
    if (confirmUpperCase) {
        includeUpperCase();
    }else "we won't include that";
    return generatedPassword;
}

function writePassword() {
    var generatedPassword = confirmPassword();
    var generatedPasswordText = document.querySelector("#password");

    generatedPasswordText.value = "Your new password is: ", generatedPassword
    console.log("the pw is"+generatedPassword);
}
startBtn.addEventListener("click", writePassword)





/*


function includeLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function includeNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    
}
function includeSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

function generatePassword() {
    var passwordLength = prompt("how long would you like the password to be? 8-128");
    var confirmUpperCase = confirm("Would you like uppercase letters?");
    var confirmLowerCase = confirm("would you like lowercase letters?");
    var confirmNumber = confirm("would you like numbers?");
    var confirmSymbol = confirm("would you like symbols?");
    var newPasswordMade = "";
    // password logic goes here
    if (confirmUpperCase) {
        // call random function
        includeUpperCase()
    } if (confirmLowerCase) {
        includeLowerCase()
    } if (confirmNumber) {
        includeNumber()
    } if (confirmSymbol) {
        includeSymbol()
    }
    
    return newPasswordMade;
}

//window.alert(newpassword);

function writePassword() {
    var password = generatePassword();
    var generatedPasswordText = document.querySelector("#password");
    
    generatedPasswordText.value = "YOUR NEW PASSWORD IS: ", password;
}
startBtn.addEventListener("click", writePassword);

*/