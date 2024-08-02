import Image from "next/image";

// Skill data with image paths
export const SKILL_DATA = [
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "C++",
    image: "cpp.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML5",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Angular",
    image: "angular.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PHP",
    image: "php.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel",
    image: "laravel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
] as const;

// Coding Platform links with image icons
export const SOCIALS = [
  {
    name: "Leetcode",
    icon: "/platform/leet.png", 
    link: "https://leetcode.com/u/1up_Gaurav/",
  },
  {
    name: "HackerRank",
    icon: "/platform/hacker.png", 
    link: "https://www.hackerrank.com/profile/1up_Gaurav",
  },
  {
    name: "GeeksforGeeks",
    icon: "/platform/gfg.png", 
    link: "https://www.geeksforgeeks.org/user/1up_gaurav/",
  },
] as const;

// Project data
export const PROJECTS = [
  {
    title: "ClipPic",
    description:'An interactive web application that serves as a drawing board, allowing users to create and save their creativity. It offers various drawing tools, and the ability to save and load creations. The platform is responsive for all devices and includes secure user authentication features. ClipPic aims to inspire creativity by providing a robust platform for digital drawing and art management.',
    image: "/projects/project-2.png",
    link: "https://clippic.netlify.app/",
    technologies: [ "React","Node.js", "Mongodb"],
  },
  {
    title: "SWIGATTO",
    description:'An innovative web application inspired by popular food services. This project has functionalities while significantly enhancing user experience and management for seamless operations. It features a user-friendly interface that attracts and engages users effectively, offering intuitive navigation and visually appealing design. It provides a robust platform for users to explore diverse food options makes it appealing.',
      image: "/projects/project-1.png",
    link: "https://github.com/Gauravk04/Swigatto",
    technologies: ["JavaScript", "React", "Mongodb"],
  },
  {
    title: "EcoHolo Zoo",
    description:'EcoHolo Virtual Zoo is an educational web application designed to offer an immersive and interactive experience of a virtual zoo. It features detailed information about various animal species, 3D animal models, and interactive exhibits. The platform aims to educate users about wildlife and conservation efforts, providing a realistic zoo experience from the comfort of their homes.',
    image: "/projects/project-4.png",
    link: "https://ecoholo-virtual-zoo.netlify.app/",
    technologies: ["HTML5", "CSS", "JavaScript"],
  },
  {
    title: "Space Themed Portfolio",
    description:'"Space Themed Website" invites you to embark on an interstellar journey through the cosmic wonders beyond our world. This platform immerses users in a captivating digital experience that combines innovative design with the mysteries of the universe. Explore stunning visuals, and interactive features that reveal the beauty and complexity of space. This website offers a unique opportunity to discover about me.',
    image: "/projects/project-3.png",
    link: "https://example.com",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
] as const;

// Navigation links for the website
export const NAV_LINKS = [
  {
    title: "About Me",
    link: "#about-me",
  },
  {
    title: "Qualifications",
    link: "#education",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];