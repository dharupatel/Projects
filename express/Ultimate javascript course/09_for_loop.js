// Program to add first natural numbers

        
        // let sum =0;
        // let n = prompt("Enter the value of n");
        // n = Number.parseInt(n);

// let scop block level hota he or var ka scop nahi hota hai if var documnet.write(i) then print and use let documnet.write(i) then throws error.

        // for (let i = 0; i < n; i++) {
        //     sum += (i+1);
        //     // console.log((i+1),"+");
        // }
        // console.log(" Sum of first " + n + " natural numbers is " + sum)
        

        let obj = {
            Dhara: 90,
            kesa: 98,
            dhwani: 89,
            shuhani: 80,
            ruhan: 97
        }
        // For in loop
        for (let a in obj) {
            console.log("Marks of " + a + " are " + obj[a]);
        }
        //For of loop
        for (let b of "Dhara") {
            console.log(b);
        }