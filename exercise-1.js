/*
    1. Create a loop that loops 10 times starting at 1
    2. On each loop iteration, print out the loop number
    3. On loop number 5, throw an Error Object with the message "Boom!"
    
    4. Catch the error and console.error the loop number
*/

let i;
try {
  for (i = 1; i <= 10; i++) {
    // console.log(i);

    console.log(i);
    if (i == 5) {
      throw new Error("Boom!");
    }
  }
} catch (e) {
  console.error(e);
  console.error(`error on log #${i}`);
}

/*
bad scope
for (let i = 1; i <= 10; i++) {
  // console.log(i);
  try {
    console.log(i)
    if (i == 5) {
      throw new Error("Boom!");
    }
  } catch (e) {
    console.error(e)
    console.error(`error on log #${i}`)
  }
}

*/
