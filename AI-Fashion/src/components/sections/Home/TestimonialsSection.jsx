import { dummyImages } from '../../../utils/imageUtils'
import './TestimonialsSection.css'

function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-badge">TESTIMONIALS</span>
        <h2 className="testimonials-title">Trusted By Leading Brands</h2>
        <p className="testimonials-subtitle">See what our customers say about us</p>
      </div>
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={dummyImages.testimonial1} alt="Customer" />
          </div>
          <p className="testimonial-quote">"AI Fashion transformed our workflow. 10x more content in half the time."</p>
          <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <div className="testimonial-author">Sarah Chen</div>
          <div className="testimonial-company">Fashion Co</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={dummyImages.testimonial2} alt="Customer" />
          </div>
          <p className="testimonial-quote">"Conversion rate increased by 40% after switching to AI Fashion."</p>
          <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <div className="testimonial-author">Michael Rodriguez</div>
          <div className="testimonial-company">StyleHub</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-image">
            <img src={dummyImages.testimonial3} alt="Customer" />
          </div>
          <p className="testimonial-quote">"Best investment. No more expensive photoshoots."</p>
          <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
          <div className="testimonial-author">Emma Thompson</div>
          <div className="testimonial-company">ChicBoutique</div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
