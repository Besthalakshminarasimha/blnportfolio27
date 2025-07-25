
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'AI Image Classifier',
      description: 'Deep learning model for image classification using TensorFlow and Keras with 95% accuracy.',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV'],
      category: 'AIML',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
      github: 'https://github.com/Besthalakshminarasimha',
      demo: '#'
    },
    {
      title: 'Smart Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization.',
      tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop',
      github: 'https://github.com/Besthalakshminarasimha',
      demo: '#'
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'Natural Language Processing model to analyze sentiment from social media data.',
      tech: ['Python', 'NLTK', 'Scikit-learn', 'Pandas'],
      category: 'AIML',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      github: 'https://github.com/Besthalakshminarasimha',
      demo: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.',
      tech: ['React', 'Express.js', 'MongoDB', 'Tailwind'],
      category: 'Web',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      github: 'https://github.com/Besthalakshminarasimha',
      demo: '#'
    },
    {
      title: 'Computer Vision App',
      description: 'Object detection and tracking application using OpenCV and YOLO algorithm.',
      tech: ['Python', 'OpenCV', 'YOLO', 'NumPy'],
      category: 'AIML',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      github: 'https://github.com/Besthalakshminarasimha',
      demo: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features.',
      tech: ['React', 'Socket.io', 'Node.js', 'PostgreSQL'],
      category: 'Apps',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      github: 'https://github.com/Besthalakshminarasimha',
      demo: '#'
    }
  ];

  const filters = ['All', 'AIML', 'Web', 'Apps'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Explore my latest work in AI/ML, web development, and creative applications
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-md border border-white/30 text-gray-700 dark:text-gray-300 hover:bg-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 dark:bg-gray-700 text-white py-2 px-4 rounded-lg text-center font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
