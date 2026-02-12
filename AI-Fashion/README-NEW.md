# Fashion AI - Botika-Inspired Platform

> Professional AI-powered fashion photography platform with virtual try-on technology

![React](https://img.shields.io/badge/React-19.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.3.1-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 Botika-Inspired Design
- **Purple gradient theme** - Professional color scheme
- **Clean, minimal aesthetic** - Modern UI/UX
- **Fully responsive** - Works on all devices

### 🚀 Interactive Components
- **Before/After Slider** - Compare product vs AI model images
- **AI Model Selector** - Browse 100+ diverse models
- **Animated Counters** - Engaging statistics
- **Real Image Gallery** - Professional fashion photography

### 💼 Business Features
- **Pricing Plans** - Three-tier structure
- **Testimonials** - Customer success stories
- **Services Showcase** - 11 AI-powered tools
- **Trust Signals** - Stats, reviews, guarantees

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
http://localhost:5173
```

## 📁 Project Structure

```
src/
├── BeforeAfter.jsx          # Image comparison slider
├── ModelSelector.jsx        # AI model browser
├── AnimatedCounter.jsx      # Statistics counter
├── Landing.jsx              # Main landing page
├── ServiceModal.jsx         # Service details modal
├── SignIn.jsx / SignUp.jsx  # Authentication
├── imageUtils.js            # Image management
└── *.css                    # Component styles

public/
└── images/                  # Static images

Docs/
├── QUICKSTART.md           # 5-minute setup guide
├── FEATURES.md             # Detailed features
├── VISUAL-GUIDE.md         # Component guide
├── COMPARISON.md           # Before/after analysis
├── DEPLOYMENT.md           # Production deployment
├── TROUBLESHOOTING.md      # Common issues
└── SUMMARY.md              # Complete overview
```

## 🎯 What's New?

### Design Transformation
✅ Purple gradient theme (#8b5cf6, #6366f1)  
✅ Light, airy backgrounds  
✅ Modern button styles  
✅ Professional card designs  
✅ Clean typography  

### New Components
✅ Interactive before/after image slider  
✅ AI model selection interface  
✅ Animated statistics counters  
✅ Customer testimonials section  
✅ Professional pricing page  
✅ Features highlight cards  

### Enhanced Sections
✅ Hero with gradient backgrounds  
✅ Real fashion photography gallery  
✅ 4-step "How It Works" process  
✅ Trust-building elements  
✅ Clear call-to-actions  

## 📸 Using Your Own Images

Edit `src/imageUtils.js`:

```javascript
export const dummyImages = {
  before1: '/images/your-product.jpg',
  after1: '/images/your-model.jpg',
  // ... add more
}
```

Or use external URLs:
```javascript
before1: 'https://your-cdn.com/image.jpg'
```

## 🎨 Customization

### Change Colors
```css
/* src/index.css */
:root {
  --primary: #8b5cf6;    /* Your brand color */
  --secondary: #6366f1;  /* Accent color */
}
```

### Update Content
```javascript
// src/Landing.jsx
- Pricing plans (line ~180)
- Testimonials (line ~220)
- Services (line ~140)
- Contact info (line ~280)
```

### Add Models
```javascript
// src/ModelSelector.jsx
const models = [
  { id: 0, name: 'Your Model', ... },
  // Add more
]
```

## 📱 Responsive Design

- **Desktop** (1280px+) - Full layout
- **Tablet** (768px-1279px) - 2-column grid
- **Mobile** (<768px) - Single column

All components adapt automatically!

## 🛠️ Tech Stack

- **React 19.2** - UI framework
- **Vite 7.3** - Build tool
- **CSS3** - Styling (Grid, Flexbox, Custom Properties)
- **Unsplash API** - Placeholder images

## 📚 Documentation

| File | Description |
|------|-------------|
| [QUICKSTART.md](./QUICKSTART.md) | Get started in 5 minutes |
| [FEATURES.md](./FEATURES.md) | Detailed feature docs |
| [VISUAL-GUIDE.md](./VISUAL-GUIDE.md) | Component visual guide |
| [COMPARISON.md](./COMPARISON.md) | Before/after analysis |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Deploy to production |
| [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) | Fix common issues |
| [SUMMARY.md](./SUMMARY.md) | Complete overview |

## 🎯 Key Features Comparison

| Feature | Botika | This Project |
|---------|--------|--------------|
| Before/After Slider | ✅ | ✅ |
| AI Model Diversity | ✅ | ✅ |
| Purple Theme | ✅ | ✅ |
| Testimonials | ✅ | ✅ |
| Pricing Page | ✅ | ✅ |
| Interactive Elements | ✅ | ✅ |
| Professional Design | ✅ | ✅ |
| Responsive Layout | ✅ | ✅ |

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to netlify.com
```

### GitHub Pages
```bash
npm run build
# Upload dist/ contents to gh-pages branch
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 🐛 Troubleshooting

Common issues:

1. **Images not loading** → Check `imageUtils.js` URLs
2. **Slider not working** → Verify CSS is imported
3. **Build errors** → Run `npm install` again
4. **Styling issues** → Check CSS file imports

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for more help.

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Check code quality
```

## 🎉 What You Get

✅ Professional Botika-inspired design  
✅ 8 new interactive components  
✅ Complete documentation (7 guides)  
✅ Responsive on all devices  
✅ Production-ready code  
✅ Easy customization  
✅ Performance optimized  
✅ SEO-friendly structure  

## 🔄 Next Steps

1. ✅ Run `npm run dev` to see it live
2. ✅ Replace dummy images with yours
3. ✅ Customize colors and content
4. ✅ Connect to your AI backend
5. ✅ Deploy to production

## 📄 License

MIT License - Free to use for your projects!

## 🤝 Contributing

Feel free to customize and improve!

---

**Built with ❤️ using React + Vite**  
**Inspired by Botika.com's professional design**

---

## 📞 Support

Having issues? Check:
1. [TROUBLESHOOTING.md](./TROUBLESHOOTING.md)
2. [QUICKSTART.md](./QUICKSTART.md)
3. Console errors (F12)

---

**Your professional AI fashion platform is ready! 🚀**
