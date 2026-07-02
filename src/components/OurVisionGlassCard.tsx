import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function OurVisionGlassCard() {
  const [isHovered, setIsHovered] = useState(false);

  // Gradient rotation coordinates for Stage 5
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

  // Animated floating particles inside the card
  const glassParticles = [
    { id: 1, top: '20%', left: '15%', size: '3px', delay: 0, duration: 6 },
    { id: 2, top: '75%', left: '80%', size: '4px', delay: 1, duration: 8 },
    { id: 3, top: '45%', left: '70%', size: '2px', delay: 2, duration: 5 },
    { id: 4, top: '80%', left: '25%', size: '3.5px', delay: 0.5, duration: 7 },
  ];

  // Internal SVG particles travelling upwards inside the bulb (Stage 4)
  const bulbParticles = [
    { id: 10, startX: 14, startY: 22, delay: 0, duration: 3 },
    { id: 11, startX: 18, startY: 21, delay: 0.7, duration: 2.5 },
    { id: 12, startX: 16, startY: 23, delay: 1.4, duration: 3.2 },
    { id: 13, startX: 13, startY: 20, delay: 2.1, duration: 2.8 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full rounded-[24px] border border-white/[0.08] bg-[#020204]/90 backdrop-blur-[20px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(139,92,246,0.12)] transition-shadow duration-500 overflow-hidden cursor-pointer flex flex-col items-start text-left select-none group/vision"
    >
      {/* 1. Subtle large luxury grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-[24px]" />

      {/* 2. Subtle noise texture overlay */}
      <div 
         className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none rounded-[24px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-vision'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise-vision)'/%3E%3C/svg%3E")`
        }}
      />

      {/* 2. Soft glass glare highlight */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/10 via-white/2 to-transparent rounded-[24px] pointer-events-none" />

      {/* 3. Ambient soft radial glow behind the icon */}
      <div className="absolute top-8 left-8 w-28 h-28 rounded-full pointer-events-none transition-all duration-700 blur-[30px]"
        style={{
          background: isHovered 
            ? 'radial-gradient(circle, rgba(47,128,255,0.18) 0%, rgba(139,92,246,0.18) 100%)' 
            : 'radial-gradient(circle, rgba(47,128,255,0.08) 0%, rgba(139,92,246,0.08) 100%)'
        }}
      />

      {/* 4. Tiny floating glass particles inside card */}
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

      {/* 5. Animated subtle background gradient sheen */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#8B5CF6]/[0.01] to-transparent opacity-0 group-hover/vision:opacity-100 transition-opacity duration-700 pointer-events-none" />

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
          {/* Neon bloom filter element inside card */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2F80FF]/5 to-[#C026FF]/5 opacity-40 rounded-[18px]" />

          <svg
            viewBox="0 0 64 64"
            className="w-10 h-10 relative z-10 overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="vision-grad" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22D3EE"/>
                <stop offset="55%" stopColor="#6366F1"/>
                <stop offset="100%" stopColor="#A855F7"/>
              </linearGradient>
              <filter id="vision-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Lightbulb outline */}
            <motion.path
              d="M32 6 C20.8 6 12 14.8 12 25.5 C12 32.6 15.6 37.5 19.5 41 C21.6 42.9 22.5 44.4 22.5 47 H41.5 C41.5 44.4 42.4 42.9 44.5 41 C48.4 37.5 52 32.6 52 25.5 C52 14.8 43.2 6 32 6 Z"
              stroke="url(#vision-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0.6 }}
              animate={{ 
                pathLength: 1, 
                opacity: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />

            {/* Base line 1 */}
            <motion.line
              x1="23"
              y1="53"
              x2="41"
              y2="53"
              stroke="url(#vision-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: isHovered ? 1 : 0.7 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            />

            {/* Base line 2 */}
            <motion.line
              x1="24"
              y1="59"
              x2="40"
              y2="59"
              stroke="url(#vision-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ pathLength: 1, opacity: isHovered ? 1 : 0.7 }}
              transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
            />

            {/* Glowing light rays on hover */}
            <AnimatePresence>
              {isHovered && (
                <>
                  {/* Ray Top */}
                  <motion.line
                    x1="32" y1="1" x2="32" y2="4"
                    stroke="#22D3EE" strokeWidth="3" strokeLinecap="round"
                    initial={{ opacity: 0, y: 2 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  />
                  {/* Ray Left */}
                  <motion.line
                    x1="2" y1="25.5" x2="5" y2="25.5"
                    stroke="#22D3EE" strokeWidth="3" strokeLinecap="round"
                    initial={{ opacity: 0, x: 2 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                  />
                  {/* Ray Right */}
                  <motion.line
                    x1="59" y1="25.5" x2="62" y2="25.5"
                    stroke="#A855F7" strokeWidth="3" strokeLinecap="round"
                    initial={{ opacity: 0, x: -2 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                  />
                  {/* Ray Top Left */}
                  <motion.line
                    x1="11" y1="8" x2="14" y2="11"
                    stroke="#22D3EE" strokeWidth="3" strokeLinecap="round"
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  />
                  {/* Ray Top Right */}
                  <motion.line
                    x1="53" y1="8" x2="50" y2="11"
                    stroke="#A855F7" strokeWidth="3" strokeLinecap="round"
                    initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  />
                </>
              )}
            </AnimatePresence>

            {/* Filament inside bulb */}
            <motion.path
              d="M 27 34 L 27 26 C 27 22, 37 22, 37 26 L 37 34"
              stroke="url(#vision-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ 
                pathLength: 1, 
                opacity: isHovered ? [0.6, 1, 0.6] : 0.4 
              }}
              transition={{ 
                pathLength: { delay: 0.8, duration: 0.8 },
                opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ================= TEXT SECTION ================= */}
      <h3 className="mt-6 text-[18px] sm:text-[20px] font-bold text-white tracking-wider font-display uppercase">
        OUR VISION
      </h3>

      <p className="mt-4 text-[14px] leading-[22.75px] text-white/75 font-normal transition-colors duration-300 group-hover/vision:text-white">
        We don't just create beautiful brands. <br className="hidden sm:inline" />
        We engineer digital experiences that inspire trust, build authority, and accelerate business growth.
      </p>
    </motion.div>
  );
}
