"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

const descriptions = [
  "Software Development Engineer building scalable and resilient systems",
  "Focused on system architecture, performance, and reliability",
  "Experienced in building and optimizing backend services",
  "Driving efficiency through clean code and thoughtful design",
];


import { Terminal } from "@/components/ui/terminal";

export const HeroContent = () => {
  const [currentDescription, setCurrentDescription] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription((prev) => (prev + 1) % descriptions.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const linkedInProfile = "https://www.linkedin.com/in/gaurav-k04/";
  const cv = "https://drive.google.com/file/d/1JLmEzdXfSvO0z6al103JzYUKEFlhjkrE/view?usp=sharing";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-20 mt-32 lg:mt-32 w-full z-[20] gap-10 lg:gap-0"
    >
      <div className="h-full w-full lg:w-1/2 flex flex-col gap-4 justify-center text-left items-start">

        {/* Animated Magic Badge */}
        <motion.div
          variants={slideInFromTop}
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none mb-2"
        >
          <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-slate-950/90 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl gap-2 tracking-wide">
            <SparklesIcon className="text-[#b49bff] h-4 w-4" />
            Software Development Engineer
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.3)}
          className="flex flex-col gap-2 text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-[600px] w-auto h-auto leading-[1.1] text-left"
        >
          <span className="tracking-tight drop-shadow-md">
            Hi there!
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 drop-shadow-lg tracking-tight pb-2">
            I&apos;m Gaurav
          </span>
        </motion.div>

        {/* Dynamic Subtitle */}
        <div className="h-[60px] md:h-[72px] flex items-center justify-start w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentDescription}
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl lg:text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 max-w-[500px] text-left w-full"
            >
              {descriptions[currentDescription]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-start gap-5 mt-6 w-full">
          <motion.a
            variants={slideInFromLeft(0.7)}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 bg-[#0f172a] border border-cyan-500/40 rounded-xl overflow-hidden hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:-translate-y-1"
            href={linkedInProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              Let&apos;s Connect
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.a>

          <motion.a
            variants={slideInFromLeft(0.9)}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 bg-transparent border border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 hover:-translate-y-1"
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              View Resume
            </span>
          </motion.a>
        </div>

        {/* Interactive Terminal placed nicely on the left side below buttons */}
        <motion.div
          variants={slideInFromLeft(1.1)}
          className="w-full mt-4 max-w-[550px] drop-shadow-[0_0_30px_rgba(139,92,246,0.15)]"
        >
          <Terminal />
        </motion.div>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 h-full flex justify-center items-center mt-10 lg:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none hover:scale-[1.02] transition-transform duration-700 ease-in-out drop-shadow-[0_0_40px_rgba(139,92,246,0.3)] max-w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;