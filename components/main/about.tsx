"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/lib/motion";
import { useState } from "react";

export const About = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div
      id="about-me"
      className="flex flex-row relative items-center justify-center h-auto w-full py-10 -z-20"
    >
      <div className="absolute w-auto h-auto top-0 z-[5]">
        {imgLoaded && (
          <motion.div
            variants={slideInFromTop}
            initial="hidden"
            animate="visible"
            className="text-[40px] font-medium text-center text-gray-200"
          >
            About
          </motion.div>
        )}
      </div>

      <div className="flex flex-col w-full h-full items-center justify-center mt-28 mb-10 max-w-5xl mx-auto px-4 md:px-10">

        {/* Main Content Box with Floating Avatar */}
        <div className="relative w-full border border-white/10 bg-[#0a0520]/60 backdrop-blur-xl px-6 md:px-12 pt-28 pb-12 rounded-3xl shadow-[0_0_40px_rgba(112,66,248,0.15)] transition-all duration-500 hover:border-cyan-500/30 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] group/box mt-20">

          {/* Floating Avatar */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[160px] h-[160px] group">
            {/* Glowing background blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/60 to-cyan-500/60 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700 opacity-60 group-hover:opacity-100"></div>

            {/* Image Container */}
            <div className="relative w-full h-full rounded-full border-[3px] border-[#0a0520] overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.4)] z-10 transition-transform duration-700 group-hover:scale-[1.05] bg-[#030014]">
              <Image
                src="/me.jpg"
                alt="Profile Picture"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top"
                priority={true}
                onLoad={() => setImgLoaded(true)}
              />
            </div>
          </div>

          <div className="text-[28px] md:text-[38px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6 text-center w-full tracking-wide">
            Engineering Scalable Solutions
          </div>

          <p className="text-[16px] md:text-[18px] mb-12 leading-relaxed text-gray-300 text-center max-w-3xl mx-auto">
            As a <strong className="text-purple-300">Software Development Engineer I (SDE1)</strong>, I specialize in building highly resilient and scalable enterprise applications. I possess a strong foundation in computer science principles and thrive in dynamic environments where rapid learning and complex problem-solving are paramount. My professional focus is dedicated to writing clean, maintainable code that drives impactful business solutions.
          </p>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 justify-between w-full mt-8 border-t border-white/10 pt-10">
            {/* Current Tech Stack */}
            <div className="flex-1 flex flex-col items-start">
              <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 text-xl mb-6 flex items-center">
                <span className="text-cyan-400 mr-3 text-2xl group-hover/box:animate-pulse">✦</span> Current Tech Stack
              </h3>
              <ul className="list-none space-y-5 pl-2">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1 text-sm">▹</span>
                  <span className="text-gray-300 text-[15px] leading-relaxed">
                    <strong className="text-white">Backend Engineering:</strong> Designing and maintaining robust microservices leveraging <strong className="text-purple-200">Java (Spring Boot, Dropwizard)</strong> and <strong className="text-purple-200">Python (Django)</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1 text-sm">▹</span>
                  <span className="text-gray-300 text-[15px] leading-relaxed">
                    <strong className="text-white">Frontend Development:</strong> Building responsive, dynamic, and state-driven user interfaces with <strong className="text-cyan-200">Angular & React</strong>.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-3 mt-1 text-sm">▹</span>
                  <span className="text-gray-300 text-[15px] leading-relaxed">
                    <strong className="text-white">Bilingual Expertise:</strong> Deeply comfortable navigating and bridging both Java and Python ecosystems to deliver end-to-end scalable solutions.
                  </span>
                </li>
              </ul>
            </div>

            {/* Core Competencies */}
            <div className="flex-1 flex flex-col items-start">
              <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-500 text-xl mb-6 flex items-center">
                <span className="text-purple-400 mr-3 text-2xl group-hover/box:animate-pulse">✦</span> Core Competencies
              </h3>
              <div className="flex flex-wrap gap-3 mt-2">
                {[
                  "Problem Solving",
                  "System Design",
                  "Algorithmic Efficiency",
                  "Highly Adaptable",
                  "Performance Under Pressure",
                  "Competitive Programming"
                ].map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 rounded-full shadow-sm hover:border-cyan-500/50 hover:text-cyan-300 transition-colors duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
