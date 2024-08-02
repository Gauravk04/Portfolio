"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
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
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen w-full"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 text-center">
        Contact Me
      </h1>
      <div className="flex flex-col items-center justify-center w-3/4 p-10 text-gray-200 mt-4">
        {" "}
        {/* Centered the container and adjusted width */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <div className="mb-4 w-3/4">
            <label className="block text-sm mb-2 text-white">Your Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-white bg-transparent bg-opacity-50"
              required
            />
          </div>
          <div className="mb-4 w-3/4">
            <label className="block text-sm mb-2 text-white">Your Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-white bg-transparent bg-opacity-50"
              required
            />
          </div>
          <div className="mb-4 w-3/4">
            <label className="block text-sm mb-2 text-white">
              Your Contact Number:
            </label>
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-white bg-transparent bg-opacity-50"
              required
            />
          </div>
          <div className="mb-4 w-3/4">
            <label className="block text-sm mb-2 text-white">Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded text-white bg-transparent bg-opacity-50"
              rows={4}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-bold py-2 px-4 rounded"
          >
            Send 🚀
          </button>
        </form>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-10 mb-10 space-y-6">
        {" "}
        {/* Added mb-10 for spacing */}
        <h2 className="text-2xl font-bold text-gray-200 mb-4 text-center">
          Follow Me
        </h2>
        <div className="flex flex-row items-center justify-center space-x-8 md:space-x-12 lg:space-x-16">
          {socialMediaLinks.map(({ name, link, icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={name}
              className="flex items-center"
            >
              <FontAwesomeIcon
                icon={icon}
                size="2x"
                className="text-gray-300 mr-2"
              />
              <span className="text-gray-300">{name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
