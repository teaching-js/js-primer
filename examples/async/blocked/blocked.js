// register a event handler
// to print the key pressed whenever
// a key is pressed
// **** WARNING this might cause ur browser to have a lil panic ****

document.addEventListener('keypress', (event) => {
  const keyName = event.key
  let output = document.getElementById("output")
  output.innerHTML += keyName
});

//super slow function
function slow(){
  let i = 0
  while(i < 2000000000) i++
  alert("done doing slow stuff!")
}
