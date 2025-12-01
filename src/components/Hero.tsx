import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Code2,
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-16 relative overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
              <Code2 size={64} className="text-white" />
            </div>
          </div>

          <div className="mb-4">
            <span className="text-emerald-400 font-mono text-sm">
              const developer = &#123;
            </span>
          </div>

          <h1 className="text-white mb-2">
            Hi, I'm Sarge Dave Moyano
          </h1>

          <div className="text-emerald-400 font-mono text-xl mb-4">
            Computer Science Intern
          </div>

          <p className="text-gray-300 max-w-2xl mx-auto mb-2">
            Passionate about building scalable applications,
            solving complex algorithms, and contributing to
            open-source projects. Specialized in modern web
            technologies, cloud architecture, and software
            engineering best practices.
          </p>

          <div className="text-emerald-400 font-mono text-sm mb-8">
            &#125;;
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/SargeDave?tab=repositories"
              className="px-8 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center"
            >
              <Github className="mr-2" size={20} />
              View GitHub
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors"
            >
              See Projects
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sarge.moyano@example.com"
              className="text-gray-400 hover:text-emerald-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ArrowDown
              className="mx-auto text-emerald-400"
              size={32}
            />
          </div>
        </div>
      </div>
    </section>
  );
}