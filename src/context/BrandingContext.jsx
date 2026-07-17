import { createContext, useContext, useEffect, useState } from "react";
import { getThemes, getBranding } from "../services/brandingService";

const BrandingContext = createContext();

export function BrandingProvider({ children }) {
  const [loading, setLoading] = useState(true);

  const [themes, setThemes] = useState([]);

  const [branding, setBranding] = useState({
    company_name: "",
    app_name: "",
    logo_url: "",
    selected_theme: null,
    mode: "light",
  });

  async function loadThemes() {
    try {
      const data = await getThemes();
      setThemes(data || []);
    } catch (err) {
      console.error(err);
    }
  }

  async function loadBranding() {
    try {
      const data = await getBranding();

      if (!data) return;

      setBranding({
         company_name: data.company_name ?? "",
         app_name: data.app_name ?? "",
         logo_url: data.logo_url ?? "",
         selected_theme: data.selected_theme ?? null,
         mode: data.mode ?? "light",
         });
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    async function initialize() {
      setLoading(true);

      await loadThemes();
      await loadBranding();

      setLoading(false);
    }

    initialize();
  }, []);

  function updateBranding(name, value) {
    setBranding((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <BrandingContext.Provider
      value={{
        loading,
        themes,
        branding,
        setBranding,
        updateBranding,
        loadBranding,
      }}
    >
      {children}
    </BrandingContext.Provider>
  );
}

export function useBranding() {
  return useContext(BrandingContext);
}