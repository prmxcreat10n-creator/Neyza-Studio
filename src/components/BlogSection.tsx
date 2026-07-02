import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import blogBrandingImg from '../assets/images/blog_branding_review_1782675414390.jpg';
import blogSocialImg from '../assets/images/blog_social_calendar_1782675430832.jpg';
import blogAdsImg from '../assets/images/blog_ads_analytics_1782675445298.jpg';

export default function BlogSection() {
  const articles = [
    {
      id: 1,
      day: "24",
      month: "Jun",
      category: "Branding",
      image: blogBrandingImg,
      title: "How Great Branding Creates Lasting First Impressions",
      link: "#",
    },
    {
      id: 2,
      day: "18",
      month: "Jun",
      category: "Social Media",
      image: blogSocialImg,
      title: "7 Social Media Strategies That Actually Generate Leads",
      link: "#",
    },
    {
      id: 3,
      day: "10",
      month: "Jun",
      category: "Performance Marketing",
      image: blogAdsImg,
      title: "How Performance Marketing Turns Clicks Into Customers",
      link: "#",
    },
  ];

  return (
    <section id="blog-section" className="relative w-full bg-[#050505] text-white py-24 lg:py-32 overflow-hidden z-20 border-t border-white/5">
      
      {/* 1. Thin low-opacity square grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* 2. Soft luxury ambient glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#2563FF]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] bg-[#A855F7]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= TOP HEADER BAR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: Badge & Main Title */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Badge */}
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
                  INSIGHTS & BLOG
                </span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 font-display text-[44px] sm:text-[56px] lg:text-[64px] font-extrabold tracking-tight leading-[1.1] text-white"
            >
              Latest<br />
              <span className="font-serif italic font-normal bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] bg-clip-text text-transparent select-none drop-shadow-[0_0_20px_rgba(109,40,255,0.25)]">
                Growth Insights
              </span>
            </motion.h2>
          </div>

          {/* Right Column: Description Text */}
          <div className="lg:col-span-5 lg:mt-16 flex justify-start lg:justify-end">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#A8A8B3] text-sm sm:text-[15px] leading-relaxed max-w-[500px]"
            >
              Stay ahead with expert insights on branding, design, marketing, websites, AI, and business growth. Discover actionable strategies, industry trends, and creative ideas that help ambitious brands scale faster.
            </motion.p>
          </div>

        </div>

        {/* ================= BLOG ARTICLES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative flex flex-col rounded-[28px] bg-[#0B0B14]/70 border border-white/8 overflow-hidden hover:border-white/18 hover:bg-[#0B0B14]/85 hover:shadow-[0_22px_50px_rgba(0,0,0,0.6)] transition-all duration-500"
            >
              {/* Overlap Glow */}
              <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

              {/* Floating Date Badge (Top Left, overlapping image boundary) */}
              <div className="absolute left-6 top-6 z-20">
                <div className="w-16 h-16 rounded-full border border-[#A855F7]/30 bg-[#0B0B14]/90 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_8px_25px_rgba(168,85,247,0.25)] select-none">
                  <span className="text-xl font-display font-extrabold text-white leading-none">
                    {article.day}
                  </span>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                    {article.month}
                  </span>
                </div>
              </div>

              {/* Card Image Cover */}
              <div className="w-full aspect-[4/3] bg-zinc-950 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual shadow overlay inside the image bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B0B14]/80 to-transparent" />
              </div>

              {/* Card Text & Meta Footer */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow bg-[#0B0B14]/80 backdrop-blur-md relative z-10">
                {/* Category label */}
                <span className="text-xs font-semibold tracking-wider text-[#A855F7] uppercase">
                  {article.category}
                </span>

                {/* Article Title */}
                <h3 className="mt-3.5 text-lg sm:text-xl font-extrabold font-display tracking-tight text-white leading-snug flex-grow group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 transition-colors duration-300">
                  {article.title}
                </h3>

                {/* CTA Action Link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                  <span className="text-sm font-bold text-[#A855F7] group-hover:text-[#9333EA] transition-colors duration-300">
                    Read Article
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#A855F7] transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>

            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM CTA BUTTON ================= */}
        <div className="mt-16 sm:mt-20 flex justify-center">
          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-full border border-white/10 bg-[#0B0B14]/90 backdrop-blur-md flex items-center gap-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Ambient hover glowing backdrop */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563FF]/10 via-[#A855F7]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="relative z-10 text-sm font-extrabold text-white tracking-wider uppercase">
              View All Articles
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 text-[#A855F7] transform group-hover:translate-x-1 transition-transform duration-300" />

            {/* Glowing borders */}
            <div className="absolute -inset-px rounded-full border border-transparent group-hover:border-[#A855F7]/30 transition-all duration-500" />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
