import { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import '../../styles/Mannequin.css'

function Mannequin() {
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

  const carouselImages = [
    'https://picsum.photos/seed/mannequin1/200/280',
    'https://picsum.photos/seed/mannequin2/200/280',
    'https://picsum.photos/seed/mannequin3/200/280',
    'https://picsum.photos/seed/mannequin4/200/280',
    'https://picsum.photos/seed/mannequin5/200/280',
  ]

  const scrollCarousel = (direction) => {
    if (direction === 'left') {
      setCarouselIndex((carouselIndex - 1 + carouselImages.length) % carouselImages.length)
    } else {
      setCarouselIndex((carouselIndex + 1) % carouselImages.length)
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
      <div className="mannequin-page">
      {/* Hero Section */}
      <section className="mannequin-hero">
        <div className="mannequin-hero-content">
          <div className="mannequin-hero-text">
            <h1>Invisible mannequin effect with AI</h1>
            <p>Remove mannequins from your product photos automatically. Create the ghost mannequin effect that shows garment shape without visible support.</p>
            <div className="mannequin-hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Book a Call</button>
            </div>
          </div>
          <div className="mannequin-hero-image">
            <img src="https://picsum.photos/seed/mannequinhero/500/600" alt="Mannequin Effect" className="main-image" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mannequin-how-section">
        <div className="mannequin-section-header">
          <h2>How the invisible mannequin effect works</h2>
          <p>Transform mannequin photos into professional ghost mannequin images that showcase your products perfectly.</p>
        </div>

        <div className="mannequin-steps">
          {/* Step 01 */}
          <div className="mannequin-step">
            <div className="mannequin-step-text">
              <div className="mannequin-step-number">01</div>
              <h3>Upload mannequin photos</h3>
              <p>Start with photos of your garments on mannequins or models.</p>
            </div>
            <div className="mannequin-step-image">
              <img src="https://picsum.photos/seed/mannequinstep1/300/350" alt="Upload" />
            </div>
          </div>

          {/* Step 02 */}
          <div className="mannequin-step reverse">
            <div className="mannequin-step-image">
              <img src="https://picsum.photos/seed/mannequinstep2/300/350" alt="Process" />
            </div>
            <div className="mannequin-step-text">
              <div className="mannequin-step-number">02</div>
              <h3>AI removes the mannequin</h3>
              <p>Our AI automatically detects and removes the mannequin while preserving garment shape.</p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="mannequin-step">
            <div className="mannequin-step-text">
              <div className="mannequin-step-number">03</div>
              <h3>Get professional results</h3>
              <p>Download your ghost mannequin images ready for your product pages.</p>
            </div>
            <div className="mannequin-step-image">
              <img src="https://picsum.photos/seed/mannequinstep3/300/350" alt="Result" />
            </div>
          </div>
        </div>

        <div className="mannequin-result-header">
          <span className="mannequin-result-label">Result</span>
          <h2>Professional ghost mannequin images</h2>
          <p>Get clean, professional product photos that highlight garment shape and details without distractions.</p>
        </div>
      </section>

      {/* Carousel */}
      <section className="mannequin-carousel-section">
        <h2>See the invisible mannequin effect in action</h2>
        <p>See how brands create professional product photos with Fashion AI.</p>
        <div className="mannequin-carousel-container">
          <div className="mannequin-carousel-track">
            {carouselImages.map((img, index) => (
              <div 
                key={index} 
                className="mannequin-carousel-card"
                style={{ opacity: getCardOpacity(index) }}
              >
                <img src={img} alt={`Example ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="mannequin-carousel-nav">
          <button onClick={() => scrollCarousel('left')}>‹</button>
          <button onClick={() => scrollCarousel('right')}>›</button>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="mannequin-stats-banner">
        <h3>Benefits of ghost mannequin photography</h3>
        <div className="mannequin-stats-row">
          <div className="mannequin-stat">
            <div className="mannequin-stat-number">90%</div>
            <div className="mannequin-stat-label">Faster than traditional editing</div>
          </div>
          <div className="mannequin-stat">
            <div className="mannequin-stat-number">100%</div>
            <div className="mannequin-stat-label">Consistent product presentation</div>
          </div>
          <div className="mannequin-stat">
            <div className="mannequin-stat-number">-80%</div>
            <div className="mannequin-stat-label">Reduction in editing costs</div>
          </div>
        </div>
      </section>

      {/* Transform CTA */}
      <section className="mannequin-transform-cta">
        <h2>Create professional ghost mannequin images in minutes</h2>
        <div className="mannequin-cta-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Book a Call</button>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}

export default Mannequin
