import React from "react";
import { motion } from "framer-motion";
import { Zap, Code, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We don't just follow trends; we leverage the latest tech to build solutions that give you a competitive edge.",
  },
  {
    icon: Code,
    title: "Engineering Excellence",
    description:
      "We take pride in writing clean, maintainable, and scalable code that stands the test of time.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We view ourselves as an extension of your team, working transparently and communicating openly.",
  },
];

const founders = [
  {
    name: "Marshall Burns",
    role: "CEO",
    description:
      "Driving the strategic vision and technical architecture of Archetype Dynamics. Marshall combines leadership with deep engineering expertise to build software that matters.",
    avatar: "MB",
  },
  {
    name: 'Gregory "Kasi" Reeves',
    role: "CTO",
    description:
      "Leveraging extensive industry experience to guide technical strategy. Kasi ensures our solutions are robust, scalable, and grounded in engineering best practices.",
    avatar: "GR",
  },
  {
    name: "Isaac Cobb",
    role: "CPO",
    description:
      "Leading product strategy with a focus on user-centric design and technical precision. Isaac ensures every product we build is intuitive, logical, and impactful.",
    avatar: "IC",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Who We Are Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Who We <span className="text-gradient">Are</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We're a small team brought together by the desire to build cool,
            innovative software that actually makes sense.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl text-center hover:border-orange-500/30 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-orange-500/20">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            The <span className="text-gradient">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            We're a small team, but we're passionate about building something
            great.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-orange-500/20">
                  {founder.avatar}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {founder.name}
              </h3>
              <p className="text-orange-600 dark:text-orange-400 font-semibold mb-4">
                {founder.role}
              </p>

              <p className="text-slate-600 dark:text-gray-400 leading-relaxed min-h-[80px]">
                {founder.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
