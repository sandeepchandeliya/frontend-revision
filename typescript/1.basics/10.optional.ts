function generateError(msg?: string){
  throw new Error('msg');
}

generateError('an error has occured!'); // both will work cuz of ?
generateError();


// NULLISH COALESCING


let input = '';

const didProvideInput = input ?? false;