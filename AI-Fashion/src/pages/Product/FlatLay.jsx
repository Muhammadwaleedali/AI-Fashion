import { useState } from 'react'
import '../../styles/FlatLay.css'

function FlatLay() {
  const [carouselIndex, setCarouselIndex] = useState(2)

  const carouselPairs = [
    { flat: 'https://picsum.photos/seed/flat_a/130/160', model: 'https://picsum.photos/seed/model_a/170/260' },
    { flat: 'https://picsum.photos/seed/flat_b/130/160', model: 'https://picsum.photos/seed/model_b/170/260' },
    { flat: 'https://picsum.photos/seed/flat_c/130/160', model: 'https://picsum.photos/seed/model_c/170/260' },
    { flat: 'https://picsum.photos/seed/flat_d/130/160', model: 'https://picsum.photos/seed/model_d/170/260' },
    { flat: 'https://picsum.photos/seed/flat_e/130/160', model: 'https://picsum.photos/seed/model_e/170/260' },
  ]

  const scrollCarousel = (direction) => {
    if (direction === 'left') {
      setCarouselIndex((carouselIndex - 1 + carouselPairs.length) % carouselPairs.length)
    } else {
      setCarouselIndex((carouselIndex + 1) % carouselPairs.length)
    }
  }

  const getCardStyle = (index) => {
    const distance = Math.abs(index - carouselIndex)
    if (distance === 0) return { opacity: 1, transform: 'scale(1)' }
    if (distance === 1) return { opacity: 0.6, transform: 'scale(0.9)' }
    return { opacity: 0.3, transform: 'scale(0.85)' }
  }

  return (
    <div className="flat-lay-page">
      {/* Hero Section */}
      <section className="flat-hero">
        <div className="flat-hero-content">
          <div className="flat-hero-text">
            <h1>Bring flat lay photos to life</h1>
            <p>Stuck with only flat lay photos? Now you can turn them into on model images in minutes. Show more angles, more looks & more ways to wear.</p>
            <div className="flat-hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Book a Call</button>
            </div>
          </div>
          <div className="flat-hero-grid">
            <img src="https://picsum.photos/seed/flatshirt/175/175" alt="Flat Shirt" />
            <img src="https://picsum.photos/seed/modelshirt/175/175" alt="Model Shirt" />
            <img src="https://picsum.photos/seed/flatshorts/175/175" alt="Flat Shorts" />
            <img src="https://picsum.photos/seed/modelshorts/175/175" alt="Model Shorts" />
          </div>
        </div>
      </section>

      {/* How To Section */}
      <section className="flat-how-section">
        <div className="flat-section-header">
          <h2>How to bring flat lay photos to life</h2>
          <p>Bring your designs to life on a model in minutes. Garments remain flawless in every texture and pattern while Fashion AI turns flat lays into true-to-life visuals.</p>
        </div>

        <div className="flat-steps">
          {/* Step 01 */}
          <div className="flat-step">
            <div className="flat-step-text">
              <div className="flat-step-number">01</div>
              <h3>Upload your flat lay photos</h3>
              <p>Upload your flat lay photos to start transforming it into on model content.</p>
            </div>
            <div className="flat-step-image">
              <div className="flat-upload-card">
                <div className="flat-card-header">Fashion AI | Projects | Create | Pricing</div>
                <div className="flat-card-tabs">
                  <span>Select Product</span>
                  <span>Select Model</span>
                  <span>Change Background</span>
                  <span>C...</span>
                </div>
                <div className="flat-upload-preview">
                  <img src="https://picsum.photos/seed/flatshirtui/240/140" alt="Upload" />
                  <div className="flat-upload-button">+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 02 */}
          <div className="flat-step reverse">
            <div className="flat-step-image">
              <div className="flat-model-grid">
                <img src="https://picsum.photos/seed/male1/90/110" alt="Model 1" />
                <img src="https://picsum.photos/seed/female1/90/110" alt="Model 2" />
                <img src="https://picsum.photos/seed/female2/90/110" alt="Model 3" />
                <img src="https://picsum.photos/seed/female3/90/110" alt="Model 4" />
                <img src="https://picsum.photos/seed/male2/90/110" alt="Model 5" />
                <img src="https://picsum.photos/seed/male3/90/110" alt="Model 6" />
              </div>
            </div>
            <div className="flat-step-text">
              <div className="flat-step-number">02</div>
              <h3>Pick Your Model</h3>
              <p>Pick one of Fashion AI's models to bring your flat lay photos to life.</p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="flat-step">
            <div className="flat-step-text">
              <div className="flat-step-number">03</div>
              <h3>Choose a Pose</h3>
              <p>Style your look with the perfect pose. Body shape options launching soon.</p>
            </div>
            <div className="flat-step-image">
              <div className="flat-pose-row">
                <img src="https://picsum.photos/seed/pose1/90/160" alt="Pose 1" />
                <img src="https://picsum.photos/seed/pose2/90/160" alt="Pose 2" />
                <img src="https://picsum.photos/seed/pose3/90/160" alt="Pose 3" />
              </div>
            </div>
          </div>

          {/* Step 04 */}
          <div className="flat-step reverse">
            <div className="flat-step-image">
              <div className="flat-bg-row">
                <img src="https://picsum.photos/seed/bgbeach/90/110" alt="Beach" />
                <img src="https://picsum.photos/seed/bgarchitecture/90/110" alt="Architecture" />
                <img src="https://picsum.photos/seed/bgpalms/90/110" alt="Palms" />
              </div>
            </div>
            <div className="flat-step-text">
              <div className="flat-step-number">04</div>
              <h3>Pick your background</h3>
              <p>Choose a background that highlights your new on model image.</p>
            </div>
          </div>
        </div>

        <div className="flat-result-header">
          <span className="flat-result-label">Result</span>
          <h2>Voila, meet your finished images</h2>
          <p>Bring your designs to life on a model in minutes. Garments remain flawless in every texture and pattern while Fashion AI turns flat lays into true-to-life visuals.</p>
        </div>
      </section>

      {/* Fan Photos */}
      <section className="flat-fan-section">
        <div className="flat-fan-photos">
          <img src="https://picsum.photos/seed/result1/200/290" alt="Result 1" className="flat-fan-left" />
          <img src="https://picsum.photos/seed/result2/200/290" alt="Result 2" className="flat-fan-center" />
          <img src="https://picsum.photos/seed/result3/200/290" alt="Result 3" className="flat-fan-right" />
        </div>
      </section>

      {/* Carousel */}
      <section className="flat-carousel-section">
        <h2>Flat lay photos, reimagined</h2>
        <p>See how our clients turn flat lays into full looks with Fashion AI.</p>
        <div className="flat-carousel-container">
          <div className="flat-carousel-track">
            {carouselPairs.map((pair, index) => (
              <div 
                key={index} 
                className="flat-carousel-pair"
                style={getCardStyle(index)}
              >
                <img src={pair.flat} alt={`Flat ${index + 1}`} className="flat-carousel-flat" />
                <img src={pair.model} alt={`Model ${index + 1}`} className="flat-carousel-model" />
              </div>
            ))}
          </div>
        </div>
        <div className="flat-carousel-nav">
          <button onClick={() => scrollCarousel('left')}>‹</button>
          <button onClick={() => scrollCarousel('right')}>›</button>
        </div>
      </section>

      {/* Studio Banner */}
      <section className="flat-studio-banner">
        <div className="flat-studio-text">
          <h2>Fashion AI is your own personal fashion studio</h2>
          <p>Snap, upload and get stunning, realistic photos and videos in minutes.</p>
          <div className="flat-studio-buttons">
            <button className="btn-light">Get Started</button>
            <button className="btn-dark">Book a Call</button>
          </div>
        </div>
        <div className="flat-studio-image">
          <img src="https://picsum.photos/seed/studiobanner/780/520" alt="Studio" />
        </div>
      </section>

      {/* Transform CTA */}
      <section className="flat-transform-cta">
        <h2>Transform photoshoots and get flawless results in no time</h2>
        <div className="flat-cta-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Book a Call</button>
        </div>
      </section>
    </div>
  )
}

export default FlatLay
