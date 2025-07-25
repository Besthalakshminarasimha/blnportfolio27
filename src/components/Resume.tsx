
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Resume = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const qualifications = [
    {
      category: 'Technical Skills',
      items: ['Python, JavaScript, TypeScript', 'TensorFlow, PyTorch, Scikit-learn', 'React, Node.js, Express.js', 'MongoDB, PostgreSQL, Git']
    },
    {
      category: 'AI/ML Expertise',
      items: ['Machine Learning Algorithms', 'Deep Learning & Neural Networks', 'Computer Vision & Image Processing', 'Natural Language Processing']
    },
    {
      category: 'Achievements',
      items: ['Published 5+ AI/ML projects on GitHub', 'Contributed to open-source AI libraries', 'Built full-stack applications with 10k+ users', 'Mentored 20+ students in AI/ML concepts']
    },
    {
      category: 'Soft Skills',
      items: ['Problem Solving & Analytical Thinking', 'Team Leadership & Collaboration', 'Project Management', 'Technical Documentation']
    }
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Resume
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            AI & ML Developer passionate about creating intelligent solutions that make a difference
          </p>

          <div className="max-w-6xl mx-auto">
            {/* Summary Card */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 mb-12 text-white">
              <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
              <p className="text-lg leading-relaxed">
                Passionate AI & ML student with hands-on experience in developing intelligent systems 
                and full-stack applications. Proven track record in machine learning, computer vision, 
                and web development. Seeking opportunities to apply cutting-edge AI technologies to 
                solve real-world problems and drive innovation.
              </p>
            </div>

            {/* Qualifications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {qualifications.map((section, index) => (
                <div
                  key={section.category}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    {section.category}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start text-gray-600 dark:text-gray-300"
                      >
                        <span className="text-purple-500 mr-2">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Download Button */}
            <div className="text-center">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume PDF
                </span>
              </button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                Get a comprehensive overview of my skills and experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
