import { Toaster } from "react-hot-toast";
import { BrandingProvider } from "./context/BrandingContext";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <BrandingProvider>
      <Toaster position="top-right" />
      <AppRoutes />
    </BrandingProvider>
  );
}