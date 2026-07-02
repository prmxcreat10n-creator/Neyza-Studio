import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Linkedin, Instagram, Twitter, Users, Award, Rocket, Heart } from 'lucide-react';

import snehaPortrait from '../assets/images/sneha_sharma_portrait_1782673477953.jpg';
import manishPortrait from '../assets/images/manish_dubey_portrait_1782673444173.jpg';
import himaniPortrait from '../assets/images/himani_mehta_portrait_1782673461914.jpg';
import rohitPortrait from '../assets/images/rohit_verma_portrait_1782673492906.jpg';

export default function TeamSection() {
  const team = [
    {
      id: "sneha",
      name: "Sneha Sharma",
      role: "Creative Designer",
      desc: "Crafting modern brand identities, premium graphics, and visual design systems that build emotional trust and elevate positioning.",
      image: snehaPortrait,
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
    {
      id: "dev",
      name: "Dev Jha",
      role: "Growth Partner",
      desc: "Helping businesses scale profitably through performance-driven marketing, optimized ad funnels, and organic growth strategies.",
      image: manishPortrait,
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
    {
      id: "param",
      name: "Param Mehta",
      role: "Founder & Creative Director",
      desc: "Leading NEYZA's creative vision, branding strategy, digital experiences, and business growth with innovative design thinking.",
      image: "https://lh3.googleusercontent.com/d/1MGfFKPOErB1dkJsjYRijVb43qXEWWsx9",
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
    {
      id: "ira",
      name: "Ira Mehta",
      role: "Operations Manager",
      desc: "Ensuring seamless project workflows, lightning-fast communications, internal efficiency, and world-class client onboarding.",
      image: himaniPortrait,
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    },
    {
      id: "rohit",
      name: "Rohit Verma",
      role: "Performance Marketer",
      desc: "Architecting high-converting paid campaigns on Meta & Google Ads to maximize return on ad spend and scale qualified leads.",
      image: rohitPortrait,
      linkedin: "#",
      instagram: "#",
      twitter: "#",
    }
  ];

  const stats = [
    {
      num: "10+",
      label: "Creative Experts",
      icon: Users,
      color: "#2563FF",
    },
    {
      num: "5+",
      label: "Years Experience",
      icon: Award,
      color: "#A855F7",
    },
    {
      num: "500+",
      label: "Projects Delivered",
      icon: Rocket,
      color: "#00D9FF",
    },
    {
      num: "100%",
      label: "Client Satisfaction",
      icon: Heart,
      color: "#FF2D8D",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(2); // Start with Param Mehta (Founder) in the center

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % team.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  // Helper to calculate the relative position/index of slides
  const getSlidePosition = (index: number) => {
    const diff = index - activeIndex;
    return diff;
  };

  return (
    <section id="team-section" className="relative w-full bg-[#050505] text-white py-24 lg:py-32 overflow-hidden z-20 border-t border-white/5">
      
      {/* 1. Thin low-opacity square grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* 2. Soft background lightings */}
      <div className="absolute top-1/4 left-1/10 w-[600px] h-[600px] bg-[#2563FF]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/10 w-[650px] h-[650px] bg-[#A855F7]/3 rounded-full blur-[150px] pointer-events-none" />

      {/* 3. Huge transparent typography background */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-12 select-none pointer-events-none z-0 overflow-hidden">
        <span className="text-[140px] sm:text-[200px] lg:text-[240px] font-display font-black text-zinc-950/40 opacity-20 blur-[2px] transform -translate-x-12 translate-y-6">
          Team
        </span>
        <span className="text-[140px] sm:text-[200px] lg:text-[240px] font-display font-black text-zinc-950/40 opacity-20 blur-[2px] transform translate-x-12 -translate-y-6">
          Team
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= TOP SECTION (BADGE & HEADER) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left: Badge & Headings */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Pill badge */}
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
                  OUR TEAM
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-[44px] sm:text-[56px] lg:text-[64px] font-extrabold tracking-tight leading-[1.1] text-white"
            >
              Driven by{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] bg-clip-text text-transparent select-none drop-shadow-[0_0_20px_rgba(109,40,255,0.25)]">
                People,
              </span>
              <br />
              Built for{" "}
              <span className="font-serif italic font-normal bg-gradient-to-r from-[#A855F7] via-[#D846EF] to-[#2563FF] bg-clip-text text-transparent select-none drop-shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                Growth.
              </span>
            </motion.h2>

            {/* Left Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-[#A8A8B3] text-[15px] sm:text-[16px] leading-relaxed max-w-[520px] font-normal"
            >
              At NEYZA, every project is powered by creative thinkers, strategic minds, and passionate problem solvers. We don't just deliver services. We build brands that stand out.
            </motion.p>
          </div>

          {/* Right: Sub-description */}
          <div className="lg:col-span-4 lg:mt-16 text-left lg:text-right">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed max-w-[380px] lg:ml-auto"
            >
              From branding to performance marketing, our collaborative team transforms ideas into scalable digital experiences.
            </motion.p>
          </div>

        </div>

        {/* ================= TEAM CAROUSEL / SLIDER ================= */}
        <div className="relative flex flex-col items-center justify-center py-8 min-h-[520px] w-full">
          
          <div className="relative w-full overflow-visible flex items-center justify-center gap-4 sm:gap-6 md:gap-8 max-w-5xl">
            {team.map((member, idx) => {
              const pos = getSlidePosition(idx);
              const isActive = pos === 0;
              const isPrev = pos === -1 || (pos === team.length - 1 && activeIndex === 0);
              const isNext = pos === 1 || (pos === -(team.length - 1) && activeIndex === team.length - 1);
              const isFarLeft = pos < -1 || (activeIndex === 0 && idx === team.length - 1) || (activeIndex === 1 && idx === team.length - 1);
              const isFarRight = pos > 1 || (activeIndex === team.length - 1 && idx === 0) || (activeIndex === team.length - 2 && idx === 0);

              // Render condition for displaying 5 cards in stack (featured, adjacent, and outer partials)
              let visibleClass = "hidden";
              let transformStyles = "";
              let cardWidthClass = "w-[280px] sm:w-[320px]";

              if (isActive) {
                visibleClass = "flex z-30 scale-100 opacity-100";
                cardWidthClass = "w-[310px] sm:w-[350px] md:w-[380px]";
              } else if (isPrev) {
                visibleClass = "flex lg:flex z-20 scale-90 opacity-40 blur-[1px] hover:opacity-60 cursor-pointer";
              } else if (isNext) {
                visibleClass = "flex lg:flex z-20 scale-90 opacity-40 blur-[1px] hover:opacity-60 cursor-pointer";
              } else if (isFarLeft) {
                visibleClass = "hidden md:flex z-10 scale-80 opacity-15 blur-[2px] cursor-pointer";
              } else if (isFarRight) {
                visibleClass = "hidden md:flex z-10 scale-80 opacity-15 blur-[2px] cursor-pointer";
              }

              return (
                <motion.div
                  key={member.id}
                  layout
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(idx);
                    }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`flex-shrink-0 flex flex-col relative rounded-[30px] border transition-all duration-500 overflow-hidden ${cardWidthClass} ${visibleClass} ${
                    isActive 
                      ? "border-[#A855F7]/40 bg-[#0B0B14]/85 shadow-[0_25px_60px_rgba(168,85,247,0.18)]" 
                      : "border-white/5 bg-[#0B0B14]/60 shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  {/* Glowing card border overlay for featured slide */}
                  {isActive && (
                    <div className="absolute inset-0 border border-[#A855F7]/30 rounded-[30px] pointer-events-none" />
                  )}

                  {/* Card Highlight reflection */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                  {/* Top Image area */}
                  <div className="w-full aspect-[4/5] relative bg-zinc-950 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient mapping over image bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14] via-[#0B0B14]/20 to-transparent" />

                    {/* Right side floating social controls for the active slide */}
                    {isActive && (
                      <div className="absolute right-5 top-5 flex flex-col gap-3.5 z-20">
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#A855F7] hover:border-[#A855F7]/50 hover:bg-[#A855F7]/10 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a 
                          href={member.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#A855F7] hover:border-[#A855F7]/50 hover:bg-[#A855F7]/10 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                        <a 
                          href={member.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="w-9 h-9 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-300 hover:text-[#A855F7] hover:border-[#A855F7]/50 hover:bg-[#A855F7]/10 transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Card Info content */}
                  <div className="p-6 sm:p-7 flex flex-col relative z-10 bg-[#0B0B14]">
                    <h3 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-white leading-none">
                      {member.name}
                    </h3>
                    <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#A855F7] mt-2 uppercase">
                      {member.role}
                    </span>

                    {/* Desc container - Only fully verbose/displayed if active slide */}
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.4 }}
                        className="mt-4 text-[#A8A8B3] text-xs sm:text-sm leading-relaxed font-normal border-t border-white/5 pt-4"
                      >
                        {member.desc}
                      </motion.p>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Bottom Slider Navigation arrows */}
          <div className="flex items-center gap-5 mt-12">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* ================= BOTTOM STATISTICS BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-14 lg:mt-20 w-full rounded-[28px] border border-white/[0.06] bg-[#07070F]/85 backdrop-blur-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.85)] group/bar"
        >
          {/* Subtle grid pattern for texture */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none rounded-[28px]" />
          
          {/* Accent glow on top and bottom border */}
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#A855F7]/15 to-transparent pointer-events-none" />

          {/* Glowing center orb backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#A855F7]/5 rounded-full blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-2 relative z-10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="group flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3 lg:gap-4 p-3.5 sm:p-4 rounded-xl hover:bg-white/[0.02] border border-transparent hover:border-white/[0.04] transition-all duration-300 relative"
                >
                  {/* Subtle hover background radial accent glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.04] transition-opacity duration-300 pointer-events-none rounded-xl" 
                    style={{ background: `radial-gradient(circle at center, ${stat.color} 0%, transparent 70%)` }}
                  />

                  {/* Icon outer pod with spinning/dashed orbit & gradient border */}
                  <div className="relative flex-shrink-0">
                    {/* Pulsing colored glow ring */}
                    <div 
                      className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-30 blur-[4px] transition-all duration-500" 
                      style={{ backgroundColor: stat.color }}
                    />
                    
                    {/* Icon base container */}
                    <div 
                      className="w-12 h-12 rounded-xl bg-white/[0.01] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-white transition-all duration-300 relative overflow-hidden"
                      style={{
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.03)'
                      }}
                    >
                      {/* Inner glowing circle */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle, ${stat.color} 30%, transparent 70%)`
                        }}
                      />
                      
                      {/* Spin ring orbit inside icon container */}
                      <motion.div
                        className="absolute inset-1 rounded-[10px] border border-dashed border-white/[0.02] group-hover:border-white/[0.12] pointer-events-none"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                      />

                      <Icon 
                        className="w-5 h-5 relative z-10 transition-all duration-300 group-hover:scale-110 text-zinc-400 group-hover:text-white"
                        style={{
                          filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.1))'
                        }}
                      />
                    </div>
                  </div>

                  {/* Text/Number info */}
                  <div className="flex flex-col select-none">
                    <span 
                      className="text-3.5xl sm:text-4xl font-display font-black tracking-tight leading-none text-white group-hover:text-[var(--hover-color)] transition-colors duration-300"
                      style={{ '--hover-color': stat.color } as React.CSSProperties}
                    >
                      {stat.num}
                    </span>
                    <span className="text-[11px] font-extrabold text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 mt-2 uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>

                  {/* Fine vertical separator line between stat elements (except last) */}
                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-1 top-1/2 -translate-y-1/2 w-[1px] h-10 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent pointer-events-none" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
