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
  "I'm an Aspiring Full Stack Developer",
  "I'm into programming",
  "I'm into projects",
  "I'm into multimedia",
];

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const HeroContent = () => {
  const [currentDescription, setCurrentDescription] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription((prev) => (prev + 1) % descriptions.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const linkedInProfile = "https://www.linkedin.com/in/gaurav-k04/";
  const cv =
    "https://drive.google.com/file/d/1io6_UoPj7uUWuqD5O0dNF9Gfx32zg1Nl/view?usp=sharing";
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-20 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[4px] px-[5px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[5px] h-4 w-4" />
          <h1 className="Welcome-text text-[12px] md:text-[16px] lg:text-[20px]">
            Welcome to Gaurav&apos;s world
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi there !! <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              I&apos;m Gaurav
            </span>
          </span>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentDescription}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={letterAnimation}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-400 my-5 max-w-[600px]"
          >
            {descriptions[currentDescription]}
          </motion.p>
        </AnimatePresence>

        <div className="flex gap-4 mt-5">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
            href={linkedInProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me +
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600"
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
