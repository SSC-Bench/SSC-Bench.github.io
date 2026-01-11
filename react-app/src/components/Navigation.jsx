import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white/95 backdrop-blur-md'
      } border-b border-gray-200`}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between py-4">
          <div className="text-2xl font-bold text-primary-600 tracking-tight">
            SSC-Bench
          </div>
          <ul className="flex items-center gap-8">
            <li>
              <button
                onClick={() => scrollToSection('overview')}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors relative group"
              >
                Overview
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('benchmark')}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors relative group"
              >
                Benchmark
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('results')}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors relative group"
              >
                Results
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('download')}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors relative group"
              >
                Download
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
