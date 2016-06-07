 var element = document.getElementById("text");
  function myFunction(){
  var rnd = Math.floor((Math.random() * 3) + 1);
  if (rnd == 1){
  element.innerHTML = "4";
  }
  if (rnd == 2){
  element.innerHTML = "5";
  }
  if (rnd == 3){
  element.innerHTML = "6";
  }
}

  function start(){
   
   var x = document.createElement("INPUT");
   x.setAttribute("type", "text");
   
   var rnd = Math.floor((Math.random() * 3) + 1);
   if (rnd == 1){
   element.innerHTML = "You are in a forest";
   }
   if (rnd == 2){
   element.innerHTML = "You are at the beach";
   }
   if (rnd == 3){
   element.innerHTML = "You are at the Moon";
   }
  }
