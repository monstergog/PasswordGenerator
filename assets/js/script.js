// Constants for all characters to be used for passwords
const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperAlphabet = lowerAlphabet.toUpperCase();
const numericCharacters = "1234567890";
const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Generateds a random string of characters depending on user input
function generatePassword () {
  var tryAgain = true;
  var passLength = -1;
  var lowercase = false;
  var uppercase = false;
  var numeric = false;
  var special = false;
  var characterSet = "";
  var password = "";

  // Prompts user for password length
  while (tryAgain) {
    passLength = prompt("How many chacters should the password have?\n(8 - 128)", "8");

    // Validates user entry is within criteria
    if (passLength < 8 || isNaN(passLength) || passLength > 128) {
      tryAgain = confirm("Error: Invalid length!\n\nWould you like to try again?");
    } else {
      tryAgain = false;
    }
  }

  // Reset flag for next while loop
  tryAgain = true;
  
  // Asks for user confirmation for what type of characters are to be used in the password
  while (tryAgain) {
    lowercase = confirm("Do you want to include lowercase characters?");
    uppercase = confirm("Do you want to include uppercase characters?");
    numeric = confirm("Do you want to include numeric characters?");
    special = confirm("Do you want to include special characters?");

    // Validates if at least of of the character types are to be used for the password
    if (lowercase === false && uppercase === false && numeric === false && special === false) {
      tryAgain = confirm("Error: Please choose at least one of the character types\n\nWould you like to try again?");
    } else {
      tryAgain = false;
    }
  }

  // Concatenates selected character types into a single string to be used for password generation
  if (lowercase === true) {characterSet += lowerAlphabet;}
  if (uppercase === true) {characterSet += upperAlphabet;}
  if (numeric === true) {characterSet += numericCharacters;}
  if (special === true) {characterSet += specialCharacters;}
  
  // Generates password by randomly electing elements within the concatenated string to form password
  for (var i = 0; i < passLength; i++) {
    password += characterSet[Math.floor(Math.random() * characterSet.length)];
  }

  return password;
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