import { useState, useEffect } from 'react'
import { dummyImages } from '../../../utils/imageUtils'
import './HeroSection.css'

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  const heroImages = [
    dummyImages.after1,
    dummyImages.after2,
    dummyImages.after3,
    dummyImages.gallery1,
    dummyImages.gallery2,
    dummyImages.gallery3
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="botika-hero">
      <div className="botika-hero-container">
        <div className="botika-hero-content">
          <h1 className="botika-hero-title">
            AI generated models<br />
            trusted by world-class<br />
            fashion brands
          </h1>
          <p className="botika-hero-subtitle">
            AI Fashion helps leading brands create authentic, on-brand imagery at scale,<br />
            giving teams creative freedom, consistency and full control.
          </p>
          <div className="botika-hero-buttons">
            <button className="btn-get-started">Get Started</button>
            <button className="btn-book-call">Book a Call</button>
          </div>
        </div>
        <div className="botika-hero-image">
          <div className="hero-image-slider">
            {heroImages.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`AI Fashion Model ${idx + 1}`}
                className={idx === currentImage ? 'active' : ''}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
