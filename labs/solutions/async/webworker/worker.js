// your web worker goes here.

const API_URL = 'https://api.thecatapi.com/v1/images/search?format=src&mime_types=image/gif';

const fetchJSON = (url) => fetch(url, { mode: 'no-cors' }).then(res => res.blob());

const ready = (data) => {
    console.log(data);
    self.postMessage(data);
};

self.addEventListener('message', () => {
    fetchJSON(API_URL)
    .then(img => URL.createObjectURL(img))
    .then(ready);
});