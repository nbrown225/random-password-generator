// DOM ELEMENTS
var startBtn = document.querySelector("#generate")
var passwordLength = 0;
var newPassword = "";

function includeUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
};

// STRING OF 128 FROM RANDOM RETURN

// CRITERIA QUESTIONS
function criteria () {
    var confirmUpper = confirm("do you want to add upper?");
}
for (var i = 0; i < parseInt(128); i++) {
    if (confirmUpper) {
    console.log(includeUpper());
    } 
    //IF YES, ADD
    //IF NO, NEXT QUESTION

//STRINGIFY THEM TOGETHER

//WRITE PASSWORD
console.log(includeUpper);
startBtn.addEventListener("click",criteria)