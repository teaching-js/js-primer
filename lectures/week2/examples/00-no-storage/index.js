(function() {
    const kittenName = document.getElementsByClassName('kitten')[0];
    const setButton = document.getElementById('setButton');
    const kittenInput = document.getElementById('kittenName');

    setButton.addEventListener('click', () => {
        kittenName.innerText = `Your favourite kitten is: ${kittenInput.value}`;
    });
})();