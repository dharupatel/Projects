console.log("This is tutorial 37")

function greet(name, greetText= "greetings form javascript"){
    let name1 = "Name1";
    console.log( name + " is a good girl");
    console.log(greetText + " " +name)
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // This line will never execute (Unreachable code)
    // console.log("Function is returned")
}


let name = "Dharu";
let name1 = "keval";
let name2 = "gopi";
let name3 = "umangi";
let greetText = "Good Morning";
greet(name , greetText);
greet(name1 , greetText);
greet(name2 , greetText);
greet(name3);
//let returnVal = greet(name3);

let returnVal = sum(1,2,3);
console.log(returnVal)
//console.log( name + " is a good girl");
//console.log( name1+ " is a good girl");
//console.log( name2 + " is a good girl");
//console.log( name3 + " is a good girl");