// -----------------GET DOM ELEMENTS
var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');

// -----------------SET VARIABLES
// EMPTY STRING TO CONTAIN PASSWORD BEING CREATED
var tempPassword = ['start'];

// MIN / MAX AMOUNTS FOR PASSWORD LENGTH
const MIN = 8;
const MAX = 140;

// ARRAYS FOR NUMBERS / SYMBOLS / UPPER / LOWER
var numbersArr = String.fromCharCode(65,90)
console.log(numbersArr);
var symbolArr = ['$','%','^','&','*','(',')','#','@','!'];
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];



// ------------------FUNCTIONS FOR PASSWORD CRITERIA
// UPPERCASE
function addUpper() {
    //var upper = '';
    if (confirm('Would you like to add uppercase characters?') == true) {
       // upper = upperArr
        tempPassword.push(upperArr);
        addLower();
    } else {
        console.log('upper not added');
        console.log(tempPassword);
        addLower();
        return tempPassword;
    }
    console.log(tempPassword);
    return tempPassword;
};
// LOWERCASE
function addLower() {
    // var lower = '';
    if (confirm('Would you like to add lowercase characters?') == true) {
        //lower = lowerArr;
        tempPassword.push(lowerArr);
        addNumber();
    } else{
        console.log('lower not added');
        console.log(tempPassword);
        addNumber();
        return tempPassword;
    }
    console.log(tempPassword);
    return tempPassword;
};
// NUMBER
function addNumber() {
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
        tempPassword.push(symbolArr);
        getLength();
    } else {
        console.log('no symbol');
        getLength();
        return tempPassword;
    }
    console.log(tempPassword);
    return tempPassword;
}
// LENGTH
function getLength() {
    for (index = 0; index < passwordLength; index++){
        var randomIndex = Math.floor
    }
}


function writePassword() {
    console.log("clicked");
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
}
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



































// getCriteria = () =>{
//     var numbers = "0123456789";
//     var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var lower = "abcdefghijklmnopqrstuvwxyz";
//     var special = "!@#$%^&*()";
//     return
//     password = [numbers, upper, lower, special]
// }


// startFunc = () => {
//     prompt(getCriteria);
// }