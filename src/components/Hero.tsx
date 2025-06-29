import React from 'react';
import { ArrowRight, Database, Zap, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <img 
            src="/0806350a-b65c-465d-a1e3-e8565d527fc6-removebg-preview.png" 
            alt="Archetype Dynamics Logo" 
            className="h-24 w-24 mx-auto mb-6 drop-shadow-2xl"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          We Just Want To
          <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Build Cool Shit
          </span>
        </h1>

        

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-12 max-w-2xl mx-auto border border-white/20">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Database className="text-orange-400" size={24} />
            <h3 className="text-2xl font-bold text-white">OstrichDB</h3>
          </div>
          <p className="text-gray-300 text-lg">
            Currently In Development
          </p>
          <p className="text-gray-400 mt-2">
            A database you can talk to in plain English
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <button className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <span>Check Out What We're Building</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
            Say Hi
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;