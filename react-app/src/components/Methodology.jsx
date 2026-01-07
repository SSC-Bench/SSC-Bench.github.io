import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Image as ImageIcon } from 'lucide-react';

const Methodology = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Methodology
          </h2>

          {/* Two Paths */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Path 1: Image Reproduction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Image Reproduction
                </h3>
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="font-semibold text-gray-900">
                  Spatial Structural Understanding (SSU)
                </p>
                <p className="leading-relaxed">
                  This path evaluates the ability of MLLMs to interpret complex visual signals
                  and translate them into coherent symbolic structures. Models must reproduce
                  complete three-view drawings (FV, LV, TV) in the form of{' '}
                  <span className="font-mono text-sm bg-white px-2 py-1 rounded border border-blue-200">
                    Python code
                  </span>.
                </p>
                <div className="bg-white/80 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm font-semibold text-blue-900 mb-2">Key Challenge:</p>
                  <p className="text-sm">
                    Can the model maintain geometric consistency across multiple perspectives
                    and accurately internalize spatial relations from perceptual inputs?
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Path 2: Code-as-Reasoning */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 shadow-lg text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500 rounded-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">
                  Code-as-Reasoning
                </h3>
              </div>

              <div className="space-y-4">
                <p className="font-semibold text-emerald-400">
                  Spatial Structural Reasoning (SSR)
                </p>
                <p className="leading-relaxed text-gray-300">
                  This path probes the model's capacity for logical deduction within a symbolic
                  context. Given ground-truth code for an incomplete drawing, models must synthesize
                  missing structural lines using{' '}
                  <span className="font-mono text-sm bg-slate-950 px-2 py-1 rounded border border-emerald-500 text-red-400">
                    red dashed lines
                  </span>.
                </p>
                <div className="bg-slate-950 rounded-lg p-4 border border-emerald-500/30 font-mono text-sm">
                  <div className="text-gray-500 mb-1"># Example completion task:</div>
                  <div className="text-emerald-400">
                    plt.plot([x1, x2], [y1, y2],
                  </div>
                  <div className="text-red-400 ml-8">
                    color='red', linestyle='--')
                  </div>
                </div>
                <div className="bg-slate-950/50 rounded-lg p-4 border border-slate-700">
                  <p className="text-sm font-semibold text-emerald-400 mb-2">Key Challenge:</p>
                  <p className="text-sm text-gray-300">
                    Can the model reason about geometric constraints and maintain structural
                    integrity through purely logical inference?
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-200"
          >
            <p className="text-center text-gray-700 text-lg leading-relaxed">
              This <strong>dual-path design</strong> enables granular diagnostic analysis,
              pinpointing whether a model's failure stems from a lack of{' '}
              <strong className="text-primary-600">perceptual depth</strong> or a collapse in the{' '}
              <strong className="text-primary-600">logical synthesis</strong> of geometric relations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Methodology;
