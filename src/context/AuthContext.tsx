export type UserRole = "doctor" | "patient";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  token: string; // placeholder JWT
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<AuthUser>;
  signUp: (name: string, email: string, password: string, role: UserRole) => Promise<AuthUser>;
  signOut: () => void;
}

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = "mn_user";

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {}
    }
    setLoading(false);
  }, []);

  const saveUser = (u: AuthUser) => {
    setUser(u);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
  };

  const signIn = async (email: string, _password: string) => {
    // Mock: load existing or infer role from email
    await new Promise((r) => setTimeout(r, 600));
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const u: AuthUser = JSON.parse(saved);
      saveUser(u);
      return u;
    }
    const role: UserRole = email.toLowerCase().includes("doc") ? "doctor" : "patient";
    const u: AuthUser = {
      id: crypto.randomUUID(),
      name: role === "doctor" ? "Dr. Taylor" : "Alex Patient",
      email,
      role,
      token: `mock.jwt.${btoa(email)}`,
    };
    saveUser(u);
    return u;
  };

  const signUp = async (name: string, email: string, _password: string, role: UserRole) => {
    await new Promise((r) => setTimeout(r, 800));
    const u: AuthUser = {
      id: crypto.randomUUID(),
      name,
      email,
      role,
      token: `mock.jwt.${btoa(email)}`,
    };
    saveUser(u);
    return u;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  const value = useMemo(() => ({ user, loading, signIn, signUp, signOut }), [user, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
