
// DOM ELEMENTS
var startBtn = document.querySelector("#generate")

function includeUpperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function TEXTPASSWORDGEN() {
    var TESTconfirmUpperCase = confirm("WOULD YOU UPPER CASE?");
    var TESTnewPassword = "";
    if (TESTconfirmUpperCase) {
        includeUpperCase
    }else "we won't include that"
    return TESTnewPassword;
}

function TESTwritePassword() {
    var TESTnewPassword = TEXTPASSWORDGEN();
    var TESTnewPasswordText = document.querySelector("#password");

    TESTnewPasswordText.value = "DIS YO PW NOW", TESTnewPassword
    console.log(TESTnewPassword);
}
startBtn.addEventListener("click", TESTwritePassword)





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
    var TESTnewPasswordText = document.querySelector("#password");
    
    TESTnewPasswordText.value = "YOUR NEW PASSWORD IS: ", password;
}
startBtn.addEventListener("click", writePassword);

*/