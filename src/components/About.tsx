
import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    { name: 'Python', icon: '🐍', color: 'from-green-400 to-blue-500' },
    { name: 'TensorFlow', icon: '🧠', color: 'from-orange-400 to-red-500' },
    { name: 'PyTorch', icon: '🔥', color: 'from-red-400 to-pink-500' },
    { name: 'NumPy', icon: '📊', color: 'from-blue-400 to-purple-500' },
    { name: 'Pandas', icon: '🐼', color: 'from-green-400 to-teal-500' },
    { name: 'Scikit-learn', icon: '⚡', color: 'from-yellow-400 to-orange-500' },
    { name: 'OpenCV', icon: '👁️', color: 'from-purple-400 to-pink-500' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="mb-12 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="mb-6">
              I'm a passionate <span className="font-semibold text-purple-600">Artificial Intelligence & Machine Learning</span> student 
              based in <span className="font-semibold">Bangalore, Karnataka</span>. My journey in technology combines creative problem-solving 
              with cutting-edge AI innovations.
            </p>
            <p className="mb-6">
              As a full-stack enthusiast, I enjoy building end-to-end solutions that bridge the gap between 
              complex AI algorithms and user-friendly interfaces. My goal is to leverage AI to create 
              meaningful impact in real-world applications.
            </p>
            <p>
              Currently expanding my expertise in deep learning, computer vision, and natural language processing 
              while contributing to open-source projects and building innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-2">{skill.icon}</div>
                <p className="font-semibold text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
