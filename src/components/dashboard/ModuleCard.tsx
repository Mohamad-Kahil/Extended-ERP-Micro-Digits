import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

const ModuleCard = ({
  title,
  description,
  icon,
  color,
  href,
}: ModuleCardProps) => {
  return (
    <Link
      to={href}
      className="group block overflow-hidden rounded-lg border border-slate-800 bg-slate-900 transition-all hover:border-slate-700 hover:shadow-lg"
    >
      <div className="p-6">
        <div className="mb-4 flex items-center">
          <div
            className={cn(
              "mr-4 flex h-12 w-12 items-center justify-center rounded-lg",
              color,
            )}
          >
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
      <div className="flex items-center justify-between border-t border-slate-800 bg-slate-800/50 px-6 py-3">
        <span className="text-xs font-medium text-cyan-500">Access Module</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-cyan-500 transition-transform group-hover:translate-x-1"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
};

export default ModuleCard;
