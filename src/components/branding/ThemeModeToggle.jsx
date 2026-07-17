import { useBranding } from "../../hooks/useBranding";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeModeToggle() {
  const { branding, updateBranding } = useBranding();

  return (
    <div className="space-y-3">

      <label className="text-sm font-semibold text-slate-700">
        Theme Mode
      </label>

      <div className="grid grid-cols-2 rounded-2xl bg-slate-100 p-1">

        <button
          type="button"
          onClick={() => updateBranding("mode", "light")}
          className={`flex items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all ${
            branding.mode === "light"
              ? "bg-white shadow-md text-blue-600"
              : "text-slate-600 hover:text-blue-600"
          }`}
        >
          <FaSun />

          Light
        </button>

        <button
          type="button"
          onClick={() => updateBranding("mode", "dark")}
          className={`flex items-center justify-center gap-2 rounded-xl py-3 font-semibold transition-all ${
            branding.mode === "dark"
              ? "bg-slate-900 shadow-md text-white"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <FaMoon />

          Dark
        </button>

      </div>

    </div>
  );
}