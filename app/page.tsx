import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";
import ProjectGrid from "@/components/ProjectGrid";

export const revalidate = 60;

export default async function HomePage() {
  const projects = await client.fetch(projectsQuery).catch(() => []);

  return (
    <div className="min-h-screen">
      <ProjectGrid projects={projects} />
    </div>
  );
}
