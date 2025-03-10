import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ModulePreloader } from "@/components/dashboard/ModulePreloader";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ModuleGrid from "@/components/dashboard/ModuleGrid";
import { useAuth } from "@/contexts/AuthContext";

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color?: string;
  position: { x: number; y: number };
}

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { currentEntity } = useAuth();

  // Set loading to false immediately
  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8">
          Nexus Enterprise Suite
        </h1>

        <div className="w-full max-w-7xl mx-auto">
          {isLoading ? (
            <ModulePreloader />
          ) : (
            <ModuleGrid currentEntityId={currentEntity} />
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
