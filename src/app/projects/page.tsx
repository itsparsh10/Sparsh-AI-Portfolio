import Section from "@/components/section";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <Section title="Projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.slug} id={p.slug} className="card p-6">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="opacity-70 text-sm">{p.summary}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

