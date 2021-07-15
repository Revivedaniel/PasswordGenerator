//placing the 'generate' button into a variable
var generateBtn = document.querySelector("#generate");

//Declairing the choices for generation
var lowerCase = false;
var upperCase = false;
var numeric = false;
var specialChars = false;


//this places the given range of numbers in an array from lowest number to highest
var uppercaseCharCodes = arrayFromLowToHigh(65, 90)
var lowercaseCharCodes = arrayFromLowToHigh(97, 122)
var numberCharCodes = arrayFromLowToHigh(48, 57)
var specialCharCodes = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

// Write password to the #password input element
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

//this pushes all the ascii characters into their arrays
function arrayFromLowToHigh(low, high) {
  const array = [];
    for (let i = low; i < high; i++) {
      array.push(i)
      
    }
    return array;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function
function generatePassword() {
  //Variable to validate atleast one selection was made
  var oneSelected = false;
  var selectionArray = []

  charLength = prompt("How many digits do you want the password to be?\nMin 8 Max 128 Characters")
  while (charLength >= 129 || charLength <= 7) {
    charLength = prompt("How many digits do you want the password to be?\nMin 8 Max 128 Characters");
  }
  
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
  
  //Beginning of actual password generation
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
  
  //using random numbers from out charCodes we generate the password array
  var passwordCharacters = [];
  for (let i = 0; i < charLength; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))  
  }
  //returning the password generated as a string
  return passwordCharacters.join("")

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