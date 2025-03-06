import React, { Suspense, lazy } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";
import AuthContainer from "./components/auth/AuthContainer";
import LoginForm from "./components/auth/LoginForm";
import ForgotPasswordForm from "./components/auth/ForgotPasswordForm";
import ResetPasswordForm from "./components/auth/ResetPasswordForm";

// Lazy load dashboard components
const Dashboard = lazy(() => import("./pages/dashboard"));
const FinanceDashboard = lazy(
  () => import("./modules/Finance/FinanceDashboard"),
);
const HRDashboard = lazy(() => import("./modules/HR/HRDashboard"));
const SupplyChainDashboard = lazy(
  () => import("./modules/SupplyChain/SupplyChainDashboard"),
);
const ProductionDashboard = lazy(
  () => import("./modules/Production/ProductionDashboard"),
);

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center bg-slate-950 text-white">
          Loading...
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
          <Route path="/production" element={<ProductionDashboard />} />
          <Route path="/pos" element={<Dashboard />} />
          <Route path="/ecommerce" element={<Dashboard />} />
          <Route path="/logistics" element={<Dashboard />} />
          <Route path="/store-network" element={<Dashboard />} />
          <Route path="/marketing" element={<Dashboard />} />
          <Route path="/legal" element={<Dashboard />} />
          <Route path="/operations" element={<Dashboard />} />
          <Route path="/executive" element={<Dashboard />} />

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
