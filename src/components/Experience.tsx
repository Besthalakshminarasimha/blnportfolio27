import React from 'react';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Technology - AI & ML',
      organization: 'Reva University',
      location: 'Bangalore, Karnataka',
      period: '2022 - Present',
      description: 'Currently pursuing B.Tech in Artificial Intelligence & Machine Learning with focus on deep learning, computer vision, and natural language processing.',
      skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Science']
    },
    {
      type: 'experience',
      title: 'Web Developer Intern',
      organization: 'Shadowfox',
      location: 'Bangalore, Karnataka',
      period: 'May 1 - May 31, 2025',
      description: 'Developed responsive web applications using modern frontend frameworks and worked on full-stack projects with database integration and API development.',
      skills: ['React', 'JavaScript', 'Node.js', 'HTML/CSS', 'MongoDB', 'Express.js']
    },
    {
      type: 'project',
      title: 'Lead Developer',
      organization: 'Open Source Contribution',
      location: 'Remote',
      period: '2023 - Present',
      description: 'Contributing to various open-source AI/ML projects on GitHub, focusing on educational resources and practical implementations.',
      skills: ['Open Source', 'Git', 'Documentation', 'Community Building']
    },
    {
      type: 'education',
      title: 'Higher Secondary Education',
      organization: 'Narayana Junior College',
      location: 'Bangalore, Karnataka',
      period: '2020 - 2022',
      description: 'Completed 12th grade with specialization in Mathematics, Physics, and Chemistry. Active member of the science club.',
      skills: ['Mathematics', 'Physics', 'Chemistry']
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'education':
        return '🎓';
      case 'experience':
        return '💼';
      case 'project':
        return '🚀';
      default:
        return '📍';
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'from-blue-500 to-purple-600';
      case 'experience':
        return 'from-green-500 to-teal-600';
      case 'project':
        return 'from-pink-500 to-rose-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Experience & Education
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>

              {experiences.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r ${getColor(item.type)} rounded-full border-4 border-white dark:border-gray-900 z-10`}></div>

                  {/* Content Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{getIcon(item.type)}</span>
                        <span className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                          {item.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                        {item.title}
                      </h3>
                      
                      <div className="text-purple-600 dark:text-purple-400 font-medium mb-1">
                        {item.organization}
                      </div>
                      
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        📍 {item.location}
                      </div>
                      
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        📅 {item.period}
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map(skill => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
