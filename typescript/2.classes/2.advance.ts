class UserDetail {
  // constructor(
  //   private firtName: string,
  //   private lastName: string,
  // ) {}

  protected _firstName: string = '';
  private _lastName: string = '';

  set firstName(name: string) {
    if (name.trim() === '') {
      throw new Error('invalid name');
    }
    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === '') {
      throw new Error('invalid name');
    }
    this._lastName = name;
  }

  get fullName() {
    return this._firstName + ' ' + this._lastName;
  }

  static eID = 'USER';
}

console.log(UserDetail.eID);

const sand = new UserDetail();
sand.firstName = 'Sandeep';
sand.lastName = 'Chandeliya';
console.log(sand.fullName);

class Employee extends UserDetail {
  constructor(public jobTitle: string) {
    super();
    // super.firstName =' max
  }
  work(){
    //...
    console.log(this._firstName); 
    // firtsname can be accessed cuz of protected 
    // via extended class
  }
}
