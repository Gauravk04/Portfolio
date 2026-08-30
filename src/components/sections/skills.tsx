import { SkillDataProvider } from "@/components/ui/skill-data-provider";
import { SkillText } from "@/components/ui/skill-text";
import { SKILL_ROWS } from "@/constants/data";

export const Skills = () => {
  let indexCounter = 0;

  const renderRow = (row: any[]) => (
    <div className="flex flex-row justify-center flex-wrap gap-5 items-center w-full">
      {row.map((skill) => {
        indexCounter++;
        return (
          <SkillDataProvider
            key={skill.name}
            src={skill.src}
            name={skill.name}
            width={skill.width}
            height={skill.height}
            index={indexCounter}
          />
        );
      })}
    </div>
  );

  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-6 h-full relative overflow-hidden py-8"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2">
        Skills
      </h1>

      <SkillText />

      <div className="flex flex-col items-center justify-center gap-5 mt-4 w-full max-w-[1200px]">
        {SKILL_ROWS.map((row, idx) => (
          <div key={`row-${idx}`}>{renderRow(row)}</div>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Skills;
