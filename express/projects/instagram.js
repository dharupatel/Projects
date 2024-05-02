var addbtn = document.querySelector('.add');
var h5 = document.querySelector('h5');


var flag = 0;

addbtn.addEventListener('click',function(){
    if(flag==0){
        h5.innerHTML = "You are My friend";
        h5.style.color = "green";
        addbtn.style.backgroundColor = "green";
        addbtn.style.color = "white";
        flag = 1;
    }
    else{
        h5.innerHTML = "Thank you ";
        h5.style.color = "black";
        addbtn.style.backgroundColor = "white";
        addbtn.style.color = "black";
        flag = 0; 
    }
});