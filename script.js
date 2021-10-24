var generateBtn = document.querySelector("#create");

function writePassword() {
  var password = newPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var specialchar = ['!','@','#','$','%','^','&','*','_','-','?','(',')','+','.','/',':',';','<','>','=','[',']','^','~'];

function newPassword() {
  var np = [];
  var length = window.prompt('Length of password: ');

  while (length < 8, length > 128, !Number.isInteger(Number(length))) {
    length = prompt("Password must be at least 8 integers. Please try again: ");
  };

  var special = window.confirm('Include special characters? ');
  var lower = window.confirm('Include lowercase letters? ');
  var upper = window.confirm('Include uppercase letters? ');
  var nums = window.confirm('Include numbers? ');

  if (special) {
    np = np.concat(specialchar);
  };
  if (lower) {
    np = np.concat(lowercase);
  };
  if (upper) {
    np = np.concat(uppercase);
  };
  if (nums) {
    np = np.concat(numbers);
  };
  
  if (np.length == 0) {
    window.alert('Password requires characters....');
    return 'Nothing selected. Please try again';
  } else {
    var result = '';
    for ( var i = 0; i < length; i++ ) {
      result = result + np[Math.floor(Math.random() * np.length)];
    }
    return result;
  };
};