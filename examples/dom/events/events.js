
function init() {

   const out = document.getElementById('output')
   window.addEventListener('click', clicker)

   function clicker(event) {
      out.innerText =
         `Element Clicked: ${event.target.tagName}\n\
          Text Content: ${event.target.innerText}`
   }

   document.removeEventListener('DOMContentLoaded', init)
}

// here's a differnet way to exec js scripts
document.addEventListener('DOMContentLoaded', init)
