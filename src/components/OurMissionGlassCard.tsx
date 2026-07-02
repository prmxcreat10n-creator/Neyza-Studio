import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function OurMissionGlassCard() {
  const [isHovered, setIsHovered] = useState(false);

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
    { id: 1, top: '25%', left: '80%', size: '3px', delay: 0.5, duration: 7 },
    { id: 2, top: '70%', left: '15%', size: '4px', delay: 1.2, duration: 9 },
    { id: 3, top: '35%', left: '20%', size: '2px', delay: 2.5, duration: 6 },
    { id: 4, top: '85%', left: '75%', size: '3.5px', delay: 0.1, duration: 8 },
  ];

  // Rotating orbiting particles (orbiting around target center: cx=16, cy=16) (Stage 6)
  const orbitParticles = [
    { id: 101, r: 11, duration: 8, delay: 0 },
    { id: 102, r: 8, duration: 6, delay: 1.5 },
    { id: 103, r: 13, duration: 10, delay: 0.7 }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full h-full rounded-[24px] border border-white/[0.08] bg-[#020204]/90 backdrop-blur-[20px] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(139,92,246,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_40px_rgba(139,92,246,0.12)] transition-shadow duration-500 overflow-hidden cursor-pointer flex flex-col items-start text-left select-none group/mission"
    >
      {/* 1. Subtle large luxury grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none rounded-[24px]" />

      {/* 2. Subtle noise texture overlay */}
      <div 
         className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none rounded-[24px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise-mission'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise-mission)'/%3E%3C/svg%3E")`
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
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#8B5CF6]/[0.01] to-transparent opacity-0 group-hover/mission:opacity-100 transition-opacity duration-700 pointer-events-none" />

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
              <linearGradient id="mission-grad" x1="6" y1="6" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22D3EE"/>
                <stop offset="55%" stopColor="#6366F1"/>
                <stop offset="100%" stopColor="#A855F7"/>
              </linearGradient>
              {/* Soft glow for target */}
              <filter id="mission-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer ring */}
            <motion.circle
              cx="29"
              cy="35"
              r="23"
              stroke="url(#mission-grad)"
              strokeWidth="3.5"
              initial={{ pathLength: 0, opacity: 0.3 }}
              animate={{ 
                pathLength: 1, 
                opacity: isHovered ? 0.9 : 0.6,
                scale: isHovered ? [1, 1.03, 1] : 1 
              }}
              transition={{ 
                pathLength: { duration: 1.2, ease: "easeOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformOrigin: "29px 35px" }}
            />

            {/* Middle ring */}
            <motion.circle
              cx="29"
              cy="35"
              r="15.5"
              stroke="url(#mission-grad)"
              strokeWidth="3.5"
              initial={{ pathLength: 0, opacity: 0.4 }}
              animate={{ 
                pathLength: 1, 
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? [1, 1.06, 1] : 1
              }}
              transition={{ 
                pathLength: { duration: 1, delay: 0.2, ease: "easeOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              }}
              style={{ transformOrigin: "29px 35px" }}
            />

            {/* Inner ring */}
            <motion.circle
              cx="29"
              cy="35"
              r="8"
              stroke="url(#mission-grad)"
              strokeWidth="3.5"
              initial={{ pathLength: 0, opacity: 0.5 }}
              animate={{ 
                pathLength: 1, 
                opacity: isHovered ? 1 : 0.8,
                scale: isHovered ? [1, 1.1, 1] : 1
              }}
              transition={{ 
                pathLength: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
              }}
              style={{ transformOrigin: "29px 35px" }}
            />

            {/* Center solid dot */}
            <motion.circle
              cx="29"
              cy="35"
              r="2.2"
              fill="url(#mission-grad)"
              filter="url(#mission-glow)"
              animate={{
                scale: isHovered ? [1, 1.8, 1] : [1, 1.3, 1]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Target arrow pointing to center */}
            <motion.path
              d="M37 27 L54 10 M54 10 L46 11.5 M54 10 L52.5 18"
              stroke="url(#mission-grad)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 1,
                x: isHovered ? [-1, 2, -1] : 0,
                y: isHovered ? [1, -2, 1] : 0
              }}
              transition={{ 
                pathLength: { duration: 1.4, delay: 0.5, ease: "easeOut" },
                x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
              }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* ================= TEXT SECTION ================= */}
      <h3 className="mt-6 text-[18px] sm:text-[20px] font-bold text-white tracking-wider font-display uppercase">
        OUR MISSION
      </h3>

      <p className="mt-4 text-[14px] leading-[22.75px] text-white/75 font-normal transition-colors duration-300 group-hover/mission:text-white">
        We transform ideas into strategic digital experiences that strengthen brands, attract the right audience, and deliver measurable business growth.
      </p>
    </motion.div>
  );
}
