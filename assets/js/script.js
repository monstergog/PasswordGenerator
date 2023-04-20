// Assignment code here
function generatePassword () {
  var passLength = -1;
  if (passLength < 8 || passLength === null || passLength > 128) {
    prompt("How many chacters should the password have?\n(8 - 128)", "8");

    if (passLength < 8 || passLength === null || passLength > 128) {
      alert("Please enter a valid number\nPress the generate button to try again");
      return null;
    }
  }

  var lowercase = confirm("Do you want to include lowercase characters?");
  var uppercase = confirm("Do you want to include uppercase characters?");
  var numeric = confirm("Do you want to include numeric characters?");
  var special = confirm("Do you want to include special characters?");
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
generateBtn.addEventListener("click", writePassword());
