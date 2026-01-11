import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const KeyFindings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const findings = [
    {
      number: '01',
      title: 'View-Dependent Instability',
      description:
        'While some models achieve reasonable performance on Front and Left views, there is a significant performance drop on Top View synthesis, indicating unstable spatial understanding that lacks cross-view consistency.',
      tag: 'SSU Track',
      critical: false,
    },
    {
      number: '02',
      title: 'Complete SSR Failure',
      description:
        'All 13 models achieved 0.00% completion rate on the code-as-reasoning path, demonstrating a fundamental inability to perform logical synthesis of geometric relations, even when provided with ground-truth symbolic context.',
      tag: 'Critical Finding',
      critical: true,
    },
    {
      number: '03',
      title: 'Dual-Path Diagnostic Value',
      description:
        'The benchmark successfully isolates failure attribution: errors arise from both perceptual structural understanding and logical reasoning stages, rather than a single processing bottleneck.',
      tag: 'Methodology',
      critical: false,
    },
  ];

  return (
    <section id="results" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Findings
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive evaluation of 13 state-of-the-art multimodal large language models
              reveals systematic weaknesses in spatial structural competence.
            </p>
          </div>

          {/* Findings Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {findings.map((finding, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                className={`relative overflow-hidden rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  finding.critical
                    ? 'bg-gradient-to-br from-red-50 to-white border-2 border-red-500'
                    : 'bg-gray-50'
                }`}
              >
                <div
                  className={`absolute top-0 left-0 w-1.5 h-full ${
                    finding.critical ? 'bg-red-600 w-2' : 'bg-primary-600'
                  }`}
                ></div>
                <div
                  className={`text-5xl font-extrabold mb-4 ${
                    finding.critical ? 'text-red-200' : 'text-blue-200'
                  }`}
                >
                  {finding.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {finding.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {finding.description}
                </p>
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                    finding.critical
                      ? 'bg-red-600 text-white'
                      : 'bg-primary-600 text-white'
                  }`}
                >
                  {finding.tag}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Performance Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-2xl p-10 border-2 border-blue-300 mt-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Representative Performance
            </h3>
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
                  Best SSU Performance
                </div>
                <div className="text-5xl font-extrabold text-primary-600 mb-2">
                  0.918
                </div>
                <div className="text-sm text-gray-600">Avg F1</div>
                <div className="text-sm text-gray-500 mt-1">Top-tier closed-source model</div>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="h-24 w-0.5 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-3">
                  SSR Performance
                </div>
                <div className="text-5xl font-extrabold text-primary-600 mb-2">
                  0.00%
                </div>
                <div className="text-sm text-gray-600">CR</div>
                <div className="text-sm text-gray-500 mt-1">Universal across all models</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFindings;
