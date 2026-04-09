import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const bibtex = `@inproceedings{anonymous2026sscbench,
  title     = {Lost in Space: SSC-Bench for Evaluating Spatial
               Structural Competence in Multimodal Large Language
               Models},
  author    = {Anonymous Author(s)},
  booktitle = {Proceedings of the ACM International Conference},
  year      = {2026},
  note      = {Under anonymous review}
}`;

const Citation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Citation
          </h2>
          <p className="text-center text-gray-500 text-sm">
            If you find this work useful, please consider citing our paper.
          </p>

          <div className="relative">
            <div className="bg-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-slate-700">
              <pre className="text-slate-200 font-mono text-sm overflow-x-auto leading-relaxed">
                {bibtex}
              </pre>
            </div>
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-all flex items-center gap-1.5 text-sm"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="font-medium text-emerald-300">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="font-medium">Copy</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Citation;
