import React, { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl md:text-4xl font-semibold font-mono min-w-[150px]">
          PORTFOLIO
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-8 mt-4 md:mt-0 text-center md:text-left`}
        >
          <li>
            <a href="#about" className="block px-4 py-2 text-gray-300 hover:text-white">
              About me
            </a>
          </li>
          <li>
            <a href="#tools" className="block px-4 py-2 text-gray-300 hover:text-white">
              Tools
            </a>
          </li>
          <li>
            <a href="#projects" className="block px-4 py-2 text-gray-300 hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="block px-4 py-2 text-gray-300 hover:text-white">
              Experience
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
