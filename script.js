// Assignment Code
var generateBtn = document.querySelector("#generate");

// Made function generatePassword
function generatePassword () {
    console.log("You clicked the button")

// 1. promt user series for password criteria
//  a. promt length 8-128

var number = prompt("Please choose a character length between 8-128");

console.log(number)
//  b. prompt lowercase,uppercase,numeric,special character


var lowercase = confirm("Would you like to include lowercase characters?");

console.log("lowercase");

var uppercase =confirm("Would you like to include uppercase characters?");

console.log("uppercase");

var numeric = confirm("Would you like to include numeric characters?");

console.log("numeric");

var special = confirm("Would you like to include special characters?");

console.log("special");
// Validate Input


// Generate Password



// Display Password
    return"Generated password goes here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
