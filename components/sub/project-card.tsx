// import Image from "next/image";
// import Link from "next/link";

// type ProjectCardProps = {
//   src: string;
//   title: string;
//   description: string;
//   link: string;
// };

// export const ProjectCard = ({
//   src,
//   title,
//   description,
//   link,
// }: ProjectCardProps) => {
//   return (
//     <Link
//       href={link}
//       target="_blank"
//       rel="noreferrer noopener"
//       className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]"
//     >
//       <Image
//         src={src}
//         alt={title}
//         width={1000}
//         height={1000}
//         className="w-full object-contain"
//       />

//       <div className="relative p-4">
//         <h1 className="text-2xl font-semibold text-white">{title}</h1>
//         <p className="mt-2 text-gray-300">{description}</p>
//       </div>
//     </Link>
//   );
// };

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
      className="relative rounded-lg shadow-lg border border-[#2A0E61] w-[300px] h-[700px] flex flex-col"
    >
      {/* Image container */}
      <div className="w-full h-[400px] relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
      </div>

      {/* Content container */}
      <div className="p-4 flex flex-col flex-grow">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <div className="mt-4">
          <h2 className="text-lg font-semibold text-white">
            Technologies Used:
          </h2>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            {technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <p className="mt-4 text-gray-300 text-justify">{description}</p>{" "}
        {/* Added text-justify */}
      </div>
    </Link>
  );
};
