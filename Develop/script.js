// Pseudo code
// 1. Use the window.prompt to get the password criteria from user.
// 2. The user should enter the length of the password between 8 and 128.
// 3. Get information from the user about password preferences like Numbers,
//     Lowercase, Uppercase and Special characters.
// 4. Verify the input.
// 5. Generate password based on the criteria.








// Assignment code here
function generatePassword() {
  
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
