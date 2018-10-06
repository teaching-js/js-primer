(function() {

    const [ page1 ] = document.getElementsByClassName('full-page')
    
    window.addEventListener('keydown', () => {
        page1.classList.toggle('clear')
    });
})();