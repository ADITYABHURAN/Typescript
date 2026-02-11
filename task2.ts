function add(x: number, y: number) { // Function parameters are strictly typed as numbers
    // The function will only accept numbers as arguments 
    return x + y;
}
let result: number = add(5, 10); // Correct usage
// let wrongResult: number = add(5, '10'); // This will cause a type error because '10' is a string

//In typescript you need to asign the datatype first and it strictly follows it throught the file   




//I can assign my own properties to the function object, but I need to make sure that the types are correct.

interface User {
    firstname : string;
    lastname : string;
    email : string;
    profileImageUrl : string;
}

function updateUser (user: User) {
    user.firstname = "John";
    user.lastname = "Doe";
    user.email = "john.doe@example.com";
    user.profileImageUrl = "https://example.com/profile.jpg";
}


console.log(updateUser); // This will log the function definition, but it won't execute the function. To execute it, you need to call it with a User object as an argument.