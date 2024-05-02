var box = document.querySelector('#box');

box.style.color = "purple";
box.style.backgroundColor = "white";

var h1 = document.querySelector('h1');
h1.style.backgroundColor = "purple";
h1.style.color = "white";

box.addEventListener('click',function(){
    box.style.backgroundColor = "green";
    box.style.color = "white";
})

