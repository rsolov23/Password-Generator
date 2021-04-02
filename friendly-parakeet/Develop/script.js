// Assignment code here
// var characterAmountRange = document.getElementById("characterAmountRange");
// var characterAmountNumber = document.getElementById("characterAmountNumber");
// var includeNumbers = document.getElementById("includeNumbers");
// var includeUppercase = document.getElementById("includeUppercase");
// var includeLowercase = document.getElementById("includeLowercase");
// var includeSymbols = document.getElementById("includeSymbols");

var lowerCase = ["a", "b", "c", "d"];
var upperCase = ["A", "B", "C", "D"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "~"];
var numbers = ["1", "2", "3", "4"];

function generatePassword() {
  // console.log(characterAmountRange.value);
  // console.log(characterAmountNumber.value);

  // console.log(includeNumbers.checked);
  var charactersToUse = [];
  var passwordSize = prompt("pick between 8-128");
  var password = "";

  while (passwordSize < 8 || passwordSize > 128) {
    alert("yo that's not the right number");
    passwordSize = prompt("I said 8 to 128!");
  }

  var addLower = confirm("do you need lower case characters?");
  var addUpper = confirm("do you need upper case characters?");
  var addNumeric = confirm("do you need numeric characters?");
  var addSpecial = confirm("do you need special characters?");

  while (
    addLower == false &&
    addUpper == false &&
    addNumeric == false &&
    addSpecial == false
  ) {
    alert("You need to at least pick one condition");
    addLower = confirm("do you need lower case characters?");
    addUpper = confirm("do you need upper case characters?");
    addNumeric = confirm("do you need numeric characters?");
    addSpecial = confirm("do you need special characters?");
  }

  if (addLower) {
    charactersToUse = charactersToUse.concat(lowerCase);
  }
  if (addUpper) {
    charactersToUse = [...charactersToUse, ...upperCase];
  }
  if (addNumeric) {
    charactersToUse = [...charactersToUse, ...numbers];
  }
  if (addSpecial) {
    charactersToUse = [...charactersToUse, ...symbols];
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
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
