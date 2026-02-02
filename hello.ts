//In typescript you need to asign the datatype first and it strictly follows it throught the file 

let x: number = 10;
x = 'Hello, World!'; // This will cause a type error
x = true; // This will also cause a type error
// The variable 'x' is strictly typed as a number and cannot be assigned values of other types.

let fname: string = "Aditya";
fname = 42; // This will cause a type error
fname = false; // This will also cause a type error
// The variable 'fname' is strictly typed as a string and cannot be assigned values of other types.     

//but for the same two examples if we put x is boolean | number | string it will work
let y: number | string | boolean = 10;
y = 'Hello, World!'; // This will work
y = true; // This will also work
// The variable 'y' can hold values of type number, string, or boolean.
let lname: string | number | boolean = "Bhuran";
lname = 42; // This will work
lname = false; // This will also work
// The variable 'lname' can hold values of type string, number, or boolean. 
