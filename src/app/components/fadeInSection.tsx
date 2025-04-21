'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      key={isVisible ? 'visible' : 'hidden'}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      transition={{
        duration: 1.2,
        ease: 'easeInOut',
      }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      style={{ backgroundColor: 'transparent' }}
    >
      {children}
    </motion.div>
  );
}
