
function get(){
  // let the user know we are loading
  document.getElementById("output").innerHTML = "loading..."

  /* AJAX example */
  const API_URL = "https://jsonplaceholder.typicode.com/"

  /* Assuming a browser context */
  fetch(API_URL + 'users')
     // chain the promise and translate the response
     // object in json to a js object
     .then(response => response.json())
     .then(data => {
        // remove loading message
        let output = document.getElementById("output")
        output.innerHTML = ""
        // display out Data
        for (let user of data) {
          output.innerHTML += "<h5>"+user.name+"</h5>"
        }
     })
}
