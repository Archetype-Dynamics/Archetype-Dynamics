import React from "react";
import { Mail, MapPin, Users } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Want to Chat?
            <span className="block bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-600 bg-clip-text text-transparent">
              We'd Love to Hear From You
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Curious about OstrichDB? Want to collaborate? Just want to say hi?
            Drop us a line - we actually read our emails.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: "admin@archetypedynamics.com",
                subtitle: "We usually respond pretty quickly",
              },
              {
                icon: Users,
                title: "Try OstrichDB",
                content: "Visit ostrichdb.com",
                subtitle: "Sign up and start building!",
              },
              {
                icon: MapPin,
                title: "Where We Are",
                content: "Remote, USA",
                subtitle: "We work from wherever we feel like it",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-8 bg-slate-50 dark:bg-slate-800/50 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-200 dark:border-white/5"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
                  <item.icon className="text-white" size={24} />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-900 dark:text-white font-medium mb-1">
                  {item.content}
                </p>
                <p className="text-slate-600 dark:text-gray-400 text-sm">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 dark:text-gray-400 mb-8">
              Ready to get in touch? Just shoot us an email directly.
            </p>
            <a
              href="mailto:admin@archetypedynamics.com?subject=Hello from your website!"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={24} />
              <span>Email Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
