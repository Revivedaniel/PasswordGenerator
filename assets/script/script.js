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

//generate password function

function generatePassword(lowerCase, upperCase, numeric, specialChar, charLength) {

  var oneSelected = false;

  charLength = prompt("How many digits do you want the password to be?\nMin 8 Max 128 Characters")
  
  while (!oneSelected) {
    lowerCase = confirm("Do you want lowercase letters in your password?\nClick OK for yes and Cancel for no")
    upperCase = confirm("Do you want Uppercase letters in your password?\nClick OK for yes and Cancel for no")
    numeric = confirm("Do you want numbers in your password?\nClick OK for yes and Cancel for no")
    specialChar = confirm("Do you want special characters in your password?\nClick OK for yes and Cancel for no")
    
    if (lowerCase || upperCase || numeric || specialChar) {
      oneSelected = true;
    }
    
  }



}

//promt for password length [Done]
//Record length to variable [Done]
//promt for character types [Done]
//validate that atleast 1 character type is selected [Done]
//record character types to variables [Done]
//generate random number
//turn that number into base-36
//Generate the password
//write password to #password