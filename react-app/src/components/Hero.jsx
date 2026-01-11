import { motion } from 'framer-motion';
import { Database } from 'lucide-react';

const Hero = () => {
  return (
    <section id="overview" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary-600/5 via-transparent to-transparent animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Lost in Space
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 leading-snug">
            Evaluating Spatial Structural Competence via Code-as-Reasoning
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-12">
            A systematic benchmark for evaluating Spatial Structural Competence (SSC) through
            orthographic three-view reasoning with verifiable, programmatic outputs.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="YOUR_GITHUB_DATA_REPO_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white font-semibold text-lg rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Database className="w-6 h-6" />
              Dataset & Code (GitHub)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
