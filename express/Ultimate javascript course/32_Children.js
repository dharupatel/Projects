console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

let arr = Array.from(document.body.childNodes)
console.log(arr);

/* Notes : childNodes looks like an array but its not actually an array but a collection 
        we can use Array.from(collection) to convert it into an Array.*/