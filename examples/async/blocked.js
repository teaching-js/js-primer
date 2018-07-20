// register a event handler
// to print the key pressed whenever
// a key is pressed
// **** WARNING this might cause ur browser to have a lil panic ****
document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  // if f is pressed, go into a infinite loop
  if(keyName == 'f'){
    while(true){
      // do nothing
    }
  }
  console.log('key pressed!: ' + keyName)
})


// notice how it works fine till you
// press f and go into a infinite Loop
// and now you can't get any output
