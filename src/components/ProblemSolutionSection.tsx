import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, TrendingUp, Award } from 'lucide-react';
import { ServiceData } from '../data/services';

export default function ProblemSolutionSection({ service }: { service: ServiceData }) {
  const solutions = [
    {
      title: 'Brand Strategy',
      desc: 'We dig deep to uncover your unique value proposition and position you correctly in the market.',
      icon: Target,
    },
    {
      title: 'Creative Direction',
      desc: 'World-class visual execution that captures attention and communicates premium quality.',
      icon: Lightbulb,
    },
    {
      title: 'Growth Focus',
      desc: 'Everything we design and build is optimized for conversion and measurable business growth.',
      icon: TrendingUp,
    },
    {
      title: 'Premium Execution',
      desc: 'Meticulous attention to detail in every pixel, frame, and line of code we deliver.',
      icon: Award,
    }
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full bg-brand-purple/10 blur-[150px] pointer-events-none" />
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Part 1: Why Most Brands Fail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-extrabold text-white leading-tight mb-6">
              Why Most Brands <br />
              <span className="text-zinc-500 font-serif italic font-normal">Fail to Stand Out</span>
            </h2>
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-8">
              In a crowded digital landscape, being "good enough" guarantees you'll be ignored. Most businesses suffer from inconsistent messaging, templated designs, and a lack of clear strategy. 
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              When your brand looks like everyone else's, you compete on price. When your brand is premium, you dictate the market.
            </p>
          </motion.div>

          {/* Right Side: Stats & Glass Cards */}
          <div className="relative h-[400px] flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#07070F]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-20 mb-8 ml-auto w-full max-w-sm right-0 lg:right-4"
            >
              <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2563FF] to-[#A855F7] mb-2">
                94%
              </div>
              <p className="text-zinc-300 font-medium">of first impressions are design-related.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-[#07070F]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-10 w-full max-w-sm -mt-16 sm:mr-auto sm:ml-0 ml-auto left-0 lg:-left-4"
            >
              <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#A855F7] mb-2">
                75%
              </div>
              <p className="text-zinc-300 font-medium">judge a company's credibility based on visual design.</p>
            </motion.div>
          </div>
        </div>

        {/* Part 2: How NEYZA Solves It */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-6"
          >
            How NEYZA Solves It
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white/[0.02] border border-white/5 rounded-[24px] p-8 hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 group-hover:border-brand-purple/30 transition-colors">
                <item.icon className="w-6 h-6 text-zinc-400 group-hover:text-[#A855F7] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{item.title}</h3>
              <p className="text-zinc-400 text-[15px] leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
