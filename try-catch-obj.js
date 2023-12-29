try {
  const user = {
    name: "Ruben",
    age: 18,
    // profile: {
    //   color: "Brown",
    // },
  };

  console.log(user.profile.color);
  // doesn't log this code below because of javascript
  // throwing an error before
  console.log("Did I make it?");
} catch (error) {
  console.log("Looks like the catch block is running now");
  console.error(error);
}
