import React, { Suspense, lazy, useEffect } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import AuthContainer from "./components/auth/AuthContainer";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import ForgotPasswordForm from "./components/auth/ForgotPasswordForm";
import ResetPasswordForm from "./components/auth/ResetPasswordForm";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { Card } from "./components/ui/card";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Custom loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen bg-slate-950">
    <Card className="p-6 border-slate-800 bg-slate-900">
      <div className="flex items-center space-x-4">
        <div className="h-8 w-8 rounded-full bg-cyan-500"></div>
        <div className="text-lg font-medium text-white">Loading module...</div>
      </div>
    </Card>
  </div>
);

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

const OperationsDashboard = preloadComponent(
  () => import("./modules/Operations/OperationsDashboard"),
);
const ProductionDashboard = preloadComponent(
  () => import("./modules/Production/ProductionDashboard"),
);

const AdministrationDashboard = preloadComponent(
  () => import("./modules/Administration/AdministrationDashboard"),
);
const CRMDashboard = preloadComponent(
  () => import("./modules/CRM/CRMDashboard"),
);
const MaintenanceDashboard = preloadComponent(
  () => import("./modules/Maintenance/MaintenanceDashboard"),
);
const LegalDashboard = preloadComponent(
  () => import("./modules/Legal/LegalDashboard"),
);
const ExecutiveDashboard = preloadComponent(
  () => import("./modules/Executive/ExecutiveDashboard"),
);
const InventoryDashboard = preloadComponent(
  () => import("./modules/Inventory/InventoryDashboard"),
);
const AccountingDashboard = preloadComponent(
  () => import("./modules/Accounting/AccountingDashboard"),
);
const ProductManagementDashboard = preloadComponent(
  () => import("./modules/ProductManagement/ProductManagementDashboard"),
);
const AdministrativeServicesDashboard = preloadComponent(
  () =>
    import("./modules/AdministrativeServices/AdministrativeServicesDashboard"),
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
        import("./modules/Maintenance/MaintenanceDashboard"),
        import("./modules/Inventory/InventoryDashboard"),
        import("./modules/Accounting/AccountingDashboard"),
        import("./modules/ProductManagement/ProductManagementDashboard"),
        import(
          "./modules/AdministrativeServices/AdministrativeServicesDashboard"
        ),
      ];

      // Load all modules in parallel
      await Promise.all(modules);
    };

    preloadModules();
  }, []);

  return (
    <AuthProvider>
      <Suspense fallback={<LoadingFallback />}>
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
              path="/register"
              element={
                <AuthContainer>
                  <RegisterForm />
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
            <Route
              path="/dashboard/*"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/finance" element={<FinanceDashboard />} />
            <Route path="/hr" element={<HRDashboard />} />
            <Route path="/supply-chain" element={<SupplyChainDashboard />} />
            <Route path="/pos" element={<POSDashboard />} />
            <Route path="/ecommerce" element={<EcommerceDashboard />} />
            <Route path="/logistics" element={<LogisticsDashboard />} />
            <Route path="/store-network" element={<StoreNetworkDashboard />} />
            <Route path="/marketing" element={<MarketingDashboard />} />
            <Route path="/operations" element={<OperationsDashboard />} />
            <Route path="/production" element={<ProductionDashboard />} />
            <Route
              path="/administration"
              element={<AdministrationDashboard />}
            />
            <Route path="/crm" element={<CRMDashboard />} />
            <Route path="/maintenance" element={<MaintenanceDashboard />} />
            <Route path="/legal" element={<LegalDashboard />} />
            <Route path="/executive" element={<ExecutiveDashboard />} />
            <Route path="/inventory" element={<InventoryDashboard />} />
            <Route path="/accounting" element={<AccountingDashboard />} />
            <Route
              path="/product-management"
              element={<ProductManagementDashboard />}
            />
            <Route
              path="/administrative-services"
              element={<AdministrativeServicesDashboard />}
            />

            {/* Add this before the catchall route */}
            {import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" />
            )}

            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
