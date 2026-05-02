"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gaurav-k04/",
    icon: faLinkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/Gauravk04",
    icon: faGithub,
  },
  {
    name: "Twitter",
    link: "https://x.com/Gaurav_K__",
    icon: faTwitter,
  },
];

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:gauravakp2001@gmail.com?subject=Contact from Portfolio&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AContact Number: ${contactNumber}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="w-full py-20 flex justify-center relative z-20">
      <div className="max-w-6xl w-full mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Info */}
          <div className="w-full lg:w-5/12 flex flex-col space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
                Let's Connect
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-medium">Email</span>
                  <a href="mailto:gauravakp2001@gmail.com" className="hover:text-cyan-400 transition-colors">gauravakp2001@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-medium">Phone</span>
                  <a href="tel:+918318614689" className="hover:text-cyan-400 transition-colors">+91 8318614689</a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                  <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-gray-500 font-medium">Location</span>
                  <span>Gorakhpur, U.P, India</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-medium mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialMediaLinks.map(({ name, link, icon }) => (
                  <Link
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={name}
                    aria-label={name}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 group"
                  >
                    <FontAwesomeIcon icon={icon} className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#0f172a]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>
              
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300 ml-1">Contact Number</label>
                  <input
                    id="phone"
                    type="tel"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    placeholder="+1 (234) 567-8900"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can I help you?"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group flex items-center justify-center"
                >
                  {/* Glowing sweep effect on hover */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                  
                  <span className="relative z-10 flex items-center gap-2 transition-transform duration-300 group-hover:-translate-x-1">
                    Send Message
                    
                    <div className="relative flex items-center justify-center w-6 h-6 overflow-visible">
                      {/* Original airplane that flies away */}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="absolute h-5 w-5 transform transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:scale-125 group-hover:opacity-0" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      
                      {/* New airplane that flies in */}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="absolute h-5 w-5 transform transition-all duration-500 -translate-x-8 translate-y-8 scale-50 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </div>
                  </span>
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;

