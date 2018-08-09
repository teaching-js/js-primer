// Standard Solution
//    this relies on adding id's into the html

function standard() { /* eslint-disable-line */
  'use strict';
  const NUM_CARDS = 2;
  const cards = Array(NUM_CARDS).fill(0).map((x,i)=>`item-${i+1}`);

  cards.map((x)=>document.getElementById(x).addEventListener('click',toggle));
  
  function toggle(e) {
    const content = document.getElementById(`${e.target.id}-content`);
    content.style.display = (content.style.display == 'none') ? 'block' : 'none';
    e.target.innerHTML = (e.target.innerHTML == 'expand_more') ? 'expand_less' : 'expand_more';
  }
}

// Challenge Solution
//     Again , take with a grain of salt though
function challenge() { /* eslint-disable-line */
  'use strict';
  const main = document.getElementById('main');
  main.addEventListener('click',(e)=>{
    // see if the event originated from the button
    if (e.target.tagName == 'I') {
      let state = null;
      if(e.target.innerHTML == 'expand_more'){
        e.target.innerHTML = 'expand_less';
        state = 'block';
      } else {
        e.target.innerHTML = 'expand_more';
        state = 'none';
      }
      // traverse the dom tree to find the content section and toggle it's display
      e.target.parentNode.parentNode.parentNode.children[1].children[2].style.display = state;
    }
  });
}

// Since we didn't wrap these functions and execute them immedietly i.e
//        (function(){console.log('hello workd')})();
// we need to ask the browser to run one of them once the page is loaded.
// the bottom acheives the same effect as window.addEventListener('load', standard)

document.addEventListener('DOMContentLoaded', challenge);
// swap 'standard' to 'challange' above to run the challange Solution
