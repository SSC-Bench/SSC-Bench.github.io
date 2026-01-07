import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Teaser = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <img
              src="/assets/teaser.png"
              alt="SSC-Bench Framework Overview"
              className="w-full h-auto"
            />
          </div>

          {/* Caption */}
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-center leading-relaxed text-lg">
              <span className="font-semibold text-gray-900">
                Conceptualizing Spatial Structural Competence (SSC)
              </span>{' '}
              through a dual-path diagnostic paradigm. The framework utilizes three standard
              orthographic perspectives: <span className="font-mono text-primary-600">Front View (FV)</span>,{' '}
              <span className="font-mono text-primary-600">Left View (LV)</span>, and{' '}
              <span className="font-mono text-primary-600">Top View (TV)</span>. We decompose SSC into two
              critical dimensions: <strong>(1) Spatial Structural Understanding (SSU)</strong>, which requires
              MLLMs to translate perceptual orthographic images into structured symbolic representations
              (e.g., Python code); and <strong>(2) Spatial Structural Reasoning (SSR)</strong>, which demands
              the logical synthesis of missing geometric elements via code-as-reasoning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Teaser;
