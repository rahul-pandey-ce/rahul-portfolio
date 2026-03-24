import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for high-performance feel
  const springConfig = { damping: 25, stiffness: 300, mass: 0.4 };
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Initial and dynamic hover listeners
    const addListeners = () => {
      const clickables = document.querySelectorAll('a, button, [role="button"], input, textarea, .group');
      clickables.forEach(el => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
      {/* Central Precision Dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 bg-neon-cyan rounded-full mix-blend-screen shadow-[0_0_10px_rgba(0,224,255,0.8)]"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? '#F472B6' : '#00E0FF', // Pink on hover
        }}
      />

      {/* Crosshair Lines */}
      {/* Top Line */}
      <motion.div
        className="absolute w-[1px] bg-neon-cyan/40"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', bottom: 'auto' }}
        animate={{
          height: isHovering ? 25 : 10,
          y: isHovering ? -35 : -20,
          opacity: isHovering ? 1 : 0.4,
          backgroundColor: isHovering ? '#F472B6' : '#00E0FF',
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Bottom Line */}
      <motion.div
        className="absolute w-[1px] bg-neon-cyan/40"
        style={{ x: cursorX, y: cursorY, translateX: '-50%' }}
        animate={{
          height: isHovering ? 25 : 10,
          y: isHovering ? 10 : 10,
          opacity: isHovering ? 1 : 0.4,
          backgroundColor: isHovering ? '#F472B6' : '#00E0FF',
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Left Line */}
      <motion.div
        className="absolute h-[1px] bg-neon-cyan/40"
        style={{ x: cursorX, y: cursorY, translateY: '-50%', right: 'auto' }}
        animate={{
          width: isHovering ? 25 : 10,
          x: isHovering ? -35 : -20,
          opacity: isHovering ? 1 : 0.4,
          backgroundColor: isHovering ? '#F472B6' : '#00E0FF',
        }}
        transition={{ duration: 0.3 }}
      />
      {/* Right Line */}
      <motion.div
        className="absolute h-[1px] bg-neon-cyan/40"
        style={{ x: cursorX, y: cursorY, translateY: '-50%' }}
        animate={{
          width: isHovering ? 25 : 10,
          x: isHovering ? 10 : 10,
          opacity: isHovering ? 1 : 0.4,
          backgroundColor: isHovering ? '#F472B6' : '#00E0FF',
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Outer Tracking Frame (Hover only) */}
      <motion.div
        className="absolute w-12 h-12 border border-white/10 rounded-lg pointer-events-none"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          opacity: isHovering ? 0.3 : 0,
          scale: isHovering ? 1 : 0.5,
          rotate: isHovering ? 45 : 0,
        }}
      />
    </div>
  );
};

export default CustomCursor;
