var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');
var passwordLow = [];

var numbersArr = ['0','1','2','3','4','5','6','7','8','9']

var symbolArr = [,'$','%','^','&','*','(',')','#','@','!',]
var UPPERArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',]
var lowerArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
// const MIN = 1;
// const MAX = 10;



function getLower() {
    // var howLong = (prompt('8-140'));
    
    var lower = '';
    if (confirm("lowercase characters?") == true) {
        lower = lowerArr;
        console.log(lower);
        console.log(lowerArr);
        passwordLow.push(lower);
        getNum()
    } else{
        console.log('we wont add');
        getNum()

    }
    console.log(passwordLow);
    return passwordLow
}

function getNum() {
    var numbers = '';
    if (confirm('numbers?') == true) {
        numbers = numbersArr;
        console.log(numbers);
        randomize()
    } else{
        console.log('numbers not added');
    }
    console.log(passwordLow);
    return passwordLow.push(numbers)
}
var temppass = ['0','1','2','3','4','5','6','7','8','9'];
function getLength() {
    var passwordLength = prompt('1-10')
    passwordLength.value
    console.log(passwordLength);
    // var pwlength = parseInt(passwordLength.value)
    // if (pwlength < MIN || pwlength > MAX) {
    //     console.log(passwordLength);
    // }
    // return
    
}

// function pwLenght() {
//     characterLength = parseInt(prompt('How long do you want the password? 8 - 140'));
//     if(isNaN(characterLength) || characterLength<8 || characterLength<140){
//         return false;
//     }

// }



function writePassword() {
    console.log("clicked");
    getLength()
}


//generateBtn.addEventListener('click', writePassword);