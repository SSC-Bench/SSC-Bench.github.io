import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="overview" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 py-28 md:py-36">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/5 rounded-full blur-3xl"></div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Venue tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium rounded-full mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            Anonymous Submission · Under Review
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
            Lost in Space
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-blue-200 mb-6 leading-snug max-w-3xl mx-auto">
            SSC-Bench for Evaluating Spatial Structural Competence<br className="hidden md:block" /> in Multimodal Large Language Models
          </h2>

          <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-12">
            A staged benchmark that decomposes spatial structural competence into three
            progressively challenging tasks—binary view selection, code-based reproduction,
            and line completion—together with a training-free{' '}
            <span className="text-blue-300 font-semibold">CVC-CoT</span> prompting framework.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="https://github.com/SSC-Bench/ssc-bench-data"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold text-base rounded-xl hover:bg-blue-50 transition-all shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1 border border-white/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Dataset & Code
            </a>

            {/* Tags */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium rounded-full backdrop-blur-sm">
                3 Progressive Tasks
              </span>
              <span className="px-4 py-1.5 bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-sm font-medium rounded-full backdrop-blur-sm">
                9 Representative MLLMs
              </span>
              <span className="px-4 py-1.5 bg-violet-500/20 border border-violet-400/30 text-violet-200 text-sm font-medium rounded-full backdrop-blur-sm">
                CVC-CoT Framework
              </span>
              <span className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-sm font-medium rounded-full backdrop-blur-sm">
                150 Questions · 750 Images
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
