import BeforeAfter from '../../BeforeAfter'
import { dummyImages } from '../../../utils/imageUtils'
import { FaBrain, FaBolt, FaBullseye } from 'react-icons/fa'

function DemoSection() {
  return (
    <section className="fashion-demo" id="demo">
      <div className="fashion-demo-header">
        <span className="fashion-badge-pill">TECHNOLOGY</span>
        <h2>AI-Powered Transformation</h2>
        <p className="fashion-demo-subtitle">Watch your products come to life on professional AI models</p>
      </div>
      <div className="fashion-demo-content">
        <div className="fashion-demo-features">
          <div className="fashion-demo-feature">
            <div className="fashion-feature-icon-circle"><FaBrain /></div>
            <div>
              <h3>Advanced AI</h3>
              <p>State-of-the-art machine learning models</p>
            </div>
          </div>
          <div className="fashion-demo-feature">
            <div className="fashion-feature-icon-circle"><FaBolt /></div>
            <div>
              <h3>Lightning Fast</h3>
              <p>Results in under 60 seconds</p>
            </div>
          </div>
          <div className="fashion-demo-feature">
            <div className="fashion-feature-icon-circle"><FaBullseye /></div>
            <div>
              <h3>Pixel Perfect</h3>
              <p>Photorealistic quality guaranteed</p>
            </div>
          </div>
        </div>
        <div className="fashion-demo-slider">
          <BeforeAfter before={dummyImages.before1} after={dummyImages.after1} label="" />
        </div>
      </div>
    </section>
  )
}

export default DemoSection
