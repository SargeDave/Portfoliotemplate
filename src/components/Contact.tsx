import { Mail, MapPin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="text-emerald-400 font-mono">// Contact</span>
          </div>
          <h2 className="text-white mb-4">Let's Build Something Together</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to discuss tech? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-white mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-gray-800 rounded-lg mr-4 border border-gray-700">
                  <Mail size={24} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white">Email</p>
                  <a href="mailto:sarge.moyano@example.com" className="text-gray-300 hover:text-emerald-400">
                    sarge.moyano@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-gray-800 rounded-lg mr-4 border border-gray-700">
                  <Github size={24} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white">GitHub</p>
                  <a href="https://github.com" className="text-gray-300 hover:text-emerald-400">
                    github.com/sargemoyano
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-gray-800 rounded-lg mr-4 border border-gray-700">
                  <MapPin size={24} className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-white">Location</p>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-emerald-500 to-blue-500 text-white rounded-lg">
              <p className="mb-2">Open to Opportunities</p>
              <p className="text-gray-100">
                Currently available for freelance projects and full-time positions. Let's create something amazing!
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="mb-6">
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors flex items-center justify-center"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}