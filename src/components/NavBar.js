import React from "react";
import { FaGithub, FaLinkedin, FaKaggle } from "react-icons/fa";
import logo from "../assets/logo.jpg";

export default function NavBar() {
  return (
    <div className="container pb-12 mx-auto px-2 lg:mb-24 flex  items-center justify-between bg-[#fbfff8]">
      <a href="/" className="p-4">
        <img src={logo} alt="logo" className="h-10 w-10 object-contain" />
      </a>
      {/* Social icons -Nav Bar */}
      <div className="hidden md:flex">
        <ul className="flex space-x-4">
          <li className="bg-[#ed017f] p-3 cursor-pointer rounded-md hover:scale-90">
            <a
              href="https://www.linkedin.com/in/ogunnusi-tolulope/"
              target="_blank "
              rel="noopener noreferrer"
            >
              {" "}
              <FaLinkedin size={15} color="white" />
            </a>
          </li>
          <li className="bg-[#ed017f] cursor-pointer  p-3 rounded-md hover:scale-90 ">
            <a
              href="https://github.com/tolu-og"
              target="_blank "
              rel="noopener noreferrer"
            >
              {" "}
              <FaGithub size={15} color="white" />
            </a>
          </li>
          <li className="bg-[#ed017f] p-3 cursor-pointer rounded-md hover:scale-90">
            <a
              href="https://www.linkedin.com/in/ogunnusi-tolulope/"
              target="_blank "
              rel="noopener noreferrer"
            >
              <FaKaggle size={15} color="white" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
