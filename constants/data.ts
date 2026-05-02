import Image from "next/image";

export const SKILL_ROWS = [
  // Row 1 (12 items)
  [
    { name: "HTML5", src: "html.png" },
    { name: "CSS", src: "css.png" },
    { name: "JavaScript", src: "js.png", width: 65, height: 65 },
    { name: "React", src: "react.png" },
    { name: "Angular", src: "angular.png" },
    { name: "Next.js", src: "next.png" },
    { name: "Node.js", src: "node.png" },
    { name: "Express.js", src: "express.png" },
    { name: "PHP", src: "php.png" },
    { name: "Laravel", src: "laravel.png" },
    { name: "Java", src: "java.png" },
    { name: "Python", src: "python.png" },
  ],
  // Row 2 (10 items)
  [
    { name: "C++", src: "cpp.png" },
    { name: "Go", src: "go.png" },
    { name: "TypeScript", src: "ts.png" },
    { name: "Spring Boot", src: "springboot.svg" },
    { name: "Dropwizard", src: "dropwizard.svg" },
    { name: "Django", src: "django.svg" },
    { name: "MySQL", src: "mysql.png" },
    { name: "MongoDB", src: "mongodb.png", width: 60, height: 60 },
    { name: "PostgreSQL", src: "postgresql.png" },
    { name: "Redis", src: "redis.svg" },
  ],
  // Row 3 (8 items)
  [
    { name: "Git", src: "git.svg" },
    { name: "Jenkins", src: "jenkins.svg" },
    { name: "AWS", src: "aws.svg" },
    { name: "Docker", src: "docker.png" },
    { name: "Kafka", src: "kafka.svg" },
    { name: "GraphQL", src: "graphql.png" },
    { name: "Prisma", src: "prisma.png" },
    { name: "Firebase", src: "firebase.png" },
  ],
  // Row 4 (6 items)
  [
    { name: "Tailwind", src: "tailwind.png" },
    { name: "MUI", src: "mui.png" },
    { name: "Redux", src: "redux.png" },
    { name: "React Query", src: "reactquery.png" },
    { name: "React Native", src: "reactnative.png" },
    { name: "Figma", src: "figma.png" },
  ],
];

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
    title: "CLIPPIC",
    description: "Built a responsive digital drawing platform utilizing React and Node.js. Implemented optimized state management for drawing tools and secured user sessions. Engineered a MongoDB schema to efficiently serialize and store complex canvas data, ensuring fast load times.",
    image: "/projects/project-2.png",
    link: "https://clippic.netlify.app/",
    technologies: ["React", "Node.js", "Mongodb"],
  },
  {
    title: "SWIGATTO",
    description: "Developed a full-stack food delivery application featuring comprehensive user management. Designed a scalable backend with MongoDB to handle concurrent order processing and integrated a seamless UI, improving user retention and order throughput.",
    image: "/projects/project-1.png",
    link: "https://github.com/Gauravk04/Swigatto",
    technologies: ["JavaScript", "React", "Mongodb"],
  },
  {
    title: "ECO-VERSE",
    description: "Created an interactive educational platform featuring 3D animal models. Optimized model rendering and asset loading strategies to maintain 60fps on mobile devices, providing an accessible and highly engaging virtual wildlife experience.",
    image: "/projects/project-4.png",
    link: "https://ecoholo-virtual-zoo.netlify.app/",
    technologies: ["HTML5", "CSS", "JavaScript"],
  },
] as const;

// Navigation links for the website
export const NAV_LINKS = [
  {
    title: "About Me",
    link: "#about-me",
  },
  {
    title: "Experience",
    link: "#experience",
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