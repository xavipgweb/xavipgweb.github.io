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
   paragraph1.textContent = "Swim";
  }
