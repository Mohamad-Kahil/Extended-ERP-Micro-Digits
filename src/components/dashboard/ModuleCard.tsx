import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color?: string;
}

const ModuleCard = ({
  title,
  description,
  icon,
  href,
  color = "bg-cyan-500",
}: ModuleCardProps) => {
  return (
    <Link
      to={href}
      className="block bg-slate-900 rounded-lg p-4 hover:bg-slate-800 transition-colors duration-200 border border-slate-800 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="flex items-start relative z-10">
        <div
          className={cn("flex-shrink-0 mr-3 p-2 rounded-lg text-white", color)}
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

export default ModuleCard;
