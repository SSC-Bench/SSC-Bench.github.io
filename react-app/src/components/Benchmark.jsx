import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Eye, Code2, GitBranch } from 'lucide-react';

const tasks = [
  {
    number: '01',
    name: 'Binary View Selection',
    dimension: 'View Correspondence',
    color: 'blue',
    icon: Eye,
    input: '2 orthographic views + 4 candidate views',
    output: 'Select the correct matching view (A/B/C/D)',
    metric: 'Accuracy',
    description:
      'Given two views of a 3D object, the model must identify the correct third orthographic view from four options. This evaluates whether MLLMs can establish consistent cross-view alignment under viewpoint transformation.',
  },
  {
    number: '02',
    name: 'Code-based Reproduction',
    dimension: 'Structural Externalization',
    color: 'indigo',
    icon: Code2,
    input: '1 target orthographic image',
    output: 'Executable matplotlib Python code',
    metric: 'F1ˡᵉⁿ / CRˢᵗʳ',
    description:
      'The model must translate a target orthographic image into verifiable Python plotting code. This evaluates structural externalization—whether implicit spatial understanding can be made explicit and programmatically precise.',
  },
  {
    number: '03',
    name: 'Line Completion',
    dimension: 'Deep Structural Reasoning',
    color: 'violet',
    icon: GitBranch,
    input: '3 partial orthographic views (F/L/T)',
    output: 'Complete the missing structural lines via code',
    metric: 'F1ˡᵉⁿ / CRˢᵗʳ',
    description:
      'Given three views with key line segments deliberately removed, the model must infer the missing structural constraints from cross-view information and complete the drawing. This is the most demanding stage, requiring multi-step geometric inference.',
  },
];

const colorMap = {
  blue: {
    badge: 'bg-blue-100 text-blue-700',
    border: 'border-blue-200',
    bg: 'bg-gradient-to-br from-blue-50 to-white',
    num: 'text-blue-100',
    icon: 'bg-blue-600',
    tag: 'bg-blue-600 text-white',
    metric: 'text-blue-700 bg-blue-50 border-blue-200',
    connector: 'bg-blue-300',
  },
  indigo: {
    badge: 'bg-indigo-100 text-indigo-700',
    border: 'border-indigo-200',
    bg: 'bg-gradient-to-br from-indigo-50 to-white',
    num: 'text-indigo-100',
    icon: 'bg-indigo-600',
    tag: 'bg-indigo-600 text-white',
    metric: 'text-indigo-700 bg-indigo-50 border-indigo-200',
    connector: 'bg-indigo-300',
  },
  violet: {
    badge: 'bg-violet-100 text-violet-700',
    border: 'border-violet-200',
    bg: 'bg-gradient-to-br from-violet-50 to-white',
    num: 'text-violet-100',
    icon: 'bg-violet-600',
    tag: 'bg-violet-600 text-white',
    metric: 'text-violet-700 bg-violet-50 border-violet-200',
    connector: 'bg-violet-300',
  },
};

const features = [
  'Verifiable outputs through executable Python code',
  'Progressive three-stage diagnostic evaluation',
  'Dataset sourced from standardized engineering exams',
  'Training-free CVC-CoT enhancement framework',
];

const Benchmark = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="benchmark" ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-14"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Benchmark
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SSC-Bench organizes spatial structural competence into three progressively challenging
              dimensions. Each task targets a distinct capability, producing explicit and verifiable outputs.
            </p>
          </div>

          {/* Figure 1: Teaser / Motivation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/assets/figure1-teaser.png"
                alt="Figure 1: Illustration of SSC-Bench — from ambiguous end-to-end evaluation to progressive structural reasoning"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500 italic max-w-3xl mx-auto">
              <span className="font-semibold text-gray-700">Figure 1:</span> Standard end-to-end evaluation fails to distinguish error sources and yields only
              generic failure labels. SSC-Bench advances MLLMs from surface-level perception to deep structural
              reasoning, producing verifiable coordinate-level outputs.
            </p>
          </motion.div>

          {/* Three Tasks */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Three Progressive Tasks
            </h3>
            <div className="relative">
              {/* Connector line (desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200 -translate-y-1/2 z-0 mx-12"></div>

              <div className="grid md:grid-cols-3 gap-6 relative z-10">
                {tasks.map((task, index) => {
                  const c = colorMap[task.color];
                  const Icon = task.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 24 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                      transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                      className={`relative rounded-2xl p-7 border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${c.bg} ${c.border}`}
                    >
                      {/* Step number */}
                      <div className={`text-6xl font-extrabold absolute top-4 right-5 select-none ${c.num}`}>
                        {task.number}
                      </div>

                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-11 h-11 ${c.icon} rounded-xl mb-4`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      <h4 className="text-lg font-bold text-gray-900 mb-1">{task.name}</h4>
                      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-semibold mb-4 ${c.badge}`}>
                        {task.dimension}
                      </span>

                      <p className="text-gray-600 text-sm leading-relaxed mb-5">
                        {task.description}
                      </p>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-gray-700 w-14 shrink-0">Input:</span>
                          <span className="text-gray-600">{task.input}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-gray-700 w-14 shrink-0">Output:</span>
                          <span className="text-gray-600">{task.output}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-gray-700 w-14 shrink-0">Metric:</span>
                          <span className={`font-mono font-semibold px-2 py-0.5 rounded border text-xs ${c.metric}`}>
                            {task.metric}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Figure 3: Evaluation Mapping */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <img
                src="/assets/figure3-tasks.png"
                alt="Figure 3: Evaluation mapping in SSC-Bench — three progressive capability dimensions"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500 italic max-w-3xl mx-auto">
              <span className="font-semibold text-gray-700">Figure 3:</span> Evaluation mapping of SSC-Bench. The three tasks correspond to View
              Correspondence, Structural Externalization, and Deep Structural Reasoning — each probing a
              distinct and progressively deeper spatial capability.
            </p>
          </motion.div>

          {/* Figure 2: Construction Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Construction Pipeline</h3>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img
                src="/assets/figure2-pipeline.png"
                alt="Figure 2: Four-phase construction pipeline of SSC-Bench"
                className="w-full h-auto"
              />
            </div>
            <p className="mt-3 text-sm text-gray-500 italic max-w-3xl mx-auto">
              <span className="font-semibold text-gray-700">Figure 2:</span> Four-phase construction pipeline of SSC-Bench. Source questions from GaoKao
              engineering exams are processed by curator, redrawing, conversion, and refiner agents to produce
              standardized benchmark instances across all three task types.
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 bg-white rounded-xl px-5 py-3 shadow border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benchmark;
