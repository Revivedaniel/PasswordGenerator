// Assignment Code
var generateBtn = document.querySelector("#generate");

//Defining the ascii codes for each selection
var uppercaseCharCodes = arrayFromLowToHigh(65, 90)
var lowercaseCharCodes = arrayFromLowToHigh(97, 122)
var numberCharCodes = arrayFromLowToHigh(48, 57)
var specialCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function
function generatePassword() {
  //Variable to validate atleast one selection was made
  var oneSelected = false;
  var selectionArray = []

  charLength = prompt("How many digits do you want the password to be?\nMin 8 Max 128 Characters")
  
  //asking for password criteria
  while (!oneSelected) {
    lowerCase = confirm("Do you want lowercase letters in your password?\nClick OK for yes and Cancel for no")
    upperCase = confirm("Do you want Uppercase letters in your password?\nClick OK for yes and Cancel for no")
    numeric = confirm("Do you want numbers in your password?\nClick OK for yes and Cancel for no")
    specialChar = confirm("Do you want special characters in your password?\nClick OK for yes and Cancel for no")
    
    //Validating atleast one selection was made
    if (lowerCase || upperCase || numeric || specialChar) {
      oneSelected = true;
      selectionArray = [lowerCase, upperCase, numeric, specialChar]
    }
    
  }
  
  let charCodes = []
  if (lowerCase) {
    charCodes = charCodes.concat(lowercaseCharCodes)
  }
  if (upperCase) {
    charCodes = charCodes.concat(uppercaseCharCodes)
  }
  if (numeric) {
    charCodes = charCodes.concat(numberCharCodes)
  }
  if (specialChar) {
    charCodes = charCodes.concat(specialCharCodes)
  }
  
}

//this pushes all the ascii characters into their arrays
function arrayFromLowToHigh(low, high) {
  const array = [];
    for (let i = low; i < high; i++) {
      array.push(i)
      
    }
    return array;
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