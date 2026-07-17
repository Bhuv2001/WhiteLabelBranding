export default function Input({
  label,
  ...props
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-slate-700">
        {label}
      </label>

      <input
        {...props}
        className="
        w-full
        rounded-xl
        border
        border-slate-300
        px-4
        py-3
        text-sm
        focus:border-blue-600
        focus:ring-4
        focus:ring-blue-100
        "
      />
    </div>
  );
}