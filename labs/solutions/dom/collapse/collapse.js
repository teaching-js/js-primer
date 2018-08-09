// Challange Solution
//     This is pretty unmaintable code, if we were to add anything
//     to the info cards the code would break but
//     this is one of the cases where you can leverage
//     event bubbling to utilise Js and avoid HTML id tags
//     Take with a grain of salt though
(function() {
  'use strict';
  const main = document.getElementById('main');
  main.addEventListener('click', e => {
    if (e.target.tagName == 'I')
      e.target.parentNode.parentNode.parentNode.children[1].children[2].style.display = 'none';
  });
}());

// This is a standard Solution - relies on editing html
//    Note this code doesn't run, the function is just delcared
//    The code above is a Immediately Invoked Function Expression
//    Which declares a function and then runs it immediately
//    To run it remove the brackets and function invoke from above and
//    shift it down here
function standard() { /* eslint-disable-line no-unused-vars */
  'use strict';
  const NUM_CARDS = 2;
  const cards = Array(NUM_CARDS).fill(0).map((_,i) =>`item-${i+1}`);
  cards.map(card =>
    document.getElementById(card).addEventListener('click', toggle)
  );

  function toggle(e) {
    const content = document.getElementById(`${e.target.id}-content`);
    content.style.display = 'none';
  }
}
