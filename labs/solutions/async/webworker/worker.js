// your web worker goes here.

const API_URL = 'https://thecatapi.com/api/images/get';

const fetchJSON = (url) => fetch(url).then(res => res.blob());

const ready = (data) => {
    console.log(data);
    self.postMessage(data);
};

self.addEventListener('message', () => {
    fetchJSON(API_URL)
    .then(img => URL.createObjectURL(img))
    .then(ready);
});