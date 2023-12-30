/*
    1. Assign the following object to a variable called "user":
        { name: "Misha", age: 22, settings: {colour: "blue"} }
    2. Log out "Creating user..."
    3. Try to log out: user.profile.colour
    4. Log out "User created!"
    5. Run the code and observe the behaviour

    6. How would you fix this code (without changing steps 1-4
       or the user Object)? Also, add any appropriate logging 
       you feel makes sense.
*/

//1
let user = {
  name: "Misha",
  age: 22,
  settings: { colour: "blue" },
};
//2
console.log("Creating user")
//3
console.log(user.profile.colour)
//4
console.log("User created")
