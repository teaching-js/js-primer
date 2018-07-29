(function() {
   'use strict';
   const d = document
   const output = d.getElementById('output')

   const interval = setInterval(() => {
      const d = new Date()
      output.innerText = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

   }, 1000)

}());
