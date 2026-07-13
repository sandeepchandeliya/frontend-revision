interface Authenticatable {
  email: string;
  password: string;
  role: string;

  login(): void;
  logout(): void;
}

class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string,
    public email: string,
    public password: string,
    public role: string,
  ) {}

  login() {}
  logout() {}
}

// interface Authenticatable {
//   role: string;
// }

let user: Authenticatable;

user = {
  email: 'test@123.com',
  password: 'abc12345',
  role: 'Admin',
  login() {
    // do some work
  },
  logout() {
    // do some work
  },
};
