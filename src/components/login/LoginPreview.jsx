import { useBranding } from "../../hooks/useBranding";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function LoginPreview() {
  const { branding, themes } = useBranding();

  const theme =
    themes.find((item) => item.id === branding.selected_theme) ||
    themes[0] || {
      primary_color: "#2563eb",
      secondary_color: "#1d4ed8",
    };

  const isDark = branding.mode === "dark";

  return (
    <div
      className="rounded-3xl h-[430px] flex items-center justify-center transition-all duration-500 overflow-hidden relative"
      style={{
        background: `linear-gradient(135deg,
        ${theme.primary_color},
        ${theme.secondary_color})`,
      }}
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-white/10"></div>
      <div className="absolute -bottom-24 -right-24 w-56 h-56 rounded-full bg-white/10"></div>

      {/* Login Card */}
      <div
        className={`relative z-10 w-[340px] rounded-3xl backdrop-blur-xl shadow-2xl border p-8 transition-all ${
          isDark
            ? "bg-slate-900/90 border-slate-700 text-white"
            : "bg-white/95 border-white text-slate-900"
        }`}
      >
        {/* Logo */}
        <div className="flex justify-center mb-5">
          {branding.logo_url ? (
            <img
              src={branding.logo_url}
              className="h-20 object-contain"
              alt="logo"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-slate-200"></div>
          )}
        </div>

        <h2 className="text-center text-2xl font-bold">
          {branding.company_name || "Company Name"}
        </h2>

        <p
          className={`text-center mt-1 mb-6 ${
            isDark ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {branding.app_name || "Application"}
        </p>

        {/* Email */}
        <div
          className={`flex items-center gap-3 rounded-xl px-4 py-3 mb-4 border ${
            isDark
              ? "bg-slate-800 border-slate-700"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <FaEnvelope className="text-slate-400" />
          <span className="text-slate-400">Email Address</span>
        </div>

        {/* Password */}
        <div
          className={`flex items-center gap-3 rounded-xl px-4 py-3 mb-6 border ${
            isDark
              ? "bg-slate-800 border-slate-700"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <FaLock className="text-slate-400" />
          <span className="text-slate-400">Password</span>
        </div>

        <button
          className="w-full rounded-xl py-3 text-white font-semibold shadow-lg transition hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg,
              ${theme.primary_color},
              ${theme.secondary_color})`,
          }}
        >
          Sign In
        </button>

        <p
          className={`text-center text-xs mt-5 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Secure Authentication
        </p>
      </div>
    </div>
  );
}