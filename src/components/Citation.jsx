import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const bibtex = `@article{sscbench2026,
  title     = {Lost in Space: Evaluating Spatial Structural Competence via Code-as-Reasoning in SSC-Bench},
  author    = {Anonymous ACL Submission},
  journal   = {arXiv preprint arXiv:xxxx.xxxxx},
  year      = {2026}
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
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
            Citation
          </h2>

          <div className="relative">
            <div className="bg-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700">
              <pre className="text-gray-100 font-mono text-sm overflow-x-auto leading-relaxed">
                {bibtex}
              </pre>
            </div>

            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span className="text-sm font-medium">Copy</span>
                </>
              )}
            </button>
          </div>

          <p className="text-center text-gray-600">
            If you find this work useful, please consider citing our paper.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Citation;
