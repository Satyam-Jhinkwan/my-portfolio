function Footer() {
  return (
    <footer className="text-white border-t-1 bg-black/70 border-neutral-600 py-10 z-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
        <span className="text-sm">
          &copy; {new Date().getFullYear()} Satyam Jhinkwan. All rights
          reserved.
        </span>
        <div className="flex space-x-12 mt-4 md:mt-0">
          <a
            href="https://github.com/Satyam-Jhinkwan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/satyam-jhinkwan-90b0432b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
