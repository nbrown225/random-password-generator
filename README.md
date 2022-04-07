# random-password-genoeator

USER STORY
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

WHEN prompted for password criteria
THEN I select which criteria to include in the password

--WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

--WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

--WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

W--HEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

resources
conditional statements
https://www.w3schools.com/js/js_comparisons.asp
window.confirm
https://www.w3schools.com/jsref/met_win_confirm.asp





/*

startBtn.addEventListener("click", writePassword);
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/

// FUNCTION FOR LOWER LETTERS CHARCODE 97-122
function lowerLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(lowerLetter());

// PROMPT TO START PASSWORD GENERATOR
function startNewPassword() {
    let start = "WOULD YOU LIKE TO CREATE A NEW PASSWORD?";
    if (confirm(start) == true) {
        addLowerLetter();
    } else {
        window.alert("AW POO, MAYBE NEXT TIME! :(")
    }
}

function addLowerLetter() {
    let addLower = "WOULD YOU LIKE TO ADD LOWERCASE LETTERS?";
    if (confirm(addLower) == true) {
        brandNewPassword = lowerLetter();
        window.alert(brandNewPassword)
    } else {
        window.alert("NONE WILL BE ADDED")
    }
}

// 1 A PLACEHOLDER FOR NEW PASSWORD
var brandNewPassword

// 2 A PROMPT TO START MAKING THE NEW PASSWORD
function lowerLetterCheck() {

    // 3 A PROMPT FOR WHAT i'D LIKE TO INCLUDE IN THE PASSWORD

    // 3a WOULD I LIKE LETTERS?
    
    // 3b IF YES, INCLUDE IN PASSWORD PLACEHOLDER
    
    // 3C IF NO, SKIP
}
 */


















/*

// FUNCTION FOR UPPER LETTERS CHARCODE 65-90
function upperLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// FUNCTION FOR NUMBERS 48-57
function numbers() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// FUNCTION FOR SYMBOLS 33-47
function symbols() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
// CONSOL LOG TO MAKE SURE FUNCTIONS ARE WORKING

console.log(upperLetter());
console.log(numbers());
console.log(symbols());


// PASSWORD VARIABLE
// FILTER CONFIRMED, NOT WANTED
// ADD LENGTH



// VARIABLE FOR BUTTON 
















/*
// WHEN CLICKING GENERATE PROMPTS START
    // VARIABLE FOR BUTTON
    // EVENT LISTENER FOR BUTTON CLICK

// PROMPT FOR LENGTH
    // WINDOW PROMPT FOR PASSWORD LENGTH
    window.prompt("how long would you like the password")
    // CONFIRM TO GO TO NEXT PROMPT

// PROMPT FOR LETTERS
    // WINDOW PROMPT TO INCLUDE LETTERS
    window.prompt("would you like to include letters?");

    // CONFIRM TO GO TO NEXT PROMPT

// PROMPT FOR NUMBERS
    // WINDOW PROMPT TO INCLUDE NUMBERS
    window.prompt("would you like to include numbers?");
    // CONFIRM TO GO TO NEXT PROMPT

// PROMPT FOR SPECIAL CHARACTERS
    // WINDOW PROMPT TO INCLUDE SPECIAL CHARACKTERS
    // CONFIRM TO GO TO NEXT PROMPT

// CHECK TO SEE IF ALL PROMPTS ARE ANSWERED
    // IF YES, GENERATE PASSWORD
    // IF NOT, RESTART PROMPT

// WHEN PROMPTS ARE ANSWERED PASSWORD IS GENERATED
    // EVENT LISTENER TO GENERATE PASSWORD
    // GENERATED PASSWORD PRINTED TO AREA

    // APPEND PASSWORD TO PRINT FIELD
// Assignment code here







/*
