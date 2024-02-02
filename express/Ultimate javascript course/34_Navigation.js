const changeBgRed = () => {
    document.body.firstElementChild.style.background = "red";
}

// write in console $0.children...
// Element only Navigation...
let b = document.body;
console.log("First child of b is:", b.firstChild);
console.log("First Element child of b is:", b.firstElementChild);