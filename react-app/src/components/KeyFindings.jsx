import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingDown, BarChart3, Lightbulb } from 'lucide-react';

const findings = [
  {
    number: '01',
    icon: TrendingDown,
    title: 'View Correspondence Bottleneck',
    description:
      'Across nine MLLMs, Task 1 average accuracy is only 29.6%—barely above the 25% random-guess baseline. Even the top models (GPT-5.4: 38%, Gemini 3.1 Pro: 34%) remain far below human-level reliability, revealing cross-view correspondence as a fundamental weakness.',
    tag: 'Task 1 · View Correspondence',
    color: 'amber',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Clear Performance Hierarchy in Externalization',
    description:
      'Task 2 reveals a wide spread: Gemini 3.1 Pro leads (CRˢᵗʳ 0.640, F1ˡᵉⁿ 0.780) while GLM-4.6V lags at 0.138. The consistent gap between strict and lenient scores shows that most models grasp global topology but fail at precise geometric reconstruction.',
    tag: 'Task 2 · Structural Externalization',
    color: 'blue',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Deep Structural Reasoning Remains Unsolved',
    description:
      'Task 3 scores are universally low. All models achieve CRˢᵗʳ below 0.10, highlighting that inferring hidden structural constraints from incomplete orthographic information is a qualitatively harder problem—not simply an extension of Task 2.',
    tag: 'Task 3 · Deep Structural Reasoning',
    color: 'violet',
  },
];

const colorMap = {
  amber: {
    bg: 'bg-gradient-to-br from-amber-50 to-white',
    border: 'border-amber-200',
    bar: 'bg-amber-500',
    num: 'text-amber-100',
    tag: 'bg-amber-100 text-amber-700',
    icon: 'text-amber-600 bg-amber-100',
  },
  blue: {
    bg: 'bg-gradient-to-br from-blue-50 to-white',
    border: 'border-blue-200',
    bar: 'bg-blue-500',
    num: 'text-blue-100',
    tag: 'bg-blue-100 text-blue-700',
    icon: 'text-blue-600 bg-blue-100',
  },
  violet: {
    bg: 'bg-gradient-to-br from-violet-50 to-white',
    border: 'border-violet-200',
    bar: 'bg-violet-500',
    num: 'text-violet-100',
    tag: 'bg-violet-100 text-violet-700',
    icon: 'text-violet-600 bg-violet-100',
  },
};

const KeyFindings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Evaluation of nine representative MLLMs on SSC-Bench reveals a clear capability
              hierarchy across the three progressive tasks.
            </p>
          </div>

          {/* Findings Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {findings.map((finding, index) => {
              const c = colorMap[finding.color];
              const Icon = finding.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                  className={`relative overflow-hidden rounded-2xl p-7 border-2 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${c.bg} ${c.border}`}
                >
                  <div className={`absolute top-0 left-0 w-1.5 h-full ${c.bar}`}></div>
                  <div className={`text-6xl font-extrabold absolute top-3 right-4 select-none ${c.num}`}>
                    {finding.number}
                  </div>

                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-4 ${c.icon}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {finding.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {finding.description}
                  </p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${c.tag}`}>
                    {finding.tag}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Performance Summary Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-gradient-to-r from-slate-900 to-blue-950 rounded-2xl p-8 md:p-10 text-white"
          >
            <h3 className="text-xl font-bold text-center mb-8 text-white/90">
              Performance Across Tasks (Best Model per Task)
            </h3>
            <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="text-center pt-4 md:pt-0">
                <div className="text-xs font-semibold uppercase tracking-widest text-blue-300 mb-2">
                  Task 1 · Best Accuracy
                </div>
                <div className="text-5xl font-extrabold text-white mb-1">58%</div>
                <div className="text-sm text-slate-300">GPT-5.4 w/ CVC-CoT</div>
                <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-400 rounded-full" style={{ width: '58%' }}></div>
                </div>
                <div className="text-xs text-slate-400 mt-1">25% random baseline</div>
              </div>
              <div className="text-center pt-4 md:pt-0">
                <div className="text-xs font-semibold uppercase tracking-widest text-indigo-300 mb-2">
                  Task 2 · Best F1ˡᵉⁿ
                </div>
                <div className="text-5xl font-extrabold text-white mb-1">0.833</div>
                <div className="text-sm text-slate-300">GPT-5.4 w/ CVC-CoT</div>
                <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-400 rounded-full" style={{ width: '83%' }}></div>
                </div>
                <div className="text-xs text-slate-400 mt-1">Lenient topology metric</div>
              </div>
              <div className="text-center pt-4 md:pt-0">
                <div className="text-xs font-semibold uppercase tracking-widest text-violet-300 mb-2">
                  Task 3 · Best CRˢᵗʳ
                </div>
                <div className="text-5xl font-extrabold text-white mb-1">0.082</div>
                <div className="text-sm text-slate-300">Gemini 3.1 Pro (Basic)</div>
                <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-400 rounded-full" style={{ width: '8.2%' }}></div>
                </div>
                <div className="text-xs text-slate-400 mt-1">Strict completion rate</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFindings;
