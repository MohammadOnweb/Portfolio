import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Project from "./components/section/Projects";
import Contact from "./components/section/Contact";
function App() {
  const [isloaded, setIsloaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <>
      {!isloaded && <LoadingScreen onComplete={() => setIsloaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isloaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 `}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
