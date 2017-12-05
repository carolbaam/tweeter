document.getElementById("button").addEventListener("click", createCont);
document.getElementById("text").addEventListener("keyup", count);
document.getElementById("text").addEventListener('keyup', autosize);

//funciones para botón
function disableBtn() {
    document.getElementById("button").disabled = true;
  }

function undisableBtn() {
    document.getElementById("button").disabled = false;
  }

function createCont (event){
   var twittContText = document.getElementById("text").value;
    if (twittContText == ""){
        return disableBtn;
    } else {
        var newP = document.createElement("p");
        newP.setAttribute("id","show_twitt");
        //Guarda el valor que se ingresa a twittCont
        var twittContText = document.getElementsByName("text").value;
        newP.innerText=twittContText;
        var newP1 = document.createElement("p");
        newP1.innerText = clock();
        newP1.setAttribute("id","time");

        var newDiv= document.createElement("div");
        var contTwitt = document.createElement("section");
        newDiv.appendChild(newP);
        newDiv.appendChild(newP1);
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
    }
};
// Función que realiza el conteo de caracteres
function count (event){
  var maxLength=140;
  var totalLength=0;
  //textLength muestra el conteo de caracteres
  var textLength=document.getElementById("text").value.length;
  //totalLength muestra la resta de los caracteres insertados
  totalLength=maxLength-textLength;
  document.getElementById("counter").innerText=totalLength;
  totalLength.style.color=#83ADC5;
  if(totalLength<=0){
    return disableBtn();
   }
  else if(totalLength<=20 && totalLength>10){
    document.getElementById("counter").style.color="blue";
    return undisableBtn();
  }
  else if(totalLength<=10 && totalLength>=1 ){
    document.getElementById("counter").style.color="red";
    return undisableBtn();
  }
  else {
    document.getElementById("counter").style.color="black";
  }
};

//función para agrandar caja con texto
function autosize(){
    var el = this;
    setTimeout(function(){
      el.style.cssText = 'height:auto; padding:0';
      // for box-sizing other than "content-box" use:
      // el.style.cssText = '-moz-box-sizing:content-box';
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    },0);
  };

  //función reloj

function clock(){
  var day = new Date();
  hour = day.getHours();
  minutes = day.getMinutes();
  var dateTime = "AM";
  //cambia a PM cuando han pasado 12 hrs
  if(hour === 12){
      dateTime = "PM";
  } else if(hour > 12){
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
