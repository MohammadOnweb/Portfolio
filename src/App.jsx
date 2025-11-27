import "./index.css";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Project from "./components/section/Projects";
import Contact from "./components/section/Contact";
import { useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() =>{
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000);
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      {loading ? <LoadingScreen />: 
      <div
        className="min-h-screen transition-opacity duration-700 bg-black "
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>}
    </>
  );
}

export default App;
