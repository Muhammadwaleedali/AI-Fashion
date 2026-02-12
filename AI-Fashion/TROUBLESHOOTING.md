# 🔧 Troubleshooting Guide

## Common Issues & Solutions

### 1. Images Not Loading

**Problem:** Placeholder images or broken image icons

**Solutions:**
```javascript
// Option A: Check image URLs in imageUtils.js
export const dummyImages = {
  before1: 'https://valid-url.com/image.jpg', // ✅ Valid URL
}

// Option B: Use local images
before1: '/images/product.jpg', // Place in public/images/

// Option C: Check CORS
// If using external images, ensure CORS is enabled
```

**Quick Fix:**
```bash
# Create images folder
mkdir public\images

# Add your images there
# Reference as: /images/your-image.jpg
```

---

### 2. Before/After Slider Not Working

**Problem:** Slider doesn't move or respond

**Check:**
1. Images are loaded
2. No console errors
3. Component is imported correctly

**Solution:**
```javascript
// Landing.jsx
import BeforeAfter from './BeforeAfter' // ✅ Correct
import './BeforeAfter.css' // ✅ Don't forget CSS

// Usage
<BeforeAfter 
  before={dummyImages.before1}  // ✅ Valid image
  after={dummyImages.after1}    // ✅ Valid image
/>
```

---

### 3. Animated Counter Not Animating

**Problem:** Numbers appear instantly without animation

**Cause:** Intersection Observer not triggering

**Solution:**
```javascript
// Check if component is visible
// Scroll to stats section to trigger

// Or adjust threshold in AnimatedCounter.jsx
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      setIsVisible(true)
    }
  },
  { threshold: 0.3 } // ✅ Lower threshold (was 0.5)
)
```

---

### 4. Model Selector Not Updating

**Problem:** Clicking models doesn't change preview

**Check:**
```javascript
// ModelSelector.jsx
const [selectedModel, setSelectedModel] = useState(0) // ✅ State exists

// Click handler
onClick={() => setSelectedModel(model.id)} // ✅ Updates state

// Active class
className={`model-card ${selectedModel === model.id ? 'active' : ''}`}
```

---

### 5. Styling Issues

**Problem:** Components look broken or unstyled

**Solutions:**

```bash
# Check if CSS files are imported
# In Landing.jsx:
import './App.css'
import BeforeAfter from './BeforeAfter'
import './BeforeAfter.css' # ✅ Import CSS

# Check CSS file paths
# Make sure files exist in src/
```

**CSS Not Loading:**
```javascript
// main.jsx - ensure index.css is imported
import './index.css' // ✅ Global styles
```

---

### 6. Build Errors

**Problem:** `npm run build` fails

**Common Errors:**

#### Error: "Cannot find module"
```bash
# Solution: Install dependencies
npm install

# Or clean install
rm -rf node_modules
rm package-lock.json
npm install
```

#### Error: "Unexpected token"
```javascript
// Check for syntax errors
// Common issues:
- Missing closing brackets
- Incorrect JSX syntax
- Missing imports
```

#### Error: "Module not found: Can't resolve"
```javascript
// Check import paths
import BeforeAfter from './BeforeAfter' // ✅ Correct
import BeforeAfter from './beforeAfter' // ❌ Case sensitive!
```

---

### 7. Development Server Issues

**Problem:** `npm run dev` doesn't start

**Solutions:**

```bash
# Port already in use
# Kill process on port 5173
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or use different port
# vite.config.js
export default defineConfig({
  server: {
    port: 3000
  }
})
```

**Problem:** Changes not reflecting

```bash
# Clear cache
npm run dev -- --force

# Or restart server
Ctrl+C
npm run dev
```

---

### 8. Mobile Responsiveness Issues

**Problem:** Layout breaks on mobile

**Check:**
```css
/* index.css - ensure media queries exist */
@media (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr; /* ✅ Single column */
  }
}
```

**Test:**
```
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different screen sizes
```

---

### 9. Performance Issues

**Problem:** Site loads slowly

**Solutions:**

```javascript
// 1. Optimize images
// Use WebP format
// Compress images (TinyPNG, Squoosh)

// 2. Lazy load images
<img loading="lazy" src="..." />

// 3. Code splitting
const ServiceModal = lazy(() => import('./ServiceModal'))
```

**Check Performance:**
```
1. Open DevTools
2. Lighthouse tab
3. Run audit
4. Fix issues
```

---

### 10. Console Errors

#### "Warning: Each child should have unique key"
```javascript
// Solution: Add key prop
{models.map((model) => (
  <div key={model.id}> {/* ✅ Unique key */}
    ...
  </div>
))}
```

#### "Cannot read property of undefined"
```javascript
// Solution: Add optional chaining
const name = user?.name // ✅ Safe
const name = user.name  // ❌ May error
```

#### "Maximum update depth exceeded"
```javascript
// Problem: Infinite loop in useEffect
useEffect(() => {
  setState(value) // ❌ Missing dependency
}, []) // ✅ Add dependency or remove setState
```

---

### 11. Deployment Issues

**Problem:** Site works locally but not in production

**Check:**

```javascript
// 1. Environment variables
// Create .env file
VITE_API_URL=your_url

// Access in code
const apiUrl = import.meta.env.VITE_API_URL

// 2. Base path
// vite.config.js
export default defineConfig({
  base: '/', // ✅ For root domain
  base: '/subfolder/', // ✅ For subdirectory
})

// 3. Build output
npm run build
# Check dist/ folder exists
# Upload dist/ contents to server
```

---

### 12. Image CORS Errors

**Problem:** "Access to image blocked by CORS policy"

**Solutions:**

```javascript
// Option 1: Use proxy
// vite.config.js
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://external-api.com'
    }
  }
})

// Option 2: Use CORS-enabled images
// Unsplash, Cloudinary, etc.

// Option 3: Host images yourself
// Place in public/images/
```

---

### 13. State Not Updating

**Problem:** Component doesn't re-render

**Check:**

```javascript
// ❌ Wrong: Mutating state
const [items, setItems] = useState([])
items.push(newItem) // ❌ Don't mutate

// ✅ Correct: Create new array
setItems([...items, newItem]) // ✅ New reference

// ❌ Wrong: Mutating object
user.name = 'New Name' // ❌ Don't mutate

// ✅ Correct: Create new object
setUser({ ...user, name: 'New Name' }) // ✅ New reference
```

---

### 14. CSS Not Applying

**Problem:** Styles don't show up

**Check:**

```css
/* 1. Specificity */
.button { } /* ❌ Low specificity */
.btn-primary { } /* ✅ More specific */

/* 2. Order matters */
/* Later rules override earlier ones */

/* 3. !important (use sparingly) */
color: red !important;

/* 4. Check class names */
<div className="btn-primary"> {/* ✅ className in React */}
<div class="btn-primary"> {/* ❌ Wrong in React */}
```

---

### 15. Hover Effects Not Working

**Problem:** Hover styles don't apply

**Check:**

```css
/* ✅ Correct syntax */
.card:hover {
  transform: translateY(-5px);
}

/* ❌ Common mistakes */
.card :hover { } /* ❌ Space before :hover */
.card.hover { } /* ❌ Missing colon */
```

**Mobile Note:**
```
Hover effects don't work on touch devices
Consider adding active states:
.card:active { }
```

---

## Debug Checklist

When something doesn't work:

1. ✅ Check browser console for errors
2. ✅ Verify all imports are correct
3. ✅ Ensure CSS files are imported
4. ✅ Check file paths (case-sensitive!)
5. ✅ Verify state is updating
6. ✅ Test in different browsers
7. ✅ Clear cache and restart server
8. ✅ Check network tab for failed requests
9. ✅ Verify image URLs are valid
10. ✅ Test on different screen sizes

---

## Getting Help

### Check Documentation
- `QUICKSTART.md` - Setup issues
- `FEATURES.md` - Feature questions
- `VISUAL-GUIDE.md` - Component usage
- `DEPLOYMENT.md` - Deploy problems

### Debug Tools
```javascript
// Add console logs
console.log('State:', state)
console.log('Props:', props)

// React DevTools
// Install browser extension
// Inspect component state/props

// Network tab
// Check if images/API calls succeed
```

### Common Commands
```bash
# Clear everything and restart
rm -rf node_modules
rm package-lock.json
npm install
npm run dev

# Check for errors
npm run lint

# Build for production
npm run build
```

---

## Still Having Issues?

1. **Check Console** - Look for error messages
2. **Read Error** - Error messages usually tell you what's wrong
3. **Google It** - Search the exact error message
4. **Check Docs** - Review documentation files
5. **Start Fresh** - Sometimes a clean install helps

---

**Most issues are simple fixes! Don't panic, debug systematically.** 🔧
