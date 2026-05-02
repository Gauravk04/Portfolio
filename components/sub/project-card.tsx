import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  technologies: string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  technologies,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative flex flex-col w-full sm:w-[340px] md:w-[320px] lg:w-[360px] h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_8px_32px_0_rgba(31,38,135,0.3)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-500/20 group transform-gpu"
      style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
    >
      {/* Image container */}
      <div className="relative w-full h-[220px] shrink-0 overflow-hidden z-0">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transform-gpu transition-transform duration-500 group-hover:scale-110"
        />
        {/* Subtle overlay gradient - promoted to its own 3D layer to prevent z-fighting */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent opacity-90 pointer-events-none z-10"
          style={{ transform: "translateZ(1px)" }}
        />
      </div>

      {/* Content container */}
      <div className="p-6 flex flex-col flex-grow z-10 relative">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
          {title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-medium text-cyan-200 bg-[#0c002b]/60 rounded-full border border-cyan-500/30 backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>
    </Link>
  );
};
