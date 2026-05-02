import { About } from "@/components/main/about";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import Contact from "@/components/main/contact";
import Experience from "@/components/main/education";

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
