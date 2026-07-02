import { motion } from 'motion/react';
import { Target, Eye, Zap, Shield, ArrowRight } from 'lucide-react';
import neyzaTeamImage from '../assets/images/neyza_team_office_1782669863170.jpg';
import FuturisticTargetIcon from './FuturisticTargetIcon';
import OurVisionGlassCard from './OurVisionGlassCard';
import OurMissionGlassCard from './OurMissionGlassCard';
import OurApproachGlassCard from './OurApproachGlassCard';
import OurValuesGlassCard from './OurValuesGlassCard';

export default function AboutSection() {
  const features = [
    {
      title: "Our Mission",
      desc: "To create brands that inspire trust and growth.",
      icon: Target,
      glow: "shadow-[0_0_15px_rgba(37,99,255,0.4)] border-[#2563FF]/30 text-[#2563FF]",
    },
    {
      title: "Our Vision",
      desc: "To become India's most trusted creative growth agency.",
      icon: Eye,
      glow: "shadow-[0_0_15px_rgba(109,40,255,0.4)] border-[#6D28FF]/30 text-[#6D28FF]",
    },
    {
      title: "Our Approach",
      desc: "Strategy first. Design second. Performance always.",
      icon: Zap,
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.4)] border-[#A855F7]/30 text-[#A855F7]",
    },
    {
      title: "Our Values",
      desc: "Creativity, Innovation, Transparency, Partnership.",
      icon: Shield,
      glow: "shadow-[0_0_15px_rgba(0,217,255,0.4)] border-[#00D9FF]/30 text-[#00D9FF]",
    },
  ];

  return (
    <section id="about-section" className="relative w-full bg-[#050505] text-white py-24 lg:py-32 overflow-hidden z-20 border-t border-white/5">
      
      {/* 1. Thin square grid overlay with very low opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* 2. Soft purple and electric blue ambient lighting & lens blooms */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] bg-[#6D28FF]/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-[600px] h-[600px] bg-[#2563FF]/6 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D9FF]/3 rounded-full blur-[180px] pointer-events-none" />

      {/* 3. Subtle floating stars/particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-1/3 left-1/12 w-1.5 h-1.5 bg-[#00D9FF]/50 rounded-full blur-[1px] animate-pulse" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-white/30 rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-[#A855F7]/40 rounded-full blur-[1px] animate-pulse" />
        <div className="absolute top-1/4 right-1/12 w-2 h-2 bg-white/20 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Split Layout: Left Content, Right Image & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* ================= LEFT SIDE CONTENT ================= */}
          <div className="lg:col-span-6 flex flex-col text-left">
            
            {/* Top glassmorphism pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
                <span className="text-xs font-semibold tracking-wider text-[#A855F7] animate-pulse">✦</span>
                <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
                  ABOUT NEYZA
                </span>
              </div>
            </motion.div>

            {/* Large modern headline */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 font-display text-[44px] sm:text-[60px] lg:text-[68px] font-extrabold tracking-tight leading-[1.1] text-white"
            >
              We're More Than <br />
              <span className="font-serif italic font-normal bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] bg-clip-text text-transparent select-none drop-shadow-[0_0_20px_rgba(109,40,255,0.2)]">
                An Agency.
              </span>
            </motion.h2>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 text-[#A8A8B3] text-[15px] sm:text-[17px] leading-relaxed max-w-[500px] font-normal"
            >
              NEYZA is a Creative Growth Agency helping ambitious brands grow through strategy, branding, websites, social media, performance marketing, and premium digital experiences.
            </motion.p>

            {/* Premium information card with button inside/next to it */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-12 p-6 sm:p-8 rounded-2xl border border-white/5 bg-[#0B0B14]/60 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden group/infocard"
            >
              {/* Highlight line overlay on top border */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6D28FF]/40 to-transparent" />

              <div className="flex items-center gap-4">
                {/* Left: Circular glowing icon containing the NEYZA logo */}
                <div className="relative w-14 h-14 rounded-full flex items-center justify-center shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2563FF]/30 to-[#A855F7]/30 blur-md group-hover/infocard:scale-110 transition-transform duration-300" />
                  <div className="relative w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1sqYV5xz-wdWNkiiCjMrRAnTV8ldl5ocT" 
                      alt="Neyza Icon" 
                      className="w-8 h-8 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Info text */}
                <p className="text-sm font-semibold text-zinc-300 leading-relaxed max-w-[240px]">
                  NEYZA isn't just our name.<br />
                  <span className="text-white font-bold">It's our promise to build brands that people remember.</span>
                </p>
              </div>

              {/* Premium rounded CTA button next to it */}
              <button className="group relative px-6 py-3.5 rounded-full bg-[#050505] border border-[#6D28FF]/30 text-white text-[14px] font-bold flex items-center gap-2 overflow-hidden hover:border-[#A855F7] shadow-[0_0_15px_rgba(109,40,255,0.15)] hover:shadow-[0_0_25px_rgba(168,85,247,0.35)] transition-all duration-300 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563FF]/10 to-[#A855F7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span>Let's Build Together</span>
                <ArrowRight className="w-4 h-4 text-[#A855F7] group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </motion.div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center relative w-full lg:pl-6">
            
            {/* Background elements behind image */}
            {/* 1. Large semi-transparent abstract circular ring */}
            <div className="absolute -top-12 -right-12 w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] rounded-full border border-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#00D9FF] opacity-8 animate-spin-slow pointer-events-none" 
              style={{
                borderWidth: '1.5px',
                backgroundImage: 'linear-gradient(#050505, #050505), linear-gradient(135deg, #2563FF 0%, #6D28FF 50%, #00D9FF 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'content-box, border-box',
                animationDuration: '25s'
              }}
            />
            
            {/* 2. Soft lens bloom */}
            <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-[#00D9FF]/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Large rounded rectangle image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[560px] aspect-[4/3] rounded-[32px] overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(109,40,255,0.05)] group/imgcontainer"
            >
              {/* Overlay visual gloss */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 z-10" />
              
              <img
                src={neyzaTeamImage}
                alt="NEYZA Creative Team in Luxury Office"
                className="w-full h-full object-cover transition-transform duration-700 group-hover/imgcontainer:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Floating glass statistics card */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-10 -left-6 sm:left-4 max-w-[220px] sm:max-w-[240px] w-full rounded-2xl border border-white/12 bg-white/[0.02] backdrop-blur-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] z-20 group/statscard"
            >
              {/* Highlight shine */}
              <div className="absolute -inset-px bg-gradient-to-br from-white/8 to-transparent rounded-2xl pointer-events-none" />
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#6D28FF]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col gap-3.5 relative z-10">
                {/* Metric 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00D9FF] shadow-[0_0_8px_#00D9FF]" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-extrabold text-white tracking-tight leading-none">100%</span>
                    <span className="text-[10px] font-semibold text-zinc-400 mt-0.5 uppercase tracking-wider">Client Satisfaction</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 w-full" />

                {/* Metric 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#6D28FF] shadow-[0_0_8px_#6D28FF]" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-extrabold text-white tracking-tight leading-none">100+</span>
                    <span className="text-[10px] font-semibold text-zinc-400 mt-0.5 uppercase tracking-wider">Brands Scaled</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 w-full" />

                {/* Metric 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF2D8D] shadow-[0_0_8px_#FF2D8D]" />
                  <div className="flex flex-col">
                    <span className="text-2xl font-display font-extrabold text-white tracking-tight leading-none">500+</span>
                    <span className="text-[10px] font-semibold text-zinc-400 mt-0.5 uppercase tracking-wider">Projects Delivered</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ================= FOUR FEATURE CARDS WITH SEPARATING DIVIDERS ================= */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 relative items-stretch">
          
          {/* Subtle horizontal baseline line anchor */}
          <div className="absolute top-0 left-0 right-0 h-px bg-white/5 pointer-events-none hidden lg:block" />

          {features.map((feat, idx) => {
            if (idx === 0) {
              return (
                <div key="Our Mission" className="relative flex flex-col justify-stretch h-full pt-2 lg:pt-4">
                  <OurMissionGlassCard />
                </div>
              );
            }
            if (idx === 1) {
              return (
                <div key="Our Vision" className="relative flex flex-col justify-stretch h-full pt-2 lg:pt-4">
                  {/* Vertical Divider line on Left side of each card (excluding first one on lg screens) */}
                  <div className="absolute left-0 top-8 bottom-0 w-px bg-white/5 pointer-events-none hidden lg:block" />
                  <OurVisionGlassCard />
                </div>
              );
            }
            if (idx === 2) {
              return (
                <div key="Our Approach" className="relative flex flex-col justify-stretch h-full pt-2 lg:pt-4">
                  {/* Vertical Divider line on Left side of each card (excluding first one on lg screens) */}
                  <div className="absolute left-0 top-8 bottom-0 w-px bg-white/5 pointer-events-none hidden lg:block" />
                  <OurApproachGlassCard />
                </div>
              );
            }
            if (idx === 3) {
              return (
                <div key="Our Values" className="relative flex flex-col justify-stretch h-full pt-2 lg:pt-4">
                  {/* Vertical Divider line on Left side of each card (excluding first one on lg screens) */}
                  <div className="absolute left-0 top-8 bottom-0 w-px bg-white/5 pointer-events-none hidden lg:block" />
                  <OurValuesGlassCard />
                </div>
              );
            }
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="flex flex-col items-start px-4 lg:px-8 pt-8 relative group"
              >
                {/* Vertical Divider line on Left side of each card (excluding first one on lg screens) */}
                {idx > 0 && (
                  <div className="absolute left-0 top-8 bottom-0 w-px bg-white/5 pointer-events-none hidden lg:block" />
                )}

                {/* Icon: glowing neon outline container */}
                {idx === 0 ? (
                  <FuturisticTargetIcon />
                ) : (
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-300 ${feat.glow} group-hover:scale-110`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                )}

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold text-white tracking-tight font-display">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-[#A8A8B3] leading-relaxed max-w-[240px] font-normal group-hover:text-zinc-200 transition-colors duration-200">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
