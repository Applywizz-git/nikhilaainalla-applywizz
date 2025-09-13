import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);
  const letters = ['L', 'O', 'A', 'D', 'I', 'N', 'G'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 2400);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-surface-secondary to-surface-tertiary" />
        
        {/* Loading Animation */}
        <div className="relative z-10 flex items-center space-x-2">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ 
                opacity: 0,
                y: 20,
                rotateY: 90,
              }}
              animate={{ 
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="text-5xl md:text-7xl font-bold text-gradient-primary"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-64 h-1 bg-muted rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ 
              duration: 1.5, 
              delay: 0.5,
              repeat: 1,
              ease: "easeInOut"
            }}
            className="h-full w-1/3 bg-gradient-to-r from-primary to-secondary"
          />
        </motion.div>

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * 400 - 200,
              y: Math.random() * 400 - 200,
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 1.5,
              repeat: Infinity,
              repeatDelay: Math.random() * 2,
            }}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              left: `${50 + Math.random() * 20 - 10}%`,
              top: `${50 + Math.random() * 20 - 10}%`,
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}