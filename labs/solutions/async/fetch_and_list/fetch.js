(function() {
   'use strict';

   const output = document.getElementById('output');

   function createUserDiv(user) {

      const div = document.createElement('div');
      div.className = 'user';
      const h2 = document.createElement('h2');
      h2.innerText = user.name;
      const p = document.createElement('p');
      p.innerText = user.company.catchPhrase;
      div.appendChild(h2);
      div.appendChild(p);

      return div;
   }

   function append(element) {
      output.appendChild(element);
   }

   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => data.map(createUserDiv))
      .then(elements => elements.map(append));
}());
