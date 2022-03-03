// hold all inputs from confirms in seperate variables
// create empty array that holds all the true confirmed options in it.
// push all character that user wants into this array. This creates the pool of characters to select from
// once the pool is complete, then randomly select characters based on the number of characters the user selcted in the beggining.

// Assigned Variables
var userinput = [ ];
var selctedChar = [ ];
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var numeric = "0123456789".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var specialChar = "!@#$%^&*()".split("");
var passwordLength = "8-128";

//------Start of Function------

function generatePassword(){

  var password = "";
  passwordLength = prompt("How many characters would you like?");

  if(+passwordLength < 8 || +passwordLength > 128) { 
    alert ("Please select from 8 to 128 characters...");
  }
if (confirm("Do you want uppercase in your password?")){
  selctedChar=selctedChar.concat(uppercase);
}
if (confirm("Do you want lowercase letters?")){
  selctedChar=selctedChar.concat(lowercase);
}
if (confirm("Do you want numbers?")){
  selctedChar=selctedChar.concat(numeric);
}
if (confirm("How about any special characters?")){
  selctedChar=selctedChar.concat(specialChar);
  }

  //Math.Random Generator 'for' all characters
  for (var i = 0; i < parseInt(passwordLength); i++) {
    var randomIndex = Math.floor(Math.random()*selctedChar.length);
    password+=selctedChar[randomIndex];
}

document.getElementById("password").value = password;
 //alert(password);

}

// Event listener to connect the button
generateBtn.addEventListener("click", generatePassword);