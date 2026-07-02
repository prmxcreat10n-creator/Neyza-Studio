import { useEffect, useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Users, Award, BarChart3, Sparkles } from 'lucide-react';

// CountUp component to animate stats numbers beautifully on viewport entry
function CountUp({ value, duration = 2.5 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''), 10) || 0;
  const suffix = value.replace(/\d/g, '');
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const end = numericValue;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 30; // ms per tick
    const totalSteps = totalMiliseconds / incrementTime;
    const stepIncrement = end / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [numericValue, duration, hasStarted]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function TrustedBanner() {
  const highlights = [
    {
      value: '50+',
      label: 'Expert Minds',
      icon: <Users className="w-5 h-5 text-[#2563FF] group-hover:text-white transition-colors duration-300" />,
      color: '#2563FF',
      glowClass: 'from-[#2563FF]/20 to-[#2563FF]/0'
    },
    {
      value: '200+',
      label: 'Projects Delivered',
      icon: <Award className="w-5 h-5 text-[#A855F7] group-hover:text-white transition-colors duration-300" />,
      color: '#A855F7',
      glowClass: 'from-[#A855F7]/20 to-[#A855F7]/0'
    },
    {
      value: '98%',
      label: 'Client Satisfaction',
      icon: <BarChart3 className="w-5 h-5 text-[#00D9FF] group-hover:text-white transition-colors duration-300" />,
      color: '#00D9FF',
      glowClass: 'from-[#00D9FF]/20 to-[#00D9FF]/0'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full mt-16 lg:mt-24 bg-[#030303]/40 backdrop-blur-2xl border border-white/[0.06] rounded-[24px] p-6 lg:p-8 flex flex-col xl:flex-row items-center gap-10 justify-between relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)]"
    >
      {/* 1. Subtle moving laser border sheen */}
      <div className="absolute inset-0 rounded-[24px] pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/45 to-transparent"
          animate={{
            x: ['-100%', '800%']
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#22D3EE]/45 to-transparent"
          animate={{
            x: ['100%', '-800%']
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
            delay: 3
          }}
        />
      </div>

      {/* 2. Abstract Luxury Grid Overlay inside the Banner */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none rounded-[24px]" />

      {/* Left side: Brand Logos with modern capsules */}
      <div className="flex flex-col gap-6 w-full xl:w-auto flex-1">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#A855F7] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] via-[#8B5CF6] to-[#A855F7] select-none uppercase">
            Trusted by Growing Brands Worldwide
          </span>
        </div>
        
        {/* Logos container */}
        <div className="flex flex-wrap items-center gap-4 mt-1">
          
          {/* HubSpot Logo Capsule */}
          <motion.div 
            whileHover={{ y: -3, scale: 1.02, borderColor: 'rgba(255, 122, 89, 0.3)' }}
            className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.01] border border-white/[0.04] hover:bg-[#FF7A59]/[0.02] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A59]/0 via-[#FF7A59]/[0.03] to-[#FF7A59]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg className="w-4.5 h-4.5 text-zinc-500 group-hover:text-[#FF7A59] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4.5-9.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zM12 8a1.5 1.5 0 1 1-1.5-1.5A1.5 1.5 0 0 1 12 8zm-3.5 3.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm3.5 3.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5zm3.5-3.5a1.5 1.5 0 1 1-1.5-1.5 1.5 1.5 0 0 1 1.5 1.5z" />
            </svg>
            <span className="font-sans font-bold text-[13px] tracking-tight text-zinc-500 group-hover:text-white transition-colors duration-300">HubSpot</span>
          </motion.div>

          {/* Google Logo Capsule */}
          <motion.div 
            whileHover={{ y: -3, scale: 1.02, borderColor: 'rgba(66, 133, 244, 0.3)' }}
            className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.01] border border-white/[0.04] hover:bg-[#4285F4]/[0.02] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/0 via-[#4285F4]/[0.03] to-[#4285F4]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg className="w-4.5 h-4.5 text-zinc-500 group-hover:text-[#4285F4] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.579-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C18.155 2.502 15.39 1 12.24 1c-6.076 0-11 4.924-11 11s4.924 11 11 11c6.34 0 10.55-4.455 10.55-10.745 0-.724-.078-1.277-.173-1.825H12.24z" />
            </svg>
            <span className="font-sans font-semibold text-[13px] tracking-tight text-zinc-500 group-hover:text-white transition-colors duration-300">Google</span>
          </motion.div>

          {/* Meta Logo Capsule */}
          <motion.div 
            whileHover={{ y: -3, scale: 1.02, borderColor: 'rgba(24, 119, 242, 0.3)' }}
            className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.01] border border-white/[0.04] hover:bg-[#1877F2]/[0.02] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1877F2]/0 via-[#1877F2]/[0.03] to-[#1877F2]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg className="w-5 h-4.5 text-zinc-500 group-hover:text-[#1877F2] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.143 4C13.844 4 12 5.922 12 8.3c0 .878.267 1.693.722 2.378a5.274 5.274 0 0 1-2.444-2.378C10.278 8.3 8.434 4 6.136 4 2.748 4 0 6.828 0 10.315c0 4.298 4.12 7.685 12 10.685 7.88-3 12-6.387 12-10.685C24 6.828 21.252 4 17.864 4h-1.721zm-1.721 2.3c1.332 0 2.41 1.085 2.41 2.422 0 .546-.176 1.05-.475 1.464-.539-.813-1.341-1.428-2.285-1.73-.205-.065-.417-.118-.636-.156.402-1.218.6-2 .986-2zM6.136 6.3c1.332 0 2.41 1.085 2.41 2.422 0 .546-.176 1.05-.475 1.464-.539-.813-1.341-1.428-2.285-1.73a5.55 5.55 0 0 0-.636-.156c.402-1.218.6-2 .986-2z" />
            </svg>
            <span className="font-sans font-bold text-[13px] tracking-tight text-zinc-500 group-hover:text-white transition-colors duration-300">Meta</span>
          </motion.div>

          {/* Slack Logo Capsule */}
          <motion.div 
            whileHover={{ y: -3, scale: 1.02, borderColor: 'rgba(224, 30, 90, 0.3)' }}
            className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.01] border border-white/[0.04] hover:bg-[#E01E5A]/[0.02] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E01E5A]/0 via-[#E01E5A]/[0.03] to-[#E01E5A]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg className="w-4.5 h-4.5 text-zinc-500 group-hover:text-[#E01E5A] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.043zm2.52-10.123a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H3.782a2.528 2.528 0 0 1-2.52-2.52V8.823a2.528 2.528 0 0 1 2.52-2.52h5.043zm10.123 2.52a2.528 2.528 0 0 1 2.522-2.52 2.528 2.528 0 0 1 2.52 2.52v2.52h-2.52v-2.52zm-1.261 0a2.528 2.528 0 0 1-2.52 2.52H10.14a2.528 2.528 0 0 1-2.52-2.52V3.782a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52v5.043zm-2.52 10.123a2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.522-2.522v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.261a2.528 2.528 0 0 1-2.52-2.52V10.14a2.528 2.528 0 0 1 2.522-2.52h5.041a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.52H15.18z" />
            </svg>
            <span className="font-sans font-bold text-[13px] tracking-tight text-zinc-500 group-hover:text-white transition-colors duration-300">Slack</span>
          </motion.div>

          {/* Notion Logo Capsule */}
          <motion.div 
            whileHover={{ y: -3, scale: 1.02, borderColor: 'rgba(255, 255, 255, 0.3)' }}
            className="group relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.01] border border-white/[0.04] hover:bg-white/[0.02] transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/[0.03] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <svg className="w-4.5 h-4.5 text-zinc-500 group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.148 2h15.704a2.15 2.15 0 0 1 2.148 2.148v15.704a2.15 2.15 0 0 1-2.148 2.148H4.148A2.15 2.15 0 0 1 2 19.852V4.148A2.15 2.15 0 0 1 4.148 2zm2.148 3.222V18.78a1.074 1.074 0 0 0 1.074 1.074h8.592a1.074 1.074 0 0 0 1.074-1.074V5.222A1.074 1.074 0 0 0 16.216 4.15H7.37a1.074 1.074 0 0 0-1.074 1.074zM9.517 7.37a.537.537 0 0 1 .537-.537h3.222a.537.537 0 0 1 .537.537v1.074a.537.537 0 0 1-.537.537h-.537v3.222h1.074a.537.537 0 0 1 .537.537v1.074a.537.537 0 0 1-.537-.537h-3.222a.537.537 0 0 1-.537-.537v-1.074a.537.537 0 0 1 .537-.537h.537V9.517h-1.074a.537.537 0 0 1-.537-.537V7.37z" />
            </svg>
            <span className="font-sans font-bold text-[13px] tracking-tight text-zinc-500 group-hover:text-white transition-colors duration-300">Notion</span>
          </motion.div>

        </div>
      </div>

      {/* Decorative premium vertical divider for large screens */}
      <div className="hidden xl:block w-px h-14 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

      {/* Right side: Key highlights with interactive glowing pods */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 w-full xl:w-auto">
        {highlights.map((item) => (
          <motion.div 
            key={item.label} 
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            {/* Animated Interactive Pod */}
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-950 border border-white/[0.08] shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:border-white/20 transition-all duration-300 overflow-hidden">
              
              {/* Spinning/pulsing inner gradient mask */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${item.glowClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
              />

              {/* Orbital guide ring */}
              <motion.div
                className="absolute inset-[2px] rounded-[10px] border border-dashed border-white/[0.03] group-hover:border-white/[0.12] pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Main premium icon */}
              <div className="relative z-10 scale-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                {item.icon}
              </div>

              {/* Ambient flash glare sweep */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.08] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-black text-white text-lg sm:text-xl tracking-tight leading-none">
                <CountUp value={item.value} />
              </span>
              <span className="text-[11px] text-zinc-500 font-bold tracking-wide mt-1 group-hover:text-zinc-300 transition-colors duration-200 uppercase">
                {item.label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  );
}
