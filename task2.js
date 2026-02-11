function add(x, y) {
    // The function will only accept numbers as arguments 
    return x + y;
}
var result = add(5, 10); // Correct usage
function updateUser(user) {
    user.firstname = "John";
    user.lastname = "Doe";
    user.email = "john.doe@example.com";
    user.profileImageUrl = "https://example.com/profile.jpg";
}
console.log(updateUser); // This will log the function definition, but it won't execute the function. To execute it, you need to call it with a User object as an argument.
