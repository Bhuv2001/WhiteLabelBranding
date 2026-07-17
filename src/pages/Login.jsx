import { useEffect } from "react";
import { useBranding } from "../hooks/useBranding";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const { branding, themes, loadBranding } = useBranding();

  useEffect(() => {
    loadBranding();
  }, []);

  const selectedTheme =
    themes.find((theme) => theme.id === branding.selected_theme) || {
      primary_color: "#2563eb",
      secondary_color: "#1d4ed8",
    };

  const isDark = branding.mode === "dark";

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden p-6"
      style={{
        background: `linear-gradient(135deg,
          ${selectedTheme.primary_color},
          ${selectedTheme.secondary_color})`,
      }}
    >
      {/* Background Decorations */}
      <div className="absolute w-72 h-72 rounded-full bg-white/10 -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 rounded-full bg-white/10 -bottom-32 -right-20"></div>

      {/* Login Card */}
      <div
        className={`relative z-10 w-full max-w-md rounded-3xl shadow-2xl backdrop-blur-xl border p-10 ${
          isDark
            ? "bg-slate-900/90 border-slate-700 text-white"
            : "bg-white/95 border-white text-slate-900"
        }`}
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          {branding.logo_url ? (
            <img
              src={branding.logo_url}
              alt="Company Logo"
              className="h-20 object-contain"
            />
          ) : (
            <div
              className={`h-20 w-20 rounded-full ${
                isDark ? "bg-slate-700" : "bg-slate-200"
              }`}
            />
          )}
        </div>

        <h1 className="text-3xl font-bold text-center">
          {branding.company_name || "Company Name"}
        </h1>

        <p
          className={`text-center mt-2 mb-8 ${
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
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent w-full outline-none border-0 shadow-none p-0 focus:ring-0"
          />
        </div>

        {/* Password */}
        <div
          className={`flex items-center gap-3 rounded-xl px-4 py-3 mb-3 border ${
            isDark
              ? "bg-slate-800 border-slate-700"
              : "bg-slate-50 border-slate-200"
          }`}
        >
          <FaLock className="text-slate-400" />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent w-full outline-none border-0 shadow-none p-0 focus:ring-0"
          />
        </div>

        <div className="text-right mb-6">
          <button
            type="button"
            className={`text-sm ${
              isDark
                ? "text-slate-300 hover:text-white"
                : "text-slate-500 hover:text-blue-600"
            }`}
          >
            Forgot Password?
          </button>
        </div>

        <button
          className="w-full rounded-xl py-3 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
          style={{
            background: `linear-gradient(135deg,
              ${selectedTheme.primary_color},
              ${selectedTheme.secondary_color})`,
          }}
        >
          Sign In
        </button>

        <p
          className={`text-center text-xs mt-6 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}
        >
          Protected by Secure Authentication
        </p>
      </div>
    </div>
  );
}