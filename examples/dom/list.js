"use strict";

// this is one way to avoid populating the global scope
// and immediately run a script.
(function() {
   const names = ["Jeff", "Sally", "Jessica", "Selina", "Bobby"]
   const parent = document.getElementById('main')

   const list = document.createElement('ul')

   let innerHTML = ""
   for (const name of names) {
      innerHTML += `<li>${name}</li>`
   }

   list.innerHTML = innerHTML

   parent.appendChild(list)
})()
