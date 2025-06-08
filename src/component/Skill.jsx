import { motion } from "framer-motion";

function Skill() {
  const skills = [
    {
      category: "Language",
      items: [
        { name: "HTML", icon: "devicon-html5-plain colored" },
        { name: "CSS", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      ],
    },
    {
      category: "Frontend",
      items: [
        { name: "React", icon: "devicon-react-plain colored" },
        { name: "Vue", icon: "devicon-vuejs-plain colored" },
        { name: "Angular", icon: "devicon-angularjs-plain colored" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Express", icon: "devicon-express-original" },
        { name: "Prisma", icon: "devicon-prisma-original" },
      ],
    },
    {
      category: "Database",
      items: [
        { name: "Mysql", icon: "devicon-mysql-original" },
        { name: "MongoDB", icon: "devicon-mongodb-plain" },
      ],
    },
    {
      category: "DevOps",
      items: [
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
        { name: "Jenkins", icon: "devicon-jenkins-plain" },
      ],
    },
    {
      category: "Design",
      items: [
        { name: "Figma", icon: "devicon-figma-plain colored" },
        { name: "llustrator", icon: "devicon-illustrator-plain colored" },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto px-4 py-12 text-white"
    >
      <div className="px-4 py-12 container mx-auto text-white">
        <h1 className="text-5xl font-bold mb-6 relative w-fit after:content-[''] after:block after:w-16 after:h-1 after:bg-cyan-400 after:mt-2">
          Tools
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-16 gap-y-14">
          {skills.map((phuriq) => (
            <div key={phuriq.category}>
              <h2 className="text-lg leading-relaxed text-gray-300 mb-4">
                {phuriq.category}
              </h2>
              <div className="flex flex-wrap gap-6">
                {phuriq.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 px-6 py-4 w-[220px] bg-black border border-gray-800 rounded-xl hover:bg-gray-800 transition duration-300 cursor-pointer shadow-md"
                  >
                    <i className={`${item.icon} text-3xl`}></i>
                    <span
                      className="text-lg font-medium truncate"
                      title={item.name}
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
