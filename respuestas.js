 var element = document.getElementById("text");
 var element = document.getElementById("text");
  function ok(){
  var rnd = Math.floor((Math.random() * 3) + 1);
  if (rnd == 1){
  element.innerHTML = "1";
  }
  if (rnd == 2){
  element.innerHTML = "2";
  }
  if (rnd == 3){
  element.innerHTML = "3";
  }
}

  function start(){
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
