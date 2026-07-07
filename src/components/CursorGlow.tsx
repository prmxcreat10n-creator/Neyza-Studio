import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CursorGlow() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent hydration mismatch, then update

  useEffect(() => {
    setIsMobile(window.matchMedia('(pointer: coarse)').matches);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      // Find if cursor is over a clickable element
      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"]') !== null || window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer glow aura */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 100 : 30,
            height: isHovering ? 100 : 30,
            opacity: isHovering ? 0.4 : 0.15,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="rounded-full bg-gradient-to-r from-[#2563FF] to-[#A855F7] blur-xl"
        />
      </motion.div>
      
      {/* Inner sharp dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 10 : 6,
            height: isHovering ? 10 : 6,
            opacity: isHovering ? 0 : 0.9,
          }}
          className="rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        />
      </motion.div>
    </>
  );
}
