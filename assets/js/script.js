// Assignment code here
function generatePassword () {
  var tryAgain = true;
  var passLength = -1;
  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var special = false;

  while (tryAgain) {
    passLength = prompt("How many chacters should the password have?\n(8 - 128)", "8");

    if (passLength < 8 || isNaN(passLength) || passLength > 128) {
      tryAgain = confirm("Error: Invalid length!\n\nWould you like to try again?");
    } else {
      tryAgain = false;
    }
  }

  tryAgain = true;
  while (tryAgain) {
    lowercase = confirm("Do you want to include lowercase characters?");
    uppercase = confirm("Do you want to include uppercase characters?");
    numeric = confirm("Do you want to include numeric characters?");
    special = confirm("Do you want to include special characters?");

    if (lowercase === false && uppercase === false && numeric === false && special === false) {
      tryAgain = confirm("Error: Please choose at least one of the character types\n\nWould you like to try again?");
    } else {
      tryAgain = false;
    }
  }
  alert("well done");
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var signUpButton = document.querySelector("#sign-up");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);