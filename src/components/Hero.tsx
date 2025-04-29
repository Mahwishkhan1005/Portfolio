import { useEffect, useState, useRef } from 'react';
import { Linkedin, Github, Mail, Phone, FileDown } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
import Button from './ui/Button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden"
    >
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px), 
                           radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
          mask: 'linear-gradient(to bottom, transparent, black)'
        }} />
      </div>

      {/* Animated tech lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-blue-500/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              transform: 'rotate(45deg)',
              animation: `techLine ${Math.random() * 3 + 2}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      {/* Binary rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-500/20 text-xs font-mono whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-20px`,
              animation: `binaryRain ${Math.random() * 5 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {[...Array(10)].map(() => Math.round(Math.random())).join('')}
          </div>
        ))}
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 py-20 z-10">
        <div className="max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              {/* Profile Photo */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/10 backdrop-blur-sm">
                  <img
                    src="./images/profile.jpg"
                    alt="Mahwish Khan"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="mb-4 inline-block">
                  <span className="inline-block py-1 px-3 rounded-full bg-blue-500 bg-opacity-30 text-blue-300 text-sm font-medium mb-2 backdrop-blur-sm">
                    B.Tech CSE Student @ Lovely Professional University
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 relative">
                  <span className="relative z-10">Mahwish Khan</span>
                  <div className="absolute -left-4 -right-4 top-1/2 h-3 bg-blue-500/20 -skew-x-12 -translate-y-1/2" />
                </h1>
                
                <h2 className="text-xl md:text-2xl font-medium text-blue-300 mb-6">
                  <TypewriterEffect text="Aspiring Data Scientist & Developer" delay={100} />
                </h2>
                
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 relative">
                  Passionate about solving real-world problems through data and code. 
                  Strong foundation in C++, Python, and data visualization tools.
                  <div className="absolute -left-2 top-0 bottom-0 w-1 bg-blue-500/30 rounded" />
                </p>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="https://www.linkedin.com/in/mahwishkhan1005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} className="group-hover:text-blue-400 transition-colors" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Mahwishkhan1005" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 group"
                aria-label="GitHub Profile"
              >
                <Github size={18} className="group-hover:text-blue-400 transition-colors" />
                <span className="font-medium">GitHub</span>
              </a>
              <a 
                href="mailto:mahwishkhan1005@gmail.com" 
                className="flex items-center gap-2 py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 group"
                aria-label="Email"
              >
                <Mail size={18} className="group-hover:text-blue-400 transition-colors" />
                <span className="font-medium">Email</span>
              </a>
              <a 
                href="tel:+919142668648" 
                className="flex items-center gap-2 py-2 px-4 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20 group"
                aria-label="Phone"
              >
                <Phone size={18} className="group-hover:text-blue-400 transition-colors" />
                <span className="font-medium">Phone</span>
              </a>
            </div>
            
            {/* Resume download button */}
            <Button 
              href="/Mahwish_Khan_Resume.pdf" 
              download="Mahwish_Khan_Resume.pdf"
              variant="primary"
              className="animate-bounce-subtle relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/30 to-blue-600/0 group-hover:translate-x-full transition-transform duration-1000" />
              <FileDown size={18} />
              <span>Download Resume</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white border-opacity-50 flex justify-center pt-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;