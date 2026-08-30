import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
