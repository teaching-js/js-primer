(function() {
  let main = document.getElementById("main");
  main.addEventListener("click",(e)=>{
    if (e.target.tagName == "I")
      e.target.parentNode.parentNode.parentNode.children[1].children[2].style.display = "none"
  })

}());
