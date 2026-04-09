import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    {
      number: '150',
      label: 'Questions',
      sublabel: '50 per task type',
      highlight: false,
      color: 'blue',
    },
    {
      number: '750',
      label: 'Images',
      sublabel: 'Uniformly redrawn',
      highlight: false,
      color: 'indigo',
    },
    {
      number: '9',
      label: 'MLLMs Evaluated',
      sublabel: 'Frontier models',
      highlight: false,
      color: 'violet',
    },
    {
      number: '29.6%',
      label: 'Task 1 Avg Accuracy',
      sublabel: 'vs 25% random baseline',
      highlight: true,
      color: 'amber',
    },
  ];

  const colorMap = {
    blue: {
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      number: 'text-blue-600',
      dot: 'bg-blue-500',
    },
    indigo: {
      bg: 'bg-indigo-50',
      border: 'border-indigo-100',
      number: 'text-indigo-600',
      dot: 'bg-indigo-500',
    },
    violet: {
      bg: 'bg-violet-50',
      border: 'border-violet-100',
      number: 'text-violet-600',
      dot: 'bg-violet-500',
    },
    amber: {
      bg: 'bg-amber-50',
      border: 'border-amber-300',
      number: 'text-amber-600',
      dot: 'bg-amber-500',
    },
  };

  return (
    <section ref={ref} className="py-10 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => {
            const c = colorMap[stat.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className={`text-center p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${c.bg} ${c.border}`}
              >
                <div className={`text-4xl md:text-5xl font-extrabold mb-1 ${c.number}`}>
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                {stat.sublabel && (
                  <div className="text-xs text-gray-500">{stat.sublabel}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
