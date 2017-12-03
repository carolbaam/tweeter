document.getElementById("button").addEventListener("click", createCont);

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
 document.body.appendChild(contTwitt);
}
