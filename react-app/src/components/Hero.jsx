import { motion } from 'framer-motion';
import { FileText, Github, Database } from 'lucide-react';

const authors = [
  { name: 'Author 1', affiliation: 1 },
  { name: 'Author 2', affiliation: 1 },
  { name: 'Author 3', affiliation: 2 },
  { name: 'Author 4', affiliation: 1 },
  { name: 'Author 5', affiliation: 2 },
];

const affiliations = [
  'Institution 1',
  'Institution 2',
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight text-balance">
            Lost in Space: Evaluating{' '}
            <span className="text-primary-600">Spatial Structural Competence</span>{' '}
            via Code-as-Reasoning in SSC-Bench
          </h1>

          {/* Authors */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6 text-lg text-gray-700">
            {authors.map((author, idx) => (
              <span key={idx} className="inline-block">
                {author.name}
                <sup className="text-primary-600 ml-1">{author.affiliation}</sup>
                {idx < authors.length - 1 && <span className="mx-2 text-gray-400">,</span>}
              </span>
            ))}
          </div>

          {/* Affiliations */}
          <div className="flex flex-col items-center gap-2 mb-10 text-gray-600">
            {affiliations.map((affiliation, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <sup className="text-primary-600">{idx + 1}</sup>
                <span>{affiliation}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://arxiv.org/abs/xxxx.xxxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-full hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <FileText className="w-5 h-5" />
              Paper (arXiv)
            </a>
            <a
              href="https://github.com/SSC-Bench/SSC-Bench"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
              Code (GitHub)
            </a>
            <a
              href="https://huggingface.co/datasets/SSC-Bench"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 font-medium rounded-full hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Database className="w-5 h-5" />
              Data (HuggingFace)
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
