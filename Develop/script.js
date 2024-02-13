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

const button = document.querySelector('button');


button.addEventListener('click', function() {

  const userInput = prompt("How many characters?")  
  
  console.log(userInput);
  if (userInput === ""){
    return;
  }
  else if (parseInt(userInput, 10) < 8) {
    alert("Number is too low")
    return;
  }
  else if (parseInt(userInput, 10) > 128) {
    alert("Number is too high")
    return;
  }
  const userChoice1 = confirm("Do you want Uppercase Characters")
  if (userChoice1 == true) {
    
  }
});