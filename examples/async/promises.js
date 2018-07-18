/*

Promises are one way to deal with async JavaScript

Essentially, a promise will wait until an async operation
resolves (or is rejected), before continuing.

This is closer to the way a procedural program runs,
but is not the way js would run without promises.

*/

// static method that allows the data to be
// wrapped by a promise
Promise.resolve(data)

Promise.all(listOfPromises)

// or Promise constructor
const delay = (ms) => new Promise((resolve, reject) => {

   // this will simply delay execution for ms milliseconds
   // in a controlled way
   try {
      setTimeout(resolve, ms)
   } catch (e) {
      reject(e)
   }

})
