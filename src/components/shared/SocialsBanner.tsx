'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/MAPREUY',
    icon: <FaFacebook className="h-8 w-8" />,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/mapreuy/',
    icon: <FaInstagram className="h-8 w-8" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function SocialsBanner() {
  return (
    <motion.section
      className="bg-foreground text-background py-12"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container text-center">
        <h2 className="font-headline text-3xl font-bold text-background mb-8">
          Síguenos en nuestras redes
        </h2>
        <motion.div
          className="flex justify-center items-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socials.map((social) => (
            <motion.div key={social.name} variants={itemVariants}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Sigue a Mapre Digital en ${social.name}`}
              >
                <motion.div
                  className="p-4 rounded-full bg-primary/20 text-background transition-colors hover:bg-primary/40"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {social.icon}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
