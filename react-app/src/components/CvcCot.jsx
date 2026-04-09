import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Topological Extraction',
    description:
      'The model explicitly extracts key 2D topological features and boundary coordinates from orthographic views—bounding boxes, key vertices, visible contours, and hidden lines. This isolates the perception phase before attempting global reasoning.',
    formula: 'T = M_extract(V, I_topo)',
    color: 'blue',
  },
  {
    step: '02',
    title: 'Geometric Constraint Validation',
    description:
      'Based on the extracted features, the model applies standard mechanical drafting principles to validate cross-view constraints: height alignment between front and left views, length alignment between front and top, and width alignment between left and top.',
    formula: 'S = M_validate(t_FV, t_LV, t_TV; C)',
    color: 'indigo',
  },
  {
    step: '03',
    title: 'Programmatic Mapping',
    description:
      'Based on the resolved global topology S, the model deduces missing 3D constraints and maps them into executable Matplotlib Python code. Leveraging coding proficiency as a proxy transforms implicit spatial abstraction into verifiable deduction.',
    formula: 'C_final = M_deduce(S, C_partial, I_code)',
    color: 'violet',
  },
];

const improvements = [
  {
    task: 'Task 1',
    metric: 'Accuracy',
    basic: 29.6,
    cot: 35.6,
    unit: '%',
    gain: '+6.0%',
    color: 'blue',
    note: 'GPT-5.4: 38% → 58%',
  },
  {
    task: 'Task 2',
    metric: 'CRˢᵗʳ (avg)',
    basic: 0.3281,
    cot: 0.3789,
    unit: '',
    gain: '+0.051',
    color: 'indigo',
    note: 'o3-pro gains +0.223',
  },
  {
    task: 'Task 2',
    metric: 'F1ˡᵉⁿ (avg)',
    basic: 0.5318,
    cot: 0.5682,
    unit: '',
    gain: '+0.036',
    color: 'indigo',
    note: 'Consistent across most models',
  },
  {
    task: 'Task 3',
    metric: 'F1ˡᵉⁿ (best)',
    basic: 0.2197,
    cot: 0.2395,
    unit: '',
    gain: '+0.020',
    color: 'violet',
    note: 'Claude Opus 4.6 highest lenient',
  },
];

const colorMap = {
  blue: {
    bg: 'bg-blue-50 border-blue-200',
    step: 'bg-blue-600 text-white',
    formula: 'bg-blue-900/90 text-blue-200',
    badge: 'bg-blue-100 text-blue-700',
    bar: 'bg-blue-500',
    barBg: 'bg-blue-100',
  },
  indigo: {
    bg: 'bg-indigo-50 border-indigo-200',
    step: 'bg-indigo-600 text-white',
    formula: 'bg-indigo-900/90 text-indigo-200',
    badge: 'bg-indigo-100 text-indigo-700',
    bar: 'bg-indigo-500',
    barBg: 'bg-indigo-100',
  },
  violet: {
    bg: 'bg-violet-50 border-violet-200',
    step: 'bg-violet-600 text-white',
    formula: 'bg-violet-900/90 text-violet-200',
    badge: 'bg-violet-100 text-violet-700',
    bar: 'bg-violet-500',
    barBg: 'bg-violet-100',
  },
};

const CvcCot = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-14"
        >
          {/* Header */}
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full mb-4">
              Training-Free Prompting Framework
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              CVC-CoT: Cross-View Constraint Chain-of-Thought
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rather than asking models to directly solve the task, CVC-CoT guides them through the
              cognitive deconstruction process of mechanical drafting via a three-stage deductive pipeline.
            </p>
          </div>

          {/* Three steps */}
          <div className="grid md:grid-cols-3 gap-5 relative">
            {/* Arrow connectors */}
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 justify-around -translate-y-1/2 z-10 pointer-events-none px-36">
              <ArrowRight className="w-6 h-6 text-gray-300" />
              <ArrowRight className="w-6 h-6 text-gray-300" />
            </div>

            {steps.map((s, i) => {
              const c = colorMap[s.color];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                  className={`rounded-2xl p-6 border-2 ${c.bg}`}
                >
                  <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-sm font-bold mb-4 ${c.step}`}>
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{s.description}</p>
                  <code className={`block text-xs font-mono px-3 py-2 rounded-lg ${c.formula}`}>
                    {s.formula}
                  </code>
                </motion.div>
              );
            })}
          </div>

          {/* Improvement table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-6 flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              CVC-CoT Improvements
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {improvements.map((item, i) => {
                const c = colorMap[item.color];
                const maxVal = Math.max(item.basic, item.cot);
                const basicW = item.unit === '%' ? item.basic : item.basic * 100;
                const cotW = item.unit === '%' ? item.cot : item.cot * 100;
                const scale = item.unit === '%' ? 1 : (1 / maxVal) * 80;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.7 + i * 0.08, duration: 0.5 }}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.badge}`}>
                          {item.task}
                        </span>
                        <span className="ml-2 text-sm font-semibold text-gray-800">{item.metric}</span>
                      </div>
                      <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        {item.gain}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500 w-14">Basic</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gray-400 rounded-full transition-all duration-700"
                            style={{ width: `${basicW * scale}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-mono text-gray-600 w-16 text-right">
                          {item.unit === '%' ? `${item.basic.toFixed(1)}%` : item.basic.toFixed(4)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-blue-600 font-semibold w-14">+CoT</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${c.bar} rounded-full transition-all duration-700`}
                            style={{ width: `${cotW * scale}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-mono font-semibold text-gray-800 w-16 text-right">
                          {item.unit === '%' ? `${item.cot.toFixed(1)}%` : item.cot.toFixed(4)}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 mt-2">{item.note}</p>
                  </motion.div>
                );
              })}
            </div>

            <p className="text-center text-sm text-gray-500 mt-6 italic">
              CVC-CoT functions as an auxiliary reasoning scaffold—most effective for stronger models with
              partial cross-view awareness. Cannot compensate for fundamental spatial ability deficits.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CvcCot;
