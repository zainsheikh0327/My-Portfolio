# 🌟 Zain Sheikh - Portfolio Website

A cinematic, interactive, and visually stunning personal portfolio website featuring Awwwards-level design with glassmorphism, 3D particle effects, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

### 🎨 Awwwards-Level Design
- **Triple-Layer Visual System:**
  - Three.js 3D Scene (distorted sphere + 1000 orbital particles)
  - Canvas Particle Network (200 interactive particles with connections)
  - Ambient Gradient Orbs (6+ floating elements)
- **Custom Cursor System** - 3-layer glow with hover states & ripple effects
- **Glassmorphism UI** - Neon cyan/blue on jet-black with depth
- **Cinematic Animations** - Spring physics, blur reveals, shimmer effects
- **60 FPS Performance** - GPU-accelerated throughout
- **Responsive Design** - Optimized mobile → 4K displays

### 🧩 Sections (Every Detail Polished)
1. **Hero** - 6-stage stagger reveal, magnetic CTAs, floating orbs, scroll indicator
2. **About** - 4 animated highlights, 26 skills with glowing progress bars, icon rotations
3. **Projects** - Filterable grid, shimmer hovers, spring-physics modals, tech tag animations
4. **Education** - Split timeline, gradient sweeps, rotating icons, honor badges
5. **Contact** - Neon-glow inputs, animated form, social cards with hover effects
6. **Loading Screen** - Animated logo, real progress bar, radial gradient pulse
7. **Navigation** - Glassmorphic sticky nav, animated underlines, mobile menu
8. **Back to Top** - Pulse ring animation, smooth scroll

### ⚡ Advanced Features
- **Scroll Progress Bar** - Spring-physics tracking at page top
- **Section Dividers** - Animated gradient sweeps between sections
- **Enhanced Cursor** - Smooth following (15% easing), hover states, ripple rings
- **Micro-Interactions** - 100+ polished hover/click/reveal animations
- **Modal System** - Spring-based project detail views
- **Particle Physics** - Mouse-reactive repulsion within 150px radius

### 🚀 Tech Stack
- **Framework:** Next.js 15 (App Router, Static Export)
- **Language:** TypeScript 5.6 (Full type safety)
- **Styling:** Tailwind CSS 3.4 (Custom theme)
- **Animations:** Framer Motion 11 (Spring physics)
- **3D Graphics:** Three.js + React Three Fiber + Drei
- **Canvas:** Custom particle system (200 particles)
- **Icons:** Lucide React (Tree-shaken)
- **Performance:** GPU-accelerated, 60 FPS
- **Deployment:** Vercel-optimized (152 KB bundle)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm installed
- Git

### Clone & Install
\`\`\`bash
git clone https://github.com/zainsheikh/My-Portfolio.git
cd My-Portfolio
npm install
\`\`\`

### Development Server
\`\`\`bash
npm run dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
\`\`\`bash
npm run build
\`\`\`
This generates static files in the `out/` directory.

### Export for Static Hosting
\`\`\`bash
npm run export
\`\`\`

## 🎯 Customization

### Update Personal Information
Edit `data/personal.ts`:
\`\`\`typescript
export const personal = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your@email.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  // ...
};
\`\`\`

### Add/Edit Skills
Modify `data/skills.ts`:
\`\`\`typescript
export const skills: Skill[] = [
  { name: 'React', category: 'Frontend', proficiency: 95 },
  // Add more skills...
];
\`\`\`

### Showcase Projects
Update `data/projects.ts`:
\`\`\`typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project',
    description: 'Short description',
    technologies: ['React', 'Node.js'],
    // ...
  },
];
\`\`\`

### Education & Certifications
Edit `data/education.ts` to update your academic background.

## 🎨 Color Customization

Modify `tailwind.config.ts` to change the color scheme:
\`\`\`typescript
colors: {
  primary: {
    DEFAULT: '#00D9FF', // Cyan blue
    dark: '#00A8CC',
    light: '#5EEBFF',
  },
  // ...
}
\`\`\`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   \`\`\`bash
   npm i -g vercel
   \`\`\`

2. **Login to Vercel:**
   \`\`\`bash
   vercel login
   \`\`\`

3. **Deploy:**
   \`\`\`bash
   vercel deploy --prod
   \`\`\`

Your site will be live at `https://yourproject.vercel.app`

### Alternative: GitHub Pages

1. Build the project:
   \`\`\`bash
   npm run build
   \`\`\`

2. The `out/` folder contains your static site

3. Push to GitHub and enable GitHub Pages in settings

### Alternative: Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`

## 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎬 Performance & Quality

### Performance Metrics:
- **Lighthouse Score:** 95+ target (Performance)
- **Frame Rate:** Consistent 60 FPS across all animations
- **Bundle Size:** 152 KB (First Load) - Highly optimized
- **Build Time:** ~11 seconds
- **FCP:** < 1.5s (First Contentful Paint)
- **TTI:** < 3.5s (Time to Interactive)

### Optimizations Applied:
✅ GPU acceleration on all animations
✅ Code splitting (3D scene lazy loaded)
✅ Canvas optimization (max 200 particles)
✅ React Three Fiber performance best practices
✅ Framer Motion viewport optimization
✅ Font preloading (display: swap)
✅ CSS purging (Tailwind)
✅ Tree-shaken imports
✅ Static export for CDN delivery

### Visual Quality:
✅ 50+ unique animations
✅ 100+ interactive elements
✅ 30+ visual effects
✅ 3-layer cursor system
✅ Multi-layer background (3D + Canvas + CSS)
✅ Blur reveal typography
✅ Spring-based modals
✅ Shimmer hover effects
✅ Magnetic button interactions

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or have suggestions? Feel free to open an issue or submit a pull request.

## 📧 Contact

**Zain Sheikh**
- LinkedIn: [zainsheikh327](https://www.linkedin.com/in/zainsheikh327)
- Email: zainsheikh327@example.com
- Website: [zainsheikh.vercel.app](https://zainsheikh.vercel.app)

---

Built with 💙 using **Next.js**, **TypeScript**, and **Tailwind CSS**

⭐ Star this repo if you find it helpful!
