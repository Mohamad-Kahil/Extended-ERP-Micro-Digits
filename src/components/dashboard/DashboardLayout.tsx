import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { ModulePreloader } from "./ModulePreloader";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-950">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
      {/* Invisible component that preloads all modules */}
      <ModulePreloader />
    </div>
  );
};

export default DashboardLayout;
