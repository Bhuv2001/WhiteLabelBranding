import { useBranding } from "../../hooks/useBranding";
import ThemeCard from "./ThemeCard";

export default function ThemeGrid() {
  const { themes, branding, updateBranding } = useBranding();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

      {themes.map((theme) => (
        <ThemeCard
          key={theme.id}
          theme={theme}
          active={branding.selected_theme === theme.id}
          onSelect={(id) =>
            updateBranding("selected_theme", id)
          }
        />
      ))}

    </div>
  );
}