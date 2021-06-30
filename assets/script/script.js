// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//promt for password length
//Record length to variable
//promt for character types
//validate that atleast 1 character type is selected
//record character types to variables
//generate random number
//turn that number into base-36
//