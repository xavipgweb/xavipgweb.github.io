 var element = document.getElementById("text");
  function myFunction(){
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
