import profilePic from "../assets/Profile.jpeg";
import { motion } from "motion/react";
import { Highlight } from "../components/ui/hero-highlight";
import { Cover } from "../components/ui/Cover";
import { Element } from "react-scroll";

function About() {
  return (
    <Element name="about">
      <section className="relative flex justify-center items-center py-16 md:py-24 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 min-h-[70vh] text-white">
          <motion.img
            src={profilePic}
            alt="Satyam Jhinkwan"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-red-700 shadow-xl ring-4 ring-red-900/30 hover:scale-105 transition-transform duration-300 mb-8 md:mb-0 md:mr-12"
            initial={{ opacity: 0.1, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          />

          <div className="flex-1 text-center md:text-left">
            <motion.h2
              className="text-4xl md:text-5xl mb-6 drop-shadow-lg"
              initial={{ opacity: 0.1, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            >
              <Cover>About Me</Cover>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl mb-4 leading-relaxed"
              initial={{ opacity: 0.1, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            >
              Hello! I'm{" "}
              <strong className="text-red-400 font-semibold">
                Satyam Jhinkwan
              </strong>
              , a B.Tech Computer Science student at the University of Petroleum
              and Energy Studies.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl mb-4 leading-relaxed"
              initial={{ opacity: 0.1, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            >
              I'm passionate about{" "}
              <span className="font-semibold text-red-400">
                full-stack development
              </span>
              , open-source contributions, and building projects that make a
              difference. My skills include{" "}
              <Highlight>
                React.js, Javascript, Python, C++ and MySQL.
              </Highlight>
            </motion.p>

            <motion.p
              className="text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0.1, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeInOut" }}
            >
              I’m constantly learning and looking forward to collaborating with
              like-minded people and contributing to real-world software
              solutions.
            </motion.p>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default About;
