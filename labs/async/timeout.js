
/* classic type of async example is setTimeout */

function main() {

   console.log("Hello")
   setTimeout(() => {
      console.log("World")
   }, 0)
   console.log('End')

}

// what will main print?
// Answer: Because setTimeout is asynchronous,
// even with a setTimeout(0), execution will be
// "Hello", "End", "World"
main()
