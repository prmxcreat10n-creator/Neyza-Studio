import React from 'react';
import { motion } from 'motion/react';
import { Search, Compass, Palette, Zap, Gauge, TrendingUp } from 'lucide-react';

import neyza3dLogo from '../assets/images/neyza_3d_glass_logo_1782672800013.jpg';

interface StepData {
  num: string;
  title: string;
  desc: string;
  align: "left" | "right";
  glowColor: string;
  numBg: string;
  color: string;
  icon: React.ComponentType<any>;
}

function ProcessStepCard({ step }: { step: StepData }) {
  const Icon = step.icon;
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      style={{ '--hover-color': step.color } as React.CSSProperties}
      className="group relative rounded-[24px] p-6 sm:p-8 bg-[#07070F]/80 backdrop-blur-xl border border-white/[0.06] transition-all duration-500 cursor-pointer overflow-hidden max-w-[480px] w-full hover:bg-[#090915]/95 hover:border-white/12 hover:shadow-[0_25px_50px_rgba(0,0,0,0.75)]"
    >
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-40 rounded-[24px]" />
      
      {/* Top Edge Glow */}
      <div 
        className="absolute top-0 left-6 right-6 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
        style={{
          background: `linear-gradient(90deg, transparent, ${step.color}, transparent)`
        }}
      />

      {/* Dynamic ambient spotlight */}
      <div 
        className="absolute -bottom-16 -right-16 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-10 group-hover:opacity-45 group-hover:scale-125 transition-all duration-700"
        style={{ backgroundColor: step.color }}
      />

      {/* Header element */}
      <div className="flex items-center justify-between relative z-10 mb-5">
        <div className="flex items-center gap-3">
          {/* Icon Container with glowing ring and spinning orbit */}
          <div 
            className="w-11 h-11 rounded-xl bg-white/[0.01] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-white transition-all duration-300 relative overflow-hidden"
            style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.03)' }}
          >
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle, ${step.color} 30%, transparent 70%)`
              }}
            />
            
            {/* Spinning ring orbit */}
            <motion.div
              className="absolute inset-1 rounded-[9px] border border-dashed border-white/[0.02] group-hover:border-white/[0.12] pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            <Icon 
              className="w-4.5 h-4.5 relative z-10 transition-all duration-300 group-hover:scale-110 text-zinc-400 group-hover:[color:var(--hover-color)] group-hover:[filter:drop-shadow(0_0_6px_var(--hover-color))]" 
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500">STAGE</span>
            <span className="text-[10px] font-bold tracking-wider text-zinc-400 group-hover:text-white transition-colors duration-300">PHASE {step.num}</span>
          </div>
        </div>

        {/* Small subtle badge */}
        <span className="text-[10px] font-mono font-semibold text-zinc-500 bg-white/[0.02] border border-white/[0.05] rounded-full px-2.5 py-0.5 group-hover:border-white/10 group-hover:text-zinc-300 transition-all duration-300">
          ACTIVE
        </span>
      </div>

      {/* Title & Desc */}
      <div className="relative z-10">
        <h3 className="text-[19px] sm:text-[21px] font-black font-display tracking-tight text-white group-hover:text-[var(--hover-color)] transition-colors duration-300">
          {step.title}
        </h3>
        <p className="mt-3 text-zinc-400 text-[13.5px] sm:text-[14px] leading-relaxed font-normal group-hover:text-zinc-200 transition-colors duration-300">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  const steps: StepData[] = [
    {
      num: "01",
      title: "DISCOVER",
      desc: "Understand your business, audience, competitors, and goals to build a strong strategic foundation.",
      align: "right" as const,
      glowColor: "rgba(37, 99, 255, 0.25)", // Blue
      numBg: "from-[#2563FF] to-[#1D4ED8]",
      color: "#2563FF",
      icon: Search,
    },
    {
      num: "02",
      title: "STRATEGIZE",
      desc: "Create a customized growth roadmap including branding, marketing, content, and advertising strategy.",
      align: "left" as const,
      glowColor: "rgba(168, 85, 247, 0.25)", // Purple
      numBg: "from-[#A855F7] to-[#7E22CE]",
      color: "#A855F7",
      icon: Compass,
    },
    {
      num: "03",
      title: "DESIGN",
      desc: "Design premium visual identities, websites, creatives, and user experiences that build trust.",
      align: "right" as const,
      glowColor: "rgba(0, 217, 255, 0.25)", // Cyan
      numBg: "from-[#00D9FF] to-[#00B4D8]",
      color: "#00D9FF",
      icon: Palette,
    },
    {
      num: "04",
      title: "EXECUTE",
      desc: "Launch campaigns, websites, branding, and digital assets with precision and consistency.",
      align: "left" as const,
      glowColor: "rgba(255, 45, 141, 0.25)", // Pink
      numBg: "from-[#FF2D8D] to-[#BE185D]",
      color: "#FF2D8D",
      icon: Zap,
    },
    {
      num: "05",
      title: "OPTIMIZE",
      desc: "Analyze performance, improve conversions, refine campaigns, and maximize ROI.",
      align: "right" as const,
      glowColor: "rgba(37, 99, 255, 0.25)", // Blue
      numBg: "from-[#2563FF] to-[#1D4ED8]",
      color: "#2563FF",
      icon: Gauge,
    },
    {
      num: "06",
      title: "SCALE",
      desc: "Expand your digital presence through continuous optimization, automation, and long-term growth.",
      align: "left" as const,
      glowColor: "rgba(168, 85, 247, 0.25)", // Purple
      numBg: "from-[#A855F7] to-[#7E22CE]",
      color: "#A855F7",
      icon: TrendingUp,
    },
  ];

  return (
    <section id="process-section" className="relative w-full bg-[#050505] text-white py-24 lg:py-32 overflow-hidden z-20 border-t border-white/5">
      
      {/* 1. Thin low-opacity square grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* 2. Soft ambient lighting glows */}
      <div className="absolute top-1/4 right-1/10 w-[600px] h-[600px] bg-[#A855F7]/3 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-[650px] h-[650px] bg-[#2563FF]/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= TOP SECTION (HEADER + 3D LOGO) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* Left Column: Heading, Badge, Description */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Glass pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                <span className="text-xs font-semibold tracking-wider text-[#A855F7]">✦</span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
                  OUR PROCESS
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 font-display text-[44px] sm:text-[60px] lg:text-[68px] font-extrabold tracking-tight leading-[1.1] text-white text-left"
            >
              From Strategy<br />
              to{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] bg-clip-text text-transparent select-none drop-shadow-[0_0_20px_rgba(109,40,255,0.25)]">
                Growth.
              </span>
            </motion.h2>

            {/* Subheading / Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-left"
            >
              <p className="text-lg font-medium text-white/90">
                Every successful brand follows a clear process.
              </p>
              <p className="mt-2.5 text-[#A8A8B3] text-[15px] sm:text-[16px] leading-relaxed max-w-[620px] font-normal">
                At NEYZA, we combine creativity, strategy, and execution to deliver measurable business growth.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Premium Floating 3D NEYZA Logo (Matches reference cube location) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center lg:text-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center lg:items-end gap-5 max-w-[340px] w-full self-start lg:self-end"
            >
              {/* Premium 3D floating wrapper */}
              <div className="relative group/logo w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] rounded-[32px] overflow-hidden border border-white/10 bg-white/[0.01] backdrop-blur-xl flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                {/* Internal gradient glows */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2563FF]/15 via-[#A855F7]/10 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* 3D Generated Image */}
                <img
                  src={neyza3dLogo}
                  alt="NEYZA 3D Logo"
                  className="w-[85%] h-[85%] object-contain rounded-2xl animate-float pointer-events-none select-none"
                  style={{ filter: 'drop-shadow(0 15px 25px rgba(109,40,255,0.4))' }}
                  referrerPolicy="no-referrer"
                />

                {/* Cybernetic accent overlays */}
                <div className="absolute inset-0 border border-white/5 rounded-[32px]" />
                <div className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-white/20 to-transparent" />
                <div className="absolute top-0 left-0 h-8 w-px bg-gradient-to-b from-white/20 to-transparent" />
              </div>

              {/* Subtitle / context description */}
              <div className="flex flex-col text-left lg:text-right mt-1">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#A855F7] uppercase mb-1.5">
                  NEYZA BLUEPRINT
                </span>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Our strategic growth blueprint ensures every touchpoint is meticulously crafted to elevate your business and build compound long-term value.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

        {/* ================= TIMELINE STRUCTURE ================= */}
        <div className="relative mt-24 pb-20">
          
          {/* 1. Subtle high-precision guide line */}
          <div className="absolute left-8 lg:left-1/2 top-6 bottom-0 w-[1px] -translate-x-[0.5px] bg-white/[0.04] pointer-events-none" />

          {/* 2. Primary Glowing Neon Gradient Line (Styled exactly like the uploaded reference) */}
          <div 
            className="absolute left-8 lg:left-1/2 top-6 bottom-0 w-[2px] -translate-x-[1px] bg-gradient-to-b from-[#8B5CF6]/10 via-[#A855F7]/85 to-[#A855F7] pointer-events-none"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(168, 85, 247, 0.7)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.35))'
            }}
          />

          {/* 3. Dynamic Tracking Energy Pulse flowing down the line */}
          <motion.div
            className="absolute left-8 lg:left-1/2 w-[2px] h-36 -translate-x-[1px] bg-gradient-to-b from-transparent via-[#D946EF] to-transparent pointer-events-none"
            animate={{
              top: ["0px", "100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              filter: 'drop-shadow(0 0 8px #D946EF)'
            }}
          />

          {/* 4. Terminal glowing node at the absolute bottom of the line (just like the reference image!) */}
          <div className="absolute left-8 lg:left-1/2 bottom-0 -translate-x-1/2 z-20 pointer-events-none">
            <div className="relative flex items-center justify-center">
              {/* Core intense bright violet sphere */}
              <div className="w-3.5 h-3.5 rounded-full bg-[#A855F7] border border-white/30 shadow-[0_0_12px_#A855F7]" />
              {/* Primary compact glow ring */}
              <div className="absolute w-7 h-7 rounded-full bg-[#A855F7]/40 blur-[3px]" />
              {/* Wide ambient bloom halo */}
              <div className="absolute w-14 h-14 rounded-full bg-[#A855F7]/25 blur-[10px] animate-pulse" />
            </div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-16 lg:space-y-24 relative">
            {steps.map((step, idx) => {
              const isLeft = step.align === "left";
              
              return (
                <div key={step.num} className="relative flex flex-col lg:flex-row items-stretch justify-center w-full">
                  
                  {/* CENTRAL NUMBERED NODE */}
                  {/* Desktop: Centered, Mobile: Offset to the left to match line */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 top-0 z-30">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
                      className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-[#050505] border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(255,255,255,0.02)] select-none group cursor-pointer"
                    >
                      {/* Continuous elegant outer ring pulse */}
                      <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
                      
                      {/* Active glowing ring on hover */}
                      <motion.div
                        className="absolute -inset-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle, transparent 55%, ${step.glowColor.replace('0.25', '0.4')} 100%)`,
                        }}
                      />

                      {/* Interactive Sonar Ripple Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full pointer-events-none opacity-35 group-hover:opacity-75 transition-opacity duration-300"
                        style={{
                          border: `1px solid ${step.glowColor.replace('0.25', '0.6')}`,
                        }}
                        animate={{
                          scale: [1, 1.35, 1.7],
                          opacity: [0.4, 0.15, 0],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />

                      {/* Floating ambient glow around circle */}
                      <div 
                        className="absolute inset-0 rounded-full blur-[10px] opacity-35 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" 
                        style={{ backgroundColor: step.glowColor }} 
                      />

                      {/* Inner glowing core sphere */}
                      <div className={`absolute inset-1 rounded-full bg-gradient-to-br ${step.numBg} opacity-85 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(109,40,255,0.4)] flex items-center justify-center`} />

                      {/* Glass glare effect inside node */}
                      <div className="absolute inset-1.5 rounded-full bg-gradient-to-t from-white/0 via-white/5 to-white/15 opacity-60 pointer-events-none" />

                      <span className="relative z-10 text-sm sm:text-base font-black font-display text-white tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
                        {step.num}
                      </span>
                    </motion.div>
                  </div>

                  {/* LEFT COLUMN CONTENT: Only visible on lg screens and when step isLeft */}
                  <div className="w-full lg:w-1/2 pr-0 lg:pr-16 hidden lg:flex items-center justify-end">
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full flex justify-end"
                      >
                        <ProcessStepCard step={step} />
                      </motion.div>
                    )}
                  </div>

                  {/* RIGHT COLUMN CONTENT: Visible on lg screens when NOT step isLeft.
                      On mobile (<lg), ALL cards are rendered here so they align to the right of the line. */}
                  <div className="w-full lg:w-1/2 pl-20 lg:pl-16 flex items-center justify-start">
                    {/* On Desktop: Show if not isLeft */}
                    <div className="hidden lg:block w-full">
                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: 35 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          className="w-full flex justify-start"
                        >
                          <ProcessStepCard step={step} />
                        </motion.div>
                      )}
                    </div>

                    {/* On Mobile: Show always (both isLeft and not isLeft steps) */}
                    <div className="block lg:hidden w-full">
                      <motion.div
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full flex justify-start pr-4 sm:pr-8"
                      >
                        <ProcessStepCard step={step} />
                      </motion.div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
