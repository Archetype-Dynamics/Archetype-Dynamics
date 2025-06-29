import React from 'react';
import { Database, Code, Lightbulb, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Database,
      title: 'First Project',
      description: 'We decided to build a database first. Not because we\'re experts, but because we got annoyed with existing ones.'
    },
    {
      icon: Lightbulb,
      title: 'Simple Ideas',
      description: 'Why can\'t you just ask your database a question in plain English? Turns out, you can.'
    },
    {
      icon: Zap,
      title: 'Just Build It',
      description: 'Less talking, more building. We\'re here to make stuff that actually works.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Who We Are
            
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're three developers who got frustrated with how unnecessarily complex databases are. 
            So we decided to build something better. This just happens to be our first project.
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

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                What We're About
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Honestly? We just want to build cool stuff that people actually want to use. 
                Databases have been the same boring, complicated mess for decades. Time for something new.
              </p>
              <div className="space-y-4">
                {[
                  'Making databases that don\'t require a PhD to use',
                  'Building OstrichDB - our natural language database',
                  'Proving that tech doesn\'t have to be intimidating',
                  'Having fun while we do it'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-1">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-3xl flex items-center justify-center">
                  <img 
                    src="/0806350a-b65c-465d-a1e3-e8565d527fc6-removebg-preview.png" 
                    alt="Archetype Dynamics" 
                    className="w-32 h-32 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;