import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["#home", "#about", "#projects", "#skills", "#contact"];
      const offsets = sections.map((id) => {
        const el = document.querySelector(id);
        return el ? el.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + 80;

      let currentSection = "#home";
      for (let i = 0; i < offsets.length; i++) {
        if (scrollPosition >= offsets[i]) {
          currentSection = sections[i];
        }
      }
      setActiveSection(currentSection);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "shadow-lg bg-black/60" : "bg-transparent"
      }`}
    >
      <nav className="backdrop-blur-[1px] backdrop-saturate-150 px-4 lg:px-12 py-3 font-[poppins]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
          <a
            href="#home"
            className=" text-2xl font-bold tracking-wide transition-all duration-300 ease-in-out hover:text-red-800 hover:scale-101"
            onClick={() => handleNavClick("#home")}
          >
            Satyam
          </a>
          <div className="hidden lg:flex items-center w-auto lg:order-1">
            <ul className="flex flex-row space-x-2 lg:space-x-12 font-medium text-lg">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
                    className={`block py-2 px-5 transition-all duration-200 ${
                      activeSection === href
                        ? "text-red-800 underline underline-offset-8"
                        : "text-white"
                    } hover:text-red-800 hover:underline underline-offset-8`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
