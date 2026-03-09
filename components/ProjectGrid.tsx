import ProjectCard from "./ProjectCard";
import type { SanityImageSource } from "@sanity/image-url";

type Project = {
  _id: string;
  title: string;
  slug: { current: string };
  location?: string;
  coverImage: SanityImageSource;
};

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e8e8e8]">
      {projects.map((project) => (
        <div key={project._id} className="bg-white">
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}
