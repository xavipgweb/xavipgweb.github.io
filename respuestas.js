 var paragraph1 = document.getElementById("number1");
 var paragraph2 = document.getElementById("number2");
 var paragraph3 = document.getElementById("number3");
 var element = document.getElementById("text");
 
  function ok(){
   var rnd = Math.floor((Math.random() * 3) + 1);
   if (rnd == 1){
    paragraph1.innerHTML = "1";
   }
   if (rnd == 2){
    paragraph2.innerHTML = "2";
   }
   if (rnd == 3){
    paragraph3.innerHTML = "3";
   }
 }

  function start(){
   var rnd = Math.floor((Math.random() * 3) + 1);
   if (rnd == 1){
    element.innerHTML = "Youu are in a forest. There is an axe near you";
    number1.innerHTML = "Take a walk";
    paragraph2.innerHTML = "Wait a few minutes";
    paragraph3.innerHTML = "Grab the axe";
   }
   if (rnd == 2){
    element.innerHTML = "Youu are at the beach. There is a hill";
    number1.innerHTML = "Swim";
    paragraph2.innerHTML = "Run to the hill";
    paragraph3.innerHTML = "Wait a few minutes";
   }
   if (rnd == 3){
    element.innerHTML = "Youu are at the Moon. There is a rover";
    nnumber1.innerHTML = "Drive the rover";
    paragraph2.innerHTML = "Try to communicate";
    paragraph3.innerHTML = "Take a walk";
   }
  }
