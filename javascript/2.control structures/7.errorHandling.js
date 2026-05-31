function divide(a, b) {
  try {
    if (b == 0) {
      throw {
        message: 'Cannot divide by zero.',
        code: 400,
      };
    }

    let result = a/b ;
    console.log("Result:",result);
  } catch (err) {
    console.log('Error message: ', err.message);
    console.log('Error code: ', err.code);
  }
}


divide(10, 2);
divide(10,0)