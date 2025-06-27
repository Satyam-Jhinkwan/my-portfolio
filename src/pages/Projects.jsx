import projects from "../data/projects";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Cover } from "../components/ui/Cover";
import { motion } from "motion/react";
import { Element } from "react-scroll";

function Projects() {
  return (
    <Element name="projects">
      <section className="min-h-screen py-20 flex items-center">
        <div className="max-w-6xl mx-auto mt-10 mb-10">
          <motion.h2
            initial={{ opacity: 0.1, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="text-4xl md:text-5xl text-center mb-8 drop-shadow-lg "
          >
            <Cover>Projects</Cover>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="grid gap-x-20 sm:grid-cols-2 lg:grid-cols-2"
          >
            {projects.map(({ id, title, description, tech, link }) => (
              <CardContainer
                key={id}
                className="bg-white dark:bg-neutral-900 border border-orange-100 dark:border-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col "
              >
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="text-2xl font-bold mb-2 text-neutral-900 dark:text-white"
                  >
                    {title}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className=" text-neutral-700 dark:text-neutral-300 mb-4"
                  >
                    {description}
                  </CardItem>

                  <CardItem
                    translateZ="50"
                    className=" mb-4 text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <strong className="font-semibold text-orange-500">
                      Tech:
                    </strong>{" "}
                    {tech.join(", ")}
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    as="a"
                    href={link}
                    target="__blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-auto px-4 py-2 rounded bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
                  >
                    View on GitHub
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </motion.div>
        </div>
      </section>
    </Element>
  );
}

export default Projects;
