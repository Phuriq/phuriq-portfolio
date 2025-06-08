import React, { useState, useEffect } from "react";

function Nav() {

  return (
    <nav className="bg-gray-900 p-8 shadow-md">
      <div className="container flex justify-between items-center mx-auto">
        <div className="text-white text-4xl font-semibold font-mono min-w-[150px]">
          PORTFOLIO
        </div>
        <ul className="flex space-x-8">
          <li>
            <a href="#about" className="text-gray-300 hover:text-white">
              About me
            </a>
          </li>
          <li>
            <a href="#tools" className="text-gray-300 hover:text-white">
              Tools
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-white">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-300 hover:text-white">
              Experience
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
