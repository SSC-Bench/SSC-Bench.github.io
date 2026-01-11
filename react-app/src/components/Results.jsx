import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, AlertCircle } from 'lucide-react';

const resultsData = [
  {
    model: 'ChatGPT 5.2',
    type: 'Closed',
    fv: { acc: 0.778, f1: 0.875 },
    lv: { acc: 0.875, f1: 0.933 },
    tv: { acc: 0.900, f1: 0.947 },
    avg: { acc: 0.851, f1: 0.918 },
    cr: '0.00%',
  },
  {
    model: 'Qwen2.5-72B-Instruct',
    type: 'Open',
    fv: { acc: 0.750, f1: 0.857 },
    lv: { acc: 0.857, f1: 0.923 },
    tv: { acc: 0.538, f1: 0.700 },
    avg: { acc: 0.715, f1: 0.827 },
    cr: '0.00%',
  },
  {
    model: 'Qwen2.5-14B-Instruct',
    type: 'Open',
    fv: { acc: 0.500, f1: 0.667 },
    lv: { acc: 0.667, f1: 0.800 },
    tv: { acc: 0.778, f1: 0.875 },
    avg: { acc: 0.648, f1: 0.781 },
    cr: '0.00%',
  },
  {
    model: 'InternVL3.5-241B',
    type: 'Open',
    fv: { acc: 0.455, f1: 0.625 },
    lv: { acc: 0.625, f1: 0.769 },
    tv: { acc: 0.778, f1: 0.875 },
    avg: { acc: 0.619, f1: 0.756 },
    cr: '0.00%',
  },
  {
    model: 'Gemini3 Pro',
    type: 'Closed',
    fv: { acc: 0.333, f1: 0.500 },
    lv: { acc: 0.833, f1: 0.909 },
    tv: { acc: 0.600, f1: 0.750 },
    avg: { acc: 0.589, f1: 0.720 },
    cr: '0.00%',
  },
  {
    model: 'Qwen3-VL-235B',
    type: 'Open',
    fv: { acc: 0.444, f1: 0.615 },
    lv: { acc: 0.500, f1: 0.667 },
    tv: { acc: 0.500, f1: 0.667 },
    avg: { acc: 0.481, f1: 0.650 },
    cr: '0.00%',
  },
  {
    model: 'Qwen3-MAX',
    type: 'Closed',
    fv: { acc: 0.571, f1: 0.727 },
    lv: { acc: 0.400, f1: 0.571 },
    tv: { acc: 0.333, f1: 0.500 },
    avg: { acc: 0.435, f1: 0.600 },
    cr: '0.00%',
  },
  {
    model: 'InternVL3-78B',
    type: 'Open',
    fv: { acc: 0.263, f1: 0.417 },
    lv: { acc: 0.316, f1: 0.480 },
    tv: { acc: 0.538, f1: 0.700 },
    avg: { acc: 0.372, f1: 0.532 },
    cr: '0.00%',
  },
  {
    model: 'Qwen3-Omni-Flash',
    type: 'Closed',
    fv: { acc: 0.333, f1: 0.500 },
    lv: { acc: 0.091, f1: 0.167 },
    tv: { acc: 0.600, f1: 0.750 },
    avg: { acc: 0.341, f1: 0.472 },
    cr: '0.00%',
  },
  {
    model: 'Qwen3-VL-32B',
    type: 'Open',
    fv: { acc: 0.400, f1: 0.571 },
    lv: { acc: 0.300, f1: 0.462 },
    tv: { acc: 0.158, f1: 0.273 },
    avg: { acc: 0.286, f1: 0.435 },
    cr: '0.00%',
  },
];

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Results & Leaderboard
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Performance of 13 representative MLLMs on SSC-Bench (showing top 10 models by average F1 score)
            </p>
          </div>

          {/* Warning Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg flex items-start gap-4"
          >
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 mb-2">Critical Finding</h3>
              <p className="text-red-800">
                <strong>All 13 models achieved 0.00% Completion Rate</strong> on the code-as-reasoning
                path, indicating a complete failure in logical synthesis of geometric relations.
              </p>
            </div>
          </motion.div>

          {/* Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary-600 to-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Rank</th>
                    <th className="px-6 py-4 text-left font-semibold">Model</th>
                    <th className="px-6 py-4 text-center font-semibold">Type</th>
                    <th className="px-6 py-4 text-center font-semibold" colSpan={2}>
                      Front View
                    </th>
                    <th className="px-6 py-4 text-center font-semibold" colSpan={2}>
                      Left View
                    </th>
                    <th className="px-6 py-4 text-center font-semibold" colSpan={2}>
                      Top View
                    </th>
                    <th className="px-6 py-4 text-center font-semibold" colSpan={2}>
                      Average
                    </th>
                    <th className="px-6 py-4 text-center font-semibold">CR</th>
                  </tr>
                  <tr className="bg-primary-500/20 text-white text-sm">
                    <th className="px-6 py-2"></th>
                    <th className="px-6 py-2"></th>
                    <th className="px-6 py-2"></th>
                    <th className="px-4 py-2">Acc</th>
                    <th className="px-4 py-2">F1</th>
                    <th className="px-4 py-2">Acc</th>
                    <th className="px-4 py-2">F1</th>
                    <th className="px-4 py-2">Acc</th>
                    <th className="px-4 py-2">F1</th>
                    <th className="px-4 py-2">Acc</th>
                    <th className="px-4 py-2">F1</th>
                    <th className="px-4 py-2"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {resultsData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`hover:bg-blue-50 transition-colors ${
                        idx === 0 ? 'bg-yellow-50' : ''
                      }`}
                    >
                      <td className="px-6 py-4">
                        {idx === 0 && <Trophy className="w-5 h-5 text-yellow-500" />}
                        {idx !== 0 && <span className="text-gray-500">#{idx + 1}</span>}
                      </td>
                      <td className="px-6 py-4 font-mono text-sm font-semibold text-gray-900">
                        {row.model}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            row.type === 'Closed'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {row.type}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-center text-sm">{row.fv.acc.toFixed(3)}</td>
                      <td className="px-4 py-4 text-center text-sm font-semibold">
                        {row.fv.f1.toFixed(3)}
                      </td>
                      <td className="px-4 py-4 text-center text-sm">{row.lv.acc.toFixed(3)}</td>
                      <td className="px-4 py-4 text-center text-sm font-semibold">
                        {row.lv.f1.toFixed(3)}
                      </td>
                      <td className="px-4 py-4 text-center text-sm">{row.tv.acc.toFixed(3)}</td>
                      <td className="px-4 py-4 text-center text-sm font-semibold">
                        {row.tv.f1.toFixed(3)}
                      </td>
                      <td className="px-4 py-4 text-center text-sm bg-blue-50">
                        {row.avg.acc.toFixed(3)}
                      </td>
                      <td className="px-4 py-4 text-center text-sm font-bold bg-blue-50 text-primary-600">
                        {row.avg.f1.toFixed(3)}
                      </td>
                      <td className="px-4 py-4 text-center">
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                          {row.cr}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <p className="text-center text-sm text-gray-500 italic">
            Acc = Accuracy, F1 = F1 Score, CR = Completion Rate (Code-as-Reasoning path)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
