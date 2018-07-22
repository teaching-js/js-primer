// One of the nice side effects of Objects using string keys
// is that we can very simply use them as dicts.
// In fact until recently the concept of a map in JS
// didn't exist -- it was just an object.

const cart = ["Apple", "Orange", "Apple", "Strawberry", "Orange"]
// let's translate our cart into a key-value pair object
// which holds the count of each object.

const count = {}

for (const item of cart) {
   // check if the key exists, if it doesn't
   // it's undefined.
   count[item] = count[item] ? count[item] + 1 : 1
}

console.log(count)
// { Apple: 2, Orange: 2, Strawberry: 1 }
