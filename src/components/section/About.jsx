import ReviewOnScroll from "../ReviewOnScroll";

export default function About() {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Bootstrap",
  ];
  const backendSkills = ["Node.js", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-cyan-400 bg-clip-text text-transparent">
            About me 
          </h2>

          {/* Glass Card */}
          <div className="backdrop-blur-md rounded-xl p-8 border hover:-translate-y-1 cursor-pointer transition-transform duration-300 ease-out">
            <p className="text-gray-300 mb-6">
              Passionate developer with a strong interest in modern web
              technologies and creating smooth user experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300 ease-out">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-600 text-white py-1 px-3 rounded-full text-sm hover:bg-green-800 hover:shadow-[0_2px_8px_rgba(59,130,246,0.8)] transition-colors duration-200 ease-out"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-transform duration-300 ease-out">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-600 text-white py-1 px-3 rounded-full text-sm hover:bg-green-800 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-colors duration-200 ease-out"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-300 ease-out">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S. in Computer Science</strong> – XYZ University
                  (2020–2025)
                </li>
                <li>
                  Relevant Courses: Data Structures, Web Development, Cloud
                  Computing
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-transform duration-300 ease-out">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="font-semibold">
                    Software Engineer at ABC (2022–2023)
                  </h3>
                  <p>Developed and maintained modern web applications.</p>
                </div>
                <div>
                  <h3 className="font-semibold">
                    Frontend Intern at DEF Startup (2023)
                  </h3>
                  <p>
                    Assisted in building reusable components and integrating
                    APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
}
