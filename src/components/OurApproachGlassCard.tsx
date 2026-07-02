import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function OurApproachGlassCard() {
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

  // Glass card particles
  const glassParticles = [
    { id: 201, top: '15%', left: '75%', size: '3px', delay: 0.2, duration: 6 },
    { id: 202, top: '80%', left: '20%', size: '4px', delay: 1.5, duration: 9 },
    { id: 203, top: '40%', left: '15%', size: '2px', delay: 0.8, duration: 5 },
    { id: 204, top: '75%', left: '85%', size: '3px', delay: 2.2, duration: 7 },
  ];

  // Particle positions on paths: we can animate SVG circles along lines
  // Node coordinate offsets relative to center (16, 16):
  // Top: (16, 6)
  // Right: (26, 16)
  // Bottom: (16, 26)
  // Left: (6, 16)

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full rounded-[24px] border border-white/[0.08] bg-[#020204]/90 backdrop-blur-[20px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(139,92,246,0.12)] transition-shadow duration-500 overflow-hidden cursor-pointer flex flex-col items-start text-left select-none group/approach"
    >
      {/* 1. Subtle large luxury grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-[24px]" />

      {/* 2. Noise texture layer */}
      <div 
         className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none rounded-[24px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-approach'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise-approach)'/%3E%3C/svg%3E")`
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
              <linearGradient id="approach-grad" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22D3EE"/>
                <stop offset="55%" stopColor="#6366F1"/>
                <stop offset="100%" stopColor="#A855F7"/>
              </linearGradient>
              <filter id="approach-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Connecting Lines */}
            <motion.line
              x1="22.5" y1="22.5" x2="14.5" y2="14.5"
              stroke="url(#approach-grad)" strokeWidth="3.5" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.line
              x1="41.5" y1="22.5" x2="49.5" y2="14.5"
              stroke="url(#approach-grad)" strokeWidth="3.5" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.line
              x1="22.5" y1="41.5" x2="14.5" y2="49.5"
              stroke="url(#approach-grad)" strokeWidth="3.5" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.line
              x1="41.5" y1="41.5" x2="49.5" y2="49.5"
              stroke="url(#approach-grad)" strokeWidth="3.5" strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Corner Circles */}
            <motion.circle
              cx="11.5" cy="11.5" r="4.5"
              stroke="url(#approach-grad)" strokeWidth="3.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: isHovered ? [0, -2, 0] : 0,
                x: isHovered ? [0, -2, 0] : 0
              }}
              transition={{ 
                scale: { delay: 0.6, duration: 0.4 },
                y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.circle
              cx="52.5" cy="11.5" r="4.5"
              stroke="url(#approach-grad)" strokeWidth="3.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: isHovered ? [0, -2, 0] : 0,
                x: isHovered ? [0, 2, 0] : 0
              }}
              transition={{ 
                scale: { delay: 0.6, duration: 0.4 },
                y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.circle
              cx="11.5" cy="52.5" r="4.5"
              stroke="url(#approach-grad)" strokeWidth="3.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: isHovered ? [0, 2, 0] : 0,
                x: isHovered ? [0, -2, 0] : 0
              }}
              transition={{ 
                scale: { delay: 0.6, duration: 0.4 },
                y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <motion.circle
              cx="52.5" cy="52.5" r="4.5"
              stroke="url(#approach-grad)" strokeWidth="3.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: isHovered ? [0, 2, 0] : 0,
                x: isHovered ? [0, 2, 0] : 0
              }}
              transition={{ 
                scale: { delay: 0.6, duration: 0.4 },
                y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Center Circle Outline */}
            <motion.circle
              cx="32" cy="32" r="15.5"
              stroke="url(#approach-grad)" strokeWidth="3.5" fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                scale: isHovered ? 1.05 : 1
              }}
              transition={{ 
                pathLength: { duration: 1, ease: "easeOut" },
                scale: { duration: 0.3 }
              }}
              style={{ transformOrigin: "32px 32px" }}
            />

            {/* Inner Head */}
            <motion.circle
              cx="32" cy="26" r="4.5"
              stroke="url(#approach-grad)" strokeWidth="3"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                y: isHovered ? [0, -1, 0] : 0
              }}
              transition={{ 
                scale: { delay: 0.4, duration: 0.4 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformOrigin: "32px 26px" }}
            />

            {/* Inner Shoulders */}
            <motion.path
              d="M22.5 41 C22.5 34.5 26.7 30.5 32 30.5 C37.3 30.5 41.5 34.5 41.5 41"
              stroke="url(#approach-grad)" strokeWidth="3" strokeLinecap="round" fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
                y: isHovered ? [0, 0.5, 0] : 0
              }}
              transition={{ 
                pathLength: { delay: 0.6, duration: 0.5 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformOrigin: "32px 41px" }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ================= TEXT SECTION ================= */}
      <h3 className="mt-6 text-[18px] sm:text-[20px] font-bold text-white tracking-wider font-display uppercase">
        OUR APPROACH
      </h3>

      <p className="mt-4 text-[14px] leading-[22.75px] text-white/75 font-normal transition-colors duration-300 group-hover/approach:text-white">
        We synchronize Strategy, Creativity, Technology, and Growth around your goals. Every decision starts with the client and expands through a structured process.
      </p>
    </motion.div>
  );
}
