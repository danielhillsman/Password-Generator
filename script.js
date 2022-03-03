// Assigned Variables\\
var selctedChar = [ ];
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
var numeric = "0123456789".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var specialChar = "!@#$%^&*()".split("");
var passwordLength = "8-128";

//------Start of Function------\\
function generatePassword(){
//----Asking user how many characters they would like from 8 to 128----\\
  var password = "";
  passwordLength = prompt("How many characters would you like?");

  if(+passwordLength < 8 || + passwordLength > 128) { 
    alert ("Please select from 8 to 128 characters...");
    return generatePassword
  }
//----Using concat method to collect the data the user chooses into "selctedChar"----\\
//---ps. I know I misspelled selected LOL---\\

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
  //---Math.Random Generator using a 'for' loop for all characters---\\
  for (var i = 0; i < parseInt(passwordLength); i++) {
    var randomIndex = Math.floor(Math.random()*selctedChar.length);
    password+=selctedChar[randomIndex];
}
document.getElementById("password").value = password;
//----End of Function "generatePassword"----\\
}
//--Event listener to connect the button--\\
generateBtn.addEventListener("click", generatePassword);