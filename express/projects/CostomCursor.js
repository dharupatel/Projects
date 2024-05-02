var main = document.querySelector('.main');
var cursor = document.querySelector('.cursor');

main.addEventListener('mousemove',function(arrow){
   cursor.style.left = arrow.x + "px";
   cursor.style.top = arrow.y + "px";
})