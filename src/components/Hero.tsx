import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-white"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-96 h-96 bg-blue-100 rounded-full blur-3xl top-20 right-20" />
        <div className="absolute w-96 h-96 bg-blue-50 rounded-full blur-3xl bottom-20 left-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-200 rounded-full">
              <Code2 className="text-blue-600" size={16} />
              <span className="text-sm text-blue-900 font-medium">AI/ML Engineer</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl text-gray-900 mb-6 font-bold tracking-tight"
          >
            Amulya Kantamaneni
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Building intelligent systems with <span className="text-blue-600 font-semibold">LLMs</span>, <span className="text-blue-600 font-semibold">RAG</span>, and <span className="text-blue-600 font-semibold">production ML</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-sm"
            >
              View My Work
            </button>
            
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-gray-900 rounded-lg font-medium border-2 border-gray-200 hover:border-blue-300 transition-colors"
            >
              Let's Connect
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            
              href="https://github.com/Amulyakantamneni"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg transition-colors border border-gray-200"
            >
              <Github size={20} />
            </a>
            
              href="https://linkedin.com/in/amulyachk"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg transition-colors border border-gray-200"
            >
              <Linkedin size={20} />
            </a>
            
              href="mailto:amulya.kantamneni@gmail.com"
              className="p-3 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-lg transition-colors border border-gray-200"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-gray-500 text-sm">Scroll to explore</span>
              <ArrowDown className="text-blue-600" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
