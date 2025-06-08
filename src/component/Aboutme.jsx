import { motion } from "framer-motion";

function AboutMe() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 5, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container mx-auto px-4 py-12 text-white"
    >
      <div className="mx-auto">
        <h1 className="text-5xl font-bold mb-6 relative w-fit after:content-[''] after:block after:w-16 after:h-1 after:bg-cyan-400 after:mt-2">
          About me
        </h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Hi, I'm Phuri. I'm currently a 4th-year Software Engineering student.
          I’ve had experience working in front-end development and interning in
          UX/UI design, which gave me a good understanding of how a product comes
          to life — from design to real-world use.
          <br />
          <br />
          Recently, I've been really interested in the DevOps field. I’m curious
          about how systems run smoothly behind the scenes — things like
          deployment, automation, CI/CD, and infrastructure. I see DevOps as the
          backbone that helps development teams work more efficiently and
          reliably.
          <br />
          <br />
          I'm someone who loves to learn and explore new things. I want to grow
          beyond just writing code or designing interfaces and really understand
          how the whole system works. My goal is to become a developer who
          understands users, code, and the system architecture altogether.
          <br />
          <br />
          Thanks for reading!
        </p>
      </div>
    </motion.div>
  );
}

export default AboutMe;
