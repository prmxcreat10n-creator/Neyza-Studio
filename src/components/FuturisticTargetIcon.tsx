import React from 'react';
import { motion } from 'motion/react';

export default function FuturisticTargetIcon() {
  const containerVariants = {
    initial: { 
      scale: 1,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 0 8px rgba(30, 144, 255, 0.1)'
    },
    hover: { 
      scale: 1.05, 
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.95), 0 0 16px rgba(30, 144, 255, 0.4)',
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const arrowVariants = {
    initial: { x: 0, y: 0 },
    hover: { 
      x: -2, 
      y: 2, 
      transition: { 
        duration: 0.6, 
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  const ringVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { 
      scale: [1, 1.03, 1],
      opacity: [0.8, 1, 0.8],
      transition: { 
        duration: 1.2, 
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-[#000000] border border-white/10 overflow-hidden cursor-pointer select-none"
    >
      {/* Decorative subtle grid background on the icon */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4px_4px] pointer-events-none" />

      {/* Glass sheen highlight overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />

      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle neon blue glow filter */}
          <filter id="electric-blue-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer concentric circle - Crisp White Outline */}
        <motion.circle
          variants={ringVariants}
          cx="14"
          cy="18"
          r="9.5"
          stroke="#ffffff"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* Middle concentric circle - Crisp White Outline */}
        <motion.circle
          variants={ringVariants}
          cx="14"
          cy="18"
          r="5.5"
          stroke="#ffffff"
          strokeWidth="1.25"
          strokeLinecap="round"
        />

        {/* Bullseye Center - Highlighted Electric Blue Accent */}
        <circle
          cx="14"
          cy="18"
          r="2.2"
          fill="#1E90FF"
          filter="url(#electric-blue-glow)"
        />

        {/* Target and Arrow concept */}
        <motion.g variants={arrowVariants}>
          {/* Arrow Shaft - Crisp White Outline with consistent stroke thickness */}
          <line
            x1="26"
            y1="6"
            x2="18.5"
            y2="13.5"
            stroke="#ffffff"
            strokeWidth="1.25"
            strokeLinecap="round"
          />

          {/* Arrowhead - Highlighted Electric Blue Accent */}
          <path
            d="M 23,13.5 L 18,13.5 L 18,8.5"
            stroke="#1E90FF"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#electric-blue-glow)"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
