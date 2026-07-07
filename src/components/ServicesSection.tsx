import React from 'react';
import { motion } from 'motion/react';
import { PenTool, Instagram, Target, Monitor, Video, Store, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ServicesSection() {
  const navigate = useNavigate();

  const services = [
    {
      num: "01",
      slug: "brand-identity",
      title: "Brand Identity",
      desc: "Build memorable brands with premium logo design, visual identity, brand strategy, and complete brand systems.",
      icon: PenTool,
      isFeatured: false,
      color: "#2563FF", // Primary Blue
      glowColor: "rgba(37, 99, 255, 0.2)",
      borderColor: "hover:border-[#2563FF]/30",
      tag: "STRATEGY & DESIGN",
    },
    {
      num: "02",
      slug: "social-media-management",
      title: "Social Media Management",
      desc: "Premium content strategy, content creation, account management, and consistent brand growth across every platform.",
      icon: Instagram,
      isFeatured: true,
      color: "#A855F7", // Purple
      glowColor: "rgba(168, 85, 247, 0.3)",
      borderColor: "border-transparent",
      tag: "ORGANIC GROWTH",
    },
    {
      num: "03",
      slug: "performance-marketing",
      title: "Performance Marketing",
      desc: "ROI-driven Meta Ads and Google Ads campaigns that generate qualified leads, sales, and measurable business growth.",
      icon: Target,
      isFeatured: false,
      color: "#A855F7", // Purple
      glowColor: "rgba(168, 85, 247, 0.2)",
      borderColor: "hover:border-[#A855F7]/30",
      tag: "PAID MARKETING",
    },
    {
      num: "04",
      slug: "website-development",
      title: "Website Design & Development",
      desc: "Modern websites designed to convert visitors into customers with premium UI, fast performance, and responsive experiences.",
      icon: Monitor,
      isFeatured: false,
      color: "#00D9FF", // Cyan
      glowColor: "rgba(0, 217, 255, 0.2)",
      borderColor: "hover:border-[#00D9FF]/30",
      tag: "FULLSTACK WEB",
    },
    {
      num: "05",
      slug: "video-graphics",
      title: "Creative Content",
      desc: "High-quality graphics, reels, videos, ad creatives, motion graphics, and storytelling that elevates your brand.",
      icon: Video,
      isFeatured: false,
      color: "#FF2D8D", // Pink
      glowColor: "rgba(255, 45, 141, 0.2)",
      borderColor: "hover:border-[#FF2D8D]/30",
      tag: "VIDEO & GRAPHICS",
    },
    {
      num: "06",
      slug: "google-business-profile",
      title: "Google Business Profile",
      desc: "Optimize your Google presence with complete GBP setup, local SEO, review management, and profile optimization.",
      icon: Store,
      isFeatured: false,
      color: "#3B82F6", // Light Blue
      glowColor: "rgba(59, 130, 246, 0.2)",
      borderColor: "hover:border-[#3B82F6]/30",
      tag: "LOCAL SEARCH SEO",
    },
  ];

  return (
    <section id="services-section" className="relative w-full bg-[#050505] text-white py-24 lg:py-32 overflow-hidden z-20 border-t border-white/5">
      
      {/* 1. Thin low-opacity square grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* 2. Soft blue and purple ambient lighting */}
      <div className="absolute top-1/3 right-1/10 w-[550px] h-[550px] bg-[#2563FF]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/10 w-[600px] h-[600px] bg-[#A855F7]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00D9FF]/3 rounded-full blur-[180px] pointer-events-none" />

      {/* 3. Subtle floating particles & stars */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-1/2 left-1/12 w-1.5 h-1.5 bg-[#00D9FF]/30 rounded-full blur-[1px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/12 w-1 h-1 bg-white/30 rounded-full" />
        <div className="absolute bottom-12 left-1/4 w-1.5 h-1.5 bg-[#A855F7]/30 rounded-full blur-[1px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= TOP BADGE & HEADINGS ================= */}
        <div className="flex flex-col items-center text-center">
          
          {/* Glowing pill badge */}
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
                OUR SERVICES
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
            Create Brands.<br />
            <span className="font-serif italic font-normal bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] bg-clip-text text-transparent select-none drop-shadow-[0_0_20px_rgba(109,40,255,0.25)]">
              Drive Growth.
            </span>
          </motion.h2>

          {/* Centered Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-[#A7A7B5] text-[15px] sm:text-[17px] leading-relaxed max-w-[700px] font-normal"
          >
            Everything your brand needs to build trust, attract customers, and scale consistently—all under one creative partner.
          </motion.p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            
            if (svc.isFeatured) {
              return (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  onClick={() => {
                    navigate(`/services/${svc.slug}`);
                    window.scrollTo(0, 0);
                  }}
                  className="group relative rounded-[28px] overflow-hidden p-8 sm:p-10 flex flex-col justify-between h-[380px] bg-gradient-to-br from-[#4F46E5] via-[#6D28FF] to-[#A855F7] shadow-[0_30px_60px_rgba(109,40,255,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/20 cursor-pointer"
                >
                  {/* Subtle inner grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none rounded-[28px]" />

                  {/* High sheen reflection */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                  
                  {/* Massive radial background glow */}
                  <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/25 rounded-full blur-3xl pointer-events-none group-hover:scale-135 transition-transform duration-500" />

                  {/* Header Row */}
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-13 h-13 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-white border border-white/25 shadow-[0_10px_20px_rgba(255,255,255,0.08)] relative overflow-hidden group/icon">
                        {/* Spinning dashed orbit inside icon pod */}
                        <motion.div
                          className="absolute inset-1 rounded-[12px] border border-dashed border-white/30 pointer-events-none"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        />
                        <Icon className="w-5.5 h-5.5 relative z-10 text-white scale-100 group-hover/icon:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Meta stats / pill */}
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono font-extrabold tracking-widest text-white/60">POPULAR</span>
                        <span className="text-[10px] font-bold tracking-wide text-white">{svc.tag}</span>
                      </div>
                    </div>

                    {/* Circular arrow button */}
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#6D28FF] group-hover:rotate-45 transition-all duration-300 shadow-md">
                      <ArrowUpRight className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Footer/Content area */}
                  <div className="relative z-10 mt-auto">
                    {/* Index identifier */}
                    <div className="text-[12px] font-mono text-white/50 font-bold tracking-widest mb-1.5">{svc.num} // SERVICE</div>
                    <h3 className="text-[25px] sm:text-[27px] font-black font-display tracking-tight text-white leading-tight">
                      {svc.title}
                    </h3>
                    <p className="mt-3.5 text-white/90 text-sm sm:text-[14.5px] leading-relaxed font-normal">
                      {svc.desc}
                    </p>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.015 }}
                onClick={() => {
                  navigate(`/services/${svc.slug}`);
                  window.scrollTo(0, 0);
                }}
                style={{ '--hover-color': svc.color } as React.CSSProperties}
                className={`group relative rounded-[28px] p-8 sm:p-10 flex flex-col justify-between h-[380px] bg-[#07070F]/80 backdrop-blur-xl border border-white/[0.06] transition-all duration-500 cursor-pointer overflow-hidden ${svc.borderColor} hover:bg-[#090915]/95 hover:shadow-[0_30px_60px_rgba(0,0,0,0.85)]`}
              >
                {/* 1. Subtle card grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none opacity-45 rounded-[28px]" />

                {/* 2. Top-edge glow line */}
                <div 
                  className="absolute top-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{
                    background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)`
                  }}
                />
                
                {/* 3. Deep ambient background spotlight glow */}
                <div 
                  className="absolute -bottom-24 -right-24 w-52 h-52 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-60 group-hover:scale-125 transition-all duration-700"
                  style={{ backgroundColor: svc.color }}
                />

                {/* Header Row */}
                <div className="flex justify-between items-start relative z-10">
                  <div className="flex items-center gap-3">
                    {/* Icon container */}
                    <div 
                      className="w-13 h-13 rounded-2xl bg-white/[0.01] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:text-white transition-all duration-300 relative overflow-hidden"
                      style={{
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.03)'
                      }}
                    >
                      {/* Inner continuous glowing ring */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
                        style={{
                          background: `radial-gradient(circle, ${svc.color} 30%, transparent 70%)`
                        }}
                      />
                      
                      {/* Spin ring orbit */}
                      <motion.div
                        className="absolute inset-1 rounded-[12px] border border-dashed border-white/[0.02] group-hover:border-white/[0.12] pointer-events-none"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />

                      <Icon 
                        className="w-5.5 h-5.5 relative z-10 transition-all duration-300 group-hover:scale-110 text-zinc-400 group-hover:[color:var(--hover-color)] group-hover:[filter:drop-shadow(0_0_8px_var(--hover-color))]" 
                      />
                    </div>

                    {/* Metadata column */}
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono font-bold tracking-widest text-zinc-500">SERVICE</span>
                      <span className="text-[10px] font-bold tracking-wide text-zinc-400 group-hover:text-white transition-colors duration-300">{svc.tag}</span>
                    </div>
                  </div>

                  {/* Circular trigger button */}
                  <div 
                    className="w-10 h-10 rounded-full bg-white/[0.01] border border-white/[0.06] flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-[#050505] group-hover:border-white group-hover:rotate-45 transition-all duration-300 shadow-sm"
                  >
                    <ArrowUpRight className="w-4.5 h-4.5" />
                  </div>
                </div>

                {/* Content / Title Area */}
                <div className="relative z-10 mt-auto">
                  {/* Service Number */}
                  <div 
                    className="text-[12px] font-mono font-bold tracking-widest mb-1.5 transition-colors duration-300"
                    style={{
                      color: 'rgba(255,255,255,0.25)'
                    }}
                  >
                    {svc.num} // SERVICE
                  </div>

                  <h3 className="text-[21px] sm:text-[23px] font-extrabold font-display tracking-tight text-white group-hover:text-[var(--hover-color)] transition-colors duration-300">
                    {svc.title}
                  </h3>

                  <p className="mt-3.5 text-[#A7A7B5] text-sm leading-relaxed font-normal group-hover:text-zinc-200 transition-colors duration-300">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-24 sm:mt-28 flex flex-col items-center justify-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="text-sm font-semibold text-[#A855F7] tracking-wider uppercase">
              Need a custom solution?
            </span>
            <span className="mt-3 text-base sm:text-lg text-zinc-400 font-medium max-w-md">
              Every successful brand starts with the right strategy.
            </span>

            {/* Premium rounded gradient button */}
            <a href="#cta-section" className="group mt-8 relative px-8 py-4 rounded-full bg-gradient-to-r from-[#2563FF] to-[#A855F7] text-white text-[15px] font-bold flex items-center gap-2.5 overflow-hidden shadow-[0_10px_30px_rgba(109,40,255,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.5)] transition-all duration-300">
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span>Let's Build Your Brand</span>
              <ArrowUpRight className="w-4.5 h-4.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
