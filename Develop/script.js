// Pseudo code
// 1. Use the window.prompt to get the password criteria from user.
// 2. The user should enter the length of the password between 8 and 128.
// 3. Get information from the user about password preferences like Numbers,
//     Lowercase, Uppercase and Special characters.
// 4. Verify the input.
// 5. Generate password based on the criteria.


// Declaring variables.

var number = [0,1,2,3,4,5,6,7,8,9];
var upperCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharacters = ["@","#","!","$","%","^","&","*","(",")","_","-","+","=","{","}","[","]",":",";","<",">","?"];
var passwordLength ;
var preferences;

// Function to generate password.
function generatePassword() {
// Asking user to enter the length of the password.
  passwordLength = window.prompt("How many characters would you like in your password? Choose between 8 and 128");
// validating user input 
  if(!passwordLength) {
    window.alert("Please, enter a value");
  }
  else if(passwordLength < 8 || passwordLength > 128) {
  // verifying user input.
    passwordLength = window.prompt("You must enter a number between 8 and 128");
  }
// checking the user entered correctly or not.
  else {
    var confirmNumber = window.confirm("Will this contain numbers?");
    var confirmSpecialCharacters = window.confirm("Will this contain Special characters?");
    var confirmLowercase = window.confirm("Will this contain Lowercase letters?");
    var confirmUppercase = window.confirm("Will this contain Uppercase letters?");
  } 

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
