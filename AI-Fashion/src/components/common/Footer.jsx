import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="botika-footer">
      <div className="botika-footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">A</span>
            <span className="logo-text">AI FASHION</span>
          </div>
          <p className="footer-description">
            AI Fashion utilizes Generative AI to enhance online fashion stores by introducing AI-generated models and unlimited professional fashion photos. This technology helps retailers engage customers, expand into new markets, and improve conversion rates.
          </p>
        </div>
        
        <div className="footer-links-section">
          <div className="footer-links-group">
            <a href="#">About us</a>
            <a href="#">Help center</a>
            <a href="#">Blog</a>
          </div>
          
          <div className="footer-links-group">
            <a href="#">Contact us</a>
            <div className="footer-social">
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaLinkedin /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2026 AI Fashion, all rights reserved. | Terms of service | Privacy policy | Your Privacy Choices</p>
      </div>
    </footer>
  )
}

export default Footer
