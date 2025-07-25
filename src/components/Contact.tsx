
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Besthalakshminarasimha',
      icon: '🔗',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/bestha-lakshminarasimha-68931a296/',
      icon: '💼',
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bln_2708/',
      icon: '📸',
      color: 'from-pink-500 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            I'm always open to discussing new opportunities, innovative projects, or collaborations. 
            Let's connect and build something amazing together!
          </p>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="text-2xl mr-4">📍</span>
                      <div>
                        <p className="font-medium">Location</p>
                        <p>Bangalore, Karnataka, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="text-2xl mr-4">📧</span>
                      <div>
                        <p className="font-medium">Email</p>
                        <p>your.email@example.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="text-2xl mr-4">💻</span>
                      <div>
                        <p className="font-medium">Availability</p>
                        <p>Open for opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                    Connect With Me
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center p-4 bg-gradient-to-r ${social.color} text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="text-2xl mr-4">{social.icon}</span>
                        <div>
                          <p className="font-semibold">{social.name}</p>
                          <p className="text-sm opacity-90">Connect with me</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Send Message
                </h3>
                
                {showSuccess && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/50 border border-green-300 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your Name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or how we can collaborate..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
