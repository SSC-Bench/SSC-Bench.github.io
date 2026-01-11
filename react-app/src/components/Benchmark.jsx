import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Image as ImageIcon, Code2, CheckCircle } from 'lucide-react';

const Benchmark = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    'Verifiable outputs through executable code',
    'Decoupled evaluation of understanding vs. reasoning',
    'Ground-truth 3D-to-2D projection pipeline',
    'Systematic diagnosis of failure modes',
  ];

  return (
    <section id="benchmark" ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Benchmark
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              SSC-Bench operationalizes Spatial Structural Competence through orthographic three-view
              projections (Front View, Left View, Top View), producing verifiable outputs via executable Python code.
            </p>
          </div>

          {/* Overview Figure */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl min-h-[400px] flex items-center justify-center">
              <img
                src="/assets/fig_overview.png"
                alt="SSC-Bench Framework Overview"
                className="max-w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col items-center justify-center p-12 text-gray-500">
                <ImageIcon className="w-16 h-16 mb-4" />
                <p className="text-lg">Framework Overview Diagram</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 italic max-w-4xl mx-auto">
              Framework overview: Dual-path diagnostic paradigm for evaluating SSC through
              Image Reproduction (SSU) and Code-as-Reasoning Line Completion (SSR).
            </p>
          </motion.div>

          {/* Dual Paths */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* SSU Path */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <ImageIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SSU: Structural Understanding</h3>
                  <p className="text-blue-700 font-semibold">Image-to-Code Reproduction</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Models must reproduce complete three-view orthographic drawings (FV, LV, TV)
                as executable Python code, demonstrating the ability to translate visual spatial
                structures into coherent symbolic representations.
              </p>
              <div className="bg-blue-600/10 border-l-4 border-blue-600 rounded px-4 py-3">
                <span className="font-semibold text-gray-900">Evaluation: </span>
                <span className="text-blue-800 font-medium">Accuracy & F1 Score</span>
              </div>
            </motion.div>

            {/* SSR Path */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8 border-2 border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-indigo-600 rounded-lg">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">SSR: Structural Reasoning</h3>
                  <p className="text-indigo-700 font-semibold">Code-Based Line Completion</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Given ground-truth code for an incomplete drawing, models must synthesize
                three missing structural lines (rendered as red dashed lines) through pure
                logical inference and geometric constraint reasoning.
              </p>
              <div className="bg-indigo-600/10 border-l-4 border-indigo-600 rounded px-4 py-3">
                <span className="font-semibold text-gray-900">Evaluation: </span>
                <span className="text-indigo-800 font-medium">Completion Rate (CR)</span>
              </div>
            </motion.div>
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
              Key Features
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 bg-white rounded-xl px-5 py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-x-1"
                >
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benchmark;
