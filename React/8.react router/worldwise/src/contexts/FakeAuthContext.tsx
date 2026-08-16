import { createContext, useContext, useReducer, type ReactNode } from 'react';

interface AuthContextType {
  user: AuthUser | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

type AuthActions = { type: 'login'; payload: AuthUser } | { type: 'logout' };

function reducer(state: AuthState, action: AuthActions) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'logout':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error('Unknown action');
  }
}

const FAKE_USER = {
  name: 'Trevor',
  email: 'jack@example.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
};

function AuthProvider({ children }: { children: ReactNode }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  function login(email: string, password: string) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: 'login', payload: FAKE_USER });
  }
  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('Authcontext used outside the AuthProvider');
  return context;
}

export { AuthProvider, useAuth };
