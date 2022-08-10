var generateBtn = document.querySelector('#generate');

const MIN = 8;
const MAX = 140;
var passwordLength
var symbolArr = ['$','%','^','&','*','(',')','#','@','!'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0']

var upperArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var number = [];


function addNumber() {
    if (confirm('Would you like to add numbers?') == true) {
        //tempPassword.push(numbersArr);
        getLength();
    } else {
        console.log('no number');
        getLength();

    }
    return
};

function getLength() {
    passwordLength = prompt('how long 1-11')
    if (passwordLength > MIN || passwordLength < MAX) {
        console.error('nope');
    }
    console.log(passwordLength);
    getRandom()
    return passwordLength
}
function getRandom() {
    
    for (var i = 0; i< passwordLength; i++){
        //upper = [];
        //upper.push(upperArr[Math.floor(Math.random()*upperArr.length)]);
        //lower.push(lowerArr[Math.floor(Math.random()*lowerArr.length)]);
        //symbol.push(symbolArr[Math.floor(Math.random()*symbol.length)]);
        number.push(numberArr[Math.floor(Math.random()*numberArr.length)]);
    }
    //console.log(passwordLength);
    //console.log(number);
    //console.log(symbol);
    //console.log(lower);
    console.log(number);
    return
}
// function getRandom () {
//     var passwordLength = prompt('how long 1-11')
//     var result = [];
//     var result2 = [];
//     for (var i = 0; i< passwordLength; i++){
//         result.push(upperArr[Math.floor(Math.random()*upperArr.length)])
//         result2.push(symbolArr[Math.floor(Math.random()*symbolArr.length)])
//     }
//     console.log(result);
//     console.log(result2);
//     return 
// }
// getRandom()






function writePassword() {
    //console.log("clicked");
    addNumber()
}


