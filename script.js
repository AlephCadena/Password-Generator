// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = document.querySelector("#generate");
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+="
var length = prompt ("How many characters would you like?")
var upper = prompt ("How many uppercase letters would you like?")
var special = prompt ("How many special characters would you like?")



// Write password to the #password input
function generateBtn( ) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(length, characters) {
  let password = "";
  for (let i = 0; i < length; i++) {
  password += characters.charAt(
  Math.floor(Math.random() * characters.length)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
