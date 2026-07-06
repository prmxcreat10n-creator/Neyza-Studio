import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Linkedin, Instagram, Facebook, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function FooterSection() {
  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about-section" },
    { name: "Services", href: "#services-section" },
    { name: "Portfolio", href: "#projects-section" },
    { name: "Blog", href: "#blog-section" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "#cta-section" }
  ];

  const services = [
    { name: "Graphic Design" },
    { name: "Brand Identity" },
    { name: "Social Media Management" },
    { name: "Meta Ads" },
    { name: "Performance Marketing" },
    { name: "Website Design" },
    { name: "Brand Strategy" },
    { name: "Creative Consulting" }
  ];

  return (
    <footer id="footer-section" className="relative w-full bg-[#050505] text-white pt-24 pb-12 overflow-hidden z-20 border-t border-white/5">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />

      {/* Ambient background glows */}
      <div className="absolute -bottom-20 left-1/3 w-[600px] h-[300px] bg-[#A855F7]/8 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#2563FF]/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Abstract 3D curved wave lines on the right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none select-none z-0 overflow-hidden hidden md:block">
        <svg className="w-full h-full text-[#A855F7]/30" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 100 C 300 260, 500 50, 750 350" stroke="url(#wave-gradient)" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M150 150 C 350 310, 480 120, 780 400" stroke="url(#wave-gradient)" strokeWidth="1.5" />
          <path d="M200 200 C 400 360, 510 180, 800 450" stroke="url(#wave-gradient-blue)" strokeWidth="1" />
          <path d="M50 80 C 250 200, 420 90, 700 280" stroke="url(#wave-gradient)" strokeWidth="1" opacity="0.5" />
          <path d="M120 250 C 320 400, 520 220, 810 500" stroke="url(#wave-gradient-blue)" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M180 300 C 380 450, 550 280, 850 550" stroke="url(#wave-gradient)" strokeWidth="1" />
          
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0" />
              <stop offset="50%" stopColor="#8A2EFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B64DFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wave-gradient-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563FF" stopOpacity="0" />
              <stop offset="60%" stopColor="#2962FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= FOUR-COLUMN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* COLUMN 1: Original Logo & Description (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            {/* Brand Logo Wrapper */}
            <div className="flex items-center gap-4 group/logo cursor-pointer select-none mb-6">
              <img
                src="https://lh3.googleusercontent.com/d/1sqYV5xz-wdWNkiiCjMrRAnTV8ldl5ocT"
                alt="NEYZA Logo Glyph"
                className="w-18 h-18 object-contain pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display tracking-widest text-white leading-none">
                  NEYZA
                </span>
                <span className="text-[10px] font-bold text-[#A855F7] tracking-[0.15em] uppercase mt-1">
                  Creative Growth Agency
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-[#A7A7A7] text-sm leading-relaxed max-w-[340px] font-normal mb-8">
              We build premium brands, powerful digital experiences and performance-driven marketing systems that help businesses grow.
            </p>

            {/* Social Icons List */}
            <div className="flex items-center gap-3.5">
              {/* Instagram */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-[#A7A7A7] hover:text-white hover:border-[#A855F7]/50 hover:bg-[#A855F7]/10 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-[#A7A7A7] hover:text-white hover:border-[#2563FF]/50 hover:bg-[#2563FF]/10 hover:shadow-[0_0_12px_rgba(37,99,255,0.4)] transition-all duration-300"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>

              {/* Behance (Custom SVG) */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-[#A7A7A7] hover:text-white hover:border-[#A855F7]/50 hover:bg-[#A855F7]/10 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 10.238c-.378-.073-.772-.112-1.176-.112-1.892 0-3.414 1.157-3.414 3.018 0 1.968 1.558 3.018 3.414 3.018 1.503 0 2.7-.8 3.111-1.921h-2.181c-.244.382-.601.666-1.042.666-.662 0-1.071-.462-1.121-1.169h4.48c.032-.196.049-.404.049-.623 0-1.879-1.041-3.003-3.12-3.003zm-1.082 1.621c.541 0 .902.321.961.802h-1.912c.049-.472.4-.802.951-.802zm-12.441-2.072H4v11.667h4.8c2.25 0 3.2-.958 3.2-2.833 0-1.126-.531-1.947-1.481-2.221.724-.316 1.081-.979 1.081-1.95 0-1.667-1.112-2.663-3.123-2.663zm-2.077 1.833h1.833c.875 0 1.341.341 1.341 1.042 0 .7-.466 1.042-1.341 1.042H6.4V11.62zm0 3.833h2.167c.925 0 1.417.383 1.417 1.125 0 .742-.492 1.125-1.417 1.125H6.4V15.453zm14.6-7.399H18.2v1.2h2.8v-1.2z" />
                </svg>
              </a>

              {/* Dribbble (Custom SVG) */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-[#A7A7A7] hover:text-white hover:border-[#A855F7]/50 hover:bg-[#A855F7]/10 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 .028C5.372.028.007 5.393.007 12.021s5.365 11.993 11.993 11.993 11.993-5.365 11.993-11.993S18.628.028 12 .028zm8.683 7.825c.348.654.597 1.353.738 2.086-1.077-.146-2.583-.102-4.116.143-.306-.723-.629-1.424-.972-2.096 1.761-.624 3.447-.417 4.35-.133zm-4.992-3.136c.642.753 1.196 1.583 1.657 2.47-1.635.467-3.411.597-5.068.329.136-.519.294-1.054.475-1.598.922-.44 1.986-.884 2.936-1.201zm-5.631 2.032c-.171.503-.321 1.002-.45 1.488-1.74-.457-3.957-.611-6.196-.282.493-1.849 1.63-3.42 3.189-4.422 1.079.882 2.428 2.228 3.457 3.216zm-7.464 5.253c2.046-.284 4.077-.123 5.688.272-.113.385-.213.791-.299 1.215-2.228-.016-4.912.446-7.397 1.455-.121-.692-.187-1.405-.187-2.133 0-.276.018-.548.05-.809zm1.096 5.161c2.144-.816 4.455-1.189 6.425-1.162.247 1.208.435 2.502.531 3.824-2.204-.374-4.137-1.432-5.462-3.082s-1.396-3.169-1.494-3.582zm8.796 3.037c-.114-1.258-.287-2.492-.521-3.649.972-.016 1.996.121 2.993.429a10.024 10.024 0 01-2.472 3.22zm4.184-4.195c-.88-.266-1.776-.388-2.637-.376.291-.715.548-1.435.766-2.134 1.398-.242 2.766-.239 3.856-.051a10.015 10.015 0 01-1.985 2.561z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/8 bg-white/[0.02] backdrop-blur-sm flex items-center justify-center text-[#A7A7A7] hover:text-white hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:shadow-[0_0_12px_rgba(37,211,102,0.4)] transition-all duration-300"
              >
                <MessageCircle className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 flex flex-col items-start text-left lg:pl-4">
            <h4 className="text-sm font-extrabold font-display tracking-widest text-white uppercase mb-6 relative">
              Quick Links
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-[#A855F7]" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name} className="flex items-center group/link">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] mr-3 opacity-60 group-hover/link:opacity-100 group-hover/link:scale-125 transition-all duration-300" />
                  <a
                    href={link.href}
                    className="text-sm text-[#A7A7A7] hover:text-white transition-colors duration-300 relative py-0.5"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#A855F7] group-hover/link:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Our Services (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left lg:pl-4">
            <h4 className="text-sm font-extrabold font-display tracking-widest text-white uppercase mb-6 relative">
              Our Services
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-[#2563FF]" />
            </h4>
            <ul className="space-y-4">
              {services.map((svc) => (
                <li key={svc.name} className="flex items-center group/link">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563FF] mr-3 opacity-60 group-hover/link:opacity-100 group-hover/link:scale-125 transition-all duration-300" />
                  <a
                    href="#services-section"
                    className="text-sm text-[#A7A7A7] hover:text-white transition-colors duration-300 relative py-0.5"
                  >
                    {svc.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2563FF] group-hover/link:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Us Cards (Span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="text-sm font-extrabold font-display tracking-widest text-white uppercase mb-6 relative">
              Contact Us
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-[#A855F7]" />
            </h4>
            
            <div className="space-y-5 w-full">
              {/* Email item */}
              <div className="group/card flex items-center gap-4 p-3.5 rounded-2xl bg-[#0B0B14]/40 border border-white/5 hover:border-[#A855F7]/30 hover:bg-[#0B0B14]/80 hover:shadow-[0_8px_20px_rgba(168,85,247,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#A855F7] group-hover/card:bg-[#A855F7] group-hover/card:text-white shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all duration-300 shrink-0">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[10px] font-bold text-[#A855F7] uppercase tracking-wider">Email</span>
                  <a href="mailto:contact@neyza.xyz" className="text-sm font-semibold text-white truncate hover:underline">
                    contact@neyza.xyz
                  </a>
                </div>
              </div>

              {/* Phone item */}
              <div className="group/card flex items-center gap-4 p-3.5 rounded-2xl bg-[#0B0B14]/40 border border-white/5 hover:border-[#2563FF]/30 hover:bg-[#0B0B14]/80 hover:shadow-[0_8px_20px_rgba(37,99,255,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#2563FF] group-hover/card:bg-[#2563FF] group-hover/card:text-white shadow-[0_0_10px_rgba(37,99,255,0.2)] transition-all duration-300 shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#2563FF] uppercase tracking-wider">Phone</span>
                  <span className="text-sm font-semibold text-white">
                    +91 78579 90713
                  </span>
                </div>
              </div>

              {/* Address item */}
              <div className="group/card flex items-start gap-4 p-3.5 rounded-2xl bg-[#0B0B14]/40 border border-white/5 hover:border-[#A855F7]/30 hover:bg-[#0B0B14]/80 hover:shadow-[0_8px_20px_rgba(168,85,247,0.1)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#A855F7] group-hover/card:bg-[#A855F7] group-hover/card:text-white shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all duration-300 shrink-0 mt-0.5">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-[#A855F7] uppercase tracking-wider">Location</span>
                  <p className="text-xs leading-relaxed font-semibold text-white mt-1">
                    Hazaribagh, Jharkhand, India
                  </p>
                  <p className="text-[10px] text-[#A7A7A7] mt-1 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#A855F7]" /> Mon–Sat: 10AM–7PM
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= FLOATING GLASS PANEL BOTTOM BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-8 w-full rounded-[18px] border border-white/8 bg-[#0B0B14]/75 backdrop-blur-xl py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden z-20"
        >
          {/* Internal slow horizontal sweep shimmer highlight */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full animate-[shimmer_8s_infinite] pointer-events-none" />

          {/* Left copyright info */}
          <span className="text-xs text-[#A7A7A7] font-normal text-center md:text-left">
            © 2026 <span className="font-extrabold text-white">NEYZA</span> Creative Growth Agency. All Rights Reserved.
          </span>

          {/* Centered/Right privacy navigations */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Privacy Policy", "Terms & Conditions", "Cookie Policy", "Refund Policy", "Careers", "Sitemap"].map((nav) => (
              <a
                key={nav}
                href="#"
                className="text-xs text-[#A7A7A7] hover:text-white transition-colors duration-300 relative py-0.5 group/nav"
              >
                {nav}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A855F7] group-hover/nav:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ================= GIGANTIC BACKDROP TYPOGRAPHY ================= */}
        {/* Generates a stunning cinematic footer ending with horizontal lines crossing */}
        <div className="relative w-full h-[180px] sm:h-[280px] lg:h-[350px] mt-12 flex items-center justify-center select-none pointer-events-none z-10 overflow-hidden">
          
          {/* Horizontal glowing violet scan lines */}
          <div className="absolute inset-x-0 top-[35%] h-[1px] bg-gradient-to-r from-transparent via-[#A855F7]/45 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.5)] z-20" />
          <div className="absolute inset-x-0 top-[55%] h-[1px] bg-gradient-to-r from-transparent via-[#2563FF]/30 to-transparent shadow-[0_0_12px_rgba(37,99,255,0.4)] z-20" />
          <div className="absolute inset-x-0 top-[75%] h-[1px] bg-gradient-to-r from-transparent via-[#A855F7]/25 to-transparent shadow-[0_0_10px_rgba(168,85,247,0.3)] z-20" />

          {/* Giant typography */}
          <span 
            className="text-[110px] sm:text-[190px] lg:text-[270px] font-display font-black tracking-tight text-center leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#1a1c29]/10 via-[#272a42]/35 to-white/95 filter drop-shadow-[0_0_40px_rgba(168,85,247,0.4)] animate-pulse"
            style={{
              fontFamily: '"Geist", sans-serif',
              animationDuration: '6s',
              letterSpacing: '-0.04em'
            }}
          >
            Neyza
          </span>

          {/* Intense neon bottom floor light that glows upwards */}
          <div className="absolute bottom-0 left-1/4 right-1/4 h-[12px] bg-gradient-to-r from-transparent via-[#A855F7]/85 to-transparent blur-[8px] z-20" />
          <div className="absolute bottom-1 left-1/3 right-1/3 h-[2px] bg-white/70 shadow-[0_0_20px_#A855F7] z-30" />
        </div>

      </div>

    </footer>
  );
}
