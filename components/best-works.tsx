import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Code } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BestWorks() {
  const projects = [
    {
      id: 1,
      title: "ECL Parcel",
      description: "Logistics Website",
      image: "/ecl.png?height=200&width=400",
      link: "https://www.eclparcel.in/",
      target: "_blank",
      rel: "noopener noreferrer",
      technologies: ["js", "react", "nextjs", "tailwindcss"],
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description: "Portfolio Website",
      image: "/cv.png?height=200&width=400",
      link: "#",
      technologies: ["js", "react", "ts", "tailwindcss"],
    },
  ]

  return (
    <section id="projects" className="py-16">
      <div className="flex items-center justify-center gap-2 mb-12 animate-fade-in-up">
        <Code className="text-cyan-400" />
        <h2 className="text-3xl font-bold">
          Some of my <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">Best Works</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className="glass-card overflow-hidden animate-fade-in-up hover-lift"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <CardContent className="p-0">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-start p-6">
              <div className="flex justify-between w-full mb-4">
                <h3 className="text-xl font-bold text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">{project.title}</h3>
                <Link href={project.link} className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {project.description} <ArrowRight className="inline h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <div 
                    key={tech} 
                    className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      tech === "js" ? "bg-yellow-500" : 
                      tech === "react" ? "bg-cyan-500" : 
                      tech === "ts" ? "bg-blue-600" :
                      tech === "nextjs" ? "bg-gray-800" :
                      tech === "tailwindcss" ? "bg-cyan-600" :
                      tech === "mongodb" ? "bg-green-700" :
                      tech === "git" ? "bg-red-500" :
                      tech === "ai" ? "bg-purple-500" :
                      tech === "html5" ? "bg-orange-500" :
                      tech === "css3" ? "bg-blue-500" :
                      tech === "nodejs" ? "bg-green-500" :
                      tech === "python" ? "bg-blue-400" :

                      "bg-blue-600"
                    }`}
                  >
                    {tech === "js" && "JavaScript"}
                    {tech === "react" && "React"}
                    {tech === "ts" && "TypeScript"}
                    {tech === "nextjs" && "Next.js"}
                    {tech === "tailwindcss" && "Tailwind CSS"}
                    {tech === "mongodb" && "MongoDB"}
                    {tech === "git" && "Git & GitHub"}
                    {tech === "ai" && "AI Integration"}
                    {tech === "html5" && "HTML5"}
                    {tech === "css3" && "CSS3"}
                    {tech === "nodejs" && "Node.js"}
                    {tech === "python" && "Python"}
                  </div>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:shadow-glow transition-all duration-300">
          <Link href="https://github.com/Kush05Bhardwaj?tab=repositories" target="_blank" rel="noopener noreferrer">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
