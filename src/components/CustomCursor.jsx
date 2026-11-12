import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth lag for luxury fluid cursor feel
  const springX = useSpring(mouseX, { stiffness: 450, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 28 });

  // Outer follower with extra float/damping
  const followerX = useSpring(mouseX, { stiffness: 180, damping: 24 });
  const followerY = useSpring(mouseY, { stiffness: 180, damping: 24 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isClickable = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.project-item-editorial') ||
        target.closest('.skill-editorial-card') ||
        target.closest('.editorial-metric-card') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Center Pin */}
      <motion.div
        className="cursor-dot"
        style={{
          x: springX,
          y: springY,
          position: 'fixed',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: isPointer ? '#F97316' : '#1C1917',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference'
        }}
        animate={{
          scale: isPointer ? 1.5 : 1
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Fluid Outer Ring Follower */}
      <motion.div
        className="cursor-follower"
        style={{
          x: followerX,
          y: followerY,
          position: 'fixed',
          top: -20,
          left: -20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: `1px solid ${isPointer ? '#F97316' : 'rgba(28, 25, 23, 0.35)'}`,
          pointerEvents: 'none',
          zIndex: 9998,
          backgroundColor: isPointer ? 'rgba(249, 115, 22, 0.08)' : 'transparent'
        }}
        animate={{
          scale: isPointer ? 1.4 : 1
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
