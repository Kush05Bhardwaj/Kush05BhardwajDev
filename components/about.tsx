"use client"

import { User } from "lucide-react"
import { useState, useEffect } from "react"

export default function About() {
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const codeText = `
function aboutMe() {
  const developer = {
    name: "Kushagra Bhardwaj",
    title: "Web Developer",
    location: "Gurgaon, Haryana, India",
    interests: ["Web Development", "AI", "ML", "Open Source, and more..."],
    skills: ["React", "Next.js", "Node.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "MongoDB", "and more..."
    ],
    experience: "1+ years"
  };

  goal: function() {
    return "To create amazing digital experiences that solve real problems and delight users."
  }
}

aboutMe();`

  useEffect(() => {
    if (currentIndex < codeText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + codeText[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 30)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, codeText])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <section id="about" className="py-16">
      <div className="flex items-center justify-center gap-2 mb-12 animate-fade-in-up">
        <User className="text-cyan-400" />
        <h2 className="text-3xl font-bold">
          About <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
        </h2>
      </div>

      {/* Stats section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { value: "4+", label: "Projects Completed" },
          { value: "1+", label: "Years of Experience" },
          { value: "2+", label: "Happy Clients" },
          { value: "8+", label: "Technologies" },
        ].map((stat, index) => (
          <div
            key={index}
            className="glass-card p-6 text-center animate-fade-in-up hover-lift"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <div className="text-3xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        {/* Bio section */}
        <div className="lg:col-span-2">
          <div className="rounded-xl p-6 h-full border border-zinc-800/30 backdrop-blur-sm bg-zinc-900/10">
            <h3 className="text-xl font-bold mb-4 text-indigo-400">Who am I?</h3>
            <p className="text-gray-300 mb-4">
              I'm a B.Tech student who likes coding and stuff. I specialize in solving real-world problems using AI and web technologies. 
              I always have an eye for new technologies and trends in the industry. 
            </p>
            <p className="text-gray-300 mb-4">
              With experience in web development, I've worked with a clients from startups to
              established businesses, helping them achieve their digital goals.
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">My Interests:</h4>
              <div className="flex flex-wrap gap-2">
                {["Game Development", "Web Development", "AI", "ML", "Open Source,", "and more..."].map((interest, i) => (
                  <span key={i} className="bg-indigo-600/20 text-indigo-400 px-3 py-1 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Code editor section */}
        <div className="lg:col-span-3">
          <div className="rounded-xl overflow-hidden h-full border border-zinc-800/30 backdrop-blur-sm bg-zinc-900/10">
            {/* Code editor header */}
            <div className="bg-zinc-800 px-4 py-2 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400 ml-2">about.js</div>
            </div>

            {/* Line numbers and code */}
            <div className="flex">
              <div className="bg-zinc-800/50 text-right py-4 px-2 select-none">
                {Array.from({ length: typedText.split("\n").length }).map((_, i) => (
                  <div key={i} className="text-gray-500 text-sm font-mono">
                    {i + 1}
                  </div>
                ))}
              </div>
              <pre className="language-javascript p-4 overflow-auto w-full">
                <code className="font-mono text-sm">
                  {typedText.split("\n").map((line, i) => (
                    <div key={i} className="line">
                      {line.includes("function aboutMe") && (
                        <span>
                          <span className="text-yellow-300">function</span>
                          <span className="text-cyan-300"> aboutMe</span>
                          <span className="text-white">() {"{"}</span>
                        </span>
                      )}
                      {line.includes("const details") && (
                        <span>
                          <span className="text-purple-400">  const</span>
                          <span className="text-cyan-300"> developer</span>
                          <span className="text-white"> = {"{"}</span>
                        </span>
                      )}
                      {line.includes("name:") && (
                        <span>
                          <span className="text-indigo-300">    name:</span>
                          <span className="text-green-300"> "Kushagra Bhardwaj"</span>
                          <span className="text-white">,</span>
                        </span>
                      )}
                      {line.includes("title:") && (
                        <span>
                          <span className="text-indigo-300">    title:</span>
                          <span className="text-green-300"> "Web Developer"</span>
                          <span className="text-white">,</span>
                        </span>
                      )}
                      {line.includes("location:") && (
                        <span>
                          <span className="text-indigo-300">    location:</span>
                          <span className="text-green-300"> "Gurgaon, Haryana, India,"</span>
                          <span className="text-white">,</span>
                        </span>
                      )}
                      {line.includes("interests:") && (
                        <span>
                          <span className="text-indigo-300">    interests:</span>
                          <span className="text-white"> [</span>
                        </span>
                      )}
                      {line.includes('"Web Development", "AI", "ML", "Open Source, and more..."') && (
                        <span>
                          <span className="text-green-300"> "Web Development", "AI", "ML", "Open Source, and more..."</span>
                        </span>
                      )}
                      
                      {line.includes("skills:") && (
                        <span>
                          <span className="text-indigo-300">    skills:</span>
                          <span className="text-white"> [</span>
                        </span>
                      )}
                      {line.includes('"React", "Next.js", "Node.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "MongoDB"') && (
                        <span>
                          <span className="text-green-300"> "React", "Next.js", "Node.js", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "MongoDB"</span>
                        </span>
                      )}
                      {line.includes("],") && (
                        <span>
                          <span className="text-white">    ]</span>
                          <span className="text-white">,</span>
                        </span>
                      )}
                      {line.includes("experience:") && (
                        <span>
                          <span className="text-indigo-300">    experience:</span>
                        </span>
                      )}
                      {line.includes("1+ years") && (
                        <span>
                          <span className="text-green-300"> "1+ years":</span>
                        </span>

                      )}
                      {line.includes("  },") && (
                        <span>
                          <span className="text-white">    {"}"}</span>
                          <span className="text-white">,</span>
                        </span>
                      )}
                      {line.includes("goal:") && (
                        <span>
                          <span className="text-indigo-300">  goal:</span>
                          <span className="text-yellow-300"> function</span>
                          <span className="text-white">() {"{"}</span>
                        </span>
                      )}
                      {line.includes("return \"To create") && (
                        <span>
                          <span className="text-purple-400">    return</span>
                          <span className="text-green-300">
                            {" "}
                            "To create amazing digital experiences that solve real problems and delight users."
                          </span>
                          <span className="text-white">;</span>
                        </span>
                      )}
                      {line.includes("}") && (
                        <span>
                          <span className="text-white">  {"}"}</span>
                        </span>
                      )}

                      {line.includes("aboutMe();") && (
                        <span>
                          <span className="text-cyan-300">aboutMe</span>
                          <span className="text-white">();</span>
                        </span>
                      )}
                    </div>
                  ))}
                  {showCursor && currentIndex < codeText.length && <span className="text-white animate-pulse">|</span>}
                </code>
              </pre>
            </div>

            {/* Terminal output */}
            {currentIndex >= codeText.length && (
              <div className="bg-black p-4 border-t border-zinc-700">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-400">➜</span>
                  <span className="text-cyan-400">~</span>
                  <span className="text-white">node about.js</span>
                </div>
                <div className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500 font-mono text-sm mt-2">
                  I'm a passionate Full Stack Developer with expertise in creating beautiful and functional web
                  applications. I specialize in building responsive websites, and web applications using
                  modern technologies and frameworks.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
