type Role = 'admin' | 'editor' | 'guest' | 'reader';

type User = {
  name: string;
  age: number;
  role: Role;
  permission: string[];
};


