// Assignment Code
var numberLength = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var characters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];


var generateBtn = document.querySelector("#generate");

// const passwordLength = 0;
// const pwdCriteria = 0;
// const result = "";


function generatePassword() {
    console.log("clicked")
    // 1. promopt the user for password criteria 

    var result = "";


    // password length 8 < 128 charcters 
    var length = parseInt(prompt("Please enter a charcter length 8 < 128"));


    while (length < 8 || length > 128) {
        alert("must be less than 128 characters");
        length = parseInt(prompt("Please enter a charcter length 8 < 128"));
    }

    var hasCharacters = confirm('Do you want special characters?');
    var hasUpper = confirm('Do you want upper case letters?');
    var hasLower = confirm('Do you want lower case letters?');
    var hasNumber = confirm('Do you want numbers?');

    const passwordCriteria = {
        length: length,
        hasCharacters: hasCharacters,
        hasUpper: hasUpper,
        hasLower: hasLower,
        hasNumber: hasNumber,

    };

    if (hasUpper === false && hasLower === false && hasCharacters === false && hasNumber === false) {
        alert(" You must select at least one cireteria of lowercase, uppercase or special characters")
    }

    // if (upperCase === true && pwdCriteria < passwordLength) {
    //   var uc = pwdCriteria.upperCase[Math.floor(Math.random() * 26)]
    //   result = result + uc;
    //   result++;

    // } if (lowerCase === true && pwdCriteria < passwordLength) {
    //   var lc = pwdCriteria.lowerCase[Math.floor(Math.random() * 26)]
    //   result = result + lc;
    //   result++;

    // }
    // if (numberLength === true && pwdCriteria < passwordLength) {
    //   var nl = pwdCriteria.numberLength[Math.floor(Math.random() * 128)]
    //   result = result + nl;
    //   result++;
    // }

    return result;
}

function putItTogether() {

    var passwordLength = 0;
    var pwdCriteria = 0;
    var result = "";
}


// word() indicates that it is either a method or a function 

// Write password to the #password input
function writePassword() {
    // paste whatever gets answered from generatePassword() onto the area where the password should be in the box
    var password = generatePassword();
    // passwordText represents the section where the password will go from the html 
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
// method(name, value)
generateBtn.addEventListener("click", writePassword);

