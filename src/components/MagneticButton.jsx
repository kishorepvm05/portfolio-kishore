import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const MagneticButton = ({ children, className = '', style = {}, onClick, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics spring for premium elastic magnetic return
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.35);
    y.set(middleY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        display: 'inline-block',
        x: springX,
        y: springY,
        ...style
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
    >
      <button className={className} onClick={onClick} {...props}>
        {children}
      </button>
    </motion.div>
  );
};

export default MagneticButton;

