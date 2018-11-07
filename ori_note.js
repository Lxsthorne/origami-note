//ROT-13 Cipher Script
function getStr() {var str = document.getElementById('message').value; rot13(str);}


function rot13(str) {
var alpha = ['A', 'N', 'B', 'O', 'C', 'P', 'D', 'Q', 'E', 'R', 'F', 'S', 'G', 'T', 'H', 'U', 'I', 'V', 'J', 'W', 'K', 'X', 'L', 'Y', 'M', 'Z', '1', '6', '2', '7', '3', '8', '4', '9', '5', '0'];

str = str.toUpperCase().split('');

  for(let letter in str){
      if (alpha.indexOf(str[letter])%2===0) {
        str.splice(letter, 1, alpha[alpha.indexOf(str[letter])+1]);
      } else if (alpha.indexOf(str[letter])%2===1){
        str.splice(letter, 1, alpha[alpha.indexOf(str[letter])-1]);
      }
  }
  document.getElementById("output").innerHTML = str.join('');
}
