 var paragraph1 = document.getElementById("number1");
 var paragraph2 = document.getElementById("number2");
 var paragraph3 = document.getElementById("number3");
 
  function ok(){
  var rnd = Math.floor((Math.random() * 3) + 1);
  if (rnd == 1){
  number1.innerHTML = "1";
  }
  if (rnd == 2){
  number2.innerHTML = "2";
  }
  if (rnd == 3){
  number3.innerHTML = "3";
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
