import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Phuriq from "./assets/phuriq.jpg";
import "./App.css";
import Nav from "./component/Nav.jsx";
import AboutMe from "./component/Aboutme.jsx";
import Skill from "./component/Skill.jsx";
import Project from "./component/Project.jsx";
import Experience from "./component/Experience.jsx";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

function App() {
  const contact = [
    {
      name: "Phuri Kiw",
      icon: faFacebook,
      url: "https://www.facebook.com/Bapista.no1/",
    },
    {
      name: "phuriqs@gmail.com",
      icon: faEnvelope,
      url: "mailto:phuriqs@gmail.com",
    },
    {
      name: "096-829-5421",
      icon: faPhone,
      url: "tel:+6696-829-5421",
    },
  ];

  return (
    <>
      <Nav />
      <section class="relative bg-neutral-100 pb-12">

          <div className="px-4 pt-24 container flex justify-between items-center gap-12 mx-auto">
            <div className="">
              <div>
                <h1 className="text-7xl font-bold">Phuri siripool</h1>
              </div>
              <div className="mt-6 gap-12">
                <div className="">
                  <h3 class="font-semibold text-2xl">Education</h3>
                  <p className="mt-4 text-xl">
                    I'm about to graduate from King Mongkut's Institute of
                    Technology Ladkrabang
                  </p>
                </div>
                <div className="mt-4">
                  <h3 class="font-semibold text-2xl">Location</h3>
                  <p className="mt-4 text-xl">Thailand, Bangkok</p>
                </div>
                <div>
                  <h2 className="mt-4 font-semibold text-2xl">Contact</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit max-w-full mt-4">
                    {contact.map((phuriq, index) => (
                      <div className="grid grid-cols-1" key={index}>
                        <a
                          href={phuriq.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={phuriq.name}
                          className="flex items-center gap-4 px-6 py-4 border border-gray-800 rounded-md hover:bg-gray-300 transition duration-300 cursor-pointer"
                        >
                          <FontAwesomeIcon
                            icon={phuriq.icon}
                            className="text-2xl"
                          />
                          <span className="text-md" title={phuriq.name}>
                            {phuriq.name}
                          </span>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-20">
              <img
                className="w-72 rounded-xl shadow-lg relative"
                src={Phuriq}
                alt="Phuriq"
              />
            </div>
          </div>

      </section>
      <section className="bg-gray-900 text-white pt-20 pb-32">
        <section id="about">
          <AboutMe />
        </section>

        <section id="tools">
          <Skill />
        </section>

        <section id="projects">
          <Project />
        </section>

        <section id="experience">
          <Experience />
        </section>
      </section>
    </>
  );
}

export default App;
