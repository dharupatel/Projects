// Synchronous or blocking
// -Line bye line execution

// Asynchronous or non-blocking
// - Line by line execution not guaranteed
// - callbacks will fire

const fs = require("fs");
fs.readFile("okay.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");