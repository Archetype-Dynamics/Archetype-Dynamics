import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 pt-20 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm">
            <span className="text-orange-600 dark:text-orange-400 font-medium text-sm tracking-wide uppercase">
              Software Consulting Agency
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-tight tracking-tight">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600 drop-shadow-lg">
              Digital Future
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We transform complex challenges into elegant, high-performance
            software solutions. Your vision, engineered to perfection.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="btn-primary flex items-center space-x-2 group text-lg px-8 py-4">
              <span>Book a Consultation</span>
            </button>
          </div>
        </motion.div>

        {/* Floating Cards Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-50"
        >
          {["Scalable", "Secure", "Modern", "Fast"].map((item, index) => (
            <div
              key={index}
              className="glass-card py-4 rounded-xl text-slate-600 dark:text-gray-400 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
