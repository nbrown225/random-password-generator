// GET DOM ELEMENTS
var startBtn = document.querySelector('#generate')
var printedPassword = document.querySelector('#password')


// SET PASSWORD STRING
var passwordCriteria = "";

// GET CRITERIA

// PUT CRITERIA INTO A STRING
// number
function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
// lowercase
function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// uppercase
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// special symbol
function randomSymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}
// test the results
console.log(randomNumber());
console.log(randomLower());
console.log(randomUpper());
console.log(randomSymbol());
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