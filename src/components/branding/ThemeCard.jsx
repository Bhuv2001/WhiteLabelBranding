export default function ThemeCard({
  theme,
  active,
  onSelect,
}) {
  return (
    <div
      onClick={() => onSelect(theme.id)}
      className={`
        cursor-pointer
        rounded-3xl
        overflow-hidden
        border
        transition-all
        duration-300
        bg-white
        ${
          active
            ? "border-blue-600 shadow-xl ring-4 ring-blue-100 scale-[1.02]"
            : "border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1"
        }
      `}
    >
      {/* Header Gradient */}
      <div
        className="h-20"
        style={{
          background: `linear-gradient(135deg,
            ${theme.primary_color},
            ${theme.secondary_color})`,
        }}
      />

      {/* Mini Login UI */}
      <div className="p-5">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div
            className="w-12 h-12 rounded-full shadow"
            style={{
              background: theme.primary_color,
            }}
          />
        </div>

        {/* Title */}
        <div className="space-y-2 mb-5">

          <div className="h-3 rounded-full bg-slate-300 w-3/4 mx-auto" />

          <div className="h-2 rounded-full bg-slate-200 w-1/2 mx-auto" />

        </div>

        {/* Email */}
        <div className="h-10 rounded-xl bg-slate-100 mb-3" />

        {/* Password */}
        <div className="h-10 rounded-xl bg-slate-100 mb-5" />

        {/* Button */}
        <div
          className="h-10 rounded-xl"
          style={{
            background: theme.secondary_color,
          }}
        />

        {/* Footer */}
        <div className="mt-5 text-center">

          <h3 className="font-semibold text-slate-700">
            {theme.name}
          </h3>

          <p className="text-xs text-slate-400 mt-1">
            Click to Apply
          </p>

        </div>

      </div>
    </div>
  );
}