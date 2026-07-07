import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';
import Header from '../components/Header';
import StatsColumn from '../components/StatsColumn';
import TrustedBanner from '../components/TrustedBanner';
import BackgroundGlows from '../components/BackgroundGlows';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ProcessSection from '../components/ProcessSection';
import TeamSection from '../components/TeamSection';
import BlogSection from '../components/BlogSection';
import PricingSection from '../components/PricingSection';
import CtaSection from '../components/CtaSection';
import FooterSection from '../components/FooterSection';
import BackToTop from '../components/BackToTop';
import CursorGlow from '../components/CursorGlow';
import { PrimaryPremiumButton, SecondaryPremiumButton } from '../components/PremiumHeroButtons';

export default function App() {
  const avatars = [
    { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80', alt: 'Jane Doe - Marketing Lead' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80', alt: 'Alex Smith - Operations Director' },
    { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80', alt: 'Sarah Connor - Brand Strategist' },
    { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80', alt: 'Marcus Aurelius - Technology Officer' },
  ];

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col font-sans overflow-x-hidden">
      {/* Background neon visual ambient glows */}
      <BackgroundGlows />

      {/* Main header navigation */}
      <Header />

      {/* Hero section content area */}
      <main 
        className="relative flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12 lg:pt-40 lg:pb-20 z-10 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://lh3.googleusercontent.com/d/1Sp0_6zs3QTrfTcJY61efNLiENqnFpdvG")' 
        }}
      >
        {/* Responsive dark overlay - darker on mobile */}
        <div className="absolute inset-0 bg-black/80 sm:bg-black/60 md:bg-black/50 lg:bg-black/40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full flex flex-col justify-center relative z-10">
          
          {/* Main Grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column (Hero text, CTA, and social proofs) */}
            <div className="lg:col-span-8 flex flex-col text-left">
              
              {/* Animated Category / Tagline */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block"
              >
                <span className="text-[11px] sm:text-[13px] font-bold tracking-[0.25em] bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent uppercase select-none">
                  STRATEGY. DESIGN. GROWTH.
                </span>
              </motion.div>

              {/* Main H1 Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 font-display text-[42px] sm:text-[56px] lg:text-[72px] font-extrabold tracking-[-0.03em] leading-[1.08] text-white"
              >
                We Build Brands <br />
                That Grow &amp; <br />
                <span className="font-serif italic font-normal bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] bg-clip-text text-transparent select-none drop-shadow-[0_0_15px_rgba(109,40,255,0.15)]">
                  Create Impact.
                </span>
              </motion.h1>

              {/* Description Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-6 text-zinc-400 text-[15px] sm:text-[17px] leading-relaxed w-[548px] max-w-full font-normal"
              >
                From powerful branding to performance marketing, we help businesses stand out, connect deeply, and grow consistently.
              </motion.p>

              {/* Call to Actions (CTAs) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="mt-10 flex flex-wrap items-center gap-6"
              >
                <PrimaryPremiumButton onClick={() => handleScroll('#services-section')} />
                <SecondaryPremiumButton onClick={() => handleScroll('#projects-section')} />
              </motion.div>

              {/* Social Proof Overlapping Avatars */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-14 pt-8 border-t border-white/5 max-w-sm sm:max-w-none relative"
              >
                {/* Decorative glowing top border line */}
                <div className="absolute top-0 left-0 w-32 h-[1px] bg-gradient-to-r from-[#2563FF] via-[#A855F7] to-transparent opacity-50" />
                
                <div className="flex -space-x-4 relative">
                  {/* Subtle purple glow behind avatars */}
                  <div className="absolute inset-0 bg-[#A855F7]/20 blur-xl rounded-full scale-110" />
                  
                  {avatars.map((avatar, idx) => (
                    <div key={idx} className="relative z-10 rounded-full bg-[#0B0B14] p-[2px] bg-gradient-to-br from-white/20 to-white/5">
                      <img
                        className="inline-block h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover hover:translate-y-[-6px] transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] cursor-pointer"
                        src={avatar.src}
                        alt={avatar.alt}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                  
                  {/* Plus icon indicating more users */}
                  <div className="relative z-10 rounded-full bg-[#0B0B14] p-[2px] bg-gradient-to-br from-white/20 to-white/5 cursor-pointer hover:translate-y-[-6px] transition-all duration-300">
                    <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-xs font-bold text-white shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                      100+
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  {/* Star Ratings */}
                  <div className="flex items-center gap-1 mb-1.5">
                    <svg className="w-0 h-0 absolute">
                      <defs>
                        <linearGradient id="partialStar" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="20%" stopColor="#fbbf24" />
                          <stop offset="20%" stopColor="#3f3f46" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)]`} fill={star === 5 ? "url(#partialStar)" : "currentColor"} viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-[12px] text-zinc-400 ml-1.5 font-medium">4.2/5</span>
                  </div>
                  
                  <p className="text-[13px] sm:text-[14px] text-zinc-300 font-medium leading-tight">
                    Trusted by <span className="text-white font-bold tracking-wide">100+ Brands</span>
                  </p>
                  <p className="text-[11px] sm:text-[12px] text-zinc-500 font-normal leading-tight mt-1">
                    Driving real growth globally
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Right Stat Column */}
            <div className="lg:col-span-4 lg:pl-16 flex justify-end w-full lg:translate-x-16 xl:translate-x-24">
              <StatsColumn />
            </div>

          </div>

          {/* Bottom Banner Row: Trusted Brands logos & highlighting metrics */}
          <TrustedBanner />

        </div>
      </main>

      {/* Ultra-premium About Us section */}
      <AboutSection />

      {/* Premium Services section */}
      <ServicesSection />

      {/* Premium Featured Projects section */}
      <ProjectsSection />

      {/* Premium Process timeline section */}
      <ProcessSection />

      {/* Premium Team carousel slider section */}
      <TeamSection />

      {/* Premium Blog/Insights section */}
      <BlogSection />

      {/* Premium Pricing section */}
      <PricingSection />

      {/* Premium CTA section */}
      <CtaSection />

      {/* Premium Footer section */}
      <FooterSection />

      {/* Back to top floating button */}
      <BackToTop />
      
      {/* Custom Global Follow Cursor Glow */}
      <CursorGlow />
    </div>
  );
}
