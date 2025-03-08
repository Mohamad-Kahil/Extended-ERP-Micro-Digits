import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ModulePreloader } from "@/components/dashboard/ModulePreloader";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
  const [modules, setModules] = useState<ModuleCardProps[]>([
    {
      id: "finance",
      title: "Finance",
      description: "Manage financial transactions, reports, and budgeting",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2v20" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      color: "bg-emerald-500",
      position: { x: 0, y: 0 },
      href: "/finance",
    },
    {
      id: "hr",
      title: "Human Resources",
      description: "Manage employees, payroll, and recruitment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: "bg-blue-500",
      position: { x: 1, y: 0 },
      href: "/hr",
    },
    {
      id: "scm",
      title: "Supply Chain",
      description: "Manage inventory, suppliers, and procurement",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
      color: "bg-amber-500",
      position: { x: 2, y: 0 },
      href: "/supply-chain",
    },
    {
      id: "production",
      title: "Production",
      description: "Manage manufacturing processes and quality control",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
          <path d="M17 18h1" />
          <path d="M12 18h1" />
          <path d="M7 18h1" />
        </svg>
      ),
      color: "bg-red-500",
      position: { x: 3, y: 0 },
      href: "/production",
    },
    {
      id: "pos",
      title: "Point of Sale",
      description: "Manage retail transactions and customer interactions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      color: "bg-purple-500",
      position: { x: 0, y: 1 },
      href: "/pos",
    },
    {
      id: "ecommerce",
      title: "E-Commerce",
      description: "Manage online store, products, and orders",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      ),
      color: "bg-pink-500",
      position: { x: 1, y: 1 },
      href: "/ecommerce",
    },
    {
      id: "logistics",
      title: "Logistics",
      description: "Manage transportation, warehousing, and distribution",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
          <path d="M12 3v6" />
        </svg>
      ),
      color: "bg-indigo-500",
      position: { x: 2, y: 1 },
      href: "/logistics",
    },
    {
      id: "store-network",
      title: "Store Network",
      description: "Manage retail locations, franchises, and store performance",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="M7 17v-5h5V7h5v10" />
        </svg>
      ),
      color: "bg-teal-500",
      position: { x: 3, y: 1 },
      href: "/store-network",
    },
    {
      id: "marketing",
      title: "Marketing",
      description: "Manage campaigns, analytics, and customer engagement",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      ),
      color: "bg-orange-500",
      position: { x: 0, y: 2 },
      href: "/marketing",
    },
    {
      id: "legal",
      title: "Legal",
      description: "Manage contracts, compliance, and legal documentation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        </svg>
      ),
      color: "bg-yellow-500",
      position: { x: 1, y: 2 },
      href: "/legal",
    },
    {
      id: "operations",
      title: "Operations",
      description: "Manage day-to-day business operations and efficiency",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6V2H8" />
          <path d="m8 2 4 4" />
          <path d="M12 18v4h4" />
          <path d="m16 22-4-4" />
          <path d="M6 12H2v4" />
          <path d="m2 16 4-4" />
          <path d="M18 12h4v-4" />
          <path d="m22 8-4 4" />
        </svg>
      ),
      color: "bg-cyan-500",
      position: { x: 2, y: 2 },
      href: "/operations",
    },
    {
      id: "executive",
      title: "Executive",
      description: "Access high-level insights and strategic decision tools",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      color: "bg-slate-500",
      position: { x: 3, y: 2 },
      href: "/executive",
    },
    {
      id: "administration",
      title: "Administration",
      description: "Manage system settings, users, and permissions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      color: "bg-gray-500",
      position: { x: 0, y: 3 },
      href: "/administration",
    },
    {
      id: "crm",
      title: "CRM",
      description: "Manage customer relationships and sales pipeline",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6" />
          <path d="m15 2 5 5-5 5" />
          <path d="M9 9h5" />
          <path d="M9 13h5" />
          <path d="M9 17h5" />
        </svg>
      ),
      color: "bg-blue-600",
      position: { x: 1, y: 3 },
      href: "/crm",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      description: "Manage equipment maintenance and service requests",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
      color: "bg-orange-600",
      position: { x: 2, y: 3 },
      href: "/maintenance",
    },
    {
      id: "inventory",
      title: "Inventory",
      description: "Manage stock levels, products, and warehouses",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 7.5h20" />
          <path d="M14.5 3h-5L7 7.5" />
          <path d="M17 7.5 19.5 3" />
          <path d="M20 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6" />
          <path d="M12 10v8" />
          <path d="M8 13v2" />
          <path d="M16 13v2" />
        </svg>
      ),
      color: "bg-green-600",
      position: { x: 3, y: 3 },
      href: "/inventory",
    },
  ]);
  const [draggedModule, setDraggedModule] = useState<string | null>(null);
  const [draggedPosition, setDraggedPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Set loading to false immediately
  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Removed drag and drop functionality as requested

  const ModuleCard = ({
    title,
    description,
    icon,
    color = "bg-cyan-500",
    id,
    href,
  }: Omit<ModuleCardProps, "position">) => {
    return (
      <Link
        to={href}
        className="flex h-full bg-slate-900 rounded-lg p-4 hover:bg-slate-800 transition-colors duration-200 border border-slate-800 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="flex items-center w-full relative z-10">
          <div
            className={cn(
              "flex-shrink-0 mr-3 p-2 rounded-lg text-white",
              color,
            )}
          >
            {icon}
          </div>
          <div>
            <h2 className="text-base font-medium text-white mb-1">{title}</h2>
            <p className="text-xs text-slate-400">{description}</p>
          </div>
        </div>
      </Link>
    );
  };

  const renderGrid = () => {
    const grid = [];
    for (let y = 0; y < 4; y++) {
      const row = [];
      for (let x = 0; x < 4; x++) {
        const module = modules.find(
          (m) => m.position.x === x && m.position.y === y,
        );

        row.push(
          <div
            key={`${x}-${y}`}
            className="h-full rounded-lg transition-colors"
          >
            {module && (
              <ModuleCard
                id={module.id}
                title={module.title}
                description={module.description}
                icon={module.icon}
                color={module.color}
                href={module.href}
              />
            )}
          </div>,
        );
      }
      grid.push(
        <div key={y} className="grid grid-cols-4 gap-4 mb-4">
          {row}
        </div>,
      );
    }
    return grid;
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold text-yellow-400 mb-8">
          Nexus Enterprise Suite
        </h1>

        <div className="w-full max-w-6xl mx-auto">
          {isLoading ? (
            <ModulePreloader />
          ) : (
            <div className="space-y-4">{renderGrid()}</div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
