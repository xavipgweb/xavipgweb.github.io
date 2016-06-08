 var paragraph1 = document.getElementById("paruno");
 var paragraph2 = document.getElementById("pardos");
 var paragraph3 = document.getElementById("partres");
 var element = document.getElementById("text");
 
  function ok(){
   var rnd = Math.floor((Math.random() * 3) + 1);
   if (rnd == 1){
    paragraph1.innerHTML = "1";
   }
   if (rnd == 2){
    
   }
   if (rnd == 3){
    
   }
 }

  function start(){
   var rnd = Math.floor((Math.random() * 3) + 1);
   if (rnd == 1){
    element.innerHTML = "You are in a forest. There is an axe near you";
    paragraph1.textContent = "Take a walk";
    
   }
   if (rnd == 2){
    element.innerHTML = "You are at the beach. There is a hill";
    paragraph1.textContent = "Swim";
   
   }
   if (rnd == 3){
    element.innerHTML = "You are at the Moon. There is a rover";
    paragraph1.textContent = "Drive the rover";
    
   }
  }
