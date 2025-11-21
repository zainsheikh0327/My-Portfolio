'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { personal } from '@/data/personal';

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">

      {/* 🔹 Background Video */}
      <video
        src="/ContactBackground.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b 
          from-black/80 
          via-black/40 
          to-black/70 
          backdrop-blur-[1px]" 
      />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Get In <span className="gradient-text text-glow">Touch</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-primary via-primary-light to-primary mx-auto rounded-full mb-6"
            style={{ boxShadow: '0 0 20px rgba(110, 192, 246, 0.55)' }}
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Let&apos;s Build Something{' '}
                <span className="gradient-text">Amazing</span>
              </h3>

              <p className="text-white/70 leading-relaxed mb-8">
                I&apos;m always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I&apos;ll try my best to
                get back to you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">

              {/* Email */}
              <motion.a
                href={`mailto:${personal.email}`}
                whileHover={{ x: 10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 glassmorphism gradient-border rounded-xl hover:border-primary/40 hover:shadow-[0_0_30px_rgba(21,65,156,0.35)] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#15419C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 relative z-10"
                  whileHover={{ rotate: 10 }}
                >
                  <Mail className="text-primary" size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-white/40">Email</p>
                  <p className="text-white group-hover:text-primary transition-colors duration-300">
                    {personal.email}
                  </p>
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 glassmorphism gradient-border rounded-xl hover:border-primary/40 hover:shadow-[0_0_30px_rgba(21,65,156,0.35)] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#15419C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 relative z-10"
                  whileHover={{ rotate: 10 }}
                >
                  <Linkedin className="text-primary" size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-white/40">LinkedIn</p>
                  <p className="text-white group-hover:text-primary transition-colors duration-300">
                    {personal.name}
                  </p>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 glassmorphism gradient-border rounded-xl hover:border-primary/40 hover:shadow-[0_0_30px_rgba(21,65,156,0.35)] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#15419C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 relative z-10"
                  whileHover={{ rotate: 10 }}
                >
                  <Github className="text-primary" size={24} />
                </motion.div>
                <div>
                  <p className="text-sm text-white/40">GitHub</p>
                  <p className="text-white group-hover:text-primary transition-colors duration-300">
                    {personal.github.split('/').pop()}
                  </p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glow Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
    </section>
  );
}
