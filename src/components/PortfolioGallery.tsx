import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { ServiceData } from '../data/services';

interface ExtendedPortfolioItem {
  title: string;
  image: string;
  category: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string[];
  technologies?: string[];
  clientFeedback?: string;
}

export default function PortfolioGallery({ service }: { service: ServiceData }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const portfolio = service.portfolio as ExtendedPortfolioItem[];

  const handleClose = () => setSelectedIndex(null);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % portfolio.length));
  }, [portfolio.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + portfolio.length) % portfolio.length));
  }, [portfolio.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  if (!portfolio.length) return null;

  return (
    <section className="py-24 bg-[#030303] border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-display font-bold text-white mb-6"
          >
            Featured Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            A curated selection of our finest {service.category.toLowerCase()} projects, crafted with precision and purpose.
          </motion.p>
        </div>

        {/* Masonry / Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {portfolio.map((item, idx) => {
            // First item spans full width on mobile, 8 cols on desktop (Featured)
            // Second item spans full width on mobile, 4 cols on desktop
            // Subsequent items span 6 cols
            let colSpan = "md:col-span-6";
            if (idx === 0) colSpan = "md:col-span-8";
            else if (idx === 1) colSpan = "md:col-span-4";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => setSelectedIndex(idx)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${colSpan}`}
              >
                <div className="absolute inset-0 bg-zinc-900 animate-pulse" /> {/* Loading skeleton */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                  <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-xs font-bold tracking-[0.2em] text-[#A855F7] uppercase mb-3 block">
                      {item.category}
                    </span>
                    <h3 className="text-3xl font-display font-bold text-white">{item.title}</h3>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 border border-white/20">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full Screen Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#030303]/95 backdrop-blur-2xl p-4 sm:p-6 lg:p-8"
          >
            {/* Close Button */}
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 lg:top-10 lg:right-10 z-50 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {portfolio.length > 1 && (
              <>
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md hidden sm:flex"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors backdrop-blur-md hidden sm:flex"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Modal Content */}
            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-6xl max-h-full overflow-y-auto overflow-x-hidden bg-[#0A0A0A] border border-white/10 rounded-3xl hide-scrollbar shadow-2xl flex flex-col"
            >
              {/* Image Hero */}
              <div className="relative w-full h-[40vh] min-h-[300px] lg:h-[60vh] shrink-0">
                <img 
                  src={portfolio[selectedIndex].image} 
                  alt={portfolio[selectedIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-black/30" />
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-sm font-bold tracking-[0.2em] text-[#A855F7] uppercase mb-2 block">
                    {portfolio[selectedIndex].category}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                    {portfolio[selectedIndex].title}
                  </h2>
                </div>
              </div>

              {/* Case Study Details */}
              <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-12">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      {portfolio[selectedIndex].overview || `A comprehensive ${portfolio[selectedIndex].category.toLowerCase()} engagement focused on delivering premium results through strategic execution and meticulous attention to detail. This project exemplifies our commitment to quality and innovation.`}
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h4 className="text-xl font-semibold text-white mb-3">The Challenge</h4>
                      <p className="text-zinc-400">
                        {portfolio[selectedIndex].challenge || "Overcoming market saturation and establishing a unique, premium brand presence that resonates with the target demographic while driving measurable business growth."}
                      </p>
                    </div>
                    <div className="bg-[#A855F7]/10 border border-[#A855F7]/20 p-6 rounded-2xl">
                      <h4 className="text-xl font-semibold text-white mb-3">Our Solution</h4>
                      <p className="text-zinc-400">
                        {portfolio[selectedIndex].solution || "We developed a comprehensive strategy combining high-end design, targeted marketing, and seamless technical execution to create an unmatched user experience."}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-10">
                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
                    <ul className="space-y-3">
                      {(portfolio[selectedIndex].results || ["250% Increase in Engagement", "45% Higher Conversion Rate", "Award-winning Design"]).map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#A855F7]/20 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-[#A855F7]" />
                          </div>
                          <span className="text-zinc-300">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {(portfolio[selectedIndex].technologies || ["Figma", "React", "Next.js", "Tailwind CSS", "Framer Motion"]).map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Client Feedback */}
                  <div className="p-6 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 border border-white/10 rounded-2xl relative overflow-hidden">
                    <div className="text-4xl font-serif text-white/20 absolute top-2 left-4">"</div>
                    <p className="relative z-10 text-zinc-300 italic mb-4 mt-2">
                      {portfolio[selectedIndex].clientFeedback || "The team delivered beyond our expectations. The new direction has completely transformed how our customers perceive our brand."}
                    </p>
                    <p className="relative z-10 text-white font-semibold text-sm">— Project Lead</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
