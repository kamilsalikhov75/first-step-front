export interface User {
  id: number;
  name: string;
  email: string;
  role: {
    name: Role;
  };
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
  Authenticated = "Authenticated",
  Admin = "Admin",
}
