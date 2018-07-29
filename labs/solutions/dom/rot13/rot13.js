(function() {
   'use strict';
   function rot13(x) {
     x = x.charCodeAt(0)
     if (x >= 65 && x <= 90) {
       x = ((x-65) + 13) % 26
       x = 65 + x
     }
     if (x >= 97 && x <= 122) {
       x = ((x-97) + 13) % 26
       x = 97 + x
     }
     return String.fromCharCode(x)
   }
   function encrypt() {
      let input = document.getElementById("input")
      let output = document.getElementById("output")
      let text = input.value
      output.innerText = text.split("").map(rot13).join("")
   }

   document.getElementById("encrypt-button").addEventListener("click",encrypt)
}());
