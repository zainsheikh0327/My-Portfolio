# 🚀 Quick Start Guide

Get your portfolio running in under 5 minutes!

## Prerequisites

- Node.js 18 or higher ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))
- A code editor (VS Code recommended)

## 1️⃣ Clone & Install

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/My-Portfolio.git
cd My-Portfolio

# Install dependencies
npm install
\`\`\`

## 2️⃣ Customize Your Content

### Personal Information
Edit `data/personal.ts`:
\`\`\`typescript
export const personal = {
  name: 'Your Name',
  title: 'Your Professional Title',
  tagline: 'Your tagline',
  bio: 'Your bio...',
  email: 'your@email.com',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  location: 'Your Location',
  resumeUrl: '/resume.pdf',
};
\`\`\`

### Skills
Edit `data/skills.ts` - Add your technical skills with proficiency levels (0-100).

### Projects
Edit `data/projects.ts` - Showcase your best work with descriptions, technologies, and links.

### Education
Edit `data/education.ts` - Add your degrees, certifications, and achievements.

## 3️⃣ Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 4️⃣ Test Production Build

\`\`\`bash
npm run build
\`\`\`

If successful, you'll see output in the `out/` folder.

## 5️⃣ Deploy to Vercel (Free)

### Option A: GitHub (Easiest)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy" - Done! 🎉

### Option B: CLI
\`\`\`bash
npm i -g vercel
vercel login
vercel --prod
\`\`\`

Your site will be live at `https://yourproject.vercel.app` in ~2 minutes!

## 6️⃣ Customize Colors (Optional)

Edit `tailwind.config.ts` to change the color scheme:
\`\`\`typescript
colors: {
  primary: {
    DEFAULT: '#00D9FF', // Change this!
    // ...
  },
}
\`\`\`

## 🎨 Color Scheme Ideas

Current: **Cyan Blue** (#00D9FF)

Try these:
- **Purple**: #A855F7
- **Pink**: #EC4899  
- **Green**: #10B981
- **Orange**: #F97316
- **Red**: #EF4444

## 📂 Project Structure

\`\`\`
My-Portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── sections/          # Main sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   └── Contact.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ...
├── data/                  # Content data
│   ├── personal.ts
│   ├── skills.ts
│   ├── projects.ts
│   └── education.ts
├── lib/                   # Utilities
└── public/               # Static assets
\`\`\`

## 🛠️ Available Scripts

\`\`\`bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Run production server (after build)
npm run lint       # Run ESLint
npm run export     # Build + export static files
\`\`\`

## 🎯 Next Steps

1. **Add Resume**: Place your PDF resume in `public/resume.pdf`
2. **Add Images**: Add project screenshots to `public/projects/`
3. **Customize Colors**: Change theme in `tailwind.config.ts`
4. **Add Analytics**: Set up Google Analytics or Vercel Analytics
5. **Custom Domain**: Connect your domain in Vercel dashboard

## 🐛 Troubleshooting

### Port 3000 already in use?
\`\`\`bash
npm run dev -- -p 3001  # Use port 3001 instead
\`\`\`

### Build errors?
\`\`\`bash
rm -rf node_modules .next out
npm install
npm run build
\`\`\`

### TypeScript errors?
Check that all data files are properly formatted and no required fields are missing.

## 💡 Pro Tips

1. **Test locally first** before deploying
2. **Keep data files updated** regularly
3. **Test on mobile** - use dev tools responsive mode
4. **Compress images** before adding to public folder
5. **Use TypeScript** - it catches errors before runtime

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

## 🆘 Need Help?

- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide
- Open an issue on GitHub
- Review Next.js documentation

---

**That's it!** Your portfolio is ready to impress. 🎉

Share it with:
- Potential employers
- On LinkedIn
- In your email signature
- On your GitHub profile

Good luck! 🚀







