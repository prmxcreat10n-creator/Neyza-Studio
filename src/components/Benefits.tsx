import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { ServiceData } from '../data/services';

export default function Benefits({ service }: { service: ServiceData }) {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Key Benefits
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start gap-4 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-brand-purple" />
              </div>
              <p className="text-lg text-zinc-300 pt-1">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
