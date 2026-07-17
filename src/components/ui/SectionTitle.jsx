export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-500 text-sm mt-1">
        {subtitle}
      </p>
    </div>
  );
}