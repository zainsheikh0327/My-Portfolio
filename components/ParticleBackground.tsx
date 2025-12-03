'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      pulsePhase: number;

      constructor() {
        this.x = Math.random() * (canvas?.width || 800);
        this.y = Math.random() * (canvas?.height || 600);
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.6 + 0.3;
        this.pulsePhase = Math.random() * Math.PI * 2;
      }

      update(time: number) {
        if (!canvas) return;

        // Gentle floating motion
        this.baseX += this.speedX;
        this.baseY += this.speedY;

        // Mouse interaction
        const dx = mouseRef.current.x - this.baseX;
        const dy = mouseRef.current.y - this.baseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          this.x = this.baseX - Math.cos(angle) * force * 30;
          this.y = this.baseY - Math.sin(angle) * force * 30;
        } else {
          this.x += (this.baseX - this.x) * 0.05;
          this.y += (this.baseY - this.y) * 0.05;
        }

        // Wrap around edges
        if (this.baseX > canvas.width) this.baseX = 0;
        if (this.baseX < 0) this.baseX = canvas.width;
        if (this.baseY > canvas.height) this.baseY = 0;
        if (this.baseY < 0) this.baseY = canvas.height;

        // Pulsing effect
        this.pulsePhase += 0.02;
        this.opacity = 0.3 + Math.sin(this.pulsePhase) * 0.3;
      }

      draw() {
        if (!ctx) return;
      
        // Hardcoded gradient colors
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        gradient.addColorStop(0, 'rgba(110, 192, 246, 0.4)');
        gradient.addColorStop(0.5, 'rgba(110, 192, 246, 0.2)');
        gradient.addColorStop(1, 'rgba(110, 192, 246, 0)');
      
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fill();
      
        // Core particle
        ctx.fillStyle = 'rgba(110, 192, 246, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }      
    }

    const createParticles = () => {
      const particleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / 12000),
        200
      );
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    createParticles();

    const connectParticles = () => {
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 0.15 * (1 - distance / 120);
            ctx.strokeStyle = `rgba(110, 192, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    let time = 0;
    const animate = () => {
      if (!ctx) return;
      time += 0.01;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update(time);
        particle.draw();
      });

      connectParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
  ref={canvasRef}
  id="particles-canvas"
  className="fixed inset-0 w-full h-full pointer-events-none z-[0]"
  style={{
    backgroundColor: '#00000A', // solid background
  }}
/>

  );
}

