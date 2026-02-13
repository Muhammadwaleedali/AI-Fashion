import { dummyImages } from '../../../utils/imageUtils'
import { FaShoppingCart, FaPalette, FaBox, FaBolt, FaInstagram, FaChartBar } from 'react-icons/fa'

function IntegrationSection() {
  return (
    <section className="fashion-integration">
      <div className="fashion-section-header">
        <span className="fashion-badge-pill">INTEGRATIONS</span>
        <h2>Seamless Integration</h2>
        <p className="fashion-section-desc">Connect with your favorite tools and platforms</p>
      </div>
      <div className="fashion-integration-grid">
        <div className="fashion-integration-item">
          <div className="fashion-integration-image">
            <img src={dummyImages.integration1} alt="Shopify" />
          </div>
          <div className="fashion-integration-icon"><FaShoppingCart /></div>
          <h3>Shopify</h3>
          <p>Direct integration with your Shopify store. Auto-sync products and images.</p>
        </div>
        <div className="fashion-integration-item">
          <div className="fashion-integration-image">
            <img src={dummyImages.integration2} alt="Figma" />
          </div>
          <div className="fashion-integration-icon"><FaPalette /></div>
          <h3>Figma</h3>
          <p>Design workflow integration. Export directly to your design files.</p>
        </div>
        <div className="fashion-integration-item">
          <div className="fashion-integration-image">
            <img src={dummyImages.integration3} alt="WooCommerce" />
          </div>
          <div className="fashion-integration-icon"><FaBox /></div>
          <h3>WooCommerce</h3>
          <p>WordPress e-commerce plugin. One-click product photo generation.</p>
        </div>
        <div className="fashion-integration-item">
          <div className="fashion-integration-image">
            <img src={dummyImages.integration4} alt="API" />
          </div>
          <div className="fashion-integration-icon"><FaBolt /></div>
          <h3>API Access</h3>
          <p>Custom integration options. RESTful API with comprehensive documentation.</p>
        </div>
        <div className="fashion-integration-item">
          <div className="fashion-integration-image">
            <img src={dummyImages.integration5} alt="Instagram" />
          </div>
          <div className="fashion-integration-icon"><FaInstagram /></div>
          <h3>Instagram</h3>
          <p>Social media integration. Post directly to your Instagram business account.</p>
        </div>
        <div className="fashion-integration-item">
          <div className="fashion-integration-image">
            <img src={dummyImages.integration6} alt="Analytics" />
          </div>
          <div className="fashion-integration-icon"><FaChartBar /></div>
          <h3>Analytics</h3>
          <p>Track performance metrics. See which images drive the most conversions.</p>
        </div>
      </div>
    </section>
  )
}

export default IntegrationSection
