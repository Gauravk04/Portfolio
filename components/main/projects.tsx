import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
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

      {/* Load More Button */}
      <a
        href="https://github.com/Gauravk04" // Replace with your GitHub URL
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-8 py-3 text-white font-semibold text-lg rounded-lg transition-transform transform hover:scale-105"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 123, 255, 1) 0%, rgba(0, 184, 255, 1) 100%)",
          boxShadow:
            "0 4px 30px rgba(0, 0, 0, 0.1), 0 15px 25px rgba(0, 0, 0, 0.1)",
        }}
      >
        Load More 😉
      </a>
    </section>
  );
};
