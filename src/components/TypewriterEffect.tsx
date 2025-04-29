import { useState, useEffect, useRef } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
}

const TypewriterEffect = ({ text, delay = 100 }: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isTyping && currentIndex < text.length) {
      intervalRef.current = window.setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
    } else if (currentIndex >= text.length) {
      setIsTyping(false);
      
      // Add blinking cursor after typing is complete
      const cursorInterval = window.setInterval(() => {
        setIsTyping(prev => !prev);
      }, 500);
      
      return () => {
        window.clearInterval(cursorInterval);
      };
    }

    return () => {
      if (intervalRef.current) {
        window.clearTimeout(intervalRef.current);
      }
    };
  }, [text, delay, currentIndex, isTyping]);

  return (
    <span className="inline-block relative">
      {displayText}
      <span className={`absolute ${isTyping ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </span>
  );
};

export default TypewriterEffect;