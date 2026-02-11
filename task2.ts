function add(x: number, y: number) { // Function parameters are strictly typed as numbers
    // The function will only accept numbers as arguments 
    return x + y;
}
let result: number = add(5, 10); // Correct usage
// let wrongResult: number = add(5, '10'); // This will cause a type error because '10' is a string

//In typescript you need to asign the datatype first and it strictly follows it throught the file   
