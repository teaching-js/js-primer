
(function() {
    const body = document.body;
    for (let i = 0; i < 3; i++ ) {
        let script = document.createElement('script');
        script.setAttribute('src', 'heavy.js')
        body.appendChild(script);
    }
})();
