import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants/data";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-10"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-8">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-row justify-center gap-10 flex-wrap">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            technologies={Array.from(project.technologies)}
          />
        ))}
      </div>

      {/* View Archive Button */}
      <a
        href="https://github.com/Gauravk04"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-14 px-8 py-3 text-white font-medium text-sm rounded-xl border border-white/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/40 flex items-center gap-2 group"
      >
        View Full Archive
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </section>
  );
};
