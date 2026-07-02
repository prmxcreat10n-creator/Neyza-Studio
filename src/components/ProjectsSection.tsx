import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

import luxoraImg from '../assets/images/luxora_brand_preview_1782672118081.jpg';
import urbanspaceImg from '../assets/images/urbanspace_web_preview_1782672134107.jpg';
import fitfuelImg from '../assets/images/fitfuel_social_preview_1782672155864.jpg';
import chronixImg from '../assets/images/chronix_ads_preview_1782672172202.jpg';

export default function ProjectsSection() {
  const projects = [
    {
      id: "luxora",
      category: "Brand Identity • 2026",
      name: "LUXORA",
      title: "Luxury Brand Identity",
      desc: "Created a complete premium visual identity, logo system, typography, packaging, and brand guidelines for a luxury lifestyle company.",
      image: luxoraImg,
      accentColor: "#2563FF", // Primary Blue
      badgeBg: "rgba(37, 99, 255, 0.1)",
      badgeText: "text-[#2563FF]",
    },
    {
      id: "urbanspace",
      category: "Website Design • 2026",
      name: "URBANSPACE",
      title: "Real Estate Website",
      desc: "Designed and developed a premium high-converting real estate website with modern UI, smooth interactions, and responsive layouts.",
      image: urbanspaceImg,
      accentColor: "#A855F7", // Primary Purple
      badgeBg: "rgba(168, 85, 247, 0.1)",
      badgeText: "text-[#A855F7]",
    },
    {
      id: "fitfuel",
      category: "Social Media • 2026",
      name: "FITFUEL",
      title: "Social Media Campaign",
      desc: "Designed a premium Instagram feed, reels, ad creatives, and content strategy that increased engagement and brand recognition.",
      image: fitfuelImg,
      accentColor: "#00D9FF", // Accent Cyan
      badgeBg: "rgba(0, 217, 255, 0.1)",
      badgeText: "text-[#00D9FF]",
    },
    {
      id: "chronix",
      category: "Performance Marketing • 2026",
      name: "CHRONIX",
      title: "Meta Ads Campaign",
      desc: "Created high-converting Meta Ads creatives and landing pages that significantly improved ROAS and lead generation.",
      image: chronixImg,
      accentColor: "#FF2D8D", // Accent Pink
      badgeBg: "rgba(255, 45, 141, 0.1)",
      badgeText: "text-[#FF2D8D]",
    },
  ];

  return (
    <section id="projects-section" className="relative w-full bg-[#050505] text-white py-24 lg:py-32 overflow-hidden z-20 border-t border-white/5">
      
      {/* 1. Thin low-opacity square grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* 2. Soft ambient lighting overlays */}
      <div className="absolute top-1/4 left-1/10 w-[600px] h-[600px] bg-[#2563FF]/4 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="absolute bottom-1/3 right-1/10 w-[600px] h-[600px] bg-[#A855F7]/4 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: '16s' }} />

      {/* 3. Tiny glowing stars / subtle particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/3 w-1 h-1 bg-white/30 rounded-full" />
        <div className="absolute top-1/3 right-1/5 w-1 h-1 bg-[#A855F7]/40 rounded-full blur-[1px]" />
        <div className="absolute bottom-1/4 left-1/5 w-1.5 h-1.5 bg-[#2563FF]/30 rounded-full blur-[1px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= TOP BADGE & HEADER ================= */}
        <div className="flex flex-col items-center text-center">
          
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
                FEATURED PROJECTS
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 font-display text-[44px] sm:text-[60px] lg:text-[68px] font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Our Work{" "}
            <span className="font-serif italic font-normal bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] bg-clip-text text-transparent select-none drop-shadow-[0_0_20px_rgba(109,40,255,0.255)]">
              Speaks
            </span>
            <br />
            Before We Do.
          </motion.h2>

          {/* Centered Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-[#A8A8B3] text-[15px] sm:text-[17px] leading-relaxed max-w-[700px] font-normal"
          >
            Every project reflects our commitment to strategy, creativity, and measurable business growth.
          </motion.p>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
              className="group relative rounded-[28px] bg-[#0B0B14]/70 backdrop-blur-xl border border-white/8 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-stretch overflow-hidden hover:border-white/18 hover:bg-[#0B0B14]/85 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-all duration-500"
            >
              {/* Top accent light reflection line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/15 transition-all duration-500" />
              
              {/* Left/Top Column: Image container */}
              <div className="w-full sm:w-[48%] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden relative border border-white/5 bg-zinc-900 shadow-md">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Visual overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right/Bottom Column: Contents */}
              <div className="flex flex-col justify-between flex-1 relative z-10 py-1">
                
                {/* Header row: Badge & Action Arrow */}
                <div className="flex items-center justify-between gap-4">
                  {/* Category Badge */}
                  <div className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border border-white/5`} style={{ backgroundColor: proj.badgeBg }}>
                    <span className={proj.badgeText}>{proj.category}</span>
                  </div>

                  {/* Circle Arrow in Top Right */}
                  <div 
                    className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/8 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-[#050505] group-hover:border-white group-hover:rotate-45 transition-all duration-300 shadow-sm"
                    style={{ '--tw-shadow': `0 0 10px ${proj.accentColor}20` } as React.CSSProperties}
                  >
                    <ArrowUpRight className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Core text description */}
                <div className="mt-6 sm:mt-auto">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-zinc-500 uppercase">
                    {proj.name}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-white mt-1 group-hover:text-white transition-colors duration-200">
                    {proj.title}
                  </h3>
                  <p className="mt-3 text-[#A8A8B3] text-sm leading-relaxed font-normal group-hover:text-zinc-200 transition-colors duration-200">
                    {proj.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-20 sm:mt-24 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* High-end dual capsule button matching reference layout */}
            <button className="group relative inline-flex items-center gap-3 p-1.5 pl-6 pr-2 rounded-full border border-white/10 bg-[#0B0B14]/60 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-white/20 hover:shadow-[0_15px_40px_rgba(109,40,255,0.25)] transition-all duration-300">
              <span className="text-sm font-bold tracking-wide text-zinc-300 group-hover:text-white transition-colors duration-200">
                View All Projects
              </span>
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#2563FF] to-[#A855F7] flex items-center justify-center text-white shadow-[0_0_15px_rgba(109,40,255,0.45)] group-hover:shadow-[0_0_22px_rgba(168,85,247,0.7)] group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-4.5 h-4.5" />
              </div>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
