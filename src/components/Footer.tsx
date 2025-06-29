import React from 'react';
import { Linkedin, Twitter, Github, Database } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/0806350a-b65c-465d-a1e3-e8565d527fc6-removebg-preview.png" 
                alt="Archetype Dynamics Logo" 
                className="h-10 w-10"
              />
              <div>
                <h3 className="text-xl font-bold">Archetype Dynamics</h3>
                <p className="text-gray-400">Inc.</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              We're some guys building cool shit. Currently working on OstrichDB - 
              a database you can actually talk to like a human.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/archetype-dynamics' },
                { icon: Twitter, href: 'https://x.com/ArcheDynamics' },
                { icon: Github, href: 'https://github.com/Archetype-Dynamics' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* What We're Building */}
          <div>
            <h4 className="text-lg font-semibold mb-6">What We're Building</h4>
            <ul className="space-y-3">
              {[
                { name: 'OstrichDB', href: '#product' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-2"
                  >
                    {link.name === 'OstrichDB' && <Database size={16} />}
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'The Team', href: '#team' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Archetype Dynamics, Inc.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;