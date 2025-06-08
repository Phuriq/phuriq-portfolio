import React from "react";
import itcamp19 from "../assets/itcamp19.png";
import floc from "../assets/floco.png";
import { motion } from "framer-motion";


function Experience() {
  const projects = [
    {
      img: itcamp19,
      pname: "Teacher Assistant (Web app) IT Camp 2019",
      description:
        "Served as a teaching assistant in IT Camp 2019 organized by the Faculty of Information Technology at KMITL. Responsible for teaching and guiding students in developing web applications using React.js as the primary framework, along with styling using Tailwind CSS.",
    },
    {
      img: floc,
      pname: "UX/UI Design at Floc (Intern)",
      description:
        "Worked as a UX/UI design intern at Floc. Responsible for designing user interfaces for both applications and websites using Figma. Gained hands-on experience in user-centered design, wireframing, and building interactive prototypes.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 5, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto px-4 py-12 text-white"
    >
    <div className="px-4 container mx-auto text-white">
      <h1 className="text-5xl font-bold mb-8 relative w-fit after:content-[''] after:block after:w-16 after:h-1 after:bg-cyan-400 after:mt-2">Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white/5 p-6 rounded-xl border border-black shadow-lg hover:bg-white/10 transition duration-300 cursor-pointer"
          >
            <img
              className="w-full h-[400px] object-cover rounded-lg mb-4"
              src={project.img}
              alt={project.pname}
            />
            <span className="text-2xl font-semibold mb-2">{project.pname}</span>
            <p className="pt-4 text-lg leading-relaxed text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
}

export default Experience;
