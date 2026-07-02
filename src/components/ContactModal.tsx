import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const servicesList = [
  "Creative & Designing",
  "Performance Marketing",
  "Branding",
  "Video Shoot",
  "Logo & Identity Creation",
  "Video Development",
  "Website",
  "Influencer Marketing",
  "Social Media Management",
  "SEO",
  "Online Reputation Management",
  "Other"
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    services: [] as string[]
  });
  const [loading, setLoading] = useState(false);

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      if (prev.services.includes(service)) {
        return { ...prev, services: prev.services.filter(s => s !== service) };
      } else {
        return { ...prev, services: [...prev.services, service] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch(
      "https://neyza-contact.imparamazing1.workers.dev/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (result.success) {
      alert("✅ Thank you! We'll contact you shortly.");

      onClose();

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          services: [],
        });
      }, 500);
    } else {
      alert(result.message || "Something went wrong.");
    }
  } catch (err) {
    console.error(err);
    alert("Server Error. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 overflow-y-auto pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-4xl bg-[#0B0B14]/90 backdrop-blur-xl border border-white/10 rounded-[28px] shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative pointer-events-auto my-auto max-h-full overflow-y-auto custom-scrollbar"
            >
              {/* Decorative Background Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2563FF] via-[#6D28FF] to-[#A855F7]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A855F7]/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2563FF]/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-200 z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="p-8 sm:p-10 lg:p-12 relative z-10">
                <div className="mb-10 text-center">
                  <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                    Let's <span className="bg-gradient-to-r from-[#2563FF] to-[#A855F7] bg-clip-text text-transparent">Connect</span>
                  </h2>
                  <p className="mt-3 text-zinc-400 text-sm sm:text-base">
                    Fill out the information below and we'll get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid for basic inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-zinc-300 ml-1">Your Name*</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#A855F7]/50 focus:bg-white/[0.05] transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-zinc-300 ml-1">Your Email*</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#A855F7]/50 focus:bg-white/[0.05] transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-zinc-300 ml-1">Your Phone*</label>
                      <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#A855F7]/50 focus:bg-white/[0.05] transition-all duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-zinc-300 ml-1">Your Subject*</label>
                      <input
                        required
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#A855F7]/50 focus:bg-white/[0.05] transition-all duration-300"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  {/* Services Checkboxes */}
                  <div className="pt-4 pb-2">
                    <label className="text-sm font-semibold text-zinc-200 mb-4 block">Select Services*</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {servicesList.map((service) => (
                        <label
                          key={service}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all duration-300 select-none ${
                            formData.services.includes(service)
                              ? 'bg-[#A855F7]/10 border-[#A855F7]/40 text-white'
                              : 'bg-white/[0.02] border-white/5 text-zinc-400 hover:bg-white/[0.04] hover:border-white/10'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-colors ${
                            formData.services.includes(service)
                              ? 'bg-[#A855F7] border-[#A855F7]'
                              : 'bg-transparent border-zinc-600'
                          }`}>
                            {formData.services.includes(service) && (
                              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </div>
                          <span className="text-sm font-medium">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-zinc-300 ml-1">Your Message</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 focus:outline-none focus:border-[#A855F7]/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                      placeholder="Tell us more about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2563FF] to-[#A855F7] rounded-xl text-white font-bold tracking-wide shadow-[0_0_20px_rgba(109,40,255,0.4)] hover:shadow-[0_0_30px_rgba(109,40,255,0.6)] hover:scale-[1.02] transition-all duration-300"
                    >
                      {loading ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
