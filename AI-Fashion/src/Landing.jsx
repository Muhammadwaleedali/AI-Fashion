import { useState, useEffect } from 'react'
import ServiceModal from './ServiceModal'
import BeforeAfter from './BeforeAfter'
import ModelSelector from './ModelSelector'
import AnimatedCounter from './AnimatedCounter'
import { dummyImages } from './imageUtils'
import './App.css'

function Landing({ user, onSignOut, onGetStarted }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  
  const slides = [
    {
      title: "On-model fashion photography",
      subtitle: "Create high-quality product photos with AI models in seconds",
      bg: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)"
    },
    {
      title: "Diverse & Inclusive Models",
      subtitle: "Choose from hundreds of AI models representing all backgrounds",
      bg: "linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%)"
    },
    {
      title: "Professional Results Instantly",
      subtitle: "No photoshoots, no models, just stunning product images",
      bg: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const handleServiceClick = (serviceName) => {
    setSelectedService(serviceName)
    setShowServiceModal(true)
  }

  return (
    <div className="landing-page">
      <ServiceModal
        isOpen={showServiceModal}
        onClose={() => setShowServiceModal(false)}
        serviceName={selectedService}
      />
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">FASHION AI</h2>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
            {user && <span className="user-name">Hi, {user.name}</span>}
          </div>
          {user ? (
            <button className="btn-nav" onClick={onSignOut}>Sign Out</button>
          ) : (
            <button className="btn-nav" onClick={onGetStarted}>Get Started</button>
          )}
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section className="hero" style={{ background: slides[currentSlide].bg }}>
        <div className="hero-overlay" id="home"></div>
        <div className="hero-layout">
          <div className="hero-content">
            <h1 className="hero-title-main">On-model fashion photography</h1>
            <p className="hero-subtitle-main">Create high-quality product photos with AI models</p>
            <div className="hero-buttons">
              <button className="btn-hero-primary" onClick={onGetStarted}>Try for free</button>
            </div>
            <p className="hero-note">No credit card required</p>
          </div>
          <div className="hero-image">
            <img src={dummyImages.after1} alt="AI Fashion Model" />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3><AnimatedCounter end={10000} suffix="+" /></h3>
            <p>Active Users</p>
          </div>
          <div className="stat-item">
            <h3><AnimatedCounter end={1000000} suffix="+" /></h3>
            <p>Images Generated</p>
          </div>
          <div className="stat-item">
            <h3><AnimatedCounter end={99} suffix=".9%" /></h3>
            <p>Satisfaction Rate</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Support Available</p>
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <div className="section-header">
          <span className="section-badge">HOW IT WORKS</span>
          <h2 className="section-title">Transform Your Product Photos</h2>
          <p className="section-desc">See your garments on professional AI models in 3 simple steps</p>
        </div>
        <div className="showcase-grid">
          <BeforeAfter 
            before={dummyImages.before1}
            after={dummyImages.after1}
            label="Upload Your Product"
          />
          <BeforeAfter 
            before={dummyImages.before2}
            after={dummyImages.after2}
            label="AI Generates Model Photo"
          />
          <BeforeAfter 
            before={dummyImages.before3}
            after={dummyImages.after3}
            label="Download & Use"
          />
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <span className="section-badge">ABOUT US</span>
            <h2 className="section-title">Transforming Fashion with AI</h2>
            <p className="about-text">
              Create professional on-model fashion photography with AI. No photoshoots, no models, no hassle. Just upload your product and get stunning results in seconds.
            </p>
            <p className="about-text">
              Our AI technology generates realistic model photos featuring diverse body types, skin tones, and styles. Perfect for e-commerce brands looking to scale their visual content.
            </p>
            <div className="about-stats">
              <div className="stat-box">
                <h3>10K+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-box">
                <h3>1M+</h3>
                <p>Images Created</p>
              </div>
              <div className="stat-box">
                <h3>50+</h3>
                <p>Countries</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <span>🎨</span>
              <p>AI Fashion Technology</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-highlight">
        <div className="features-container">
          <div className="feature-box">
            <div className="feature-icon">⚡</div>
            <h3>Fast & Easy</h3>
            <p>Get professional model photos in under 60 seconds</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">🌍</div>
            <h3>Diverse Models</h3>
            <p>Hundreds of AI models representing all ethnicities and body types</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">💰</div>
            <h3>Save Money</h3>
            <p>No expensive photoshoots or model fees</p>
          </div>
          <div className="feature-box">
            <div className="feature-icon">📈</div>
            <h3>Boost Sales</h3>
            <p>Increase conversions with professional product imagery</p>
          </div>
        </div>
      </section>

      <ModelSelector />

      <section id="services" className="services-section">
        <div className="section-header">
          <span className="section-badge">SERVICES</span>
          <h2 className="section-title">Our AI-Powered Services</h2>
          <p className="section-desc">Complete suite of AI tools for fashion professionals</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>🎯</span>
              </div>
            </div>
            <h3>Background Remover</h3>
            <p>Easily remove backgrounds from images with AI precision in just one click</p>
            <button className="btn-service" onClick={() => handleServiceClick('Background Remover')}>Try Now</button>
          </div>
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>✨</span>
              </div>
            </div>
            <h3>Image Enhancer</h3>
            <p>Automatically enhance image quality, adjust brightness, and improve clarity</p>
            <button className="btn-service" onClick={() => handleServiceClick('Image Enhancer')}>Try Now</button>
          </div>
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>👔</span>
              </div>
            </div>
            <h3>Wrinkled to Ironed</h3>
            <p>Transform wrinkled clothes in photos into smooth, polished visuals instantly</p>
            <button className="btn-service" onClick={() => handleServiceClick('Wrinkled to Ironed')}>Try Now</button>
          </div>
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>🖼️</span>
              </div>
            </div>
            <h3>Background Remover & Centralized Image</h3>
            <p>Automatically remove image backgrounds and perfectly center your subject in one click</p>
            <button className="btn-service" onClick={() => handleServiceClick('Background Remover & Centralized Image')}>Try Now</button>
          </div>
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>🤖</span>
              </div>
            </div>
            <h3>AI Model Try-On</h3>
            <p>See how clothes look on AI models. Upload your garment and watch it come to life on virtual models</p>
            <button className="btn-service" onClick={() => handleServiceClick('AI Model Try-On')}>Try Now</button>
          </div>
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>👓</span>
              </div>
            </div>
            <h3>Try-On Gear</h3>
            <p>Try on glasses, watches, shoes, pants, shirts and more on your model with AI precision</p>
            <button className="btn-service" onClick={() => handleServiceClick('Try-On Gear')}>Try Now</button>
          </div>
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>📁</span>
              </div>
            </div>
            <h3>Folder Renamer</h3>
            <p>Upload entire folders, rename images automatically, and download as ZIP</p>
            <button className="btn-service" onClick={() => handleServiceClick('Folder Renamer')}>Try Now</button>
          </div>
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>🎨</span>
              </div>
            </div>
            <h3>Cloth Adjuster</h3>
            <p>Enhance and adjust clothing images with AI-powered processing</p>
            <button className="btn-service" onClick={() => handleServiceClick('Cloth Adjuster')}>Try Now</button>
          </div>
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>📸</span>
              </div>
            </div>
            <h3>Add Model</h3>
            <p>Upload and save model images to bryer_img folder with automatic processing</p>
            <button className="btn-service" onClick={() => handleServiceClick('Add Model')}>Try Now</button>
          </div>
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>🎭</span>
              </div>
            </div>
            <h3>Cloth Decorator</h3>
            <p>Transform and decorate your cloth images with AI-powered enhancements and beautiful effects</p>
            <button className="btn-service" onClick={() => handleServiceClick('Cloth Decorator')}>Try Now</button>
          </div>
          <div className="service-card">
            <div className="service-image">
              <div className="image-placeholder">
                <span>💎</span>
              </div>
            </div>
            <h3>Jewelry & Glasses Try-On</h3>
            <p>See how jewelry and glasses look on your model with our advanced virtual try-on technology. Upload your items and see them on any model instantly</p>
            <button className="btn-service" onClick={() => handleServiceClick('Jewelry & Glasses Try-On')}>Try Now</button>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="section-header">
          <span className="section-badge">RESULTS</span>
          <h2 className="section-title">Real Results From Real Brands</h2>
          <p className="section-desc">See how brands are using AI to create professional product photography</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-image">
              <img src={dummyImages.gallery1} alt="Fashion 1" />
              <div className="gallery-overlay">
                <h4>Summer Collection</h4>
                <p>AI Model Photography</p>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-image">
              <img src={dummyImages.gallery2} alt="Fashion 2" />
              <div className="gallery-overlay">
                <h4>Elegant Wear</h4>
                <p>Virtual Try-On</p>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-image">
              <img src={dummyImages.gallery3} alt="Fashion 3" />
              <div className="gallery-overlay">
                <h4>Casual Style</h4>
                <p>AI Generated</p>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-image">
              <img src={dummyImages.gallery4} alt="Fashion 4" />
              <div className="gallery-overlay">
                <h4>Accessories</h4>
                <p>Product Showcase</p>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-image">
              <img src={dummyImages.gallery5} alt="Fashion 5" />
              <div className="gallery-overlay">
                <h4>Footwear</h4>
                <p>AI Enhanced</p>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-image">
              <img src={dummyImages.gallery6} alt="Fashion 6" />
              <div className="gallery-overlay">
                <h4>Luxury Items</h4>
                <p>Professional Quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-header">
          <span className="section-badge">TESTIMONIALS</span>
          <h2 className="section-title">Loved By Fashion Brands</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Fashion AI transformed our product photography workflow. We now create 10x more content in half the time!"</p>
            <div className="testimonial-author">
              <strong>Sarah Johnson</strong>
              <span>CEO, StyleHub</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"The AI models look incredibly realistic. Our conversion rate increased by 35% after using Fashion AI."</p>
            <div className="testimonial-author">
              <strong>Michael Chen</strong>
              <span>Marketing Director, TrendWear</span>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="stars">⭐⭐⭐⭐⭐</div>
            <p>"Best investment we made this year. No more expensive photoshoots, just instant professional results."</p>
            <div className="testimonial-author">
              <strong>Emma Davis</strong>
              <span>Founder, ChicBoutique</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works">
        <div className="section-header">
          <span className="section-badge">PROCESS</span>
          <h2 className="section-title">How It Works</h2>
        </div>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">01</div>
            <div className="step-icon">📤</div>
            <h3>Upload Product</h3>
            <p>Upload your clothing item or product photo</p>
          </div>
          <div className="step">
            <div className="step-number">02</div>
            <div className="step-icon">🎯</div>
            <h3>Select AI Model</h3>
            <p>Choose from diverse AI models and poses</p>
          </div>
          <div className="step">
            <div className="step-number">03</div>
            <div className="step-icon">✨</div>
            <h3>AI Processing</h3>
            <p>Our AI generates professional images in seconds</p>
          </div>
          <div className="step">
            <div className="step-number">04</div>
            <div className="step-icon">⬇️</div>
            <h3>Download & Use</h3>
            <p>Get high-resolution images ready for your store</p>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="section-header">
          <span className="section-badge">PRICING</span>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-desc">Choose the plan that fits your needs</p>
        </div>
        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Starter</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">29</span>
                <span className="period">/month</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>✓ 100 AI-generated images/month</li>
              <li>✓ 10 AI models</li>
              <li>✓ Basic backgrounds</li>
              <li>✓ HD resolution</li>
              <li>✓ Email support</li>
            </ul>
            <button className="btn-pricing">Get Started</button>
          </div>
          <div className="pricing-card pricing-featured">
            <div className="featured-badge">MOST POPULAR</div>
            <div className="pricing-header">
              <h3>Professional</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">99</span>
                <span className="period">/month</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>✓ 500 AI-generated images/month</li>
              <li>✓ 50+ AI models</li>
              <li>✓ Premium backgrounds</li>
              <li>✓ 4K resolution</li>
              <li>✓ Priority support</li>
              <li>✓ API access</li>
            </ul>
            <button className="btn-pricing btn-pricing-featured">Get Started</button>
          </div>
          <div className="pricing-card">
            <div className="pricing-header">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="amount">Custom</span>
              </div>
            </div>
            <ul className="pricing-features">
              <li>✓ Unlimited images</li>
              <li>✓ 100+ AI models</li>
              <li>✓ Custom models</li>
              <li>✓ 8K resolution</li>
              <li>✓ Dedicated support</li>
              <li>✓ Custom integration</li>
            </ul>
            <button className="btn-pricing">Contact Sales</button>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Create Stunning Product Photos?</h2>
          <p>Start your free trial today - no credit card required</p>
          <button className="btn-cta" onClick={onGetStarted}>Start Free Trial</button>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="section-header">
          <span className="section-badge">CONTACT</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>contact@fashionai.com</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3>Address</h3>
              <p>123 Fashion Street, NY 10001</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FASHION AI</h3>
            <p>AI-powered fashion technology for modern brands</p>
          </div>
          <div className="footer-section">
            <h4>Product</h4>
            <a href="#">Services</a>
            <a href="#">API</a>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">Terms</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Fashion AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
