import { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import '../../styles/OnModel.css'

function OnModel() {
  const [carouselIndex, setCarouselIndex] = useState(2)

  const productItems = [
    { key: 'model-gallery', label: 'Model gallery' },
    { key: 'on-model', label: 'On model' },
    { key: 'flat-lay', label: 'Flat lay' },
    { key: 'mannequin', label: 'Mannequin' },
    { key: 'video', label: 'Video' },
  ]

  const solutionItems = [
    { key: 'cut-costs', label: 'Cut production costs' },
    { key: 'market-faster', label: 'Get to market faster' },
    { key: 'editorials', label: 'Create editorials' },
    { key: 'diversity', label: 'Increase diversity' },
  ]

  const resourceItems = [
    { key: 'help-center', label: 'Help center' },
    { key: 'blog', label: 'Blog' },
    { key: 'case-studies', label: 'Case studies' },
    { key: 'faqs', label: 'FAQs' },
  ]

  const carouselImages = [
    { src: 'https://picsum.photos/seed/carousel1/140/200', size: 'small' },
    { src: 'https://picsum.photos/seed/carousel2/170/250', size: 'medium' },
    { src: 'https://picsum.photos/seed/carousel3/230/320', size: 'large' },
    { src: 'https://picsum.photos/seed/carousel4/170/250', size: 'medium' },
    { src: 'https://picsum.photos/seed/carousel5/140/200', size: 'small' },
  ]

  const scrollCarousel = (direction) => {
    if (direction === 'left' && carouselIndex > 0) {
      setCarouselIndex(carouselIndex - 1)
    } else if (direction === 'right' && carouselIndex < carouselImages.length - 1) {
      setCarouselIndex(carouselIndex + 1)
    }
  }

  return (
    <div className="on-model-page">
      <Navbar productItems={productItems} solutionItems={solutionItems} resourceItems={resourceItems} />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>On model has never been easier</h1>
            <p>Say goodbye to costly shoots. Generate stunningly realistic on model imagery that's fast, flexible, and made for fashion brands.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Book a Call</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://picsum.photos/seed/yellowdress/500/380" alt="Fashion Model" className="main-image" />
            <img src="https://picsum.photos/seed/yellowdress2/180/220" alt="Model Detail" className="inset-image" />
          </div>
        </div>
      </section>

      {/* Simplified Section */}
      <section className="simplified-section">
        <div className="section-header">
          <h2>On model, simplified</h2>
          <p>Pose and size stay the same for maximum on model accuracy. Upgrade/swap models and backgrounds for one product or your whole collection.</p>
        </div>

        <div className="steps-container">
          {/* Step 01 */}
          <div className="step-row">
            <div className="step-text">
              <div className="step-number">01</div>
              <h3>Upload your product photo</h3>
              <p>Start with an on model photo; professional, casual, cropped or headless.</p>
            </div>
            <div className="step-image">
              <div className="upload-card">
                <div className="card-header">Fashion AI | Projects | Create | Pricing</div>
                <div className="card-tabs">
                  <span>Select Product</span>
                  <span>Select Model</span>
                  <span>Change Background</span>
                  <span>C...</span>
                </div>
                <div className="upload-preview">
                  <img src="https://picsum.photos/seed/upload1/260/160" alt="Upload" />
                  <div className="upload-button">+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="step-row reverse">
            <div className="step-image">
              <div className="model-grid">
                <img src="https://picsum.photos/seed/male1/110/130" alt="Model 1" />
                <img src="https://picsum.photos/seed/female1/110/130" alt="Model 2" />
                <img src="https://picsum.photos/seed/female2/110/130" alt="Model 3" />
                <img src="https://picsum.photos/seed/female3/110/130" alt="Model 4" />
                <img src="https://picsum.photos/seed/male2/110/130" alt="Model 5" />
                <img src="https://picsum.photos/seed/male3/110/130" alt="Model 6" />
              </div>
            </div>
            <div className="step-text">
              <div className="step-number">02</div>
              <h3>Pick Your Model</h3>
              <p>Pick one of our stylish, runway-caliber AI models.</p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="step-row">
            <div className="step-text">
              <div className="step-number">03</div>
              <h3>Pick your background</h3>
              <p>Go clean, bold or on-location; it's your call.</p>
            </div>
            <div className="step-image">
              <div className="background-row">
                <img src="https://picsum.photos/seed/beach/65/90" alt="Beach" />
                <img src="https://picsum.photos/seed/architecture/65/90" alt="Architecture" />
                <img src="https://picsum.photos/seed/palmtrees/65/90" alt="Palm Trees" />
                <img src="https://picsum.photos/seed/citystreet/65/90" alt="City" />
              </div>
            </div>
          </div>
        </div>

        <div className="result-header">
          <span className="result-label">Result</span>
          <h2>Voila, meet your finished images</h2>
          <p>Get your final, ready-to-use visuals in just a click. Perfect for product pages, campaigns or social.</p>
        </div>
      </section>

      {/* Fan Photos Section */}
      <section className="fan-section">
        <div className="fan-photos">
          <img src="https://picsum.photos/seed/fan1/200/280" alt="Fan 1" className="fan-left" />
          <img src="https://picsum.photos/seed/fan2/200/280" alt="Fan 2" className="fan-center" />
          <img src="https://picsum.photos/seed/fan3/200/280" alt="Fan 3" className="fan-right" />
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section">
        <h2>See on model fashion in action</h2>
        <p>See how brands are using Fashion AI to upgrade their on model images in minutes.</p>
        <div className="carousel-container">
          <div className="carousel-track" style={{ transform: `translateX(-${carouselIndex * 200}px)` }}>
            {carouselImages.map((img, index) => (
              <div 
                key={index} 
                className={`carousel-card ${img.size} ${index === carouselIndex ? 'active' : ''}`}
                style={{ opacity: Math.abs(index - carouselIndex) === 0 ? 1 : Math.abs(index - carouselIndex) === 1 ? 0.5 : 0.25 }}
              >
                <img src={img.src} alt={`Carousel ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="carousel-nav">
          <button onClick={() => scrollCarousel('left')}>‹</button>
          <button onClick={() => scrollCarousel('right')}>›</button>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="stats-banner">
        <h3>Advantages to cutting production costs with Fashion AI</h3>
        <div className="stats-row">
          <div className="stat">
            <div className="stat-number">+30%</div>
            <div className="stat-label">In add-to-cart through rates</div>
          </div>
          <div className="stat">
            <div className="stat-number">10x</div>
            <div className="stat-label">Faster time to market</div>
          </div>
          <div className="stat">
            <div className="stat-number">-90%</div>
            <div className="stat-label">Visual production costs</div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section">
        <div className="brand-logo">BLVCK<span>paris</span></div>
        <p className="testimonial-quote">
          "Amazing app. The models are very realistic, the solution is quick and easy to use and the team is very fast at helping with any questions we had so far. Most impressive app I have seen on Shopify App Store in a long time."
        </p>
        <div className="testimonial-author">
          <strong>Shelli Cohen</strong>
          <span>Head of Growth, BLVCK</span>
        </div>
      </section>

      {/* Studio Banner */}
      <section className="studio-banner">
        <div className="studio-text">
          <h2>Fashion AI is your own personal fashion studio</h2>
          <p>Snap, upload and get stunning, realistic photos and videos in minutes.</p>
          <div className="studio-buttons">
            <button className="btn-light">Get Started</button>
            <button className="btn-dark">Book a Call</button>
          </div>
        </div>
        <div className="studio-image">
          <img src="https://picsum.photos/seed/studiobanner/780/520" alt="Studio" />
        </div>
      </section>

      {/* Transform CTA */}
      <section className="transform-cta">
        <h2>Transform photoshoots and get flawless results in no time</h2>
        <div className="cta-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Book a Call</button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default OnModel
