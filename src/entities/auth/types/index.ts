export interface User {
  _id: string;
  name: string;
  email: string;
  role: Role;
}

export enum AuthModalMode {
  Register = "register",
  Login = "login",
}

export interface AuthModal {
  isOpen: boolean;
}

export interface AuthStore {
  isAuth: boolean;
  authModal?: {
    isOpen: boolean;
    mode: AuthModalMode;
  };
  user?: User;
}

export enum Role {
  User = "user",
  Admin = "admin",
}
