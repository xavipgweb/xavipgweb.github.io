var days = 281;

function count(){
  while(1>0){
    sleep(86400000);
    days--;
    document.getElementById("text").innerHTML(days.toString);
  }
}


