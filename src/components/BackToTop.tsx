import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          type="button"
          aria-label="Back to top"
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 p-3 sm:p-4 rounded-full bg-gradient-to-r from-[#2563FF] to-[#A855F7] text-white shadow-[0_0_20px_rgba(109,40,255,0.4)] hover:shadow-[0_0_30px_rgba(109,40,255,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
