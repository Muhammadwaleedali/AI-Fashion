import { useState } from 'react'
import ServiceModal from './ServiceModal'
import BeforeAfter from './BeforeAfter'
import { dummyImages } from './imageUtils'
import './App.css'

function Landing({ user, onSignOut, onGetStarted }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showServiceModal, setShowServiceModal] = useState(false)
  const [selectedService, setSelectedService] = useState('')

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
          <h2 className="logo">Fashion AI</h2>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#examples">Examples</a>
            {user && <span className="user-name">Hi, {user.name}</span>}
          </div>
          {user ? (
            <button className="btn-nav-dark" onClick={onSignOut}>Sign Out</button>
          ) : (
            <button className="btn-nav-dark" onClick={onGetStarted}>Try for free</button>
          )}
          <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section className="hero-botika">
        <div className="hero-content-botika">
          <h1>On-model fashion photography</h1>
          <p>Create high-quality product photos with AI models</p>
          <button className="btn-hero-dark" onClick={onGetStarted}>Try for free</button>
          <span className="hero-note">No credit card required</span>
        </div>
      </section>

      <section className="demo-section">
        <div className="demo-container">
          <div className="demo-header">
            <h2>See the transformation</h2>
            <p>Drag the slider to compare</p>
          </div>
          <BeforeAfter 
            before={dummyImages.before1}
            after={dummyImages.after1}
            label=""
          />
        </div>
      </section>

      <section className="how-works">
        <h2>How it works</h2>
        <div className="how-works-grid">
          <div className="how-step">
            <div className="step-num">1</div>
            <h3>Upload your product</h3>
            <p>Upload a photo of your garment on a flat surface or hanger</p>
          </div>
          <div className="how-step">
            <div className="step-num">2</div>
            <h3>Choose AI model</h3>
            <p>Select from hundreds of diverse AI models</p>
          </div>
          <div className="how-step">
            <div className="step-num">3</div>
            <h3>Get your photos</h3>
            <p>Download professional on-model photos in seconds</p>
          </div>
        </div>
      </section>

      <section className="features-simple" id="features">
        <h2>Why choose Fashion AI</h2>
        <div className="features-simple-container">
          <div className="feature-simple">
            <div className="feature-simple-icon">⚡</div>
            <h3>Lightning fast</h3>
            <p>Get professional photos in under 60 seconds</p>
          </div>
          <div className="feature-simple">
            <div className="feature-simple-icon">🌍</div>
            <h3>Diverse & inclusive</h3>
            <p>Hundreds of AI models representing all backgrounds</p>
          </div>
          <div className="feature-simple">
            <div className="feature-simple-icon">💰</div>
            <h3>Cost effective</h3>
            <p>No expensive photoshoots or model fees</p>
          </div>
          <div className="feature-simple">
            <div className="feature-simple-icon">📈</div>
            <h3>Boost sales</h3>
            <p>Increase conversions with professional imagery</p>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <h2>Perfect for</h2>
        <div className="use-cases-grid">
          <div className="use-case">
            <h3>🛍️ E-commerce brands</h3>
            <p>Create unlimited product variations without photoshoots</p>
          </div>
          <div className="use-case">
            <h3>👔 Fashion retailers</h3>
            <p>Show products on diverse models instantly</p>
          </div>
          <div className="use-case">
            <h3>📱 Marketplaces</h3>
            <p>Help sellers create professional listings</p>
          </div>
          <div className="use-case">
            <h3>🎨 Designers</h3>
            <p>Visualize designs on models before production</p>
          </div>
        </div>
      </section>

      <section className="examples-section" id="examples">
        <h2>Real results from real brands</h2>
        <p className="examples-subtitle">See how brands are using Fashion AI to create stunning product photography</p>
        <div className="examples-grid">
          <div className="example-item">
            <img src={dummyImages.gallery1} alt="Example 1" />
          </div>
          <div className="example-item">
            <img src={dummyImages.gallery2} alt="Example 2" />
          </div>
          <div className="example-item">
            <img src={dummyImages.gallery3} alt="Example 3" />
          </div>
          <div className="example-item">
            <img src={dummyImages.gallery4} alt="Example 4" />
          </div>
          <div className="example-item">
            <img src={dummyImages.gallery5} alt="Example 5" />
          </div>
          <div className="example-item">
            <img src={dummyImages.gallery6} alt="Example 6" />
          </div>
        </div>
      </section>

      <section className="testimonials-botika">
        <h2>Trusted by leading brands</h2>
        <div className="testimonials-botika-grid">
          <div className="testimonial-botika">
            <p>"Fashion AI has completely transformed our product photography workflow. We're creating 10x more content in half the time."</p></p>
            <div className="testimonial-author-botika">
              <strong>Sarah Chen</strong>
              <span>Head of E-commerce, Fashion Co</span>
            </div>
          </div>
          <div className="testimonial-botika">
            <p>"The AI models look incredibly realistic. Our conversion rate increased by 40% after switching to Fashion AI."</p></p>
            <div className="testimonial-author-botika">
              <strong>Michael Rodriguez</strong>
              <span>CEO, StyleHub</span>
            </div>
          </div>
          <div className="testimonial-botika">
            <p>"Best investment we made this year. No more expensive photoshoots, just instant professional results."</p>
            <div className="testimonial-author-botika">
              <strong>Emma Thompson</strong>
              <span>Founder, ChicBoutique</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-simple" id="pricing">
        <h2>Simple pricing</h2>
        <div className="pricing-simple-grid">
          <div className="pricing-simple-card">
            <h3>Starter</h3>
            <div className="price-simple">
              <span className="amount-simple">$49</span>
              <span className="period-simple">/month</span>
            </div>
            <ul>
              <li>100 images/month</li>
              <li>All AI models</li>
              <li>HD quality</li>
            </ul>
            <button className="btn-pricing-simple">Get started</button>
          </div>
          <div className="pricing-simple-card featured-simple">
            <div className="popular-badge">POPULAR</div>
            <h3>Professional</h3>
            <div className="price-simple">
              <span className="amount-simple">$149</span>
              <span className="period-simple">/month</span>
            </div>
            <ul>
              <li>500 images/month</li>
              <li>All AI models</li>
              <li>4K quality</li>
              <li>Priority support</li>
            </ul>
            <button className="btn-pricing-simple-dark">Get started</button>
          </div>
          <div className="pricing-simple-card">
            <h3>Enterprise</h3>
            <div className="price-simple">
              <span className="amount-simple">Custom</span>
            </div>
            <ul>
              <li>Unlimited images</li>
              <li>Custom models</li>
              <li>8K quality</li>
              <li>Dedicated support</li>
            </ul>
            <button className="btn-pricing-simple">Contact us</button>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently asked questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What types of garments work best?</h3>
            <p>All types of clothing work great - tops, dresses, pants, jackets, and more. Just upload a clear photo.</p>
          </div>
          <div className="faq-item">
            <h3>How realistic are the AI models?</h3>
            <p>Our AI models are photorealistic and indistinguishable from real photography.</p>
          </div>
          <div className="faq-item">
            <h3>Can I use the photos commercially?</h3>
            <p>Yes! You have full commercial rights to all generated images.</p>
          </div>
          <div className="faq-item">
            <h3>How long does it take?</h3>
            <p>Most images are ready in under 60 seconds.</p>
          </div>
          <div className="faq-item">
            <h3>What image formats do you support?</h3>
            <p>We support JPG, PNG, and WEBP formats up to 20MB.</p>
          </div>
          <div className="faq-item">
            <h3>Can I cancel anytime?</h3>
            <p>Yes, you can cancel your subscription at any time with no penalties.</p>
          </div>
        </div>
      </section>

      <section className="cta-simple">
        <h2>Ready to get started?</h2>
        <p>Create professional product photos in seconds</p>
        <button className="btn-cta-dark" onClick={onGetStarted}>Try for free</button>
      </section>

      <footer className="footer-simple">
        <div className="footer-simple-content">
          <div className="footer-simple-section">
            <h3>Fashion AI</h3>
            <p>AI fashion photography</p>
          </div>
          <div className="footer-simple-section">
            <h4>Product</h4>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Examples</a>
          </div>
          <div className="footer-simple-section">
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="footer-simple-bottom">
          <p>© 2024 Fashion AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing
