import profilImage from '/public/images/mmm.JPG'
import { useEffect } from "react";
export default function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black border-b shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
           <img src={profilImage} alt="Photo" className="w-10 h-10 rounded-full mr-2" />
          </a>

          {/* Hamburger Menu Icon */}
          <div
            className="w-7 h-7 relative cursor-pointer z-50 md:hidden text-white text-2xl"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#tutorials" className="text-gray-300 hover:text-white transition-colors">Tutorials</a>
            <a href="#youtube" className="text-gray-300 hover:text-white transition-colors">YouTube</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        {/* Mobile Menu */}
        {/* {menuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-200 bg-opacity-80">
            <a href="#home" className="text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" className="text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#contact" className="text-white hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )} */}
      </div>
    </nav>
  );
}

