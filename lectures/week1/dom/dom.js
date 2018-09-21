/* Super basic */

// selecting an element
const output = document.getElementById('output');

// creating an element
const p = document.createElement('p');

// adding it to the dom tree
// need to think about how to add it, ie what parent it needs.
output.appendChild(p);

// manipulating an element
p.innerText = 'Hello Andrew!';