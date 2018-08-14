(function() {
    'use strict';

    const worker = new Worker('worker.js');
    const image = document.getElementById('cat');

    function getImage() {
        worker.postMessage('getImg');
    }

    function postImage({ data }) {
        image.src = data ;
    }

    worker.addEventListener('message', postImage);

    setInterval(getImage, 10000);

 }());
 