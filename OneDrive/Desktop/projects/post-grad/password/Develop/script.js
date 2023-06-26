// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var length = Number(prompt("How many characters, will your password have 8-126")),
 charType = prompt("Enter a character type: special, numeric, uppercase lowercase"),
 password = generatePassword();

 document.getElementById("display").value=password;
 document.getElementById(copy-btn).addEventListener("click, copyPassword");


function generatePassword () {
   
  // 2. validate the input
  // 3. generate password
  // 4. display password on the page

  return "Generated password"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
