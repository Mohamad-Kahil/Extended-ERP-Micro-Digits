import React, { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase, auth } from "@/lib/supabase";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  error: string | null;
  currentEntity: string;
  currentEntityName: string;
  signIn: (
    email: string,
    password: string,
    entityId: string,
  ) => Promise<{ error: any }>;
  signUp: (email: string, password: string) => Promise<{ error: any }>;
  signOut: () => Promise<{ error: any }>;
  resetPassword: (email: string) => Promise<{ error: any }>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Entity name mapping
const entityNames: Record<string, string> = {
  "1": "Parent Company",
  "2": "Subsidiary 1",
  "3": "Subsidiary 2",
  all: "All Entities",
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentEntity, setCurrentEntity] = useState<string>("1"); // Default to Parent Company
  const [currentEntityName, setCurrentEntityName] =
    useState<string>("Parent Company");

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      setLoading(true);
      try {
        const { data } = await auth.getSession();
        setSession(data.session);
        setUser(data.session?.user ?? null);

        // Get stored entity from localStorage if available
        const storedEntity = localStorage.getItem("currentEntity");
        if (storedEntity) {
          setCurrentEntity(storedEntity);
          setCurrentEntityName(entityNames[storedEntity] || storedEntity);
        }

        // For development: create a fake user if no session exists
        if (!data.session) {
          // This is just for development to bypass authentication
          // In a real app, you would never do this
          setUser({
            id: "dev-user-id",
            email: "dev@example.com",
            app_metadata: {},
            user_metadata: { full_name: "Development User" },
            aud: "authenticated",
            created_at: new Date().toISOString(),
          } as any);
        }
      } catch (err) {
        console.error("Error getting initial session:", err);
        setError("Failed to initialize authentication");

        // For development: create a fake user even if there's an error
        setUser({
          id: "dev-user-id",
          email: "dev@example.com",
          app_metadata: {},
          user_metadata: { full_name: "Development User" },
          aud: "authenticated",
          created_at: new Date().toISOString(),
        } as any);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string, entityId: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await auth.signIn(email, password);
      if (error) {
        setError(error.message);
        return { error };
      }

      // Store selected entity
      setCurrentEntity(entityId);
      setCurrentEntityName(entityNames[entityId] || entityId);
      localStorage.setItem("currentEntity", entityId);

      return { error: null };
    } catch (err: any) {
      setError(err.message);
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await auth.signUp(email, password);
      if (error) setError(error.message);
      return { error };
    } catch (err: any) {
      setError(err.message);
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      const { error } = await auth.signOut();
      if (error) setError(error.message);

      // Clear stored entity on logout
      localStorage.removeItem("currentEntity");

      return { error };
    } catch (err: any) {
      setError(err.message);
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await auth.resetPassword(email);
      if (error) setError(error.message);
      return { error };
    } catch (err: any) {
      setError(err.message);
      return { error: err };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    session,
    user,
    loading,
    error,
    currentEntity,
    currentEntityName,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
