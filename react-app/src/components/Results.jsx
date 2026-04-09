import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Trophy } from 'lucide-react';

// ── Task 1: Binary View Selection ─────────────────────────────────────────────
const task1Basic = [
  { model: 'GPT-5.4',               acc: 0.38 },
  { model: 'Gemini 3.1 Pro',        acc: 0.34 },
  { model: 'o3-pro',                acc: 0.32 },
  { model: 'Doubao-Seed-2.0-pro',   acc: 0.32 },
  { model: 'Grok 4.20',             acc: 0.30 },
  { model: 'Qwen2.5-VL-72B',        acc: 0.30 },
  { model: 'Claude Opus 4.6',       acc: 0.28 },
  { model: 'GLM-4.6V',              acc: 0.24 },
  { model: 'Mistral Large 2512',    acc: 0.20 },
];
const task1CoT = [
  { model: 'GPT-5.4',               acc: 0.58 },
  { model: 'Gemini 3.1 Pro',        acc: 0.56 },
  { model: 'Doubao-Seed-2.0-pro',   acc: 0.36 },
  { model: 'o3-pro',                acc: 0.34 },
  { model: 'Grok 4.20',             acc: 0.34 },
  { model: 'Qwen2.5-VL-72B',        acc: 0.34 },
  { model: 'GLM-4.6V',              acc: 0.24 },
  { model: 'Claude Opus 4.6',       acc: 0.26 },
  { model: 'Mistral Large 2512',    acc: 0.18 },
];

// ── Task 2: Code-based Reproduction ──────────────────────────────────────────
const task2Basic = [
  { model: 'Gemini 3.1 Pro',        crStr: 0.6399, f1Len: 0.7804 },
  { model: 'GPT-5.4',               crStr: 0.5433, f1Len: 0.7479 },
  { model: 'Grok 4.20',             crStr: 0.4298, f1Len: 0.5909 },
  { model: 'Doubao-Seed-2.0-pro',   crStr: 0.3556, f1Len: 0.5089 },
  { model: 'Claude Opus 4.6',       crStr: 0.3547, f1Len: 0.5056 },
  { model: 'o3-pro',                crStr: 0.3001, f1Len: 0.6235 },
  { model: 'Mistral Large 2512',    crStr: 0.2851, f1Len: 0.3989 },
  { model: 'Qwen2.5-VL-72B',        crStr: 0.2062, f1Len: 0.3948 },
  { model: 'GLM-4.6V',              crStr: 0.1382, f1Len: 0.3355 },
];
const task2CoT = [
  { model: 'GPT-5.4',               crStr: 0.6316, f1Len: 0.8325 },
  { model: 'Gemini 3.1 Pro',        crStr: 0.6950, f1Len: 0.8154 },
  { model: 'o3-pro',                crStr: 0.5230, f1Len: 0.6516 },
  { model: 'Grok 4.20',             crStr: 0.4866, f1Len: 0.6150 },
  { model: 'Claude Opus 4.6',       crStr: 0.3861, f1Len: 0.5619 },
  { model: 'Doubao-Seed-2.0-pro',   crStr: 0.3542, f1Len: 0.5822 },
  { model: 'Mistral Large 2512',    crStr: 0.2794, f1Len: 0.4404 },
  { model: 'Qwen2.5-VL-72B',        crStr: 0.2148, f1Len: 0.4130 },
  { model: 'GLM-4.6V',              crStr: 0.1389, f1Len: 0.3024 },
];

// ── Task 3: Line Completion ───────────────────────────────────────────────────
const task3Basic = [
  { model: 'Gemini 3.1 Pro',        crStr: 0.0819, f1Len: 0.2134 },
  { model: 'Grok 4.20',             crStr: 0.0626, f1Len: 0.1956 },
  { model: 'Claude Opus 4.6',       crStr: 0.0613, f1Len: 0.2197 },
  { model: 'Doubao-Seed-2.0-pro',   crStr: 0.0585, f1Len: 0.2071 },
  { model: 'GPT-5.4',               crStr: 0.0547, f1Len: 0.1858 },
  { model: 'GLM-4.6V',              crStr: 0.0383, f1Len: 0.1568 },
  { model: 'Qwen2.5-VL-72B',        crStr: 0.0383, f1Len: 0.1215 },
  { model: 'Mistral Large 2512',    crStr: 0.0345, f1Len: 0.1430 },
  { model: 'o3-pro',                crStr: 0.0249, f1Len: 0.0818 },
];
const task3CoT = [
  { model: 'GPT-5.4',               crStr: 0.0762, f1Len: 0.1979 },
  { model: 'Grok 4.20',             crStr: 0.0658, f1Len: 0.2192 },
  { model: 'Claude Opus 4.6',       crStr: 0.0623, f1Len: 0.2395 },
  { model: 'Doubao-Seed-2.0-pro',   crStr: 0.0562, f1Len: 0.1800 },
  { model: 'Qwen2.5-VL-72B',        crStr: 0.0506, f1Len: 0.1869 },
  { model: 'Mistral Large 2512',    crStr: 0.0609, f1Len: 0.2012 },
  { model: 'o3-pro',                crStr: 0.0259, f1Len: 0.1168 },
  { model: 'Gemini 3.1 Pro',        crStr: 0.0197, f1Len: 0.2176 },
  { model: 'GLM-4.6V',              crStr: 0.0353, f1Len: 0.0127 },
];

// Sort helpers
const sortByAcc = (arr) => [...arr].sort((a, b) => b.acc - a.acc);
const sortByCrStr = (arr) => [...arr].sort((a, b) => b.crStr - a.crStr);

const pct = (v) => `${(v * 100).toFixed(1)}%`;
const dec = (v) => v.toFixed(4);

function Task1Table({ data }) {
  const sorted = sortByAcc(data);
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
            <th className="px-5 py-3 text-left font-semibold rounded-tl-xl">Rank</th>
            <th className="px-5 py-3 text-left font-semibold">Model</th>
            <th className="px-5 py-3 text-center font-semibold rounded-tr-xl">Accuracy</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {sorted.map((row, i) => (
            <tr key={row.model} className={`hover:bg-blue-50 transition-colors ${i === 0 ? 'bg-yellow-50' : ''}`}>
              <td className="px-5 py-3.5 text-gray-500 font-mono">
                {i === 0 ? <Trophy className="w-4 h-4 text-yellow-500 inline" /> : `#${i + 1}`}
              </td>
              <td className="px-5 py-3.5 font-semibold text-gray-900">{row.model}</td>
              <td className="px-5 py-3.5 text-center">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-28 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-700"
                      style={{ width: `${row.acc * 100}%` }}
                    ></div>
                  </div>
                  <span className="font-semibold text-gray-800 w-12 text-right font-mono">{pct(row.acc)}</span>
                </div>
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50 border-t-2 border-gray-200">
            <td className="px-5 py-3 font-semibold text-gray-600" colSpan={2}>Average</td>
            <td className="px-5 py-3 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="w-28 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-300 rounded-full" style={{ width: `${(data.reduce((s,r)=>s+r.acc,0)/data.length)*100}%` }}></div>
                </div>
                <span className="font-semibold text-gray-600 w-12 text-right font-mono">
                  {pct(data.reduce((s,r)=>s+r.acc,0)/data.length)}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-gray-400 italic mt-2 px-1">Random-guess baseline: 25.0%</p>
    </div>
  );
}

function Task23Table({ data, taskColor }) {
  const sorted = sortByCrStr(data);
  const colors = {
    indigo: { hdr: 'from-indigo-600 to-indigo-700', bar1: 'bg-indigo-500', bar2: 'bg-indigo-200' },
    violet: { hdr: 'from-violet-600 to-violet-700', bar1: 'bg-violet-500', bar2: 'bg-violet-200' },
  };
  const c = colors[taskColor];
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className={`bg-gradient-to-r ${c.hdr} text-white`}>
            <th className="px-5 py-3 text-left font-semibold rounded-tl-xl">Rank</th>
            <th className="px-5 py-3 text-left font-semibold">Model</th>
            <th className="px-5 py-3 text-center font-semibold">CRˢᵗʳ (Strict)</th>
            <th className="px-5 py-3 text-center font-semibold rounded-tr-xl">F1ˡᵉⁿ (Lenient)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {sorted.map((row, i) => (
            <tr key={row.model} className={`hover:bg-indigo-50 transition-colors ${i === 0 ? 'bg-yellow-50' : ''}`}>
              <td className="px-5 py-3.5 text-gray-500 font-mono">
                {i === 0 ? <Trophy className="w-4 h-4 text-yellow-500 inline" /> : `#${i + 1}`}
              </td>
              <td className="px-5 py-3.5 font-semibold text-gray-900">{row.model}</td>
              <td className="px-5 py-3.5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${c.bar1} rounded-full`} style={{ width: `${row.crStr * 100 * (taskColor === 'violet' ? 12 : 1.5)}%` }}></div>
                  </div>
                  <span className="font-mono font-semibold text-gray-800 w-14 text-right">{dec(row.crStr)}</span>
                </div>
              </td>
              <td className="px-5 py-3.5 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full ${c.bar2} rounded-full`} style={{ width: `${row.f1Len * 100}%` }}></div>
                  </div>
                  <span className="font-mono text-gray-600 w-14 text-right">{dec(row.f1Len)}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-400 italic mt-2 px-1">
        CRˢᵗʳ: strict render-level score · F1ˡᵉⁿ: lenient topology-preserving F1
      </p>
    </div>
  );
}

const TABS = [
  { id: 'task1', label: 'Task 1', sublabel: 'View Correspondence', color: 'blue' },
  { id: 'task2', label: 'Task 2', sublabel: 'Structural Externalization', color: 'indigo' },
  { id: 'task3', label: 'Task 3', sublabel: 'Deep Structural Reasoning', color: 'violet' },
];

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('task1');
  const [useCoT, setUseCoT] = useState(false);

  const tabColor = {
    task1: { active: 'bg-blue-600 text-white', inactive: 'text-blue-600 hover:bg-blue-50', border: 'border-blue-600' },
    task2: { active: 'bg-indigo-600 text-white', inactive: 'text-indigo-600 hover:bg-indigo-50', border: 'border-indigo-600' },
    task3: { active: 'bg-violet-600 text-white', inactive: 'text-violet-600 hover:bg-violet-50', border: 'border-violet-600' },
  };

  const getData = () => {
    if (activeTab === 'task1') return useCoT ? task1CoT : task1Basic;
    if (activeTab === 'task2') return useCoT ? task2CoT : task2Basic;
    return useCoT ? task3CoT : task3Basic;
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Results &amp; Leaderboard
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Performance of nine representative MLLMs on SSC-Bench under Basic Prompt and CVC-CoT.
            </p>
          </div>

          {/* Tab + Toggle controls */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Task tabs */}
            <div className="flex gap-1 bg-white rounded-xl p-1 shadow border border-gray-200 w-fit">
              {TABS.map((tab) => {
                const c = tabColor[tab.id];
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive ? c.active : c.inactive
                    }`}
                  >
                    <span className="block">{tab.label}</span>
                    <span className={`block text-xs font-normal opacity-80`}>{tab.sublabel}</span>
                  </button>
                );
              })}
            </div>

            {/* Basic / CVC-CoT toggle */}
            <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2.5 shadow border border-gray-200">
              <span className={`text-sm font-medium ${!useCoT ? 'text-gray-900' : 'text-gray-400'}`}>
                Basic Prompt
              </span>
              <button
                onClick={() => setUseCoT(!useCoT)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  useCoT ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    useCoT ? 'translate-x-5' : 'translate-x-0'
                  }`}
                ></span>
              </button>
              <span className={`text-sm font-medium ${useCoT ? 'text-blue-700' : 'text-gray-400'}`}>
                + CVC-CoT
              </span>
            </div>
          </div>

          {/* Table card */}
          <motion.div
            key={`${activeTab}-${useCoT}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="p-6">
              {activeTab === 'task1' && <Task1Table data={getData()} />}
              {activeTab === 'task2' && <Task23Table data={getData()} taskColor="indigo" />}
              {activeTab === 'task3' && <Task23Table data={getData()} taskColor="violet" />}
            </div>
          </motion.div>

          {/* Note */}
          {useCoT && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-blue-600 font-medium"
            >
              Showing results with CVC-CoT (Cross-View Constraint Chain-of-Thought) prompting
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
