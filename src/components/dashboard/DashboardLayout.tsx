import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
  navbar?: React.ReactNode;
  currentEntity?: string;
  onEntityChange?: (entity: string) => void;
  availableEntities?: string[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  navbar,
  currentEntity,
  onEntityChange,
  availableEntities = [],
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200">
      <Sidebar collapsed={sidebarCollapsed} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header
          toggleSidebar={toggleSidebar}
          currentEntity={currentEntity}
          onEntityChange={onEntityChange}
          availableEntities={availableEntities}
        />
        {navbar && (
          <div className="border-b border-slate-800 px-4 py-2">{navbar}</div>
        )}
        <main className="flex-1 overflow-auto p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
