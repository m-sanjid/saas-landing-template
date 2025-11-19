"use client";

import * as React from "react";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate checking auth state
    const timer = setTimeout(() => {
      // For template purposes, we'll simulate a logged-in user after a delay
      // In a real app, this would check the session
      setUser({
        id: "1",
        name: "Demo User",
        email: "demo@example.com",
        image: "https://github.com/shadcn.png",
      });
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const signIn = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({
        id: "1",
        name: "Demo User",
        email: "demo@example.com",
        image: "https://github.com/shadcn.png",
      });
      setIsLoading(false);
    }, 1000);
  };

  const signOut = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser(null);
      setIsLoading(false);
    }, 500);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
