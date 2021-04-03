// Assignment code here
var lowerCase = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var upperCase = ["A", "B", "C", "D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "~","(",")","-","_","=","+","{","}","[","]","<","|",">","?"];
var numbers = ["1", "2", "3", "4","5","6","7","8","9","0"];
// function to generate password
function generatePassword() {

  var charactersToUse = [];
  var passwordSize = prompt("Pick a number between 8-128");
  var password = "";
// while condition to keep unwanted input
  while (passwordSize < 8 || passwordSize > 128 || passwordSize > isNaN ) {
    alert("Please enter a number between 8 and 128.");
    passwordSize = prompt("Please enter a number between 8 and 128!");
  }
// variables for confirmation input
  var addLower = confirm("Do you need lower case characters?");
  var addUpper = confirm("Do you need upper case characters?");
  var addNumeric = confirm("Do you need numeric characters?");
  var addSpecial = confirm("Do you need special characters?");
// while condition
  while (
    addLower == false &&
    addUpper == false &&
    addNumeric == false &&
    addSpecial == false 
  ) {
    alert("Please pick at least one more condition");
    addLower = confirm("Do you need lower case characters?");
    addUpper = confirm("Do you need upper case characters?");
    addNumeric = confirm("Do you need numeric characters?");
    addSpecial = confirm("Do you need special characters?");
  }
// if statement
  if (addLower) {
    charactersToUse = charactersToUse.concat(lowerCase);
  }
  if (addUpper) {
    charactersToUse = charactersToUse.concat(upperCase);
  }
  if (addNumeric) {
    charactersToUse = charactersToUse.concat(numbers);
  }
  if (addSpecial) {
    charactersToUse = charactersToUse.concat(specialCharacters);
  }
  // console.log(charactersToUse);
  for (var x = 0; x < passwordSize; x++) {
    var randomNum = Math.floor(Math.random() * charactersToUse.length);
    var randomChar = charactersToUse[randomNum];
    // password = password + randomChar;
    password += randomChar;
  }

  return password;
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
