export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="container py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="opacity-70 mt-1">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}

