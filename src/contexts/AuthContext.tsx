"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the user object
interface User {
  email: string;
  token: string;
  expiration: string;
  username: string;
}

// Define the shape of the context value
interface AuthContextType {
  user: User | null;
  authenticate: (email: string, token: string, expiration: string, username: string) => void;
  logout: () => void;
}

// Create the context with a default value of `null`
export const AuthContext = createContext<AuthContextType | null>(null);

// Define the props for the AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const authenticate = (email: string, token: string, expiration: string, username: string) => {
    setUser({
      email,
      token,
      expiration,
      username,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const authState = useContext(AuthContext);

  if (!authState) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authState;
};