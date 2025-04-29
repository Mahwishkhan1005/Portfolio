import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import Header from './components/Layout/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Layout/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;