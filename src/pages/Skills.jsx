import { FocusCards } from "../components/ui/focus-card";
import skills from "../data/skills";
import { Cover } from "../components/ui/Cover";
import { motion } from "motion/react";

function Skills() {
  const cards = skills.map((skill) => ({
    title: skill.title,
    src: skill.src,
  }));

  return (
    <section className="min-h-screen px-4 py-24 flex-col items-center relative align-center">
      <motion.h2
        initial={{ opacity: 0.1, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="text-5xl mb-20 text-center "
      >
        <Cover>Skills</Cover>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.6,
          ease: "easeInOut",
        }}
        className="max-w-5xl mx-auto w-full z-10"
      >
        <FocusCards
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: "easeInOut",
          }}
          cards={cards}
        />
      </motion.div>
    </section>
  );
}

export default Skills;
