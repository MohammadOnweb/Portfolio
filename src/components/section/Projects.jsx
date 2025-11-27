import { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";

export default function Projects() {
  const [text, setText] = useState("");
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A responsive website built with React and Tailwind CSS to showcase my skills, projects,and contact information.",
      tech: ["React", "Tailwind CSS", "GitHub Pages"],
      link: "#",
    },
    {
      title: "To-Do List App",
      description:
        " A simple app to add, delete, and mark tasks as complete, Focused on clean UI and basic React state management.",
      tech: ["React", "TailwindCSS",],
      link: "#",
    },
    {
      title: "Weather App",
      description:
        " Fetches real-time weather data using an extenal API. Allows users to search by city name",
      tech: ["HTML", "Css", "JavaScript"],
      link: "#",
    },
    {
      title: "Blog Page Design",
      description:
        "Design a static blog hompage layout as a practice project for responsive design.",
      tech: ["HTML", "CSS", "Flexbox", "Grid"],
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
 

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-green-600 hover:-translate-y-1 hover:bg-green-800 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] cursor-pointer transition-all"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-green-600 text-white py-1 px-3 rounded-full text-sm hover:bg-green-800 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="text-green-600 hover:text-green-800 transition-colors my-4 inline-block"
                >
                  View Project ✅
                </a>
              </div>
            ))}
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
}
