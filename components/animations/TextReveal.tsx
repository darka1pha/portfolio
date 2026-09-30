'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClass?: string;
}

export default function TextReveal({
  text,
  className = '',
  delay = 0,
  highlightWords = [],
  highlightClass = 'text-gradient-teal',
}: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 18,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial='hidden'
      animate='visible'
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        );

        return (
          <motion.span
            variants={child}
            key={index}
            className={`inline-block mr-[0.28em] ${
              isHighlighted ? highlightClass : ''
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.span>
  );
}
