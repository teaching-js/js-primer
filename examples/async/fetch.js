
/* AJAX example */
const API_URL = "https://jsonplaceholder.typicode.com/"

/* Assuming a browser context */
fetch(API_URL + 'users')
   // chain the promise and translate the response
   // object in json to a js object
   .then(response => response.json())
   .then(data => {
      const name = data.find(item => item == "Jeff")
      // do something with the data
   })
