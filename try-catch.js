try {
    //Code that I beleive will throw an error
    const msg = "Hello there"
    // how throw should be used
   throw new Error(msg) 

} catch (error) {
    // this code runs, so how do we get access to the try block ?
    // we gain access to it by giving the catch block parameters () and then passing the value inside of the 
    // throw keyword into the argument
    console.error(error)
    console.log("Yeah it's okay bucko")
}

console.log("This is a really nice game!")
