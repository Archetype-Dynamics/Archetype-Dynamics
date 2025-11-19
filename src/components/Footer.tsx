import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <img
              src="/0806350a-b65c-465d-a1e3-e8565d527fc6-removebg-preview.png"
              alt="Archetype Dynamics Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-bold">Archetype Dynamics</span>
          </div>

          <div className="flex space-x-6">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/company/archetype-dynamics",
              },
              { icon: Twitter, href: "https://x.com/ArcheDynamics" },
              { icon: Github, href: "https://github.com/Archetype-Dynamics" },
              { icon: Mail, href: "mailto:admin@archetypedynamics.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-slate-400 dark:text-gray-400 hover:text-orange-500 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center md:text-left text-sm text-slate-500 dark:text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Archetype Dynamics, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
