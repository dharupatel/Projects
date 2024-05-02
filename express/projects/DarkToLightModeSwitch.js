// let slides = document.getElementById("slide");
// let switchonoff = document.getElementById("switch");
let off = document.getElementById(".inner-swicth");
let on = document.getElementById(".inner-swicth");

off.onclick = function(){
  off.style.backgroundColor = "black";
  off.style.color = "white";
}

on.onclick = function(){
  on.style.backgroundColor = "white";
  on.style.color = "black";
}
