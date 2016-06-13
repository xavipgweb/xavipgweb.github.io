 

 var rnd = Math.floor((Math.random() * 2) + 1);

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
  }

  function ok(){
   var par_one = document.getElementById("paruno");
   var par_two = document.getElementById("partwo");
   var element = document.getElementById("text");

   var selection1;
   var selection2;

   var rad_one = document.getElementById("rad1").checked;
   var rad_two = document.getElementById("rad2").checked;

   if ((rnd == 1)&&(rad_one)){
    par_one.innerHTML = "Cut a tree";
    par_two.innerHTML = "Take a walk";
    element.innerHTML = "You grabbed the axe.";
    selection1 = 1;
  }
  if ((rnd == 1)&&(rad_two)){
     par_one.innerHTML = "Continue walking";
     par_two.innerHTML = "Run after it";
     element.innerHTML = "You see a rabbit.";
     selection1 = 2;
  }

  if ((rnd == 2)&&(rad_one)){
      par_one.innerHTML = "Swim to it";
      par_two.innerHTML = "Continue swimming";
      element.innerHTML = "You see an island.";
      selection2 = 1;
  }
  if ((rnd == 2)&&(rad_two)){
      par_one.innerHTML = "Go inside the forest";
      par_two.innerHTML = "Return to the beach";
      element.innerHTML = "You see a forest.";
      selection2 = 2;
  }
}
