import React from 'react';
import { Database, Code, Lightbulb, Zap ,Linkedin } from 'lucide-react';


const About = () => {
  const features = [
    {
      icon: Database,
      title: 'First Project',
      description: 'We are currently building OstrichDB, Our thoughts are that modern databases can be easier for both technical and non-technical users.',
    },
    {
      icon: Lightbulb,
      title: 'Simple Ideas',
      description: 'We believe in simplicity. Our goal is to create software that\'s intuitive and easy to use, without the unnecessary complexity.',
    },
    {
      icon: Zap,
      title: 'Just Build It',
      description: 'Less talking, more building. We\'re here to make stuff thats not only functional but also cool and innovative.',
    }
  ];

  const founders = [
    {
      name: 'Marshall Burns',
      role: 'CEO',
      description: 'He\'s just the guy who wrote these descriptions. He also sometimes writes code. That\'s about it.',
      avatar: 'MB',
      linkedin: 'https://www.linkedin.com/in/marshallbcodes/',
    },
    {
      name: 'Gregory "Kasi" Reeves',
      role: 'CTO',
      description: 'The guy with the industry experience. He\'s the one who keeps us grounded and makes sure we don\'t bite off more than we can chew.',
      avatar: 'GR',
      linkedin: 'https://www.linkedin.com/in/kasi-reeves/',
    },
    {
      name: 'Isaac Cobb',
      role: 'CPO',
      description: 'Our resident product guy. If it doesn\'t make sense, he\'ll tell you. He\'s also a damn good programmer.',
      avatar: 'IC',
      linkedin: 'https://www.linkedin.com/in/isaac-cobb-06b78827a/',
    }
  ];

  const handleLinkedInClick = (linkedinUrl) => {
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Are
            
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a small team of that was brought together by the desire to build cool, innovative software that actually makes sense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        <section id="team" className="py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're a small team, but we're passionate about building something great.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {founder.avatar}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{founder.name}</h3>
                <p className="text-orange-600 font-semibold mb-4">{founder.role}</p>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-center">
                {founder.description}
              </p>

              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => handleLinkedInClick(founder.linkedin)}
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 group/btn"
                  aria-label={`Visit ${founder.name}'s LinkedIn profile`}
                >
                  <Linkedin size={20} className="group-hover/btn:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
        </section>
      </div>
    </section>
  );
};

export default About;