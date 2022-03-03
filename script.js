// user clicks button then prompt pops up asking for number of characters

// hold all inputs from confirms in seperate variables

// Do i need to hold any information?
// create array with special characters-------DONE
// create array with numeric,-------DONE
// create array lowercase-----------DONE
// create array upper case----------DONE

// create empty array that holds all the true confirmed options in it.
// push all character that user wants into this array. This creates the pool of characters to select from
// once the pool is complete, then randomly select characters based on the number of characters the user selcted in the beggining.

// generate password function
// var numberOfChar = validatecharLength(prompts for number of characters) 
// var isSpecialCharaters = confirm pops up asking if they would like specialial characters
// var isCapitol = confirm for capital, 
// var isLowercase = lowercase confirm, 
// var isNumeric = numeric characters confirm

// validate number of chars is between 8 and 128
// validator function send it users input


// Assignment Codes
var userinput = [];
var selctedChar = [];
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var numeric = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()".split("");
var passwordLength = "8-128";

function generatePassword(){

  var password = "";
  passwordLength = prompt ("How many characters would you like?");
  if(+passwordLength < 8 || +passwordLength > 128) { alert ("Please select from 8 to 128 characters...");

  return generatePassword;
}

var upchar = confirm("Do you want uppercase in your password?");
if (upchar){
  selctedChar=selctedChar.concat(uppercase)
  console.log(upchar)
}
var lowchar = confirm("Do you want lowercase letters?");
if (lowchar){
  selctedChar=selctedChar.concat(lowercase)
  console.log(lowchar)
}
var numberchar = confirm("Do you want numbers?");
if (numberchar){
  selctedChar=selctedChar.concat(numeric)
  console.log(numberchar)
}

var anyspecial = confirm("How about any special characters?");
if (anyspecial){
  selctedChar=selctedChar.concat(specialChar)
 console.log(anyspecial)
}


//random generator
console.log(passwordLength)
for (var i = 0; i < parseInt(passwordLength); i ++) {
  var randomIndex = Math.floor(Math.random()*selctedChar.length);
  password+=selctedChar[randomIndex]
}
return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);