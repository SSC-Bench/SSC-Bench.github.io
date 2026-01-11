import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Abstract = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Scaling Law Analysis
          </h2>

          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img
              src="/assets/figure3-scaling.png"
              alt="Figure 3: Scaling laws of MLLM architectures on SSC-Bench"
              className="w-full h-auto"
            />
          </div>

          <p className="text-center text-sm text-gray-600 italic max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-gray-800">Figure 3:</span> Scaling laws of MLLM architectures on the SSC-Bench Image-to-Code reproduction track.
            Average Accuracy and F1 score for three-view reconstruction tasks plotted against model parameters on a log scale.
            Performance scales consistently with parameter size across diverse model families, though the strength of this trend is architecture-dependent.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Abstract;
