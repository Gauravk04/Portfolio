"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/lib/motion";

export const About = () => {
  return (
    <div
      id="about-me"
      className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20"
    >
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          About
        </motion.div>
      </div>

      <div className="flex flex-row w-full h-full items-center justify-center">
        <div className="relative w-1/2 flex items-center justify-center">
          <div className="absolute inset-0 border-4 border-transparent rounded-full blur-lg"></div>
          <Image
            src="/me.jpg"
            alt="Profile Picture"
            width={600}
            height={850}
            className="rounded-full relative z-30" // Use relative to keep it above the blur
          />
        </div>

        <div className="w-1/2 flex flex-col items-start justify-center p-10 text-gray-200">
          <div className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 mt-20">
            Passionate about problem solving and programming.
          </div>
          <p className="text-[18px] mb-4">
            I&apos;m a <b className="text-red-300">CSE&apos;25</b> student at{" "}
            <b className="text-red-300">Lovely Professional University</b>.
            I&apos;m on a journey to become a Software Development Engineer,
            backed by a strong foundation in computer science and engineering. I
            excel in quickly learning and applying new technologies to
            real-world projects. I&apos;m eager to seize opportunities where I
            can leverage my skills to make a positive impact on the world.
            Outside of coding, I have a keen interest in Competitive Programming
            and enjoy tackling programming puzzles in my free time. Let&apos;s
            code and create something amazing together!
            <span className="rocket-animation">🚀</span>
          </p>
          <ul>
            <li className="mb-4">
              <span className="font-semibold text-purple-300">
                Full-Stack Developer in the Making:
              </span>{" "}
              <span className="text-blue-200">
                Proficient in HTML, CSS, JavaScript, and React to create dynamic
                and visually appealing web applications.
              </span>
            </li>
            <li className="mb-4">
              <span className="font-semibold text-green-500">
                Power Skills:
              </span>
              <ul className="list-disc ml-6">
                <li className="text-yellow-300">
                  Friendly and adaptable team member
                </li>
                <li className="text-yellow-300">
                  Strong team player with excellent time management skills
                </li>
                <li className="text-yellow-300">
                  Focused and self-motivated individual
                </li>
                <li className="text-yellow-300">
                  Natural problem solver, maintaining a calm demeanor under
                  pressure
                </li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-blue-300">
                Extracurricular Involvement:
              </span>
              <ul className="list-disc ml-6">
                <li className="text-pink-200">
                  Executive Leader of LPU-NSS | Since Aug&apos;21
                </li>
                <li className="text-pink-200">
                  Smart India Hackathon | Sep&apos;23
                </li>
                <li className="text-pink-200">
                  Contributed to a nationwide hackathon, demonstrating
                  problem-solving skills and innovative thinking.
                </li>
                <li className="text-pink-200">
                  Engaged in collaborative coding projects and actively
                  participated in coding competitions.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
