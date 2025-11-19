import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Smartphone,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Scalable, high-performance web applications built with modern frameworks like React and Next.js.",
    tech: ["React", "TypeScript", "Node.js"],
  },
  {
    icon: Database,
    title: "Backend Architecture",
    description:
      "Robust server-side solutions designed for speed, security, and massive scalability.",
    tech: ["Java", "Python", "Go", "PostgreSQL", "Spring Boot"],
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences.",
    tech: ["React Native", "Flutter", "iOS"],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    description:
      "Intuitive, user-centric interfaces that drive engagement and conversion.",
    tech: ["Figma", "Tailwind", "Framer"],
  },
  {
    icon: Server,
    title: "DevOps & Cloud",
    description:
      "Streamlined deployment pipelines and cloud infrastructure management.",
    tech: ["AWS", "Docker", "Kubernetes"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Tailored software solutions to solve your unique business challenges.",
    tech: ["System Design", "API Integration"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            Our <span className="text-gradient">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            We leverage cutting-edge technologies to build scalable,
            future-proof solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:border-orange-500/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-orange-600 dark:text-orange-400 border border-slate-200 dark:border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
