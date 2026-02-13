import { dummyImages } from '../../../utils/imageUtils'
import './PlatformSection.css'

function PlatformSection() {
  return (
    <section className="platform-section">
      <div className="platform-container">
        <h2 className="platform-title">One platform for every fashion workflow</h2>
        <button className="learn-more-btn">Learn More</button>
        
        <div className="platform-showcase">
          <div className="showcase-image">
            <img src={dummyImages.gallery1} alt="Fashion Model" className="main-model" />
            <div className="thumbnail-preview">
              <img src={dummyImages.gallery2} alt="Preview" />
            </div>
          </div>
          
          <div className="showcase-options">
            <div className="option-item active">On model</div>
            <div className="option-item">Flat lay</div>
            <div className="option-item">Mannequin</div>
            <div className="option-item">Video</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformSection
