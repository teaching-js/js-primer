function print(msg){
  let text = document.createElement("h5")
  text.appendChild(document.createTextNode(msg))
  output.appendChild(text)
}
function printLight(msg,top){
  let text = document.createElement("p")
  text.className = "lead"
  text.appendChild(document.createTextNode(msg))
  if (top) {
    output.prepend(text)
  } else {
    output.appendChild(text)
  }

}

function clearOutput(){
  document.getElementById("output").innerHTML = ""
}

function get(){
  // let the user know we are loading
  print("loading...")

  /* AJAX example */
  const API_URL = "https://jsonplaceholder.typicode.com/"

  /* Assuming a browser context */
  fetch(API_URL + 'users')
     // chain the promise and translate the response
     // object in json to a js object
     .then(response => response.json())
     .then(data => {
        // remove loading message
        clearOutput()
        // display out Data
        for (let user of data) {
          print(user.name)
        }
     })
}
