import { dummyImages } from '../../../utils/imageUtils'

function UseCasesSection() {
  return (
    <section className="fashion-usecases" id="usecases">
      <div className="fashion-section-header">
        <span className="fashion-badge-pill">USE CASES</span>
        <h2>Perfect For Every Business</h2>
        <p className="fashion-section-desc">Trusted by fashion brands worldwide</p>
      </div>
      <div className="fashion-usecases-grid">
        <div className="fashion-usecase">
          <div className="fashion-usecase-image">
            <img src={dummyImages.usecase1} alt="E-commerce" />
          </div>
          <h3>🛍️ E-commerce brands</h3>
          <p>Create unlimited product variations</p>
        </div>
        <div className="fashion-usecase">
          <div className="fashion-usecase-image">
            <img src={dummyImages.usecase2} alt="Fashion" />
          </div>
          <h3>👔 Fashion retailers</h3>
          <p>Show products on diverse models</p>
        </div>
        <div className="fashion-usecase">
          <div className="fashion-usecase-image">
            <img src={dummyImages.usecase3} alt="Marketplace" />
          </div>
          <h3>📱 Marketplaces</h3>
          <p>Help sellers create professional listings</p>
        </div>
        <div className="fashion-usecase">
          <div className="fashion-usecase-image">
            <img src={dummyImages.usecase4} alt="Designers" />
          </div>
          <h3>🎨 Designers</h3>
          <p>Visualize designs before production</p>
        </div>
      </div>
    </section>
  )
}

export default UseCasesSection
