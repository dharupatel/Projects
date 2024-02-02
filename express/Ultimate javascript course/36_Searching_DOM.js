// change the card title to red

// let ctitle = document.getElementsByClassName("card-title")[0];
// ctitle.style.color = "red";

// let ctitle = document.getElementById("firstcardtitle");
// ctitle.style.color = "blue";

let ctitle = document.querySelectorAll(".card-title");
ctitle[0].style.color = "blue";
ctitle[1].style.color = "red";
ctitle[2].style.color = "green";
console.log(ctitle);

document.querySelector(".this").style.color = "cyan";
document.querySelector(".this").style.background = "purple"

console.log(document.getElementsByTagName("a"));
console.log(document.body.getElementsByTagName("a"));
console.log(document.querySelector(".card").getElementsByTagName("a"));
console.log(document.getElementsByName("search"));