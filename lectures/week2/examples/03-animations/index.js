(function() {

    const [ page1, page2 ] = document.getElementsByClassName('full-page')
    
    window.addEventListener('keydown', () => {
        page1.classList.toggle('active')
        page2.classList.toggle('active')
    });
})();