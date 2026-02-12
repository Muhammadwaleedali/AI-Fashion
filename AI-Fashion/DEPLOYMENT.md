# 🚀 Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Option 2: Netlify
```bash
# Build
npm run build

# Drag & drop 'dist' folder to netlify.com
```

### Option 3: GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## Pre-Deployment Checklist

### 1. Replace Dummy Content
- [ ] Update image URLs in `src/imageUtils.js`
- [ ] Change company info in footer
- [ ] Update contact details
- [ ] Modify pricing plans
- [ ] Add real testimonials

### 2. Environment Setup
- [ ] Create `.env` file for API keys
- [ ] Set up image hosting (Cloudinary, AWS S3)
- [ ] Configure analytics (Google Analytics)

### 3. Performance
- [ ] Optimize images (compress, WebP format)
- [ ] Enable lazy loading
- [ ] Minify CSS/JS (automatic with Vite)
- [ ] Test loading speed

### 4. SEO
- [ ] Add meta tags in `index.html`
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Set up Open Graph tags

---

## Configuration Files

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change if deploying to subdirectory
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
```

### .env (Create this file)
```env
VITE_API_URL=your_api_url
VITE_IMAGE_CDN=your_cdn_url
```

---

## Custom Domain Setup

### Vercel
1. Go to project settings
2. Add custom domain
3. Update DNS records
4. Wait for SSL certificate

### Netlify
1. Domain settings
2. Add custom domain
3. Configure DNS
4. Enable HTTPS

---

## Performance Optimization

### Image Optimization
```javascript
// Use next-gen formats
<img src="image.webp" alt="..." />

// Add loading attribute
<img loading="lazy" src="..." />

// Use srcset for responsive
<img 
  srcset="small.jpg 480w, large.jpg 1080w"
  sizes="(max-width: 600px) 480px, 1080px"
/>
```

### Code Splitting
```javascript
// Lazy load components
const ServiceModal = lazy(() => import('./ServiceModal'))
```

---

## Analytics Setup

### Google Analytics
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

---

## SEO Optimization

### index.html Updates
```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <title>Fashion AI - AI-Powered Fashion Photography</title>
  <meta name="description" content="Create professional fashion photos with AI models. Transform product images instantly." />
  <meta name="keywords" content="AI fashion, virtual try-on, fashion photography, AI models" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Fashion AI" />
  <meta property="og:description" content="AI-Powered Fashion Photography" />
  <meta property="og:image" content="/og-image.jpg" />
  <meta property="og:url" content="https://yoursite.com" />
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Fashion AI" />
  <meta name="twitter:description" content="AI-Powered Fashion Photography" />
  <meta name="twitter:image" content="/twitter-image.jpg" />
</head>
```

---

## Monitoring

### Error Tracking
```bash
# Install Sentry
npm install @sentry/react

# Configure in main.jsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
});
```

### Performance Monitoring
- Google PageSpeed Insights
- Lighthouse CI
- Web Vitals

---

## Backup & Version Control

### Git Setup
```bash
git init
git add .
git commit -m "Initial commit - Botika-inspired design"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

---

## Post-Deployment

### Test Everything
- [ ] All links work
- [ ] Images load correctly
- [ ] Forms submit properly
- [ ] Mobile responsive
- [ ] Cross-browser compatible

### Monitor
- [ ] Check analytics daily
- [ ] Monitor error logs
- [ ] Track conversion rates
- [ ] Gather user feedback

---

## Maintenance Schedule

### Daily
- Check error logs
- Monitor uptime

### Weekly
- Review analytics
- Update content
- Check performance

### Monthly
- Update dependencies
- Security audit
- Backup database

---

## Troubleshooting

### Images Not Loading
```javascript
// Check image paths
// Use absolute URLs or CDN
const imageUrl = import.meta.env.VITE_IMAGE_CDN + '/image.jpg'
```

### Build Errors
```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install

# Rebuild
npm run build
```

### Slow Performance
- Optimize images
- Enable caching
- Use CDN
- Minimize bundle size

---

## Support Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Vercel Support](https://vercel.com/support)
- [Netlify Docs](https://docs.netlify.com)

---

**Your site is ready to go live! 🎉**

Remember to:
1. Test thoroughly
2. Monitor performance
3. Gather feedback
4. Iterate and improve
