try {
   const msg = "Hello"
   console.log(msg)
   throw new Error("Oh no!")
  } catch (error) {
    console.error(error)
    console.error(msg)
  }
