import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Layers, Target } from 'lucide-react';

export default function StatsColumn() {
  const blocks = [
    {
      id: 'growth',
      icon: TrendingUp,
      num: "120%",
      numGrad: "from-[#2F80FF] to-[#00F2FE]", // Electric Blue → Cyan
      subtitle: "Average Client Growth",
      caption: "In first 90 days",
      glowColor: "rgba(47, 128, 255, 0.25)",
      color: "#2F80FF"
    },
    {
      id: 'projects',
      icon: Layers,
      num: "100+",
      numGrad: "from-[#8A2EFF] to-[#FF3366]", // Purple → Pink
      subtitle: "Successful Projects",
      caption: "Across multiple industries",
      glowColor: "rgba(138, 46, 255, 0.25)",
      color: "#8A2EFF"
    },
    {
      id: 'satisfaction',
      icon: Target,
      num: "98%",
      numGrad: "from-[#00F2FE] to-[#2F80FF]", // Cyan → Blue
      subtitle: "Client Satisfaction",
      caption: "Long-term partnerships",
      glowColor: "rgba(0, 242, 254, 0.25)",
      color: "#00F2FE"
    }
  ];

  const floatingParticles = [
    { id: 1, top: '12%', left: '18%', size: '3px', delay: 0, duration: 8 },
    { id: 2, top: '38%', left: '85%', size: '4px', delay: 1.5, duration: 11 },
    { id: 3, top: '65%', left: '12%', size: '2px', delay: 3, duration: 7 },
    { id: 4, top: '88%', left: '78%', size: '5px', delay: 0.8, duration: 9 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full max-w-[345px] ml-auto relative rounded-[28px] border border-white/[0.06] bg-[#07070F]/85 backdrop-blur-[28px] p-6 sm:p-7 shadow-[0_30px_70px_rgba(0,0,0,0.9)] overflow-hidden group/card"
    >
      {/* Subtle grid pattern for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.002)_1px,transparent_1px)] bg-[size:16px_16px] opacity-45 pointer-events-none rounded-[28px]" />

      {/* Noise texture layer for textured glass effect */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none rounded-[28px]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* Glass border reflection highlight overlay */}
      <div className="absolute -inset-px bg-gradient-to-br from-white/8 via-white/4 to-transparent rounded-[28px] pointer-events-none" />
      
      {/* Subtle top edge glow on hover */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent pointer-events-none" />

      {/* Floating high-end ambient light/reflections */}
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-gradient-to-br from-[#2F80FF]/12 to-[#8A2EFF]/12 rounded-full blur-[70px] pointer-events-none group-hover/card:scale-110 transition-transform duration-700" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-gradient-to-tr from-[#00F2FE]/8 to-[#8A2EFF]/8 rounded-full blur-[70px] pointer-events-none" />

      {/* Floating Particles Inside the Card */}
      {floatingParticles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/10 pointer-events-none"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.15, 0.45, 0.15],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Metrics container */}
      <div className="flex flex-col gap-5 relative z-10">
        {blocks.map((block, idx) => {
          const IconComponent = block.icon;
          return (
            <React.Fragment key={block.id}>
              {/* Metric Block with soft hover glow appearance */}
              <motion.div 
                className="group/block flex flex-col items-start rounded-2xl p-3 sm:p-4 -m-3 sm:-m-4 border border-transparent hover:border-white/[0.04] hover:bg-white/[0.025] transition-all duration-300 cursor-pointer"
                whileHover={{ y: -3, scale: 1.01 }}
              >
                {/* Header Row: Icon and Subtitle */}
                <div className="flex items-center gap-3.5 w-full">
                  {/* Icon with soft ambient glow and neon glass background */}
                  <div className="relative shrink-0 select-none">
                    <div 
                      className="absolute inset-0 rounded-full blur-[10px] opacity-30 group-hover/block:opacity-65 transition-opacity duration-300 pointer-events-none" 
                      style={{ backgroundColor: block.glowColor }}
                    />
                    <div className="relative w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] transition-all duration-300 group-hover/block:border-white/15 group-hover/block:bg-white/[0.06] overflow-hidden">
                      {/* Spin ring orbit inside icon container */}
                      <motion.div
                        className="absolute inset-1 rounded-full border border-dashed border-white/[0.02] group-hover/block:border-white/[0.12] pointer-events-none"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      />
                      <IconComponent 
                        className="w-[18px] h-[18px] relative z-10 transition-transform duration-300 group-hover/block:scale-115 text-zinc-400 group-hover/block:text-white" 
                        style={{
                          color: block.color,
                          filter: `drop-shadow(0 0 5px ${block.color})`
                        }}
                        strokeWidth={2}
                      />
                    </div>
                  </div>

                  {/* Text Details (Title & Caption) */}
                  <div className="flex flex-col min-w-0">
                    <span className="text-[15px] text-zinc-300 group-hover/block:text-white font-semibold tracking-tight leading-snug transition-colors duration-300">
                      {block.subtitle}
                    </span>
                    <span className="text-[12px] text-zinc-500 group-hover/block:text-zinc-400 font-normal leading-normal mt-0.5 transition-colors duration-300">
                      {block.caption}
                    </span>
                  </div>
                </div>

                {/* Main Large Gradient Number */}
                <div className="mt-2 pl-14 select-none">
                  <span className={`text-[46px] sm:text-[50px] font-black font-display leading-none tracking-tighter bg-gradient-to-r ${block.numGrad} bg-clip-text text-transparent group-hover/block:scale-[1.03] origin-left inline-block transition-all duration-300`}>
                    {block.num}
                  </span>
                </div>
              </motion.div>

              {/* Glowing Gradient Separator (only between blocks) */}
              {idx < blocks.length - 1 && (
                <div className="relative h-[1px] w-full my-1.5 overflow-visible opacity-50">
                  <div className="absolute inset-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </motion.div>
  );
}
