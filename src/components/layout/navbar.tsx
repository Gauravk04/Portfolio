"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { NAV_LINKS, SOCIALS } from "@/constants/data";

export const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-[75px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-transparent backdrop-blur-md border-b border-white/10 z-50 px-10"
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        {/* Logo Section */}
        <Link href="/" className="h-auto w-auto flex flex-row items-center group">
          <div className="relative flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-1 group-hover:from-purple-500/40 group-hover:to-cyan-500/40 transition-all duration-300">
            <Image
              src="/logo.png"
              alt="Logo"
              width={50}
              height={50}
              draggable={false}
              className="cursor-pointer group-hover:animate-slowspin"
            />
          </div>
          <div className="font-bold ml-[15px] hidden lg:block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 text-xl tracking-wide">
            Gaurav Kumar
          </div>
        </Link>

        {/* Links Section */}
        <div className="fixed bottom-0 left-0 w-full md:static md:w-[500px] md:h-full flex flex-row items-center justify-center md:justify-between md:mr-20 z-50 p-4 md:p-0 bg-[#030014]/90 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-t border-white/10 md:border-none">
          <div className="flex items-center justify-between w-full max-w-[400px] md:w-full h-auto border border-white/10 bg-[#030014]/40 backdrop-blur-md md:mr-[15px] px-[15px] sm:px-[20px] md:px-[30px] py-[10px] md:py-[12px] rounded-full text-gray-100 shadow-[0_0_15px_rgba(112,66,248,0.2)] text-xs md:text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="relative font-semibold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] transition-colors hover:text-white group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Socials Section */}
        <div className="flex flex-row gap-5 items-center">
          {SOCIALS.map(({ link, name, icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
              className="group relative flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(112,66,248,0.5)] hover:-translate-y-1"
            >
              <Image
                src={icon}
                alt={name}
                width={20}
                height={20}
                className="opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
