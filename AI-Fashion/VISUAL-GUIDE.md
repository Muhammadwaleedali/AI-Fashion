# 🎨 Component Visual Guide

## Interactive Components

### 1. BeforeAfter Slider
```
┌─────────────────────────────────────┐
│  Before          │         After    │
│                  │                  │
│  [Product]       │    [On Model]   │
│                  │                  │
│                  ◉                  │  ← Drag this
│                  │                  │
└─────────────────────────────────────┘

Usage:
<BeforeAfter 
  before="/images/product.jpg"
  after="/images/model.jpg"
  label="T-Shirt Transformation"
/>
```

### 2. Model Selector
```
┌──────────────────┬──────────────────┐
│                  │  ┌────┐  ┌────┐  │
│   [Preview]      │  │ 👤 │  │ 👤 │  │
│                  │  └────┘  └────┘  │
│   Large Model    │  Emma    Aisha   │
│   Display        │                  │
│                  │  ┌────┐  ┌────┐  │
│   [Details]      │  │ 👤 │  │ 👤 │  │
│   - Ethnicity    │  └────┘  └────┘  │
│   - Age          │  Yuki    Sofia   │
│   - Body Type    │                  │
└──────────────────┴──────────────────┘

Click any model to preview
```

### 3. Animated Counter
```
Stats Section:
┌─────────────────────────────────────┐
│  10,000+        1,000,000+          │
│  Active Users   Images Generated    │
│                                     │
│  Numbers count up when scrolled     │
│  into view! ✨                      │
└─────────────────────────────────────┘
```

---

## Section Layout

### Hero Section
```
┌─────────────────────────────────────┐
│                                     │
│     AI-Powered Fashion Photography  │
│                                     │
│   Create professional product       │
│   images with virtual models        │
│                                     │
│   [Get Started]  [Watch Demo]       │
│                                     │
│   ● ━━━ ○ ○  (Slider indicators)   │
└─────────────────────────────────────┘
Light gradient background
```

### Before/After Showcase
```
┌─────────────────────────────────────┐
│     AI TRANSFORMATION               │
│     See The Magic In Action         │
│                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐      │
│  │ B|A  │  │ B|A  │  │ B|A  │      │
│  │ ◉    │  │ ◉    │  │ ◉    │      │
│  └──────┘  └──────┘  └──────┘      │
│  T-Shirt   Dress     Jacket         │
└─────────────────────────────────────┘
3 interactive sliders
```

### Features Highlight
```
┌─────────────────────────────────────┐
│  ┌────────┐  ┌────────┐             │
│  │   ⚡   │  │   🎨   │             │
│  │ Instant│  │Diverse │             │
│  │Results │  │Models  │             │
│  └────────┘  └────────┘             │
│                                     │
│  ┌────────┐  ┌────────┐             │
│  │   💰   │  │   🔄   │             │
│  │  Cost  │  │Unlimited│            │
│  │Effective│ │Variations│           │
│  └────────┘  └────────┘             │
└─────────────────────────────────────┘
4 benefit cards
```

### Services Grid
```
┌─────────────────────────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐      │
│  │ 🎯   │  │ ✨   │  │ 👔   │      │
│  │      │  │      │  │      │      │
│  │Title │  │Title │  │Title │      │
│  │Desc  │  │Desc  │  │Desc  │      │
│  │[Try] │  │[Try] │  │[Try] │      │
│  └──────┘  └──────┘  └──────┘      │
│                                     │
│  (11 service cards total)           │
└─────────────────────────────────────┘
```

### Gallery
```
┌─────────────────────────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐      │
│  │[IMG] │  │[IMG] │  │[IMG] │      │
│  │      │  │      │  │      │      │
│  │Hover │  │Hover │  │Hover │      │
│  │Info  │  │Info  │  │Info  │      │
│  └──────┘  └──────┘  └──────┘      │
│                                     │
│  (6 fashion images)                 │
└─────────────────────────────────────┘
Real images from Unsplash
```

### Testimonials
```
┌─────────────────────────────────────┐
│  ┌──────────┐  ┌──────────┐         │
│  │ ⭐⭐⭐⭐⭐ │  │ ⭐⭐⭐⭐⭐ │         │
│  │          │  │          │         │
│  │ "Quote"  │  │ "Quote"  │         │
│  │          │  │          │         │
│  │ - Name   │  │ - Name   │         │
│  │   Title  │  │   Title  │         │
│  └──────────┘  └──────────┘         │
└─────────────────────────────────────┘
3 customer reviews
```

### Pricing
```
┌─────────────────────────────────────┐
│  ┌────────┐  ┌────────┐  ┌────────┐ │
│  │Starter │  │  Pro   │  │Enterprise│
│  │        │  │POPULAR!│  │        │ │
│  │  $29   │  │  $99   │  │ Custom │ │
│  │ /month │  │ /month │  │        │ │
│  │        │  │        │  │        │ │
│  │✓ 100   │  │✓ 500   │  │✓ Unlim │ │
│  │✓ 10    │  │✓ 50+   │  │✓ 100+  │ │
│  │✓ Basic │  │✓ Premium│ │✓ Custom│ │
│  │        │  │        │  │        │ │
│  │[Start] │  │[Start] │  │[Contact]│ │
│  └────────┘  └────────┘  └────────┘ │
└─────────────────────────────────────┘
3 pricing tiers
```

### How It Works
```
┌─────────────────────────────────────┐
│  ┌────┐    ┌────┐    ┌────┐         │
│  │ 01 │    │ 02 │    │ 03 │         │
│  │ 📤 │    │ 🎯 │    │ ✨ │         │
│  │Upload│  │Select│  │Process│      │
│  └────┘    └────┘    └────┘         │
│                                     │
│  ┌────┐                             │
│  │ 04 │                             │
│  │ ⬇️ │                             │
│  │Download│                         │
│  └────┘                             │
└─────────────────────────────────────┘
4-step process
```

---

## Color Usage

### Primary Actions
```css
background: linear-gradient(135deg, #8b5cf6, #6366f1);
color: white;
```
Used for: Main CTAs, featured elements

### Secondary Actions
```css
background: white;
border: 2px solid #e2e8f0;
color: #8b5cf6;
```
Used for: Secondary buttons, cards

### Backgrounds
```css
/* Light sections */
background: #f8fafc;

/* Feature highlights */
background: linear-gradient(135deg, #faf5ff, #f3e8ff);
```

---

## Spacing System

```
Small:   0.5rem (8px)
Medium:  1rem   (16px)
Large:   2rem   (32px)
XLarge:  4rem   (64px)

Section padding: 7rem 2rem (112px 32px)
Card padding:    2.5rem    (40px)
```

---

## Typography Scale

```
Hero Title:      3.8rem (60.8px) - Bold
Section Title:   2.8rem (44.8px) - Bold
Card Title:      1.5rem (24px)   - Bold
Body Text:       1rem   (16px)   - Regular
Small Text:      0.9rem (14.4px) - Regular
```

---

## Responsive Breakpoints

```
Mobile:  < 768px
Tablet:  768px - 1279px
Desktop: 1280px+

Grid adjustments:
Desktop: 3 columns
Tablet:  2 columns
Mobile:  1 column
```

---

## Animation Timings

```
Hover transitions:  0.3s
Slide animations:   0.4s
Counter animation:  2s
Page transitions:   0.5s
```

---

## Component Props

### BeforeAfter
```javascript
<BeforeAfter 
  before={string}  // Image URL
  after={string}   // Image URL
  label={string}   // Optional label
/>
```

### AnimatedCounter
```javascript
<AnimatedCounter 
  end={number}     // Final number
  duration={2000}  // Animation duration (ms)
  suffix={string}  // Optional suffix (e.g., "+")
/>
```

### ModelSelector
```javascript
<ModelSelector />
// No props - self-contained
```

---

## File Structure

```
src/
├── components/
│   ├── BeforeAfter.jsx       # Image slider
│   ├── ModelSelector.jsx     # Model browser
│   └── AnimatedCounter.jsx   # Stats counter
│
├── styles/
│   ├── BeforeAfter.css
│   ├── ModelSelector.css
│   └── index.css             # Global styles
│
├── utils/
│   └── imageUtils.js         # Image URLs
│
└── pages/
    └── Landing.jsx           # Main page
```

---

## Quick Customization

### Change Primary Color
```css
/* index.css */
:root {
  --primary: #YOUR_COLOR;
}
```

### Add New Model
```javascript
// ModelSelector.jsx
const models = [
  ...existing,
  { 
    id: 6, 
    name: 'New Model',
    ethnicity: 'Type',
    age: '25-30',
    bodyType: 'Type'
  }
]
```

### Update Pricing
```javascript
// Landing.jsx - pricing section
<div className="price">
  <span className="amount">YOUR_PRICE</span>
</div>
```

---

**This visual guide helps you understand and customize each component!** 🎨
