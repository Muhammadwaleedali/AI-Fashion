import '../../styles/Solution.css'

function MarketFaster() {
  return (
    <div className="solution-page">
      <section className="solution-hero">
        <div className="solution-hero-left">
          <h1 className="solution-hero-h1">Get to market faster</h1>
          <p className="solution-hero-p">Reduce production time and release new collections at the speed your business needs.</p>
          <div className="solution-hero-buttons">
            <button className="fashion-btn-hero">Get Started</button>
            <button className="fashion-btn-nav">Book a Call</button>
          </div>
        </div>
        <div className="solution-hero-right">
          <img src="https://picsum.photos/seed/redtopwoman/225/320" alt="Model 1" className="solution-hero-img" />
          <img src="https://picsum.photos/seed/blondeman/225/320" alt="Model 2" className="solution-hero-img" />
          <img src="https://picsum.photos/seed/utilityjacket/225/320" alt="Model 3" className="solution-hero-img" />
        </div>
      </section>

      <section className="solution-section">
        <div className="solution-section-content">
          <div className="solution-section-left">
            <div className="solution-feature-card solution-feature-split">
              <img src="https://picsum.photos/seed/denimblonde/280/380" alt="Model" />
              <img src="https://picsum.photos/seed/denimflatlay/280/380" alt="Flat Lay" />
            </div>
          </div>
          <div className="solution-section-right">
            <h2 className="solution-section-h2">Skip the studio</h2>
            <p className="solution-section-p">Create on model visuals from a single product photo. No studio, styling or casting required.</p>
            <div className="solution-section-buttons">
              <button className="fashion-btn-hero">Get Started</button>
              <button className="fashion-btn-nav">Book a Call</button>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-section">
        <div className="solution-section-content">
          <div className="solution-section-left">
            <div className="solution-feature-ui">
              <div className="solution-ui-toolbar"></div>
              <div className="solution-ui-photos">
                <img src="https://picsum.photos/seed/navyblazerlook/160/200" alt="Look 1" />
                <img src="https://picsum.photos/seed/redscarf/160/200" alt="Look 2" />
                <img src="https://picsum.photos/seed/rednkitsweater/160/200" alt="Look 3" />
              </div>
              <div className="solution-ui-bar"></div>
              <div className="solution-ui-bar" style={{width: '60%'}}></div>
            </div>
          </div>
          <div className="solution-section-right">
            <h2 className="solution-section-h2">Launch collections fast</h2>
            <p className="solution-section-p">Get new collections to market quickly. No planning headaches or budget approvals needed.</p>
            <div className="solution-section-buttons">
              <button className="fashion-btn-hero">Get Started</button>
              <button className="fashion-btn-nav">Book a Call</button>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-section">
        <div className="solution-section-content">
          <div className="solution-section-left">
            <div className="solution-feature-mosaic">
              <div className="solution-mosaic-left">
                <img src="https://picsum.photos/seed/whitesuit1/290/380" alt="Full Body" />
              </div>
              <div className="solution-mosaic-right">
                <img src="https://picsum.photos/seed/whitesuit2/290/188" alt="Upper Body" />
                <img src="https://picsum.photos/seed/whitesuit3/290/188" alt="Close Up" />
              </div>
            </div>
          </div>
          <div className="solution-section-right">
            <h2 className="solution-section-h2">Consistency made easy</h2>
            <p className="solution-section-p">Stay on brand effortlessly while lowering production costs</p>
            <div className="solution-section-buttons">
              <button className="fashion-btn-hero">Get Started</button>
              <button className="fashion-btn-nav">Book a Call</button>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-section">
        <div className="solution-section-content">
          <div className="solution-section-left">
            <div className="solution-feature-grid">
              <div className="solution-grid-cell solution-grid-main">
                <img src="https://picsum.photos/seed/london1990main/290/310" alt="Main" />
                <div className="solution-dot-overlay"></div>
              </div>
              <div className="solution-grid-cell solution-grid-crop">
                <img src="https://picsum.photos/seed/london1990crop/290/310" alt="Crop" />
                <div className="solution-zoom-overlay">− zoom +</div>
              </div>
              <div className="solution-grid-cell solution-grid-store">
                <h3>WHERE STYLE BECOMES STATEMENT</h3>
                <button>Shop Now</button>
                <img src="https://picsum.photos/seed/london1990small/80/120" alt="Small" className="solution-grid-store-img" />
                <div className="solution-grid-icons">🛒 ⚙️</div>
              </div>
              <div className="solution-grid-cell solution-grid-bottom">
                <img src="https://picsum.photos/seed/london1990crop/290/200" alt="Bottom" />
              </div>
            </div>
          </div>
          <div className="solution-section-right">
            <h2 className="solution-section-h2">Use content anywhere</h2>
            <p className="solution-section-p">Create once and publish everywhere. No licensing limits or hidden fees.</p>
            <div className="solution-section-buttons">
              <button className="fashion-btn-hero">Get Started</button>
              <button className="fashion-btn-nav">Book a Call</button>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-banner">
        <div className="solution-banner-left">
          <h2 className="solution-banner-h2">Fashion AI is your own personal fashion studio</h2>
          <p className="solution-banner-text">Snap, upload and get stunning, realistic photos and videos in minutes.</p>
          <div className="solution-banner-buttons">
            <button className="fashion-btn-nav" style={{background: '#fff', color: '#111'}}>Get Started</button>
            <button className="fashion-btn-nav" style={{background: 'transparent', border: '1px solid #555', color: '#eee'}}>Book a Call</button>
          </div>
        </div>
        <div className="solution-banner-right">
          <img src="https://picsum.photos/seed/studiobanner/780/520" alt="Studio" />
        </div>
      </section>

      <section className="solution-cta">
        <h2 className="solution-cta-h2">Transform photoshoots and get flawless results in no time</h2>
        <div className="solution-cta-buttons">
          <button className="fashion-btn-hero">Get Started</button>
          <button className="fashion-btn-nav">Book a Call</button>
        </div>
      </section>
    </div>
  )
}

export default MarketFaster
