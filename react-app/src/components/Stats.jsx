import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      number: '200',
      label: 'Curated Cases',
      sublabel: null,
      highlight: false,
    },
    {
      number: '2',
      label: 'Complementary Tracks',
      sublabel: 'SSU + SSR',
      highlight: false,
    },
    {
      number: '13',
      label: 'Frontier Models',
      sublabel: 'Evaluated',
      highlight: false,
    },
    {
      number: '0%',
      label: 'SSR Completion',
      sublabel: 'Critical Finding',
      highlight: true,
    },
  ];

  return (
    <section ref={ref} className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`text-center p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                stat.highlight
                  ? 'bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-500'
                  : 'bg-gray-50'
              }`}
            >
              <div
                className={`text-5xl md:text-6xl font-extrabold mb-2 transition-transform duration-300 hover:scale-110 ${
                  stat.highlight ? 'text-red-600' : 'text-primary-600'
                }`}
              >
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
