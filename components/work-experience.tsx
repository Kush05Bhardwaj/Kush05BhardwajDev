import { Card, CardContent } from "@/components/ui/card"
import { log } from "console"
import { Briefcase } from "lucide-react"

export default function WorkExperience() {
  const experiences = [
    {
      id: 2,
      company: "KR Mangalam University",
      role: "Student",
      logo: "/kr.png",
      period: "Aug 2024 - Present",
      description: "I am a student at KR Mangalam University. I am pursuing B.Tech in Computer Science.",
    },
    {
      id: 3,
      company: "Cognifyz Technologies",
      role: "Web Developer Intern",
      logo: "/cognifyz-1.png",
      period: "May 2025 - Present",
      description: "I worked as a Web Dev INtern at Cognifyz Technologies.",
    },
    {
      id: 1,
      company: "Fiverr",
      role: "Freelancer",
      logo: "/fiverr.png",
      period: "Apr 2024 - Present",
      description: "I am a freelancer on Fiverr. I provide services like web development and web design.",
    },
    
  ]

  return (
    <section id="experience" className="py-16">
      <div className="flex items-center justify-center gap-2 mb-12 animate-fade-in-up">
        <Briefcase className="text-cyan-400" />
        <h2 className="text-3xl font-bold">
          My prior <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">Work Experience</span>
        </h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={exp.id}
            className="glass-card animate-fade-in-up hover-lift"
            style={{ animationDelay: `${0.1 + index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-8 h-8 rounded-full"
                  />
                  <h3 className="font-medium">{exp.company}</h3>
                </div>
                <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">{exp.role}</span>
              </div>
              <p className="mt-4 text-gray-300">{exp.description}</p>
              <p className="mt-2 text-sm text-gray-400">{exp.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
