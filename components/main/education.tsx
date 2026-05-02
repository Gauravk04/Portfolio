"use client";
import Image from "next/image";

import "./education.css"; // Ensure this file contains the necessary styles

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative z-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 py-2">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-lg mt-2">
            My professional journey and academic background
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto">
          {/* Work Experience */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-500" />
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">💼</div>
              <div>
                <h3 className="text-2xl font-bold text-white">Software Development Engineer 1</h3>
                <h4 className="text-cyan-400 text-lg">Strideone</h4>
              </div>
            </div>
            <ul className="space-y-4 text-gray-300 text-sm leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                Engineered and maintained robust backend services, ensuring high availability and scalable architecture.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                Collaborated with cross-functional teams to deliver highly interactive frontend interfaces using React.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">▹</span>
                Optimized database queries and API response times, significantly improving the overall user experience.
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-sm font-medium">
              <span className="text-purple-300">Full-Time</span>
              <span className="text-gray-400">Present</span>
            </div>
          </div>

          {/* Education */}
          <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-400" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 relative bg-white rounded-full p-1">
                <Image src="/lpu.png" alt="LPU Logo" fill className="object-contain p-2" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">B.Tech in Computer Science</h3>
                <h4 className="text-purple-400 text-lg">Lovely Professional University</h4>
              </div>
            </div>
            <ul className="space-y-4 text-gray-300 text-sm leading-relaxed mt-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▹</span>
                Focused on core computer science fundamentals, data structures, algorithms, and system design.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▹</span>
                Participated in various hackathons and collaborative coding projects.
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▹</span>
                Graduated with a strong academic record and a focus on practical software engineering.
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-sm font-medium">
              <span className="text-cyan-300">CGPA: 8.41</span>
              <span className="text-gray-400">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
