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

/* classic type of async example is setTimeout */


// Q: what will main print?
// Remember that once a event is on the event queue it isn't run
// untill the current block of code that's being run is finished
function main() {

   print("Hello")
   setTimeout(() => {
      print("World")
   }, 0)
   print("End")

}
