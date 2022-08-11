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
// VARIABLES FOR
function getRandom (){
    for (var i = 0; i < passwordLength; i++){
       randoNumber.push(numberArr[Math.floor(Math.random()*numberArr.length)]);
       randoUpper.push(upperArr[Math.floor(Math.random()*upperArr.length)])
    }
    // REMOVE THE FREAKING COMMAS!!!!
     // ATTEPTED TO REMOVE COMMAS, BUT WOULD RESULT IN STRING WITH RANDOM COMMAS
    //newString = randostring.toString().replace('',',')
    
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
// UPPER LETTERS
function checkUpper () {
    if (confirm('Would you like to add upper letters?') == true) {
        tempPassword.push(randoUpper);
        //console.log(tempPassword);
        randomizeNewPassword()
    } else{
        randomizeNewPassword()
    }
}
function randomizeNewPassword (){
    for (var i = 0; i < passwordLength; i++){
        createdPassword = tempPassword.toString('').replaceAll(',','');
        console.log(createdPassword);
    }
    return createdPassword
}
// CHECK CONFIRM PROMPTS
    // IF TRUE
        // RANDOMIZE
        // PULL LENGTH
        // ADD TO TEMP PASSWORD
    // IF FALSE
        // MOVE TO NEXT QUESTION


// START PASSWORD CRITERIA
function startFunc() {
    console.log("clicked");
    getLength()
}

/*
// ------------------FUNCTIONS FOR PASSWORD CRITERIA
// UPPERCASE
function addUpper() {
    if (confirm('Would you like to add uppercase characters?') == true) {
        upper = upperArr
       // tempPassword.push(upperArr);
        addSymbol();
    } else {
        console.log('upper not added');
        //console.log(tempPassword);
        addSymbol();
        return upper;
    }
    //console.log(tempPassword);
    return upper;
};
// LOWERCASE
function addLower() {
    // var lower = '';
    if (confirm('Would you like to add lowercase characters?') == true) {
        //lower = lowerArr;
        tempPassword.push(lowerArr);
        checkNumber();
    } else{
        console.log('lower not added');
        //console.log(tempPassword);
        checkNumber();
        return tempPassword;
    }
    //console.log(tempPassword);
    return tempPassword;
};
// NUMBER
function checkNumber() {
    if (confirm('Would you like to add numbers?') == true) {
        tempPassword.push(numbersArr);
        addSymbol();
    } else {
        console.log('no number');
        addSymbol();
        return tempPassword;
    }
    return tempPassword;
};
// SYMBOL
function addSymbol() {
    if (confirm('Would you like to add symbols?') == true) {
        symbol = symbolArr
        //tempPassword.push(symbolArr);
        getLength();
    } else {
        console.log('no symbol');
        getLength();
        return symbol;
    }
    //console.log(tempPassword);
    return symbol;
}
// LENGTH
function getLength() {
    passwordLength = prompt('how long 1-11')
    if (passwordLength > MIN || passwordLength < MAX) {
        console.error('nope');
    }
    console.log(passwordLength);
    getRandom()
    return passwordLength
}

// RANDOMIZE
function getRandom() {
    
    for (var i = 0; i< passwordLength; i++){
        //upper = [];
        upper.push(upperArr[Math.floor(Math.random()*upperArr.length)]);
        //lower.push(lowerArr[Math.floor(Math.random()*lowerArr.length)]);
        symbol.push(symbolArr[Math.floor(Math.random()*symbol.length)]);
        number.push(numberArr[Math.floor(Math.random()*numberArr.length)]);
    }
    //console.log(passwordLength);
    //console.log(number);
    //console.log(symbol);
    //console.log(lower);
    console.log(number);
    return
}


function writePassword() {
    //console.log("clicked");
    addUpper()
}

// for (let index = 0; index < passwordLength; index++) {
//     var randomIndex = Math.floor(Math.random()*passwordLength)
//     const element = temppass[randomIndex];
//     // arrays go here
//     const element2 = temppass2[index];
//    // console.log(element2);
//     console.log(element);
    
// }

// test the results
// console.log(randomNumber());
// console.log(randomLower());
// console.log(randomUpper());
// console.log(randomSymbol());

// PROMPT USERS FOR CRITERIA
// // var numbers  = ""
// // function getCriteria() {
// //     if (confirm('Add number?') == true) {
// //         randomNumber()
// //         return true
// //     } else {
// //         console.log('no add');
 //     }
// // }


// PUSH CRITERIA TOGETHER
// PRINT PASSWORD TO PAGE




// START FUNCTION

// WANT PASSWORD TO PRINT ON PAGE



































// getCriteria = (){
//     var numbers = "0123456789";
//     var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var lower = "abcdefghijklmnopqrstuvwxyz";
//     var special = "!@#$%^&*()";
//     return
//     password = [numbers, upper, lower, special]
// }


// startFunc = () {
//     prompt(getCriteria);
// }
*/