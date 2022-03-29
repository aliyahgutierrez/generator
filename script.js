// Assignment Code
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
    if(hasCharacters === true) {
        console.log("There will be special characters!");
        for (var i = 0; i < [length]; i++)
            result += characters[Math.floor(Math.random() * characters.length)];
    }
    if(hasUpper === true) {
        console.log("There will be special characters!");
        for (var i = 0; i < [length]; i++)
            result += upperCase[Math.floor(Math.random() * upperCase.length)];
    }
    if(hasLower === true) {
        console.log("There will be special characters!");
        for (var i = 0; i < [length]; i++)
            result += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    if(hasNumber === true) {
        console.log("There will be special characters!");
        for (var i = 0; i < [length]; i++)
            result += number[Math.floor(Math.random() * number.length)];
    }



    return result;
}
// function putItTogether() {

//     var passwordLength = 0;
//     var pwdCriteria = 0;
//     var result = "";
// }
// console.log(generatePassword());



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

