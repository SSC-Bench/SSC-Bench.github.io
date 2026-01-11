import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, AlertTriangle } from 'lucide-react';

const ScalingLaw = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Title */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scaling Law Analysis
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Performance improvements with increasing model scale across different MLLM families
            </p>
          </div>

          {/* Main Figure */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="p-8">
              <img
                src="/assets/figure3-scaling.png"
                alt="Scaling laws of MLLM architectures on SSC-Bench"
                className="w-full h-auto rounded-lg"
              />
              <p className="text-sm text-gray-600 mt-4 text-center italic">
                Figure 3: Scaling laws of MLLM architectures on the SSC-Bench Image-to-Code reproduction track.
                (a) Average Accuracy and (b) Average F1 score plotted against model parameters on a log scale.
              </p>
            </div>
          </motion.div>

          {/* Key Insights */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Positive Finding */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-2">Within-Family Scaling</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Performance generally improves with model scale within the same architecture family.
                    The <strong>InternVL series</strong> shows the most pronounced gains from 78B to 241B,
                    while <strong>Qwen3-VL</strong> exhibits consistent scaling benefits from 32B to 235B.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Critical Observation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-2">Architectural Heterogeneity</h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    Scaling trends are <strong>architecture-dependent</strong> and exhibit substantial
                    family heterogeneity. The <strong>Qwen2.5 series</strong> starts from a high baseline
                    at 14B, suggesting performance is shaped by code proficiency priors and cross-modal
                    alignment, not just parameter count.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Detailed Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-gray-50 rounded-xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Findings</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                <p>
                  <strong>InternVL Series:</strong> Demonstrates the steepest performance trajectory,
                  with substantial increases in both average F1 and Accuracy when scaling from 78B to 241B parameters.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                <p>
                  <strong>Qwen3-VL Series:</strong> Shows consistent scaling benefits with both metrics
                  improving markedly from 32B to 235B, indicating reliable structure preservation
                  with increased capacity.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                <p>
                  <strong>Qwen2.5 Series:</strong> Establishes a high-performance baseline even at smaller
                  scale (14B), with moderate improvements at 72B, suggesting architectural efficiency beyond
                  pure parameter scaling.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-red-500 mt-2"></div>
                <p>
                  <strong>Critical Limitation:</strong> Average improvement does not guarantee uniform gains
                  across all views. Cross-view consistency remains a key target for further diagnosis,
                  especially for Top View perspective synthesis.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScalingLaw;
