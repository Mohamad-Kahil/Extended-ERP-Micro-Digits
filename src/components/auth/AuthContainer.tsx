import React from "react";
import BrandingSection from "./BrandingSection";
import { cn } from "@/lib/utils";

interface AuthContainerProps {
  children: React.ReactNode;
  className?: string;
}

const AuthContainer = ({ children, className }: AuthContainerProps) => {
  return (
    <div className="flex h-screen w-screen bg-background">
      <BrandingSection />
      <div
        className={cn("flex flex-1 items-center justify-center p-8", className)}
      >
        <div className="w-full max-w-md space-y-6 rounded-lg border border-border bg-card p-8 shadow-lg">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
