export default function Card({
  children,
  className=""
}) {
  return (
    <div
      className={`
      bg-white
      rounded-3xl
      border
      border-slate-200
      shadow-md
      p-8
      transition-all
      duration-300
      hover:shadow-lg
      ${className}
      `}
    >
      {children}
    </div>
  );
}