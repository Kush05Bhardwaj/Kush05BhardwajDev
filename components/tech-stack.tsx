import { Laptop } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function TechStack() {
  const technologies = [
    { name: "HTML", icon: "html5", color: "bg-orange-500", percentage: 90 },
    { name: "CSS", icon: "css3", color: "bg-blue-500", percentage: 75 },
    { name: "JavaScript", icon: "js", color: "bg-yellow-500", percentage: 75 },
    { name: "React", icon: "react", color: "bg-cyan-500", percentage: 70 },
    { name: "Node.js", icon: "nodejs", color: "bg-green-500", percentage: 50 },
    { name: "TypeScript", icon: "ts", color: "bg-blue-600", percentage: 75 },
    { name: "Next.js", icon: "nextjs", color: "bg-blue-700", percentage: 50 },
    { name: "Python", icon: "python", color: "bg-blue-400", percentage: 60 },
    { name: "Tailwind CSS", icon: "tailwindcss", color: "bg-cyan-600", percentage: 70 },
    { name: "MongoDB", icon: "mongodb", color: "bg-green-700", percentage: 40 },
    { name: "Git & GitHub", icon: "git", color: "bg-red-500", percentage: 70 },
    { name: "AI Integration (LLMs, APIs)", icon: "ai", color: "bg-purple-500", percentage: 50 },
  ]

  return (
    <section id="skills" className="py-16">
      <div className="flex items-center justify-center gap-2 mb-12 animate-fade-in-up">
        <Laptop className="text-cyan-400" />
        <h2 className="text-3xl font-bold">
          This is my <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">Tech Stack</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="animate-fade-in-right glass-card p-6 hover-lift"
            style={{ animationDelay: `${0.15 + index * 0.05}s` }}
          >
            <div className="flex justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded ${tech.color === "bg-orange-500" ? "bg-orange-500" : tech.color === "bg-blue-500" ? "bg-blue-500" : tech.color === "bg-yellow-500" ? "bg-yellow-500" : tech.color === "bg-cyan-500" ? "bg-cyan-500" : tech.color === "bg-green-500" ? "bg-green-500" : "bg-blue-600"}`}
                >
                  {tech.icon === "html5" && <span className="text-white text-xs">H</span>}
                  {tech.icon === "css3" && <span className="text-white text-xs">C</span>}
                  {tech.icon === "js" && <span className="text-white text-xs">JS</span>}
                  {tech.icon === "react" && <span className="text-white text-xs">R</span>}
                  {tech.icon === "nodejs" && <span className="text-white text-xs">N</span>}
                  {tech.icon === "ts" && <span className="text-white text-xs">TS</span>}
                  {tech.icon === "nextjs" && <span className="text-white text-xs">N</span>}
                  {tech.icon === "python" && <span className="text-white text-xs">P</span>}
                  {tech.icon === "tailwindcss" && <span className="text-white text-xs">T</span>}
                  {tech.icon === "mongodb" && <span className="text-white text-xs">M</span>}
                  {tech.icon === "git" && <span className="text-white text-xs">G</span>}
                  {tech.icon === "ai" && <span className="text-white text-xs">AI</span>}

                </div>
                <span className="font-medium">{tech.name}</span>
              </div>
              <span className="text-sm text-gray-400">{tech.percentage}%</span>
            </div>
            <Progress value={tech.percentage} className="h-2 bg-zinc-800" indicatorClassName={tech.color} />
          </div>
        ))}
      </div>
    </section>
  )
}
