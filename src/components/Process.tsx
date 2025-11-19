import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We dive deep into your business goals, challenges, and requirements to understand exactly what you need.",
  },
  {
    icon: PenTool,
    title: "Design & Strategy",
    description:
      "We create a comprehensive roadmap and design intuitive interfaces that align with your brand identity.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Our expert team builds your solution using modern technologies, ensuring clean, scalable, and efficient code.",
  },
  {
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "We handle the deployment and provide ongoing support to help your product grow and evolve.",
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="py-24 bg-white dark:bg-slate-900 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white"
          >
            How We <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A transparent, agile process designed to deliver results.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-orange-500/0 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="glass-card p-8 rounded-2xl text-center relative z-10 h-full hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-16 h-16 mx-auto bg-slate-100 dark:bg-slate-800 rounded-full border-2 border-orange-500/50 flex items-center justify-center mb-6 group-hover:border-orange-500 transition-colors shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                    <step.icon className="text-orange-500" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
