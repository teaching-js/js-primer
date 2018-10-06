(function() {
    const kittenName = document.getElementsByClassName('kitten')[0];
    const setButton = document.getElementById('setButton');
    const kittenInput = document.getElementById('kittenName');

    // query sessionStorage
    if (window.localStorage) {
        kittenName.innerText = setFavouriteKittenText(
            sessionStorage.getItem('kitten') || 'not set'
        );
    }
    function safeSetStorage (kitten) {
        if (window.sessionStorage) {
            sessionStorage.setItem('kitten', kitten);
        }
    }

    function setFavouriteKittenText(kitten) {
        return `Your favourite kitten is: ${kitten}`;
    }

    setButton.addEventListener('click', () => {
        const newKitten = kittenInput.value;
        kittenName.innerText = setFavouriteKittenText(kittenInput.value);
        safeSetStorage(newKitten);
    });
})();