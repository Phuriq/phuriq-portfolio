import klinic from "../assets/kclinic.png";
import Maxcima from "../assets/Maxcima.png";
import itoph23 from "../assets/itoph23.jpg";
import kd2g from "../assets/kd2g.png";
import ppm from "../assets/ppm.png";
import { motion } from "framer-motion";

function Project() {
  const projects = [
    {
      img: Maxcima,
      pname: "Maxcima",
      date: "Project year 2",
      description:
        "Currently, there are many cinemas, but most of them are located in shopping malls. Our team wanted to create a cinema website that operates independently from malls, allowing us to explore building a standalone cinema booking system from scratch.",
    },
    {
      img: kd2g,
      pname: "KMITL DO 2 GETHER",
      date: "Project year 2",
      description:
        "A mobile application designed using Figma to solve recreational activity coordination problems among university students. Users can log in using their university email, view announcements or activity posts, and interact through likes, comments, and reposts. Users can also connect with others and chat directly, making it easier to find friends for activities and receive campus updates quickly.",
    },
    {
      img: klinic,
      pname: "Kmitl Clinic",
      date: "Project year 3",
      description:
        '"KMITL CLINIC" is a mobile app developed to provide medical and clinic services for KMITL students and staff. Key features include online appointment booking, doctor information, consultation scheduling, and access to medical history and prescriptions to ensure convenience and efficiency.',
    },
    {
      img: itoph23,
      pname: "IT Ladkrabang Open House",
      date: "IT KMITL Project",
      description:
        "This website was developed for the IT Ladkrabang Open House event to provide detailed information about the event's activities and enable students to register for them easily. The platform facilitates a smooth experience for attendees to explore, register, and participate in university-led sessions.",
    },
    {
      img: ppm,
      pname: "Prime Project Management",
      date: "Final project",
      description:
        "A web application designed to manage tasks, sprints, progress tracking, and resource allocation for IT project teams. Built for academic use, it allows professors and students to organize and manage projects using Scrum methodology through a centralized tool.",
    },
  ];

  return (
    <div className="px-4 py-12 container items-center mx-auto text-white">
      <h1 className="text-5xl font-bold mb-4 relative w-fit after:content-[''] after:block after:w-16 after:h-1 after:bg-cyan-400 after:mt-2">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}

          >
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8 my-8 p-6 bg-white/5 rounded-xl border border-black shadow-lg hover:bg-white/10 transition duration-300 cursor-pointer`}
            >
              <img
                className="w-[500px] h-[250px] object-cover rounded-xl shadow-lg relative border border-black "
                src={project.img}
                alt="KLINIC"
              />
              <div>
                <span className="text-2xl font-semibold">
                  {project.pname}{" "}
                  <span className="text-gray-500">/ {project.date}</span>
                </span>
                <p className="pt-4 text-lg leading-relaxed text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;
