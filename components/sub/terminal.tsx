"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type Command = {
  cmd: string;
  output: React.ReactNode;
};

export const Terminal = () => {
  const [history, setHistory] = useState<Command[]>([
    {
      cmd: "system_init",
      output: (
        <span className="text-cyan-400">
          Welcome to Gaurav&apos;s Terminal! Type <span className="text-purple-400 font-bold">'help'</span> to see available commands.
        </span>
      ),
    },
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="flex flex-col gap-1 text-gray-300">
            <div><span className="text-purple-400 font-bold w-28 inline-block">connect</span>  - Connect with me on LinkedIn</div>
            <div><span className="text-purple-400 font-bold w-28 inline-block">skills</span>   - List my technical skills</div>
            <div><span className="text-purple-400 font-bold w-28 inline-block">experience</span> - View my career history</div>
            <div><span className="text-purple-400 font-bold w-28 inline-block">projects</span> - View my recent work</div>
            <div><span className="text-purple-400 font-bold w-28 inline-block">contact</span>  - Get in touch with me</div>
            <div><span className="text-purple-400 font-bold w-28 inline-block">clear</span>    - Clear terminal history</div>
            <div><span className="text-purple-400 font-bold w-28 inline-block">sudo</span>     - Superuser access</div>
          </div>
        );
        break;
      case "connect":
        output = "Opening LinkedIn profile in a new tab... Let's connect!";
        window.open("https://www.linkedin.com/in/gaurav-k04/", "_blank");
        break;
      case "skills":
        output = "Navigating to Skills section... (Java, Python, Next.js, React, MongoDB, SQL, Tailwind...)";
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        output = "Navigating to Experience section... (SDE 1 at Strideone)";
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        output = "Navigating to Projects section... (Check out SWIGATTO, ClipPic, and more!)";
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        output = "Scrolling to Contact... Let's connect!";
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        break;
      case "sudo":
      case "sudo rm -rf /":
        output = <span className="text-red-400">Permission denied. Nice try though! 🕵️‍♂️</span>;
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>;
    }

    setHistory((prev) => [...prev, { cmd: input, output }]);
    setInput("");
  };

  return (
    <div className="w-full mt-10 rounded-xl overflow-hidden border border-white/10 bg-[#030014]/80 backdrop-blur-md shadow-2xl font-mono text-sm group transition-all duration-300 hover:border-purple-500/50">
      {/* Terminal Header */}
      <div className="bg-[#0a0520] px-4 py-2 flex items-center gap-2 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="ml-2 text-xs text-gray-400 select-none">guest@gaurav-portfolio: ~</span>
      </div>

      {/* Terminal Body */}
      <div
        ref={containerRef}
        className="p-4 h-[200px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 flex flex-col gap-3 text-gray-300"
      >
        {history.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-1">
            <div className="flex gap-2 text-cyan-400">
              <span>➜</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">{item.cmd}</span>
            </div>
            <div className="ml-4 break-words">{item.output}</div>
          </div>
        ))}

        {/* Input Line */}
        <form onSubmit={handleCommand} className="flex gap-2 text-cyan-400 mt-2">
          <span>➜</span>
          <span className="text-purple-400">~</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder-gray-600"
            spellCheck="false"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
};
