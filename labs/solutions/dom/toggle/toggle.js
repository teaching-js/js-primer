(function() {
   'use strict';
   // write your js here.
   const d = document;
   const output = d.getElementById('output');

   setInterval(() => {
      output.classList.toggle('hide');
   }, 2000);
}());
