import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import './ContactPage.css'

function ContactPage() {
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

  return (
    <>
      <Navbar productItems={productItems} solutionItems={solutionItems} resourceItems={resourceItems} />
      
      <div className="contact-page">
        <div className="contact-split">
          {/* Left Side - Form */}
          <div className="contact-form-section">
            <div className="contact-form-content">
              <h1>See AI Fashion in action</h1>
              <p className="contact-subtitle">Curious how AI Fashion can help your fashion brand grow? Stunning images, lower costs, and faster time to market.</p>
              
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name <span className="required">*</span></label>
                    <input type="text" placeholder="Jane" />
                  </div>
                  <div className="form-group">
                    <label>Last Name <span className="required">*</span></label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Business email <span className="required">*</span></label>
                    <input type="email" placeholder="jane@brand.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="+1 555 123 4567" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Company type <span className="required">*</span></label>
                    <select>
                      <option>Select one...</option>
                      <option>Fashion Brand</option>
                      <option>E-commerce</option>
                      <option>Agency</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Number of SKUs <span className="required">*</span></label>
                    <select>
                      <option>Select one...</option>
                      <option>1-100</option>
                      <option>100-500</option>
                      <option>500-1000</option>
                      <option>1000+</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Tell us more about how you want to use AI Fashion</label>
                  <textarea placeholder="Tell us more about how you want to use AI Fashion" rows="4"></textarea>
                </div>

                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="contact-image-section">
            <div className="contact-image-overlay">
              <h2>Top fashion creative teams choose AI Fashion</h2>
              <div className="brand-logos">
                <span>PERRY ELLIS</span>
                <span>FOREVER 21</span>
                <span>JORDACHE</span>
                <span>RESERVED</span>
                <span>HICCUP</span>
                <span>TOBI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}

export default ContactPage
