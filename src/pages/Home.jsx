import React from "react";

function Home() {
  return (
    <section className="flex items-center justify-center min-h-[95vh] ">
      <div className="max-w-3xl w-full text-center p-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow">
          Hi, I’m <span className="text-red-700">Satyam Jhinkwan</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-red-700 mb-6 font-medium">
          Aspiring Full Stack Developer{" "}
          <span className="animate-bounce inline-block">🚀</span>
        </h2>
        <p className="text-white text-lg md:text-xl mb-10 leading-relaxed">
          I’m a passionate developer with skills in{" "}
          <span className="font-semibold text-red-700">React</span>,{" "}
          <span className="font-semibold text-red-700">JavaScript</span>,{" "}
          <span className="font-semibold text-red-700">Python</span>, and{" "}
          <span className="font-semibold text-red-700">C++</span>. Currently
          pursuing{" "}
          <span className="font-semibold">B.Tech in Computer Science</span> and
          aiming to build impactful software solutions.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a
            href="./assets/Satyam_Jhinkwan_Resume.docx"
            download
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow transition duration-200 transform hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="/contact"
            className="border-2 border-red-600 text-red-600 hover:bg-red-100 font-semibold py-3 px-8 rounded-lg transition duration-200 transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
