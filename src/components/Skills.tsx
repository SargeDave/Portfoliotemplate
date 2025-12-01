import { Code2, Database, Cloud, GitBranch, Terminal, Package } from 'lucide-react';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['JavaScript/TypeScript', 'Python', 'Java', 'C++', 'Go', 'SQL'],
  },
  {
    icon: Package,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Redux', 'Webpack'],
  },
  {
    icon: Database,
    title: 'Backend & Databases',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Nginx', 'Terraform'],
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    skills: ['Git', 'GitHub Actions', 'GitLab CI', 'Monorepos', 'Code Review'],
  },
  {
    icon: Terminal,
    title: 'Tools & Methods',
    skills: ['Linux', 'Agile', 'Testing', 'Microservices', 'REST APIs', 'WebSockets'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="text-emerald-400 font-mono">// Skills</span>
          </div>
          <h2 className="text-white mb-4">Technical Stack</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies I use to build modern applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-6 bg-gray-900 border border-gray-700 rounded-lg hover:border-emerald-500 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gray-800 rounded-lg mr-4 border border-gray-700">
                    <Icon size={24} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm border border-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Contribution Graph Style Element */}
        <div className="mt-16 p-8 bg-gray-900 rounded-lg border border-gray-700">
          <h3 className="text-white mb-6 text-center">Continuous Learning & Development</h3>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 56 }).map((_, i) => (
              <div
                key={i}
                className="h-8 rounded"
                style={{
                  backgroundColor: 
                    i % 7 === 0 || i % 7 === 6 ? '#1f2937' : 
                    Math.random() > 0.7 ? '#10b981' :
                    Math.random() > 0.5 ? '#059669' :
                    Math.random() > 0.3 ? '#047857' :
                    '#1f2937'
                }}
              ></div>
            ))}
          </div>
          <p className="text-gray-400 text-center mt-4 text-sm">Active contributor with consistent commits</p>
        </div>
      </div>
    </section>
  );
}