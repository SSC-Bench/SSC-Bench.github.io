import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Abstract = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Abstract
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-justify space-y-4">
              <span className="block">
                As Multimodal Large Language Models (MLLMs) are increasingly deployed in spatially
                grounded settings such as robotics interaction and 3D structural understanding,
                producing <strong>verifiable spatial structures</strong> has become a critical
                bottleneck. To distinguish whether errors arise from cross-modal structural
                understanding or from subsequent symbolic reasoning, we propose{' '}
                <strong className="text-primary-600">SSC-Bench</strong>, a systematic framework for
                evaluating <strong>Spatial Structural Competence (SSC)</strong> through the lens of
                orthographic structural reasoning.
              </span>

              <span className="block">
                SSC-Bench features two complementary evaluation paths:{' '}
                <strong>image reproduction</strong> and <strong>code-as-reasoning line completion</strong>.
                By externalizing the scoring basis through programmatic and visual outputs, our framework
                improves the interpretability of MLLMs' internal spatial representations.
              </span>

              <span className="block">
                Experiments on 13 representative MLLMs reveal that while some models perform reasonably
                in perceptual reproduction (with a significant performance drop in top-view perspective
                synthesis), <strong className="text-red-600">all models achieve a Completion Rate (CR)
                of 0.00%</strong> on the code-based completion path. These results indicate that MLLMs'
                failures in orthographic-to-structural mapping cannot be attributed to a single modality
                or stage, but rather reflect systematic weaknesses in both{' '}
                <strong>spatial abstraction</strong> and <strong>code-mediated structural reasoning</strong>.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Abstract;
