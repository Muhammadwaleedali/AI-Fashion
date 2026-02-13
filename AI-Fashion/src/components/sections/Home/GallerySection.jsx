import { useState, useEffect } from 'react'
import { dummyImages } from '../../../utils/imageUtils'

function GallerySection() {
  const [currentGallery, setCurrentGallery] = useState(0)

  const galleryImages = [
    dummyImages.gallery1,
    dummyImages.gallery2,
    dummyImages.gallery3,
    dummyImages.gallery4,
    dummyImages.gallery5,
    dummyImages.gallery6,
    dummyImages.gallery7,
    dummyImages.gallery8
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGallery((prev) => (prev + 1) % galleryImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="fashion-examples" id="examples">
      <div className="fashion-section-header">
        <span className="fashion-badge-pill">GALLERY</span>
        <h2>Stunning Results</h2>
        <p className="fashion-section-desc">See the quality of AI-generated fashion photography</p>
      </div>
      <div className="fashion-examples-single">
        <div className="fashion-example-slideshow">
          {galleryImages.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`Example ${idx + 1}`}
              className={idx === currentGallery ? 'active' : ''}
            />
          ))}
        </div>
        <div className="fashion-gallery-indicators">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              className={`fashion-indicator ${idx === currentGallery ? 'active' : ''}`}
              onClick={() => setCurrentGallery(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
