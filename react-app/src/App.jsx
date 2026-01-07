import Hero from './components/Hero';
import Teaser from './components/Teaser';
import Abstract from './components/Abstract';
import Methodology from './components/Methodology';
import Results from './components/Results';
import Citation from './components/Citation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Teaser />
      <Abstract />
      <Methodology />
      <Results />
      <Citation />
      <Footer />
    </div>
  );
}

export default App;
