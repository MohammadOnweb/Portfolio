import { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";
export default function Home() {
  // function DownloadCV(){
  //   const[loading, setLoading]  = useState(false)
  //   const handleDownloa = (e) =>{

  //     e.preventDefault();
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //       const link = document.createElement('a');
  //       link.href = 'images/CV.pdf';
  //       link.download = 'my-cv.pdf';
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.re
        
  //     }, 2000);
  //   }
  // }
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <ReviewOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm Mohammad
          </h1>
          <p className="text-gray-200  text-lg mb-8 max-w-lg max-auto ">
          I'm a junior web developer passionate about building responsive websites with React, Tailwind, and modern tools. I enjoy solving problems and love working in collaborative team environments to bring ideas to life.

          </p>

          <div className="flex justify-center space-x-4">
      <a href="images/CV.pdf" download className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-white font-medium transition">Download CV</a>
      <a href="#projects" className="border border-green-600 px-6 py-3 rounded text-white font-medium hover:bg-green-600 transition">View Projects</a>
    </div>

        </div>
      </ReviewOnScroll>
    </section>
  );
}
