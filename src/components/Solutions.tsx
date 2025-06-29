import React from 'react';
import { Database, MessageSquare, Shield, Globe, Cpu, BarChart3 } from 'lucide-react';

const Solutions = () => {
  return (
    <section id="product" className="py-24 bg-slate-900 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Flagship Product
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              OstrichDB
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're building the world's first natural language database - a revolutionary approach 
            to data management that makes databases accessible to everyone.
          </p>
        </div>

        {/* Main Product Showcase */}
        <div className="bg-gradient-to-br from-gray-800 to-slate-800 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 mb-16 border border-gray-600/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Database className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-white">OstrichDB</h3>
                  <p className="text-orange-400 text-lg">Natural Language Database</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A groundbreaking database built from the ground up with natural language processing, 
                hierarchical NoSQL/NoJSON architecture, and enterprise-grade security. Built in Odin 
                for maximum performance and reliability.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Query using plain English - no SQL required',
                  'Hierarchical architecture: Collections → Clusters → Records',
                  'Built in Odin programming language for performance',
                  'Visual Cluster Editor for intuitive data management',
                  'Encrypted collections ensure data security',
                  'Web application with user-friendly interface'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
                <a href="https://ostrichdb.com" target="_blank" rel="noopener noreferrer">
                  Learn More About OstrichDB
                </a>
              </button>

            </div>

            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-600">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-sm text-gray-300 space-y-2">
                  <div className="text-orange-400">💬 "Show me customers from last month"</div>
                  <div className="text-green-400">✓ Natural language processed</div>
                  <div className="text-gray-400">Collection: customers</div>
                  <div className="text-gray-400">Cluster: recent_signups</div>
                  <div className="text-gray-400">Records: 1,247 found</div>
                  <div className="text-green-400">Query executed in 0.003ms</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: MessageSquare,
              title: 'Natural Language Processing',
              description: 'Revolutionary AI-powered interface that understands plain English queries, making databases accessible to everyone.'
            },
            {
              icon: Shield,
              title: 'Security First',
              description: 'Built-in encryption for all collections ensures your data remains secure and private by default.'
            },
            {
              icon: Globe,
              title: 'Built in Odin',
              description: 'Engineered using the Odin programming language for exceptional performance and system reliability.'
            },
            {
              icon: Cpu,
              title: 'Hierarchical Architecture',
              description: 'Innovative NoSQL/NoJSON structure with Collections, Clusters, and Records for optimal data organization.'
            },
            {
              icon: BarChart3,
              title: 'Visual Data Management',
              description: 'Intuitive Cluster Editor allows users to visually manage and modify their data without complex commands.'
            },
            {
              icon: Database,
              title: 'Web Application',
              description: 'Complete web-based interface with robust API layer for seamless data manipulation and management.'
            }
          ].map((feature, index) => (
            <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-white" size={20} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-800 to-slate-800 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 md:p-12 border border-gray-600/50">
            <h3 className="text-3xl font-bold text-white mb-4">The Future of Database Technology</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              OstrichDB represents our vision for making database technology accessible to everyone. 
              Currently in development, we're building something truly revolutionary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
                Request Early Access
              </button>
              <button className="border-2 border-gray-500 text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-700 hover:border-gray-400 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;