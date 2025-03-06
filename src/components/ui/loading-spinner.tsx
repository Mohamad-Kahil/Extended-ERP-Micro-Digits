import React from "react";

export function LoadingSpinner() {
  return (
    <div className="flex h-full w-full items-center justify-center p-8">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-500"></div>
    </div>
  );
}
