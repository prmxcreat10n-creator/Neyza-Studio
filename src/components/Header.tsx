import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NavItem } from '../types';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollState, { passive: true });
    // Run once initially to handle page reloads mid-scroll
    handleScrollState();
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#root' },
    { label: 'Services', href: '#services-section' },
    { label: 'Work', href: '#projects-section' },
    { label: 'About Us', href: '#about-section' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#blog-section' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string, isMobile: boolean = false) => {
    e.preventDefault();
    if (isMobile) {
      setIsOpen(false);
    }
    
    setTimeout(() => {
      if (href === '#root') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.querySelector(href);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 80; // offset for header
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    }, isMobile ? 150 : 0);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? "border-white/10 bg-[#07070F]/75 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.06)]" 
        : "border-white/[0.04] bg-[#030303]/60 backdrop-blur-lg shadow-none"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* Custom logo from Drive */}
            <div className="relative w-14 h-14 flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/d/1sqYV5xz-wdWNkiiCjMrRAnTV8ldl5ocT"
                alt="Neyza Logo" 
                className="relative w-14 h-14 object-contain" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Title & Subtitle with custom styling from the brand identity */}
            <div className="flex flex-col relative justify-center">
              <span className="font-sans font-bold text-xl tracking-[0.25em] text-white leading-none mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-purple transition-all duration-300">
                NEYZA
              </span>
              <span className="text-[7.5px] font-semibold tracking-[0.22em] text-zinc-400 mt-1 leading-none group-hover:text-[#1e50ff] transition-all duration-300">
                CREATIVE GROWTH AGENCY
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  handleScroll(e, item.href);
                  setActiveTab(item.label);
                }}
                className="relative py-2 text-[14px] font-medium text-zinc-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group/item"
              >
                <span className={activeTab === item.label ? "text-white" : ""}>{item.label}</span>
                
                {/* Active Underline Gradient Rounded Line */}
                {activeTab === item.label && (
                  <motion.span 
                    layoutId="nav-dot"
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-[3.5px] rounded-full bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] shadow-[0_2px_12px_rgba(109,40,255,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#cta-section" 
              onClick={(e) => handleScroll(e, '#cta-section')}
              className="text-[14px] font-semibold text-zinc-300 hover:text-white transition-colors duration-200"
            >
              Let's Talk
            </a>
            
            <button 
              onClick={(e) => handleScroll(e, '#pricing')}
              className="relative group px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-purple text-white text-[14px] font-semibold flex items-center gap-2 overflow-hidden hover:shadow-[0_0_20px_rgba(155,81,224,0.4)] transition-all duration-300"
            >
              {/* Shimmer overlay */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-12 translate-x-[-120%] group-hover:translate-x-[250%] transition-transform duration-1000" />
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    handleScroll(e, item.href, true);
                    setActiveTab(item.label);
                  }}
                  className={`block text-base font-medium py-2 border-l-2 pl-3 transition-colors cursor-pointer ${
                    activeTab === item.label
                      ? 'text-white border-brand-purple bg-brand-purple/5'
                      : 'text-zinc-400 border-transparent hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-4">
                <a 
                  href="#cta-section" 
                  className="text-base font-semibold text-zinc-300 hover:text-white py-2 pl-3 cursor-pointer block"
                  onClick={(e) => {
                    handleScroll(e, '#cta-section', true);
                  }}
                >
                  Let's Talk
                </a>
                <button 
                  type="button"
                  onClick={(e) => {
                    handleScroll(e, '#pricing', true);
                  }}
                  className="w-full bg-gradient-to-r from-brand-blue to-brand-purple text-white py-3 px-5 rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
