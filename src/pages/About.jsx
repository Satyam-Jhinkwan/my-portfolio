import profilePic from "../assets/Profile.jpeg";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import { Cover } from "../components/ui/Cover";

function About() {
  return (
    <HeroHighlight>
      <section className="flex flex-col md:flex-row justify-center items-center min-h-screen text-white px-4 md:px-24 ">
        <motion.img
          initial={{ opacity: 0.1, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            ease: "easeInOut",
          }}
          src={profilePic}
          alt="Satyam Jhinkwan"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-red-700 shadow-xl ring-4 ring-red-900/30 hover:scale-105 transition-transform duration-300 mb-8 md:mb-0 md:mr-12"
        />
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0.1, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-4xl md:text-5xl mb-6 drop-shadow-lg "
          >
            <Cover>About Me</Cover>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0.1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-lg md:text-xl mb-4 leading-relaxed"
          >
            Hello! I'm{" "}
            <strong className="text-red-400 font-semibold">
              Satyam Jhinkwan
            </strong>
            , a B.Tech Computer Science student at the University of Petroleum
            and Energy Studies.
          </motion.p>
          <motion.p
            initial={{ opacity: 0.1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-lg md:text-xl mb-4 leading-relaxed"
          >
            I'm passionate about{" "}
            <span className="font-semibold text-red-400">
              full-stack development
            </span>
            , open-source contributions, and building projects that make a
            difference. My skills include{" "}
            <Highlight>React.js, Javascript, Python, C++ and MySQL.</Highlight>
          </motion.p>
          <motion.p
            initial={{ opacity: 0.1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-lg md:text-xl leading-relaxed"
          >
            I’m constantly learning and looking forward to collaborating with
            like-minded people and contributing to real-world software
            solutions.
          </motion.p>
        </div>
      </section>
    </HeroHighlight>
  );
}

export default About;
