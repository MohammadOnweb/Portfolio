export default function MobileMenu({ menuOpen, setMenuOpen }) {
    console.log("munopen:", menuOpen);
    return (
      <div
        className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.4)] z-50 flex  flex-col items-center justify-center
          ${
            menuOpen
              ? "h-screen opacity-100 pointer-events-auto"
              : "h-0 opacity-0 pointer-events-none"
          }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl z-[9999] focus:outline-none cursor-pointer"
          aria-label="close Menu"
        >
          &times;
        </button>
        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
        >
          Projects
        </a>
        <a
          href="#skills"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
        >
          Skills
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
              ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
              }`}
        >
          Contact
        </a>
      </div>
    );
  }
  