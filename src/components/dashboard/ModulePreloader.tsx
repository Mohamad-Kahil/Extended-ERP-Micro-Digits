import React from "react";

export const ModulePreloader = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="h-5 w-24 bg-slate-800 rounded-md"></div>
        <div className="flex space-x-2">
          <div className="h-7 w-20 bg-slate-800 rounded-md"></div>
          <div className="h-7 w-24 bg-slate-800 rounded-md"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-lg p-4 border border-slate-800"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3 p-2 bg-slate-800 rounded-lg h-8 w-8"></div>
                <div className="w-full">
                  <div className="h-4 bg-slate-800 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-slate-800 rounded w-full"></div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ModulePreloader;
