import { dummyImages } from '../../../utils/imageUtils'

function HowItWorksSection() {
  return (
    <section className="fashion-how" id="how">
      <div className="fashion-section-header">
        <span className="fashion-badge-pill">PROCESS</span>
        <h2>How It Works</h2>
        <p className="fashion-section-desc">Transform your products in 3 simple steps</p>
      </div>
      <div className="fashion-how-grid">
        <div className="fashion-how-item">
          <div className="fashion-how-image">
            <img src={dummyImages.step1} alt="Upload" />
          </div>
          <div className="fashion-num">1</div>
          <h3>Upload your product</h3>
          <p>Upload a photo of your garment</p>
        </div>
        <div className="fashion-how-item">
          <div className="fashion-how-image">
            <img src={dummyImages.step2} alt="Choose" />
          </div>
          <div className="fashion-num">2</div>
          <h3>Choose AI model</h3>
          <p>Select from diverse AI models</p>
        </div>
        <div className="fashion-how-item">
          <div className="fashion-how-image">
            <img src={dummyImages.step3} alt="Download" />
          </div>
          <div className="fashion-num">3</div>
          <h3>Get your photos</h3>
          <p>Download in seconds</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
