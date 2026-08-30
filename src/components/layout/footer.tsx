import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-[#030014]/60 backdrop-blur-xl pt-16 pb-8 relative z-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Bio */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Gaurav Kumar
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Development Engineer crafting scalable applications and beautiful user experiences.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mt-2">
              Keep learning and keep rising.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span> Home
                </Link>
              </li>
              <li>
                <Link href="#about-me" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span> About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span> Projects
                </Link>
              </li>
              <li>
                <Link href="#qualifications" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span> Qualifications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-gray-400 text-sm flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cyan-400 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:gauravakp2001@gmail.com" className="hover:text-cyan-400 transition-colors">gauravakp2001@gmail.com</a>
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cyan-400 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.273-3.974-6.869-6.87l1.292-.97c.363-.271.527-.734.418-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+918318614689" className="hover:text-cyan-400 transition-colors">+91 8318614689</a>
              </li>
              <li className="text-gray-400 text-sm flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-cyan-400 shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Gorakhpur, U.P, India</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Socials</h4>
            <div className="flex gap-4">
              <Link href="https://github.com/Gauravk04" target="_blank" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              </Link>
              <Link href="https://www.linkedin.com/in/gaurav-k04/" target="_blank" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </Link>
              <Link href="https://x.com/Gaurav_K__" target="_blank" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
                <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Gaurav Kumar. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Designed with <span className="text-red-500 animate-pulse">❤️</span> by <a href="https://www.linkedin.com/in/gaurav-k04/" target="_blank" className="text-cyan-400 hover:text-cyan-300 transition-colors">Gaurav</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
