"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  src?: string;
  name: string;
  width?: number;
  height?: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width = 80,
  height = 80,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.03; // reduced from 0.1 for faster loading

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex items-center justify-center"
    >
      {src ? (
        <Image src={`/skills/${src}`} width={width} height={height} alt={name} />
      ) : (
        <div className="px-5 py-2 border border-[#7042f861] bg-[#0300145e] rounded-full text-gray-200 text-sm font-medium shadow-[0_0_15px_rgba(112,66,248,0.2)] whitespace-nowrap">
          {name}
        </div>
      )}
    </motion.div>
  );
};
