/*

Promises are one way to deal with async JavaScript

Essentially, a promise will wait until an async operation
resolves (or is rejected), before continuing.

This is closer to the way a procedural program runs,
but is not the way js would run without promises.

*/

let time = {}

function fastGet(){
  let output = document.getElementById("output")
  output.innerHTML = "loading..."
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
          output.innerHTML += "<h5>"+user.name+"</h5>"
        })
      }
      time.end = Date.now()
      let delta = time.end - time.start
      output.innerHTML += "<p class='lead'> took " + delta + " ms</p>"
    })
}

function slowGet(){
  let output = document.getElementById("output")
  output.innerHTML = "loading..."
  time.start = Date.now()

  fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response)=>response.json())
  .then((user)=>output.innerHTML = "<h5>"+user.name+"</h5>")
  .then(()=>{
    fetch("https://jsonplaceholder.typicode.com/users/2")
    .then((response)=>response.json())
    .then((user)=>output.innerHTML += "<h5>"+user.name+"</h5>")
    .then(()=>{
      fetch("https://jsonplaceholder.typicode.com/users/3")
      .then((response)=>response.json())
      .then((user)=>{
        output.innerHTML += "<h5>"+user.name+"</h5>"
        time.end = Date.now()
        let delta = time.end - time.start
        output.innerHTML = "<p class='lead'> took " + delta + " ms</p>" + output.innerHTML
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
  // wait 1 second then say i love you
  delay(1000).then(()=>alert("i love you"))
}
