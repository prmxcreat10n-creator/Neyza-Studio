import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { ServiceData } from '../data/services';

export default function Deliverables({ service }: { service: ServiceData }) {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            What You Get
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.deliverables.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center hover:border-brand-purple/50 transition-colors"
            >
              <Sparkles className="w-8 h-8 text-brand-purple mb-4" />
              <h3 className="text-xl font-semibold text-white">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
