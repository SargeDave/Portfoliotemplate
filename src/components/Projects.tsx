import { ExternalLink, Github, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Image2Web',
    description: 'Image2Web is a web application that can turn physical hand-drawn sketch wireframes into actual HTML and CSS code! Utilizes Python, TensorFlow, and Keras for model training along with the code generation. Website is hosted on Firebase and uses Firestore for database purposes, Cloud Run is utilized to run necessary python scripts on website.',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW58ZW58MXx8fHwxNzY0NDM4ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Python', 'TensorFlow', 'Keras', 'Firebase', 'Cloud Run'],
    liveUrl: 'https://image2web-1a6c0.web.app/',
    githubUrl: 'https://github.com/SargeDave/Image2Web',
    stars: 1,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="text-emerald-400 font-mono">// Projects</span>
          </div>
          <h2 className="text-white mb-4">Featured Work</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of projects that demonstrate my technical skills, problem-solving abilities, 
            and passion for building impactful software.
          </p>
        </div>

        <div className="flex justify-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/20 max-w-2xl w-full"
            >
              <div className="relative overflow-hidden group">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-gray-900 rounded-full hover:bg-emerald-500 transition-colors"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-3 bg-gray-900 rounded-full hover:bg-emerald-500 transition-colors"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white">{project.title}</h3>
                  <div className="flex items-center text-gray-400">
                    <Star size={16} className="text-yellow-500 mr-1" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-900 text-emerald-400 rounded-full text-xs border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/SargeDave"
            className="inline-flex items-center px-6 py-3 border border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500 hover:text-white transition-colors"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}