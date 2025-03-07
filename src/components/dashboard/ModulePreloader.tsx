import { useEffect } from "react";

/**
 * This component preloads all module components to improve navigation performance
 */
export function ModulePreloader() {
  useEffect(() => {
    const preloadModules = async () => {
      // Create an array of import promises
      const moduleImports = [
        import("../../modules/Finance/FinanceDashboard"),
        import("../../modules/HR/HRDashboard"),
        import("../../modules/SupplyChain/SupplyChainDashboard"),

        import("../../modules/POS/POSDashboard"),
        import("../../modules/Ecommerce/EcommerceDashboard"),
        import("../../modules/Logistics/LogisticsDashboard"),
        import("../../modules/StoreNetwork/StoreNetworkDashboard"),
        import("../../modules/Marketing/MarketingDashboard"),

        import("../../modules/Production/ProductionDashboard"),
        import("../../modules/Executive/ExecutiveDashboard"),
      ];

      // Load all modules in parallel
      await Promise.all(moduleImports);
    };

    // Start preloading after a short delay to prioritize current view
    const timer = setTimeout(() => {
      preloadModules();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // This component doesn't render anything
  return null;
}
