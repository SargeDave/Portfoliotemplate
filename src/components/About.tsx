import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  BookOpen,
  Award,
  GitBranch,
  Users,
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNvZGluZ3xlbnwxfHx8fDE3NjQ1MjQ2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Coding workspace"
              className="rounded-lg shadow-lg w-full h-auto border border-gray-700"
            />
          </div>

          <div>
            <div className="mb-4">
              <span className="text-emerald-400 font-mono">
                // About
              </span>
            </div>
            <h3 className="text-white mb-4 font-normal">
              Computer Science Undergraduate
            </h3>
            <p className="text-gray-300 mb-4">
              I'm a passionate software developer with a strong
              foundation in computer science and a proven track
              record of building robust, scalable applications.
              With expertise in full-stack development, I thrive
              on turning complex problems into elegant
              solutions.
            </p>
            <p className="text-gray-300 mb-4">
              Currently focusing on cloud-native applications,
              microservices architecture, and modern JavaScript
              frameworks. I'm an active contributor to
              open-source projects and believe in writing clean,
              maintainable code that stands the test of time.
            </p>
            <p className="text-gray-300 mb-6">
              When I'm not coding, you'll find me exploring new
              technologies, participating in hackathons, or
              mentoring junior developers in the community.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <GitBranch
                  className="text-emerald-400 mb-2"
                  size={24}
                />
                <p className="text-white">48</p>
                <p className="text-gray-400">GitHub Commits</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <Users
                  className="text-emerald-400 mb-2"
                  size={24}
                />
                <p className="text-white">3</p>
                <p className="text-gray-400">Collaborations</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <BookOpen
                  className="text-emerald-400 mb-2"
                  size={24}
                />
                <p className="text-white">25+</p>
                <p className="text-gray-400">Projects Built</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <Award
                  className="text-emerald-400 mb-2"
                  size={24}
                />
                <p className="text-white">5+</p>
                <p className="text-gray-400">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}