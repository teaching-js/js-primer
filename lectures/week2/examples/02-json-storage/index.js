(function() {
  const kittenName = document.getElementsByClassName('kitten')[0];
  const setButton = document.getElementById('setButton');
  const kittenInput = document.getElementById('kittenName');

  // query localStorage
  if (window.localStorage) {
    kittenName.innerText = setFavouriteKittenText(
      getStorage() || { name: 'not set', time: "''"}
    );
  }

  function safeSetStorage (kittenObject) {
    if (window.localStorage) {
        localStorage.setItem('kitten', JSON.stringify(kittenObject));
    }
  }

  function getStorage () {
    if (window.localStorage) {
      return JSON.parse(localStorage.getItem('kitten')) || { name: "", time: "not set"}
    }
  }

  function setFavouriteKittenText({ name, time }) {
    return `Your favourite kitten is: ${name} (${time})`;
  }

  setButton.addEventListener('click', () => {
      const newKitten = kittenInput.value;
      const kittenObject = {
        name: newKitten,
        time: new Date().toLocaleTimeString()
      };
      kittenName.innerText = setFavouriteKittenText(kittenObject);
      safeSetStorage(kittenObject);
  });
})();