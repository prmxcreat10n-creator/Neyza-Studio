import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function OurValuesGlassCard() {
  const [isHovered, setIsHovered] = useState(false);

  // Breathing effect for the entire icon
  const breathingVariants = {
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Gradient rotation coordinates for rotating gradient around target rings
  const gradientAnimate = {
    x1: ["0%", "100%", "100%", "0%", "0%"],
    y1: ["0%", "0%", "100%", "100%", "0%"],
    x2: ["100%", "100%", "0%", "0%", "100%"],
    y2: ["100%", "0%", "0%", "100%", "100%"],
  };

  const gradientTransition = {
    duration: 15,
    repeat: Infinity,
    ease: "linear"
  };

  // Glass card floating background particles
  const glassParticles = [
    { id: 301, top: '22%', left: '20%', size: '3px', delay: 0.3, duration: 7 },
    { id: 302, top: '78%', left: '75%', size: '4px', delay: 1.4, duration: 8 },
    { id: 303, top: '35%', left: '80%', size: '2.5px', delay: 2.0, duration: 6 },
    { id: 304, top: '82%', left: '15%', size: '3.5px', delay: 0.7, duration: 9 },
  ];

  // Orbiting particles (Stage 5)
  const orbitParticles = [
    { id: 310, r: 12, duration: 7, delay: 0 },
    { id: 311, r: 9, duration: 5.5, delay: 1.8 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full rounded-[24px] border border-white/[0.08] bg-[#020204]/90 backdrop-blur-[20px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(139,92,246,0.12)] transition-shadow duration-500 overflow-hidden cursor-pointer flex flex-col items-start text-left select-none group/values"
    >
      {/* 1. Subtle large luxury grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-[24px]" />

      {/* 2. Noise texture layer */}
      <div 
         className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none rounded-[24px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-values'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise-values)'/%3E%3C/svg%3E")`
        }}
      />

      {/* 3. Glass border glare */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/10 via-white/2 to-transparent rounded-[24px] pointer-events-none" />

      {/* 4. Ambient soft radial glow behind the icon */}
      <div 
        className="absolute top-8 left-8 w-28 h-28 rounded-full pointer-events-none transition-all duration-700 blur-[30px]"
        style={{
          background: isHovered 
            ? 'radial-gradient(circle, rgba(47,128,255,0.18) 0%, rgba(139,92,246,0.18) 100%)' 
            : 'radial-gradient(circle, rgba(47,128,255,0.08) 0%, rgba(139,92,246,0.08) 100%)'
        }}
      />

      {/* 5. Floating background particles */}
      {glassParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/10 pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* ================= ICON SECTION ================= */}
      <motion.div
        variants={breathingVariants}
        animate="animate"
        className="relative"
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.08 : 1.0,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-16 h-16 rounded-[18px] flex items-center justify-center bg-white/[0.02] border border-white/10 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.1)] overflow-hidden"
        >
          {/* Glass internal background highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00C8FF]/5 to-[#8B5CF6]/5 opacity-40 rounded-[18px]" />

          <svg
            viewBox="0 0 64 64"
            className="w-10 h-10 relative z-10 overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="values-grad" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22D3EE"/>
                <stop offset="55%" stopColor="#6366F1"/>
                <stop offset="100%" stopColor="#A855F7"/>
              </linearGradient>
              <filter id="values-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Shield Outline */}
            <motion.path
              d="M32 6 C17.3 6.1 14.5 13.5 14.5 13.5 C14.5 28.5 23.5 39.5 32 47 C40.5 39.5 49.5 28.5 49.5 13.5 C49.5 13.5 46.7 6.1 32 6 Z"
              stroke="url(#values-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ 
                pathLength: { duration: 1.2, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
              style={{ transformOrigin: "32px 26.5px" }}
            />

            {/* Checkmark inside shield */}
            <motion.path
              d="M 23 25 L 29 31 L 41 19"
              stroke="#F8FAFC"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            />

            {/* Electric cyan trace overlay on checkmark for glowing dynamic effect */}
            <motion.path
              d="M 23 25 L 29 31 L 41 19"
              stroke="#22D3EE"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#values-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 1],
                opacity: isHovered ? [0, 1, 0.4] : 0
              }}
              transition={{ 
                delay: 1.0, 
                duration: 1.2, 
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ================= TEXT SECTION ================= */}
      <h3 className="mt-6 text-[18px] sm:text-[20px] font-bold text-white tracking-wider font-display uppercase">
        OUR VALUES
      </h3>

      <p className="mt-4 text-[14px] leading-[22.75px] text-white/75 font-normal transition-colors duration-300 group-hover/values:text-white">
        We champion continuous excellence, complete transparency, and mutual trust. We focus on true value, strategic partnership, and maintaining unmatched output.
      </p>
    </motion.div>
  );
}
