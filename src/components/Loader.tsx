import { useEffect, useState } from 'react';

const Loader = () => {
  const [text, setText] = useState('');
  const fullText = 'Loading Portfolio...';
  const [charIndex, setCharIndex] = useState(0);
  const [matrixChars, setMatrixChars] = useState<string[][]>([]);
  
  // Matrix-like effect
  useEffect(() => {
    const rows = 10;
    const cols = 20;
    const chars = '01MAHWISHKHAN';
    
    const initialMatrix = Array(rows).fill(0).map(() => 
      Array(cols).fill(0).map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    );
    
    setMatrixChars(initialMatrix);
    
    const interval = setInterval(() => {
      setMatrixChars(prev => {
        return prev.map(row => 
          row.map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
        );
      });
    }, 150);
    
    return () => clearInterval(interval);
  }, []);
  
  // Typewriter effect for loader text
  useEffect(() => {
    if (charIndex < fullText.length) {
      const typingTimer = setTimeout(() => {
        setText(prev => prev + fullText.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
      
      return () => clearTimeout(typingTimer);
    }
  }, [charIndex, fullText]);

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Binary rain background */}
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

      <div className="relative mb-8 group">
        {/* Glowing circle behind photo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-75 blur-lg animate-pulse"></div>
        
        {/* Matrix-like comic effect surrounding the photo */}
        <div className="absolute -inset-8 text-blue-500 font-mono text-xs opacity-40 grid place-items-center overflow-hidden rounded-full">
          {matrixChars.map((row, rowIdx) => (
            <div key={rowIdx} className="flex">
              {row.map((char, colIdx) => (
                <span 
                  key={`${rowIdx}-${colIdx}`}
                  className={`px-1 ${Math.random() > 0.8 ? 'text-white' : ''}`}
                  style={{ 
                    opacity: Math.random() > 0.7 ? 1 : 0.5,
                    transform: `scale(${Math.random() > 0.9 ? 1.5 : 1})`
                  }}
                >
                  {char}
                </span>
              ))}
            </div>
          ))}
        </div>
        
        {/* Profile photo */}
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-blue-500/50 z-10">
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Mahwish Khan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tech lines radiating from photo */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-16 h-px bg-blue-500/30"
            style={{
              left: '50%',
              top: '50%',
              transformOrigin: 'left',
              transform: `rotate(${i * 45}deg) translateX(4rem)`,
              animation: `techLine ${2 + i * 0.5}s linear infinite`
            }}
          />
        ))}
      </div>
      
      {/* Superhero Logo */}
      <div className="text-4xl font-bold mb-8 relative">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          MK
        </span>
        <div className="absolute -inset-2 border-2 border-blue-500/30 rounded-lg -skew-x-12"></div>
      </div>
      
      {/* Typewriter text */}
      <div className="text-white text-xl font-bold relative">
        {text}
        <span className="absolute right-[-1rem] top-0 h-full w-2 bg-blue-500 animate-blink"></span>
      </div>

      {/* Tech circuit lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </div>
  );
};

export default Loader;