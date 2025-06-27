import { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Projects",
    },
    {
      title: "Skills",
    },
    {
      title: "Contact",
    },
  ];

  const NavLink = ({ title }) => (
    <LinkScroll
      to={title.toLowerCase()}
      spy
      smooth
      activeClass="nav-active"
      className="block py-2 px-5 transition-all text-white duration-500 hover:text-red-800 hover:underline underline-offset-8 cursor-pointer"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        hasScrolled ? "py-1 shadow-lg bg-black/80" : "bg-transparent py-5"
      )}
    >
      <nav className="backdrop-blur-[1px] backdrop-saturate-150 px-4 lg:px-12 py-3 font-[poppins]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
          <LinkScroll
            to="home"
            spy
            smooth
            className="text-2xl font-bold tracking-wide transition-all duration-300 ease-in-out hover:text-red-800 hover:scale-101 cursor-pointer"
          >
            Satyam
          </LinkScroll>
          <div className="flex items-center w-auto order-1">
            <ul className="flex flex-row space-x-2 lg:space-x-12 font-medium text-lg">
              {navItems.map((item) => (
                <li key={item.title}>
                  <NavLink title={item.title} />
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
