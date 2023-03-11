// Define Variable
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!@#$%^&*()?/;:~";
var selected = [8, "false", "false", "false", "false"];
var chars = [];

// Function generatePassword
function generatePassword() {
  console.log("You clicked the button");

  // get password length
  selected[0] = prompt("Please choose a character length between 8-128");

  if (selected[0] < 8) {
    alert("invalid selection");
    return;
  } else if (selected[0] > 128) {
    alert("invalid selection");
    return;
  } else {
    console.log(selected[0]);
  }

  //  get password criteria
  selected[1] = confirm("Would you like to include lowercase characters?");
  if (selected[1]) {
    chars.push(lowercase);
    console.log("lowercase");
  }

  selected[2] = confirm("Would you like to include uppercase characters?");
  if (selected[2]) {
    chars.push(uppercase);
    console.log("uppercase");
  }

  selected[3] = confirm("Would you like to include numeric characters?");
  if (selected[3]) {
    chars.push(numeric);
    console.log("numeric");
  }

  selected[4] = confirm("Would you like to include special characters?");
  if (selected[4]) {
    chars.push(special);
    console.log("special");
  }

  // Validate Input
  if (!selected[1] && !selected[2] && !selected[3] && !selected[4]) {
    alert("invalid selection");
    return;
  } else {
    console.log("validated");
  }
  console.log(chars);

  // Make a stirng of included characters
  var included = chars.join("");
  console.log(included);

  var pass = "";
  //  Randomly select characters from string for password length
  for (var i = 0; i < selected[0]; i++) {
    pass = pass + included[Math.floor(Math.random() * included.length)];
    console.log(pass);
  }
  //  Reset selected citeria
  chars.splice(0, 4);
  return pass;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
