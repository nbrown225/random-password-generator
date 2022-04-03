
// variable for length


// FUNCTION FOR LOWER LETTERS CHARCODE 97-122
function lowerLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

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