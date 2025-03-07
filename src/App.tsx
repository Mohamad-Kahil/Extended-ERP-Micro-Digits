import React, { Suspense, lazy, useEffect } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import AuthContainer from "./components/auth/AuthContainer";
import LoginForm from "./components/auth/LoginForm";
import ForgotPasswordForm from "./components/auth/ForgotPasswordForm";
import ResetPasswordForm from "./components/auth/ResetPasswordForm";
import { LoadingSpinner } from "./components/ui/loading-spinner";

// Preload all dashboard components
const preloadComponent = (importFn: () => Promise<any>) => {
  const Component = lazy(importFn);
  // Start loading the component in the background
  importFn();
  return Component;
};

// Lazy load dashboard components with preloading
const Dashboard = preloadComponent(() => import("./pages/dashboard"));
const FinanceDashboard = preloadComponent(
  () => import("./modules/Finance/FinanceDashboard"),
);
const HRDashboard = preloadComponent(() => import("./modules/HR/HRDashboard"));
const SupplyChainDashboard = preloadComponent(
  () => import("./modules/SupplyChain/SupplyChainDashboard"),
);
const POSDashboard = preloadComponent(
  () => import("./modules/POS/POSDashboard"),
);
const EcommerceDashboard = preloadComponent(
  () => import("./modules/Ecommerce/EcommerceDashboard"),
);
const LogisticsDashboard = preloadComponent(
  () => import("./modules/Logistics/LogisticsDashboard"),
);
const StoreNetworkDashboard = preloadComponent(
  () => import("./modules/StoreNetwork/StoreNetworkDashboard"),
);
const MarketingDashboard = preloadComponent(
  () => import("./modules/Marketing/MarketingDashboard"),
);
const LegalDashboard = preloadComponent(
  () => import("./modules/Legal/LegalDashboard"),
);
const OperationsDashboard = preloadComponent(
  () => import("./modules/Operations/OperationsDashboard"),
);
const ProductionDashboard = preloadComponent(
  () => import("./modules/Production/ProductionDashboard"),
);
const ExecutiveDashboard = preloadComponent(
  () => import("./modules/Executive/ExecutiveDashboard"),
);
const AdministrationDashboard = preloadComponent(
  () => import("./modules/Administration/AdministrationDashboard"),
);
const CRMDashboard = preloadComponent(
  () => import("./modules/CRM/CRMDashboard"),
);

function App() {
  // Preload all modules when the app starts
  useEffect(() => {
    const preloadModules = async () => {
      // Preload all modules in the background
      const modules = [
        import("./pages/dashboard"),
        import("./modules/Finance/FinanceDashboard"),
        import("./modules/HR/HRDashboard"),
        import("./modules/SupplyChain/SupplyChainDashboard"),
        import("./modules/POS/POSDashboard"),
        import("./modules/Ecommerce/EcommerceDashboard"),
        import("./modules/Logistics/LogisticsDashboard"),
        import("./modules/StoreNetwork/StoreNetworkDashboard"),
        import("./modules/Marketing/MarketingDashboard"),
        import("./modules/Legal/LegalDashboard"),
        import("./modules/Operations/OperationsDashboard"),
        import("./modules/Production/ProductionDashboard"),
        import("./modules/Executive/ExecutiveDashboard"),
        import("./modules/Administration/AdministrationDashboard"),
        import("./modules/CRM/CRMDashboard"),
      ];

      // Load all modules in parallel
      await Promise.all(modules);
    };

    preloadModules();
  }, []);

  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-slate-950 text-white">
          <LoadingSpinner />
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route
            path="/login"
            element={
              <AuthContainer>
                <LoginForm />
              </AuthContainer>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <AuthContainer>
                <ForgotPasswordForm />
              </AuthContainer>
            }
          />
          <Route
            path="/reset-password"
            element={
              <AuthContainer>
                <ResetPasswordForm />
              </AuthContainer>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/finance" element={<FinanceDashboard />} />
          <Route path="/hr" element={<HRDashboard />} />
          <Route path="/supply-chain" element={<SupplyChainDashboard />} />
          <Route path="/pos" element={<POSDashboard />} />
          <Route path="/ecommerce" element={<EcommerceDashboard />} />
          <Route path="/logistics" element={<LogisticsDashboard />} />
          <Route path="/store-network" element={<StoreNetworkDashboard />} />
          <Route path="/marketing" element={<MarketingDashboard />} />
          <Route path="/legal" element={<LegalDashboard />} />
          <Route path="/operations" element={<OperationsDashboard />} />
          <Route path="/production" element={<ProductionDashboard />} />
          <Route path="/executive" element={<ExecutiveDashboard />} />
          <Route path="/administration" element={<AdministrationDashboard />} />
          <Route path="/crm" element={<CRMDashboard />} />

          {/* Add this before the catchall route */}
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
