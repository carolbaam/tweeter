document.getElementById("button").addEventListener("click", createCont);
document.getElementById("text").addEventListener("keyup", count);

function createCont (event){
 var newP = document.createElement("p");
 newP.setAttribute("id","show_twitt");
 //Guarda el valor que se ingresa a twittCont
 var twittContText = document.getElementsByName("text").value;
 /*newP.innerText = twittCont;*/
 document.getElementById("newtwitt").innerHTML=twittContText;
 //newP = document.createTextNode(twittContText);
 //newP.appendChild(twittContText);
 var newDiv= document.createElement("div");
 var contTwitt = document.createElement("section");
 newDiv.appendChild(newP);
 newDiv.classList.add("twitt");
 contTwitt.appendChild(newDiv);
 contTwitt.classList.add("block_seccion");
 contTwitt.setAttribute("id","show_twitt");
 var insert1 = document.getElementsByClassName("container");
 insert1[0].appendChild(contTwitt);
 document.body.appendChild(insert1[0]);
 //Borrar el contenido de la caja de text y el contador
 text.value="";
 counter.textContent=140;
};

function count (event){
  var maxLength=140;
  var totalLength=0;
  //textLength muestra el conteo de caracteres
  var textLength=document.getElementById("text").value.length;
  //totalLength muestra la resta de los caracteres insertados
  totalLength=maxLength-textLength;
  document.getElementById("counter").innerText=totalLength;
};

function clock(){
  var day = new Date();
  hour = day.getHours();
  minutes = day.getMinutes();
  var dateTime = "AM";
  //cambia a PM cuando han pasado 12 hrs
  if(hour > 12){
    dateTime = "PM";
    hour = hour-12;
  }
  if (hour < 10) {
      hour = '0' + hour;
  }
  if (minutes < 10) {
      minutes = '0' + minutes;
  }
  var clockSet = hour + ":" + minutes+ " " +dateTime;
  return clockSet;
};