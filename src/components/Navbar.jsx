import { useState, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";

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

  return (
    <header
      className={`top-0 sticky z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "shadow-lg bg-black/90" : "bg-transparent"
      }`}
    >
      <nav className="backdrop-blur-md backdrop-saturate-150 px-4 lg:px-12 py-3 font-[poppins]">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen">
          <Link
            to="/"
            className=" text-2xl font-bold tracking-wide transition-all duration-300 ease-in-out hover:text-red-800 hover:scale-101"
          >
            Satyam
          </Link>
          <div className="hidden lg:flex items-center w-auto lg:order-1">
            <ul className="flex flex-row space-x-2 lg:space-x-12 font-medium text-lg">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/skills", label: "Skills" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `block py-2 px-5  transition-all duration-200 ${
                        isActive ? " " : "text-white"
                      } hover:text-red-800  hover:underline underline-offset-8`
                    }
                  >
                    {label}
                  </NavLink>
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
