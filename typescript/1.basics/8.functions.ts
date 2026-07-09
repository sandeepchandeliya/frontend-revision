function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

// define a function type
function performJob(cb: (m : string) => void) {
  //...
  cb('job done');
}

performJob(log);
