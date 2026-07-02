import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Sparkles, Rocket, TrendingUp, Crown, Shield, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      badge: null,
      description: 'Perfect for small businesses starting their online presence.',
      priceMonthly: 4999,
      priceYearly: 3999,
      buttonText: 'Get Started',
      icon: Rocket,
      iconBg: 'from-blue-600/20 to-indigo-600/20 text-blue-400 border-blue-500/20',
      features: [
        '12 Premium Social Media Posts',
        'Graphic Design',
        'Content Writing',
        'Instagram & Facebook Management',
        'Monthly Strategy Call',
        'Basic Brand Guidelines',
        'WhatsApp Support',
      ],
      isPopular: false,
    },
    {
      id: 'growth',
      name: 'Growth Plan',
      badge: 'MOST POPULAR',
      description: 'Perfect for businesses ready to scale and dominate the market.',
      priceMonthly: 9999,
      priceYearly: 7999,
      buttonText: 'Scale My Business',
      icon: TrendingUp,
      iconBg: 'from-purple-600/20 to-pink-600/20 text-purple-400 border-purple-500/20',
      features: [
        'Everything in Starter',
        'Meta Ads Management',
        'Google Business Profile Management',
        'Advanced Branding',
        'Reels & Video Editing',
        'Landing Page Design',
        'Monthly Analytics Report',
        'Performance Strategy',
        'Priority Support',
      ],
      isPopular: true,
      footerNote: 'Recommended for growing brands',
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      badge: null,
      description: 'For brands that demand complete and rapid digital growth.',
      priceMonthly: 24999,
      priceYearly: 19999,
      buttonText: 'Choose Premium',
      icon: Crown,
      iconBg: 'from-amber-600/20 to-orange-600/20 text-amber-400 border-amber-500/20',
      features: [
        'Everything in Growth',
        'Complete Brand Identity',
        'Website Design',
        'UI/UX Consultation',
        'SEO Foundation',
        'Content Strategy',
        'Unlimited Design Requests',
        'Dedicated Account Manager',
        'Weekly Growth Meetings',
        'Priority Response',
      ],
      isPopular: false,
    },
  ];

  return (
    <section id="pricing" className="relative w-full bg-[#050505] text-white py-24 lg:py-32 overflow-hidden z-20 border-t border-white/5">
      
      {/* 1. Extremely soft grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* 2. Soft luxury ambient glows behind heading and cards */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] -left-[10%] w-[450px] h-[450px] bg-[#2563FF]/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] -right-[10%] w-[500px] h-[500px] bg-[#D946EF]/3 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-[15%] w-1 h-1 bg-white/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute top-[45%] right-[12%] w-1.5 h-1.5 bg-brand-purple/30 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-32 left-[8%] w-1 h-1 bg-blue-500/30 rounded-full animate-ping" style={{ animationDuration: '5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ================= HEADER SECTION ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          {/* Glowing pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
              <span className="text-xs font-semibold tracking-wider text-[#A855F7] animate-pulse">✦</span>
              <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-300 uppercase">
                OUR PRICING PLAN
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[44px] sm:text-[60px] lg:text-[68px] font-extrabold tracking-tight leading-[1.1] text-white"
          >
            Scale Your Business <br />
            With the{' '}
            <span className="font-serif italic font-normal bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] bg-clip-text text-transparent select-none drop-shadow-[0_0_20px_rgba(109,40,255,0.25)]">
              Right Plan
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-zinc-400 font-sans text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Choose a pricing plan that fits your business stage. Whether you're starting out or scaling aggressively, <span className="text-white font-medium">NEYZA</span> has a solution designed for growth.
          </motion.p>

          {/* ================= BILLING TOGGLE ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex items-center justify-center gap-4 relative"
          >
            {/* Toggle Switch */}
            <div className="relative p-1.5 flex items-center bg-zinc-900/60 border border-white/10 rounded-full backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`relative px-6 py-2 text-xs font-sans font-medium tracking-wider rounded-full z-10 transition-colors duration-300 ${
                  billingPeriod === 'monthly' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod('yearly')}
                className={`relative px-6 py-2 text-xs font-sans font-medium tracking-wider rounded-full z-10 transition-colors duration-300 ${
                  billingPeriod === 'yearly' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Yearly
              </button>

              {/* Slider highlight background */}
              <motion.div
                className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7] shadow-[0_2px_10px_rgba(109,40,255,0.4)]"
                layout
                animate={{
                  left: billingPeriod === 'monthly' ? '6px' : 'calc(50% + 1.5px)',
                  right: billingPeriod === 'monthly' ? 'calc(50% + 1.5px)' : '6px',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            </div>

            {/* Save badge pointing at Yearly */}
            <div className="absolute left-[calc(50%+110px)] hidden sm:flex items-center gap-2">
              <svg className="w-8 h-8 text-brand-purple fill-none" viewBox="0 0 34 32">
                <path
                  d="M1 31C10.5 31 22 25.5 28 16.5M28 16.5L20.5 14M28 16.5L31.5 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex flex-col items-start leading-none text-left">
                <span className="text-[11px] text-[#A855F7] font-semibold tracking-wider">Save up to 20%</span>
                <span className="text-[10px] text-zinc-500 font-sans font-medium mt-0.5">Yearly Billing</span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* ================= PRICING CARDS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {plans.map((plan, index) => {
            const displayPrice = billingPeriod === 'monthly' ? plan.priceMonthly : plan.priceYearly;
            const IconComponent = plan.icon;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.015 }}
                className={`relative flex flex-col rounded-[28px] p-8 sm:p-10 transition-all duration-500 overflow-hidden ${
                  plan.isPopular
                    ? 'bg-zinc-900/40 border-2 border-brand-purple shadow-[0_24px_60px_rgba(109,40,255,0.15)]'
                    : 'bg-[#12121E]/60 border border-white/[0.08] hover:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.4)]'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold tracking-wider uppercase bg-gradient-to-r from-[#2563FF] to-[#A855F7] text-white shadow-[0_2px_10px_rgba(109,40,255,0.3)]">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Left/Top Decor Gradient for Popular Card */}
                {plan.isPopular && (
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7]" />
                )}

                {/* Plan Icon */}
                <div className="mb-6 flex">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br border ${plan.iconBg} shadow-[0_4px_20px_rgba(0,0,0,0.3)]`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Name & description */}
                <h3 className="text-2xl font-bold font-display text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 h-12 overflow-hidden">{plan.description}</p>

                {/* Divider Line */}
                <div className="w-full h-px bg-white/5 mb-6" />

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                    ₹{displayPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-zinc-500 text-sm font-sans font-medium">/ Month</span>
                </div>

                {/* CTA Button */}
                <button
                  id={`btn-pricing-${plan.id}`}
                  className={`w-full group/btn py-4 rounded-[18px] text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-[#2563FF] to-[#A855F7] text-white shadow-[0_10px_25px_-5px_rgba(109,40,255,0.4)] hover:shadow-[0_15px_30px_rgba(109,40,255,0.6)]'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  <span className="relative z-10 transition-transform duration-300">{plan.buttonText}</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-shimmer pointer-events-none" />
                </button>

                {/* What's Included */}
                <div className="mt-8 flex-1">
                  <p className="text-xs font-sans font-semibold tracking-widest text-[#A855F7] uppercase mb-4">What's Included</p>
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                        <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-brand-purple/10 border border-brand-purple/30 flex items-center justify-center shadow-[0_0_8px_rgba(155,81,224,0.15)]">
                          <Check className="w-2.5 h-2.5 text-brand-purple" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extra Card Footer note for popular card */}
                {plan.isPopular && plan.footerNote && (
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-zinc-500 font-sans font-medium tracking-wide">{plan.footerNote}</span>
                    <svg className="w-3.5 h-3.5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ================= BOTTOM INFO BAR ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4.5 rounded-2xl bg-zinc-950/40 border border-white/5 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.5)] max-w-2xl text-center sm:text-left">
            <div className="p-2 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple flex-shrink-0 hidden sm:block">
              <Shield className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              <span className="text-white font-semibold">No long-term contracts.</span> Cancel anytime. Upgrade whenever your business grows.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
