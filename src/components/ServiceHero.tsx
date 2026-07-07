import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ServiceData } from '../data/services';

export default function ServiceHero({ service }: { service: ServiceData }) {
  // Parallax setup
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  
  // Create multiple spring values for different parallax depths
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  useEffect(() => {
    mouseX.set(mousePosition.x);
    mouseY.set(mousePosition.y);
  }, [mousePosition, mouseX, mouseY]);

  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const parallaxX1 = useTransform(springX, [-0.5, 0.5], [20, -20]);
  const parallaxY1 = useTransform(springY, [-0.5, 0.5], [20, -20]);
  
  const parallaxX2 = useTransform(springX, [-0.5, 0.5], [40, -40]);
  const parallaxY2 = useTransform(springY, [-0.5, 0.5], [40, -40]);

  const parallaxX3 = useTransform(springX, [-0.5, 0.5], [-30, 30]);
  const parallaxY3 = useTransform(springY, [-0.5, 0.5], [-30, 30]);

  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80'
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] lg:min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden border-b border-white/5 bg-[#030303]"
    >
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-gradient-to-l from-brand-purple/10 to-transparent blur-[120px] pointer-events-none opacity-50" />
        <div className="absolute top-1/2 left-0 w-full lg:w-[40%] h-[50%] bg-gradient-to-r from-brand-blue/10 to-transparent blur-[120px] pointer-events-none opacity-50" />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.5, 0.1],
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute z-0 w-1 h-1 rounded-full bg-white/30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: '0 0 10px 2px rgba(255,255,255,0.2)'
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md mb-8 w-fit"
            >
              <service.icon className="w-4 h-4 text-[#A855F7]" />
              <span className="text-[12px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
                {service.subtitle}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl lg:text-[72px] font-extrabold font-display tracking-[-0.03em] text-white leading-[1.05] mb-6"
            >
              {service.heroTitle.split(' ').map((word, idx, arr) => (
                <span key={idx} className={idx === arr.length - 1 ? "font-serif italic font-normal bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(109,40,255,0.15)]" : ""}>
                  {word}{" "}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[17px] sm:text-[19px] text-zinc-400 max-w-xl leading-relaxed mb-10 font-normal"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <MagneticButton>
                <button className="relative group h-[56px] px-8 rounded-full flex items-center justify-center gap-3 overflow-hidden select-none cursor-pointer transition-all duration-300 bg-[linear-gradient(135deg,#2563FF_0%,#6D28FF_50%,#A855F7_100%)] shadow-[0_0_0_1px_rgba(109,40,255,0.2),inset_0_2px_3px_rgba(255,255,255,0.3),0_10px_30px_rgba(37,99,255,0.4)] hover:shadow-[0_0_0_1px_rgba(168,85,247,0.4),inset_0_2px_4px_rgba(255,255,255,0.4),0_15px_45px_rgba(109,40,255,0.6)]">
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.15)] pointer-events-none" />
                  <div className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 -left-[120%] group-hover:left-[200%] transition-all duration-1000 ease-in-out z-0 pointer-events-none" />
                  <span className="relative z-10 text-white font-sans text-[16px] font-semibold tracking-wide drop-shadow-sm">
                    Book Strategy Call
                  </span>
                </button>
              </MagneticButton>

              <MagneticButton>
                <button className="relative group h-[56px] px-8 rounded-full flex items-center justify-center gap-3 overflow-hidden select-none cursor-pointer transition-all duration-300 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20">
                  <span className="relative z-10 text-white font-sans text-[16px] font-semibold tracking-wide">
                    View Portfolio
                  </span>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Side Image & Floating Elements */}
          <div className="relative lg:h-[600px] flex items-center justify-center pointer-events-none perspective-1000">
            {/* Center Image */}
            <motion.div
              style={{ x: parallaxX1, y: parallaxY1 }}
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8),0_0_40px_rgba(109,40,255,0.3)] border border-white/10"
            >
              <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent opacity-80" />
            </motion.div>

            {/* Floating Glass Card 1 */}
            <motion.div
              style={{ x: parallaxX2, y: parallaxY2 }}
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -left-10 bottom-20 z-20 bg-[#07070F]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">Premium</p>
                <p className="text-zinc-400 text-sm">{service.category}</p>
              </div>
            </motion.div>

            {/* Floating Glass Card 2 */}
            <motion.div
              style={{ x: parallaxX3, y: parallaxY3 }}
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -right-8 top-32 z-20 bg-[#07070F]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex -space-x-2">
                  {avatars.map((src, i) => (
                    <img key={i} src={src} alt="avatar" className="w-8 h-8 rounded-full border border-white/20 object-cover" />
                  ))}
                </div>
                <div className="text-xs font-bold text-white bg-white/10 px-2 py-1 rounded-md">
                  +2.4k
                </div>
              </div>
              <p className="text-zinc-300 text-sm font-medium">Clients Gained</p>
            </motion.div>
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-brand-purple/20 blur-[100px] rounded-full z-0" />
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Reusable Magnetic Button Component
function MagneticButton({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative z-10"
    >
      {children}
    </motion.div>
  );
}
