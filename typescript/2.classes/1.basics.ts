// class User {
//   name: string;
//   age: number;

//   constructor(n:string, a:number){
//     this.name = n;
//     this.age = a;
//   }
// }

class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}

const max = new User('max', 36);
const fred = new User('fred', 29);

console.log(max, fred);
