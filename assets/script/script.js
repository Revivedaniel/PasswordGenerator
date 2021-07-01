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
  //Pre made array to help with crypto length
  var randomString = [];

  //defines how many crypto entries we will need
  var cryptoNum = Math.ceil(charLength/10);
  //creates an array of random numbers in sections of 10
  
  //creates a new Uint32Array with cryptoNum amount of entries
  var array = new Uint32Array(cryptoNum);
  //gets random values and places them inside of array cryptoNum amount of times
  for (let i = 0; i < cryptoNum; i++) {
    window.crypto.getRandomValues(array);
  }
  
  for (let i = 0; i < array.length; i++) {
    randomString.push(parseInt(array[i]))
}
console.log(randomString)

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