import { useState } from "react";
import ReviewOnScroll from "../ReviewOnScroll";

export default function Projects() {
  const [text, setText] = useState("");
  const projects = [
    {
      title: "Cloud Platform",
      description:
        "Scalable cloud infrastructure built with React, Node.js, AWS, and Docker to handle modern web apps efficiently.",
      tech: ["React", "Node.js", "AWS", "Docker"],
      link: "#",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "A responsive admin dashboard for managing products and orders with real-time analytics.",
      tech: ["Next.js", "TailwindCSS", "MongoDB"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio showcasing projects, animations, and smooth scroll transitions.",
      tech: ["React", "Framer Motion", "Vite"],
      link: "#",
    },
    {
      title: "Chat App",
      description:
        "A real-time chat application with authentication and socket-based messaging.",
      tech: ["React", "Node.js", "Socket.io"],
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
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:bg-white/5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] cursor-pointer transition-all"
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
