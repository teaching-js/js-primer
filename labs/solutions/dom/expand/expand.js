(function() {
  let main = document.getElementById("main");
  main.addEventListener("click",(e)=>{
    if (e.target.tagName == "I") {
      let state = null;
      if(e.target.innerHTML == "expand_more"){
        e.target.innerHTML = "expand_less";
        state = "block";
      } else {
        e.target.innerHTML = "expand_more";
        state = "none";
      }
      e.target.parentNode.parentNode.parentNode.children[1].children[2].style.display = state;
    }
  })

}());
