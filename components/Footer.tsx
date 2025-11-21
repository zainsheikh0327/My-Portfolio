'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personal } from '@/data/personal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personal.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#010514] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(110,192,246,0.12),transparent_60%)] pointer-events-none" />
      <div className="container-custom section-padding relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm"
          >
            © {currentYear} {personal.name}. Built with{' '}
            <Heart className="inline w-4 h-4 text-primary animate-pulse" /> using{' '}
            <span className="text-primary">Next.js</span> &{' '}
            <span className="text-primary">Tailwind CSS</span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glassmorphism gradient-border flex items-center justify-center text-white/70 hover:text-primary hover:border-primary/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                aria-label={link.label}
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}






