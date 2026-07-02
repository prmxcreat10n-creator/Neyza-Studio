import { motion } from 'motion/react';

export default function BackgroundGlows() {
  const driveImageUrl = "https://lh3.googleusercontent.com/d/14eSzFeUILbMh_n2J1QlaevYCJBpl3xwQ";

  return (
    <div className="absolute top-0 left-0 right-0 h-[100vh] lg:h-full lg:bottom-0 overflow-hidden pointer-events-none z-0">
      {/* High-quality cover background image, aligned to the right so that the character is framed perfectly on all device sizes */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={driveImageUrl}
          alt="Neyza Creative Growth Agency Background"
          className="w-full h-full object-cover object-right opacity-100"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Sleek radial and linear dark gradients to ensure contrast/legibility of text elements on top */}
      {/* Left-to-right gradient: darkens the left side for readability while leaving the right side (person) fully vibrant */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 via-[35%] to-transparent lg:from-black lg:via-black/75 lg:via-[45%] lg:to-transparent" />
      
      {/* Smooth bottom-to-top gradient to seamlessly fade into the page background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />

      {/* High-end technical grid overlay on top of the image to reinforce the professional growth tech agency theme */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" 
        style={{ 
          maskImage: 'radial-gradient(ellipse_60%_50%_at_50%_50%, #000_70%, transparent_100%)', 
          WebkitMaskImage: 'radial-gradient(ellipse_60%_50%_at_50%_50%, #000_70%, transparent_100%)' 
        }}
      />

      {/* Top Left Ambient Glow (Purple) */}
      <motion.div
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -20, 15, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-brand-purple/10 blur-[120px]"
      />

      {/* Center glowing dot (Subtle blue) */}
      <div className="absolute top-[35%] left-[25%] w-[350px] h-[350px] rounded-full bg-brand-blue/5 blur-[100px] opacity-50" />
    </div>
  );
}
