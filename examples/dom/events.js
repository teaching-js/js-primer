

function init() {

   const header = document.createElement('h1')
   const parent = document.getElementById('main')

   parent.appendChild(header)
   parent.addEventListener('click', clicker)

   function clicker(event) {
      header.innerText = "Clicked " + event.target.innerText
   }

   document.removeEventListener('DOMContentLoaded', init)
}

// here's a differnet way to exec js scripts
document.addEventListener('DOMContentLoaded', init)
