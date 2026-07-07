import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

let sharedAudioCtx: AudioContext | null = null;

const playSubtleHoverSound = () => {
  try {
    if (typeof window === 'undefined') return;
    
    if (!sharedAudioCtx) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      sharedAudioCtx = new AudioContextClass();
    }
    
    // Resume audio context if it was suspended (browser autoplay policy)
    if (sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume();
    }

    const oscillator = sharedAudioCtx.createOscillator();
    const gainNode = sharedAudioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, sharedAudioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(300, sharedAudioCtx.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0.03, sharedAudioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, sharedAudioCtx.currentTime + 0.05);

    oscillator.connect(gainNode);
    gainNode.connect(sharedAudioCtx.destination);

    oscillator.start();
    oscillator.stop(sharedAudioCtx.currentTime + 0.05);
  } catch (error) {
    // Silently handle any audio errors
  }
};

interface PremiumButtonProps {
  onClick: () => void;
}

export function PrimaryPremiumButton({ onClick }: PremiumButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Magnetic spring motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { damping: 15, stiffness: 120, mass: 0.6 });
  const springY = useSpring(y, { damping: 15, stiffness: 120, mass: 0.6 });

  // Light sweep state
  const [sweepActive, setSweepActive] = useState(false);

  // Periodic light sweep trigger every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSweepActive(true);
      const timeout = setTimeout(() => setSweepActive(false), 1200);
      return () => clearTimeout(timeout);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center (scaled down for subtle magnetic effect)
    const distanceX = (e.clientX - centerX) * 0.28;
    const distanceY = (e.clientY - centerY) * 0.28;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={playSubtleHoverSound}
      onClick={onClick}
      className="group relative h-[60px] px-8 rounded-full flex items-center justify-between gap-6 overflow-hidden select-none cursor-pointer transition-all duration-300"
      // Normal lift and enhanced glow on hover
      whileHover={{ 
        y: -4,
        scale: 1.02,
        boxShadow: "0 0 0 1px rgba(168, 85, 247, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.4), 0 15px 45px rgba(109, 40, 255, 0.6)"
      }}
      // Intrinsic style gradients
      style={{
        background: "linear-gradient(135deg, #2563FF 0%, #6D28FF 50%, #A855F7 100%)",
        boxShadow: "0 0 0 1px rgba(109, 40, 255, 0.2), inset 0 2px 3px rgba(255, 255, 255, 0.3), 0 10px 30px rgba(37, 99, 255, 0.4)",
        x: springX,
        y: springY,
      }}
    >
      {/* Inner glowing shadow ring */}
      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.15)] pointer-events-none" />

      {/* Micro-interactive soft light sweep passing across */}
      <AnimatePresence>
        {sweepActive && (
          <motion.div
            initial={{ left: '-120%' }}
            animate={{ left: '200%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none z-0"
          />
        )}
      </AnimatePresence>

      {/* Button Text */}
      <span className="relative z-10 text-white font-sans text-[16px] sm:text-[17px] font-semibold tracking-wide drop-shadow-sm">
        Let's Grow Together
      </span>

      {/* Circular Arrow Icon on the right */}
      <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/20 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105">
        <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 ease-out group-hover:translate-x-[6px]" />
      </div>
    </motion.button>
  );
}

export function SecondaryPremiumButton({ onClick }: PremiumButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  // Magnetic spring motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { damping: 15, stiffness: 120, mass: 0.6 });
  const springY = useSpring(y, { damping: 15, stiffness: 120, mass: 0.6 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = (e.clientX - centerX) * 0.28;
    const distanceY = (e.clientY - centerY) * 0.28;
    
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={playSubtleHoverSound}
      onClick={onClick}
      style={{
        x: springX,
        y: springY,
      }}
      className="group relative h-[60px] px-8 rounded-full flex items-center justify-between gap-5 overflow-hidden select-none cursor-pointer transition-all duration-300 border border-white/15 bg-white/[0.03] backdrop-blur-[20px] hover:border-[#2F80FF] hover:bg-white/[0.06]"
      whileHover={{ 
        y: -4,
        boxShadow: "0 10px 30px rgba(47, 128, 255, 0.15)"
      }}
    >
      {/* Light soft internal highlight */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#2F80FF]/5 to-transparent pointer-events-none" />

      {/* Button Text */}
      <span className="relative z-10 text-white font-sans text-[15px] sm:text-[16px] font-bold tracking-tight">
        Discover NEYZA
      </span>

      {/* Circle Play capsule with subtle blue glow */}
      <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-zinc-950/40 border border-white/10 shadow-[0_0_15px_rgba(47,128,255,0.4)] transition-all duration-300 group-hover:scale-[1.08] group-hover:bg-zinc-900 group-hover:border-[#2F80FF]/40">
        <Play className="w-3.5 h-3.5 text-white fill-white translate-x-[1px] transition-transform duration-300" />
      </div>
    </motion.button>
  );
}
