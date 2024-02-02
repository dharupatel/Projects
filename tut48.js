const fs = require("fs");
 let text = fs.readFileSync("okay.txt","utf-8");
 text = text.replace("Dear","Dhara");


console.log("The content of the file is");
console.log(text);

console.log("Creating a new file..");
fs.writeFileSync("Dhara.txt",text);
