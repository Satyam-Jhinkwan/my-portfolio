import { FocusCards } from "../components/ui/focus-card";
import skills from "../data/skills";
import { Cover } from "../components/ui/Cover";
function Skills() {
  const cards = skills.map((skill) => ({
    title: skill.title,
    src: skill.src,
  }));

  return (
    <section className="min-h-screen px-4 py-24 flex items-center relative align-center">
      <div className="max-w-5xl mx-auto w-full z-10">
        <h2 className="text-5xl mb-12 text-center ">
          <Cover>Skills</Cover>
        </h2>
        <FocusCards cards={cards} />
      </div>
    </section>
  );
}

export default Skills;
