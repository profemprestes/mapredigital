'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.22, 1, 0.36, 1], // easeOutQuint
    },
  },
};

export function HeroLogo() {
  return (
    <motion.div
      className="hidden lg:flex justify-center items-center"
      variants={imageVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        animate={{ y: [-10, 10] }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 3,
          ease: 'easeInOut',
        }}
      >
        <Image
          src="/Logo_Mapre.svg"
          alt="Logo animado de Mapre Digital"
          width={400}
          height={400}
          className="object-contain drop-shadow-2xl"
          data-ai-hint="company logo"
        />
      </motion.div>
    </motion.div>
  );
}
