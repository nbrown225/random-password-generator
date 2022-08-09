var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');
var passwordLow = [];




function getLower() {
    // var howLong = (prompt('8-140'));
    
    var lower = '';
    if (confirm("lowercase characters?") == true) {
        lowerArr = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

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
        numbersArr = '0123456789';
        numbers = numbersArr;
        console.log(numbers);
    } else{
        console.log('numbers not added');
    }
    console.log(passwordLow);
    return passwordLow.push(numbers)
}



function writePassword() {
    console.log("clicked");
    getLower()
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
// //     }
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