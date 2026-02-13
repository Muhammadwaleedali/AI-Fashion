import { FaBolt, FaGlobe, FaDollarSign, FaChartLine } from 'react-icons/fa'

function FeaturesSection() {
  return (
    <section className="fashion-features" id="features">
      <div className="fashion-section-header">
        <span className="fashion-badge-pill">SOLUTIONS</span>
        <h2>Everything You Need</h2>
        <p className="fashion-section-desc">Powerful features to transform your fashion business</p>
      </div>
      <div className="fashion-features-grid">
        <div className="fashion-feature">
          <div className="fashion-feature-icon-box">
            <div className="fashion-icon"><FaBolt /></div>
          </div>
          <h3>Lightning fast</h3>
          <p>Get professional photos in under 60 seconds</p>
        </div>
        <div className="fashion-feature">
          <div className="fashion-feature-icon-box">
            <div className="fashion-icon"><FaGlobe /></div>
          </div>
          <h3>Diverse & inclusive</h3>
          <p>Hundreds of AI models representing all backgrounds</p>
        </div>
        <div className="fashion-feature">
          <div className="fashion-feature-icon-box">
            <div className="fashion-icon"><FaDollarSign /></div>
          </div>
          <h3>Cost effective</h3>
          <p>No expensive photoshoots or model fees</p>
        </div>
        <div className="fashion-feature">
          <div className="fashion-feature-icon-box">
            <div className="fashion-icon"><FaChartLine /></div>
          </div>
          <h3>Boost sales</h3>
          <p>Increase conversions with professional imagery</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
