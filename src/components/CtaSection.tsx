import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Mail, Clock, Shield, Users, Sparkles, MessageSquare } from 'lucide-react';
import ContactModal from './ContactModal';

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="cta-section" className="relative w-full bg-[#050505] text-white py-24 lg:py-32 overflow-hidden z-20 border-t border-white/5">
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* ================= BACKGROUND LAYERS & CINEMATIC LIGHTING ================= */}
      
      {/* 1. Thin low-opacity square grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0" />

      {/* Layer 1 & 2: Large glowing circular arcs (Top-Left entering) */}
      <div className="absolute -top-[20%] -left-[15%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] rounded-full border-[1.5px] border-solid border-transparent pointer-events-none select-none z-0 opacity-80"
        style={{
          background: 'linear-gradient(#050505, #050505) padding-box, linear-gradient(135deg, rgba(37, 99, 255, 0.6) 0%, rgba(168, 85, 247, 0.4) 50%, transparent 100%) border-box',
          boxShadow: 'inset 0 0 80px rgba(168, 85, 247, 0.15), 0 0 120px rgba(37, 99, 255, 0.2)',
          filter: 'blur(1px)'
        }}
      />
      <div className="absolute -top-[10%] -left-[5%] w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full border border-solid border-white/5 pointer-events-none select-none z-0 opacity-40 blur-[4px]" />

      {/* Layer 3: Behind headline subtle light beams */}
      <div className="absolute top-[20%] left-[25%] w-[400px] h-[400px] bg-[#A855F7]/5 rounded-full blur-[140px] pointer-events-none select-none z-0" />

      {/* Layer 4 & 5: Right Side Vertical Glass Bars & Soft Blue Light */}
      <div className="absolute top-0 right-0 bottom-0 w-[35%] hidden xl:flex justify-end gap-2.5 pr-8 pointer-events-none select-none z-0">
        {/* Soft blue lighting under bars */}
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-[#2563FF]/8 rounded-full blur-[120px]" />
        
        {Array.from({ length: 18 }).map((_, i) => {
          // Alternating heights and random look
          const heights = ["h-[40%]", "h-[75%]", "h-[50%]", "h-[90%]", "h-[65%]", "h-[80%]", "h-[55%]", "h-[70%]", "h-[45%]", "h-[85%]", "h-[60%]", "h-[95%]", "h-[50%]", "h-[75%]", "h-[40%]", "h-[65%]", "h-[85%]", "h-[55%]"];
          const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7];
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.06, y: 0 }}
              transition={{ duration: 1.5, delay: delays[i % delays.length], ease: "easeOut" }}
              className={`w-[1px] bg-white rounded-full ${heights[i % heights.length]} self-center shadow-[0_0_8px_rgba(37,99,255,0.4)]`}
            />
          );
        })}
      </div>

      {/* Layer 6: Soft floating particles / tiny stars */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-[#2563FF]/30 rounded-full blur-[1px]" />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/30 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= TOP BADGE ================= */}
        <div className="flex flex-col items-center text-center">
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
                LET'S TALK
              </span>
            </div>
          </motion.div>

          {/* ================= MAIN HEADLINE WITH INTEGRATED ARROW BUTTON ================= */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 font-display text-[55px] sm:text-[90px] lg:text-[115px] font-extrabold tracking-tight leading-[0.95] text-white flex flex-col items-center"
          >
            <div className="flex items-center justify-center gap-x-4 sm:gap-x-7 flex-wrap">
              <span>LET'S</span>
              <span className="relative inline-flex items-center">
                W
                {/* Glowing O replacement */}
                <span className="relative mx-1 sm:mx-2 w-[45px] h-[45px] sm:w-[75px] sm:h-[75px] lg:w-[95px] lg:h-[95px] rounded-full bg-gradient-to-tr from-[#2563FF] via-[#6D28FF] to-[#A855F7] p-[1.5px] shadow-[0_0_35px_rgba(109,40,255,0.6)] flex items-center justify-center group/o cursor-pointer">
                  {/* Subtle rim reflections */}
                  <span className="absolute inset-0 rounded-full border border-white/20 pointer-events-none" />
                  {/* Inner circle with neon styling */}
                  <span className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center relative overflow-hidden group-hover/o:bg-transparent transition-colors duration-300">
                    <ArrowUpRight className="w-[50%] h-[50%] text-white group-hover/o:scale-110 transition-transform duration-300" />
                  </span>
                </span>
                RK
              </span>
            </div>
            <div className="mt-2 sm:mt-4 select-none bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              TOGETHER
            </div>
          </motion.h2>

          {/* Centered Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-[#A8A8B3] text-[15px] sm:text-[17px] leading-relaxed max-w-[620px] font-normal"
          >
            Have a project in mind or want to discuss how we can help your business grow?<br />
            Let's build something extraordinary together.
          </motion.p>
        </div>

        {/* ================= BOTTOM GRID (3 COLS) ================= */}
        <div className="mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Join with Neyza (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-white uppercase">
              START A PROJECT
            </h3>
            <p className="mt-4 text-[#A8A8B3] text-sm leading-relaxed max-w-[340px]">
              Ready to transform your brand? Fill out our contact form to discuss your goals, select required services, and see how we can help.
            </p>
          </div>

          {/* Column 2: Premium Contact Button (Span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2563FF] to-[#A855F7] text-white font-bold tracking-wide shadow-[0_0_20px_rgba(109,40,255,0.4)] hover:shadow-[0_0_35px_rgba(109,40,255,0.7)] hover:scale-[1.03] transition-all duration-300"
            >
              <span>Fill Contact Form</span>
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
            <span className="block mt-4 text-[11px] leading-relaxed text-zinc-500 font-normal">
              Takes less than 2 minutes to complete.
            </span>
          </div>

          {/* Column 3: Premium WhatsApp Card (Span 4) */}
          <div className="lg:col-span-4 flex">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group w-full relative rounded-[28px] bg-[#0B0B14]/80 backdrop-blur-xl border border-white/8 p-6 flex items-center justify-between gap-4 cursor-pointer hover:border-[#A855F7]/30 hover:bg-[#0B0B14]/90 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              {/* Highlight overlay */}
              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

              <div className="flex items-center gap-4 relative z-10">
                {/* Glowing neon green WhatsApp Logo / Message Icon */}
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.25)] group-hover:shadow-[0_0_22px_rgba(37,211,102,0.45)] transition-all duration-300">
                  {/* WhatsApp SVG or Minimal Message Icon with glowing dot */}
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.63-1.02-5.101-2.877-6.961C16.598 1.92 14.129.9 11.501.9c-5.439 0-9.863 4.419-9.866 9.862-.001 1.762.481 3.483 1.396 5.013l-.97 3.548 3.634-.954zm10.902-7.526c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.011c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  </svg>
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-[10.5px] font-bold text-zinc-500 uppercase tracking-widest">
                    PREFER WHATSAPP?
                  </span>
                  <span className="text-base font-extrabold text-white mt-1 leading-none">
                    Chat With Us Now
                  </span>
                  <span className="text-xs text-zinc-400 mt-1.5 leading-none">
                    Get instant support and quick response.
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/8 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-[#050505] group-hover:border-white group-hover:rotate-45 transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>

            </motion.div>
          </div>

        </div>

        {/* ================= BOTTOM INFO BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 lg:mt-24 w-full rounded-[24px] border border-white/8 bg-[#0B0B14]/75 backdrop-blur-xl p-8 sm:p-10 relative overflow-hidden"
        >
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative z-10">
            {/* Item 1 */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/8 flex items-center justify-center text-zinc-300 shadow-sm">
                <Clock className="w-5 h-5 text-[#A855F7]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Quick Response</span>
                <span className="text-xs text-zinc-400 mt-1">Within 30 Minutes</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block absolute left-1/4 top-2 bottom-2 w-px bg-white/5" />

            {/* Item 2 */}
            <div className="flex items-start gap-4 lg:pl-6">
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/8 flex items-center justify-center text-zinc-300 shadow-sm">
                <Shield className="w-5 h-5 text-[#2563FF]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Secure & Reliable</span>
                <span className="text-xs text-zinc-400 mt-1">100% Confidential</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block absolute left-2/4 top-2 bottom-2 w-px bg-white/5" />

            {/* Item 3 */}
            <div className="flex items-start gap-4 lg:pl-6">
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/8 flex items-center justify-center text-zinc-300 shadow-sm">
                <Users className="w-5 h-5 text-[#A855F7]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Expert Support</span>
                <span className="text-xs text-zinc-400 mt-1">We're Here to Help</span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block absolute left-3/4 top-2 bottom-2 w-px bg-white/5" />

            {/* Item 4 */}
            <div className="flex items-start gap-4 lg:pl-6">
              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/8 flex items-center justify-center text-zinc-300 shadow-sm">
                <Sparkles className="w-5 h-5 text-[#2563FF]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white">Trusted by Clients</span>
                <span className="text-xs text-zinc-400 mt-1">All Over the World</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
