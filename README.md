# Aswathy's Secure-Password-generator
## Description:
* This is a website for Creating a secure-random-password according to user preferences.
* pseudo-code
   1. Use the window.prompt to get the password length from user.

   2. The user should enter the length of the password between 8 and 128.

   3. Get information from the user about password preferences like Numbers,
    Lowercase, Uppercase and Special characters.
   4. Verify the input.

   5. Generate password based on the criteria

* The Method "window.prompt" displays a dialogue with a message prompting the user to enter the length of the password. User can enter a number between 8 and 128. Validating and verifying user input using if/else statements. Confirming user input using "window.confirm" method. If the user didn't confirm any of the password generation criteria then giving them alert using "window.alert" method.
* Once the user confirms the password generating criteria,(Numbers, Special-characters, Uppercase-Letters, Lowercase-Letters) then a password will be generated according to user preferences.
* The concat() method is used to merge the arrays, according to user preferences.
* The Math.random () method creates a number between 0 and 1. so it will randomly create a floating point number. The preference array contains user choices. So, Math.random() * preferences.length gives a number between 0 and (preferences.length - 1). This is a floating point number. Math.floor() Method returns the largest integer less than or equal to a given number. This way we will get a random number/special-character/uppercase letters/lowercase letters.
For loop is used to loop the blocks of code password.length times.
* Array_push() function is used to insert each randomly selected onces to the password arrays. Finally,we get a password array.The join() method creates and returns a new string by concatenating all of the elements in an array.
* When the user clicks generate password button, the password will create inside the text area.
 ## Built With
* HTML
* CSS
* JavaScript
## Website
 https://achuv37.github.io/My-Secure-Password-Generator/
 
## Images
![Capture1](https://user-images.githubusercontent.com/93412486/156681040-2896984b-9d14-4a25-b775-5d23fb756d19.JPG)
![Capture2](https://user-images.githubusercontent.com/93412486/156681042-ef191c59-4b75-451e-8609-7df526068955.JPG)
## Video 
https://user-images.githubusercontent.com/93412486/156680806-3706e70f-54f3-43de-a162-cc10d46d5b5e.mov
## Contributed by
Aswathy
