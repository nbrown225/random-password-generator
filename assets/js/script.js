// -----------------GET DOM ELEMENTS
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// -----------------SET VARIABLES
// EMPTY STRING TO CONTAIN PASSWORD BEING CREATED
var tempPassword = [];

// MIN / MAX AMOUNTS FOR PASSWORD LENGTH / variable to hold chosen password length
const MIN = 8;
const MAX = 140;
var passwordLength

// -----------------ARRAYS FOR NUMBERS / SYMBOLS / UPPER / LOWER
var symbolArr = ['$','%','^','&','*','(',')','#','@','!'];
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var numberArr = ['1','2','3','4','5','6','7','8','9','0']
var randoSymbol = [];
var randoUpper = [];
var randoLlower = [];
var randoNumber = [];


// ------------------GET LENGTH OF PASSWORD
function getLength () {
    passwordLength = prompt('How long do you want the password to be? 8-140');
    // CHECK IF PASSWORD IS BETWEEN SPECIFIED LENGTH
    if (passwordLength < MIN || passwordLength > MAX) {
        alert('PASSWORD MUST BE BETWEEN 8-140 CHARACTERS!');
        getLength();
        return false;
    }
    console.log(passwordLength);
    getRandom();
    return;
}
// CREATE RANDOM STRINGS
function getRandom (){
    for (var i = 0; i < passwordLength; i++){
       randoNumber.push(numberArr[Math.floor(Math.random()*numberArr.length)]);
       randoUpper.push(upperArr[Math.floor(Math.random()*upperArr.length)]);
       randoLlower.push(lowerArr[Math.floor(Math.random()*lowerArr.length)]);
       randoSymbol.push(symbolArr[Math.floor(Math.random()*symbolArr.le)]);
    }
    //console.log(randoNumber);
    checkNumber()
    return
}
// ------------------CONFIRM PROMPTS
// NUMBERS
function checkNumber () {
    if (confirm('Would you like to add numbers?') == true) {
        tempPassword.push(randoNumber);
        //console.log(tempPassword);
        checkUpper();
    } else{
        checkUpper();
    }
    return
}
// UPPERCASE LETTERS
function checkUpper () {
    if (confirm('Would you like to add uppercase letters?') == true) {
        tempPassword.push(randoUpper);
        //console.log(tempPassword);
        checkLower() 
    } else{
        checkLower()
    }
    return
}
// LOWERCASE LETTERS
function checkLower () {
    if (confirm('Would you like to add lowercase letters?') == true) {
        tempPassword.push(randoLlower);
        checkSymbol()
    } else(
        checkSymbol
    )
    return
}
// SYMBOLS
function checkSymbol () {
    if (confirm('Would you like to add symbols?') == true) {    
        tempPassword.push(randoSymbol);
        randomizeNewPassword();
    } else{
        randomizeNewPassword();
    }
    return
}

// -----------------GET RANDOM STRING BASED ON PASSWORDLENGTH
function randomizeNewPassword (){
    for (var i = 0; i < passwordLength; i++){
        // CREATE VARIABLE FOR FINISHED PASSWORD
        createdPassword = tempPassword.toString('').replaceAll(',','');
        console.log(createdPassword);
    }
    writePassword();
    return createdPassword
}

// -----------------WRITE FINISHED PASSWORD ON PAGE!
function writePassword (){
    passwordText.innerHTML = createdPassword
}

// ----------------START PASSWORD CRITERIA FUNCTION
function startFunc() {
    console.log("clicked");
    getLength()
}