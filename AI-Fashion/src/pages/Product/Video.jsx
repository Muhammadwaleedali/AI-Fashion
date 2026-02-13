import { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import '../../styles/Video.css'

function Video() {
  const [carouselIndex, setCarouselIndex] = useState(2)

  const productItems = [
    { key: 'model-gallery', label: 'Model Gallery' },
    { key: 'on-model', label: 'On Model' },
    { key: 'flat-lay', label: 'Flat Lay' },
    { key: 'mannequin', label: 'Mannequin' },
    { key: 'video', label: 'Video' },
  ]

  const solutionItems = [
    { key: 'cut-costs', label: 'Cut Costs' },
    { key: 'market-faster', label: 'Market Faster' },
    { key: 'editorials', label: 'Editorials' },
    { key: 'diversity', label: 'Diversity' },
  ]

  const resourceItems = [
    { key: 'help-center', label: 'Help Center' },
    { key: 'blog', label: 'Blog' },
    { key: 'case-studies', label: 'Case Studies' },
    { key: 'faqs', label: 'FAQs' },
  ]

  const videoExamples = [
    'https://picsum.photos/seed/video1/300/400',
    'https://picsum.photos/seed/video2/300/400',
    'https://picsum.photos/seed/video3/300/400',
    'https://picsum.photos/seed/video4/300/400',
    'https://picsum.photos/seed/video5/300/400',
  ]

  const scrollCarousel = (direction) => {
    if (direction === 'left') {
      setCarouselIndex((carouselIndex - 1 + videoExamples.length) % videoExamples.length)
    } else {
      setCarouselIndex((carouselIndex + 1) % videoExamples.length)
    }
  }

  const getCardOpacity = (index) => {
    const distance = Math.abs(index - carouselIndex)
    if (distance === 0) return 1
    if (distance === 1) return 0.5
    return 0.25
  }

  return (
    <>
      <Navbar productItems={productItems} solutionItems={solutionItems} resourceItems={resourceItems} />
      <div className="video-page">
      {/* Hero Section */}
      <section className="video-hero">
        <div className="video-hero-content">
          <div className="video-hero-text">
            <h1>AI-generated fashion videos</h1>
            <p>Create dynamic video content with AI models showcasing your products. Perfect for social media, ads, and e-commerce platforms.</p>
            <div className="video-hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Book a Call</button>
            </div>
          </div>
          <div className="video-hero-image">
            <img src="https://picsum.photos/seed/videohero/500/600" alt="Video Content" className="main-image" />
            <div className="play-overlay">▶</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="video-how-section">
        <div className="video-section-header">
          <h2>How to create AI fashion videos</h2>
          <p>Transform static images into engaging video content that captures attention and drives conversions.</p>
        </div>

        <div className="video-steps">
          {/* Step 01 */}
          <div className="video-step">
            <div className="video-step-text">
              <div className="video-step-number">01</div>
              <h3>Upload your product images</h3>
              <p>Start with high-quality product photos or on-model images.</p>
            </div>
            <div className="video-step-image">
              <img src="https://picsum.photos/seed/videostep1/300/350" alt="Upload" />
            </div>
          </div>

          {/* Step 02 */}
          <div className="video-step reverse">
            <div className="video-step-image">
              <img src="https://picsum.photos/seed/videostep2/300/350" alt="Select Style" />
            </div>
            <div className="video-step-text">
              <div className="video-step-number">02</div>
              <h3>Choose video style</h3>
              <p>Select from various video templates and animation styles.</p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="video-step">
            <div className="video-step-text">
              <div className="video-step-number">03</div>
              <h3>AI generates your video</h3>
              <p>Our AI creates professional video content in minutes.</p>
            </div>
            <div className="video-step-image">
              <img src="https://picsum.photos/seed/videostep3/300/350" alt="Generate" />
            </div>
          </div>
        </div>

        <div className="video-result-header">
          <span className="video-result-label">Result</span>
          <h2>Professional fashion videos ready to share</h2>
          <p>Get engaging video content optimized for social media, ads, and your e-commerce store.</p>
        </div>
      </section>

      {/* Video Examples Carousel */}
      <section className="video-carousel-section">
        <h2>See AI fashion videos in action</h2>
        <p>Discover how brands create stunning video content with Fashion AI.</p>
        <div className="video-carousel-container">
          <div className="video-carousel-track">
            {videoExamples.map((img, index) => (
              <div 
                key={index} 
                className="video-carousel-card"
                style={{ opacity: getCardOpacity(index) }}
              >
                <img src={img} alt={`Video ${index + 1}`} />
                <div className="video-play-icon">▶</div>
              </div>
            ))}
          </div>
        </div>
        <div className="video-carousel-nav">
          <button onClick={() => scrollCarousel('left')}>‹</button>
          <button onClick={() => scrollCarousel('right')}>›</button>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="video-stats-banner">
        <h3>Why video content matters</h3>
        <div className="video-stats-row">
          <div className="video-stat">
            <div className="video-stat-number">80%</div>
            <div className="video-stat-label">Higher engagement than static images</div>
          </div>
          <div className="video-stat">
            <div className="video-stat-number">5x</div>
            <div className="video-stat-label">More likely to be shared</div>
          </div>
          <div className="video-stat">
            <div className="video-stat-number">+64%</div>
            <div className="video-stat-label">Increase in purchase intent</div>
          </div>
        </div>
      </section>

      {/* Studio Banner */}
      <section className="video-studio-banner">
        <div className="video-studio-text">
          <h2>Fashion AI is your video production studio</h2>
          <p>Create professional fashion videos without expensive equipment or production teams.</p>
          <div className="video-studio-buttons">
            <button className="btn-light">Get Started</button>
            <button className="btn-dark">Book a Call</button>
          </div>
        </div>
        <div className="video-studio-image">
          <img src="https://picsum.photos/seed/videostudio/780/520" alt="Studio" />
        </div>
      </section>

      {/* Transform CTA */}
      <section className="video-transform-cta">
        <h2>Start creating engaging fashion videos today</h2>
        <div className="video-cta-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Book a Call</button>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Video
