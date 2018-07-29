(function() {
   'use strict';
   // write your js here.
   const d = document
   const output = d.getElementById('output')

   const interval = setInterval(() => {
      output.classList.toggle('hide')
   }, 2000)
}());
