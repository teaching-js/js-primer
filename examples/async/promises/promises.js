/*

Promises are one way to deal with async JavaScript

Essentially, a promise will wait until an async operation
resolves (or is rejected), before continuing.

This is closer to the way a procedural program runs,
but is not the way js would run without promises.

*/

let time = {}

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


function fastGet(){
  print("loading...")
  time.start = Date.now()
  // form a list of Promises
  // where we are getting serveral users
  let listOfPromises = []
  listOfPromises.push(fetch("https://jsonplaceholder.typicode.com/users/1"))
  listOfPromises.push(fetch("https://jsonplaceholder.typicode.com/users/2"))
  listOfPromises.push(fetch("https://jsonplaceholder.typicode.com/users/3"))

  // run them all at the same time
  // and once all are done, display them
  Promise.all(listOfPromises)
    .then((response)=>{
      output.innerHTML = ""
      for (let u of response) {
        u = u.json()
        u.then((user)=>{
          print(user.name)
        })
      }
      time.end = Date.now()
      let delta = time.end - time.start
      printLight(delta+" ms")
    })
}

function slowGet(){
  print("loading...")
  time.start = Date.now()

  fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response)=>response.json())
  .then((user)=>{clearOutput();print(user.name)})
  .then(()=>{
    fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((response)=>response.json())
    .then((user)=>print(user.name))
    .then(()=>{
      fetch("https://jsonplaceholder.typicode.com/users/3")
      .then((response)=>response.json())
      .then((user)=>{
        print(user.name)
        time.end = Date.now()
        let delta = time.end - time.start
        printLight(delta+" ms",true)
      })
    })
  })
}

// Promise constructor
const delay = (ms) => new Promise((resolve, reject) => {

   // this will simply delay execution for ms milliseconds
   // in a controlled way
   try {
      setTimeout(resolve, ms)
   } catch (e) {
      reject(e)
   }

})

function waitAndLove(){
  // wait 1 second (so you don't seem desperate)
  // then say i love you

  delay(1000).then(()=>alert("i love you"))
}
