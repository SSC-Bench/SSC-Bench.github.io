import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Benchmark from './components/Benchmark';
import KeyFindings from './components/KeyFindings';
import Results from './components/Results';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <Benchmark />
      <KeyFindings />
      <Results />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
