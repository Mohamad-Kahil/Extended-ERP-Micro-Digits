import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { ModulePreloader } from "./ModulePreloader";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900">
      <div
        className={`transition-all duration-300 ${sidebarCollapsed ? "w-16" : "w-64"}`}
      >
        <Sidebar collapsed={sidebarCollapsed} />
      </div>
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <div className="flex items-center px-3 py-1.5 bg-slate-900/50">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="mr-2 text-slate-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {sidebarCollapsed ? (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              ) : (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              )}
            </svg>
          </Button>
          <div className="text-[10px] text-slate-400 font-medium">
            <span className="text-white">Dashboard</span> / Home
          </div>
        </div>
        <main className="flex-1 overflow-auto p-3 bg-slate-950/30">
          {children}
        </main>
      </div>
      {/* Invisible component that preloads all modules */}
      <ModulePreloader />
    </div>
  );
};

export default DashboardLayout;
