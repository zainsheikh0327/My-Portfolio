# 🚀 Deployment Guide

Complete guide for deploying your portfolio to various platforms.

## Table of Contents
- [Vercel (Recommended)](#vercel-deployment)
- [Netlify](#netlify-deployment)
- [GitHub Pages](#github-pages-deployment)
- [Custom Domain Setup](#custom-domain-setup)
- [Environment Variables](#environment-variables)

---

## Vercel Deployment

Vercel is the recommended platform for Next.js applications.

### Method 1: Vercel Dashboard (Easiest)

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes at `https://yourproject.vercel.app`

### Method 2: Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Navigate to project directory
cd My-Portfolio

# Deploy to production
vercel --prod
\`\`\`

### Configuration

Create `vercel.json` (already included):
\`\`\`json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs"
}
\`\`\`

---

## Netlify Deployment

### Method 1: Netlify Dashboard

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository

3. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Click "Deploy site"

### Method 2: Netlify CLI

\`\`\`bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy --prod --dir=out
\`\`\`

### Configuration

Create `netlify.toml`:
\`\`\`toml
[build]
  command = "npm run build"
  publish = "out"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

---

## GitHub Pages Deployment

### Prerequisites
- GitHub repository must be public (for free tier)

### Steps

1. **Install gh-pages package:**
   \`\`\`bash
   npm install --save-dev gh-pages
   \`\`\`

2. **Update package.json:**
   \`\`\`json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d out"
     },
     "homepage": "https://yourusername.github.io/My-Portfolio"
   }
   \`\`\`

3. **Deploy:**
   \`\`\`bash
   npm run deploy
   \`\`\`

4. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/` (root)
   - Save

Your site will be live at `https://yourusername.github.io/My-Portfolio`

### Update next.config.ts for GitHub Pages:
\`\`\`typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/My-Portfolio', // Your repo name
  images: {
    unoptimized: true,
  },
};
\`\`\`

---

## Custom Domain Setup

### Vercel

1. **Add Domain:**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `zainsheikh.com`)

2. **Configure DNS:**
   Add these records at your domain provider:
   \`\`\`
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   \`\`\`

### Netlify

1. **Add Domain:**
   - Site Settings → Domain Management → Add custom domain

2. **Configure DNS:**
   \`\`\`
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: yoursite.netlify.app
   \`\`\`

### GitHub Pages

1. **Add Custom Domain:**
   - Repository Settings → Pages → Custom domain
   - Enter your domain (e.g., `zainsheikh.com`)

2. **Create CNAME file:**
   \`\`\`bash
   echo "zainsheikh.com" > public/CNAME
   \`\`\`

3. **Configure DNS:**
   \`\`\`
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: yourusername.github.io
   \`\`\`

---

## Environment Variables

If you add API integrations (e.g., contact form), configure environment variables:

### Vercel
\`\`\`bash
vercel env add VARIABLE_NAME
\`\`\`
Or via Dashboard: Project Settings → Environment Variables

### Netlify
Dashboard: Site Settings → Environment Variables

### Local Development
Create `.env.local`:
\`\`\`env
NEXT_PUBLIC_API_KEY=your_key_here
\`\`\`

---

## SSL/HTTPS

All platforms automatically provide free SSL certificates:
- ✅ Vercel: Auto SSL via Let's Encrypt
- ✅ Netlify: Auto SSL via Let's Encrypt  
- ✅ GitHub Pages: Auto SSL for custom domains

---

## Troubleshooting

### Build Fails
\`\`\`bash
# Clear cache and reinstall
rm -rf node_modules .next out
npm install
npm run build
\`\`\`

### 404 Errors
- Ensure `output: 'export'` in `next.config.ts`
- Check all internal links use relative paths

### Images Not Loading
- Verify `images: { unoptimized: true }` in config
- Use absolute paths for public assets

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records with [whatsmydns.net](https://whatsmydns.net)

---

## Performance Optimization

After deployment:

1. **Test Performance:**
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)

2. **Enable Caching:**
   - Vercel/Netlify handle this automatically

3. **Compress Assets:**
   - Next.js auto-compresses during build

4. **Monitor:**
   - Vercel Analytics (free tier)
   - Google Analytics

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All links work
- [ ] Forms submit successfully
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Analytics installed
- [ ] SEO metadata correct
- [ ] Social media cards working

---

## Support

Need help? 
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [answers.netlify.com](https://answers.netlify.com)
- GitHub Pages: [docs.github.com/pages](https://docs.github.com/en/pages)

---

🎉 **Congratulations!** Your portfolio is now live!

Remember to:
- Share your new portfolio on LinkedIn
- Update your resume with the live URL
- Add it to your GitHub profile README











