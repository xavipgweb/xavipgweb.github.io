 
 var rnd = Math.floor((Math.random() * 3) + 1);
 
  function start(){
   var par_one = document.getElementById("paruno");
   var par_two = document.getElementById("partwo");
   var element = document.getElementById("text");
   
   if (rnd == 1){
   par_one.innerHTML = "Grab the axe";
   par_two.innerHTML = "Take a walk";
   element.innerHTML = "You are in a forest. There's an axe near you.";
   }
   if (rnd == 2){
   par_one.innerHTML = "Swim a bit";
   par_two.innerHTML = "Go away";
   element.innerHTML = "You are at the beach.";
   }
   if (rnd == 3){
   par_one.innerHTML = "Take a walk";
   par_two.innerHTML = "Wait a few minutes";
   element.innerHTML = "You are on the Moon. There is a rover.";
   }
  }
  
  function ok(){
   var par_one = document.getElementById("paruno");
   var par_two = document.getElementById("partwo");
   var element = document.getElementById("text");
   
   var rad_one = document.getElementById("rad1").checked;
   var rad_two = document.getElementById("rad2").checked;
    
   if ((rnd == 1)&&(rad_one)){
    par_one.innerHTML = "Cut a tree";
    par_two.innerHTML = "Take a walk";
    element.innerHTML = "You grabbed the axe.";
    }
  }
