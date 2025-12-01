import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4 text-emerald-400">Sarge Dave Moyano</h3>
            <p className="text-gray-400">
              Full-Stack Developer passionate about creating elegant solutions to complex problems.
            </p>
            <p className="text-gray-500 mt-4 font-mono text-sm">
              $ git commit -m "Building the future"
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-emerald-400">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="p-2 bg-gray-900 rounded-lg hover:bg-emerald-500 transition-colors border border-gray-800"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="p-2 bg-gray-900 rounded-lg hover:bg-emerald-500 transition-colors border border-gray-800"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="p-2 bg-gray-900 rounded-lg hover:bg-emerald-500 transition-colors border border-gray-800"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:sarge.moyano@example.com"
                className="p-2 bg-gray-900 rounded-lg hover:bg-emerald-500 transition-colors border border-gray-800"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center">
            &copy; {new Date().getFullYear()} Sarge Dave Moyano. Built with <Heart size={16} className="mx-1 text-emerald-400" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
}