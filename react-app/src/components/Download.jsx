import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Database, Code, FileText } from 'lucide-react';

const Download = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const downloads = [
    {
      icon: Database,
      title: 'Dataset',
      description:
        '200 high-quality three-view projection cases with ground-truth Python rendering code and spatial reasoning annotations.',
      link: 'https://github.com/SSC-Bench/ssc-bench-data',
      linkText: 'View on GitHub →',
    },
    {
      icon: Code,
      title: 'Evaluation Code',
      description:
        'Complete evaluation pipeline including metrics computation, visualization tools, and model interface templates.',
      link: 'https://github.com/SSC-Bench/ssc-bench-data',
      linkText: 'View on GitHub →',
    },
    {
      icon: FileText,
      title: 'Technical Report',
      description:
        'Detailed methodology, experimental setup, complete results tables, and comprehensive analysis of all evaluated models.',
      link: 'YOUR_PAPER_PDF_URL',
      linkText: 'Download PDF →',
    },
  ];

  return (
    <section id="download" ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Access the Benchmark
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              All benchmark data, evaluation code, and model outputs are publicly available.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {downloads.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center relative overflow-hidden transition-all duration-400 hover:shadow-xl hover:-translate-y-2 hover:scale-105 group"
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6 transition-transform duration-500 group-hover:scale-120 group-hover:rotate-12">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-8">
                      {item.description}
                    </p>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-primary-600 hover:text-primary-700 font-semibold text-lg transition-all hover:translate-x-1"
                    >
                      {item.linkText}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Download;
