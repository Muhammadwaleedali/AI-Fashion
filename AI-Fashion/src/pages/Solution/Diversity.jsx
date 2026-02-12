import '../../styles/Solution.css'

function Diversity() {
  return (
    <div className="solution-page">
      <section className="solution-hero">
        <div className="solution-hero-left">
          <h1 className="solution-hero-h1">Increase diversity</h1>
          <p className="solution-hero-p">Represent all customers with diverse AI models of all ethnicities, body types, ages, and styles.</p>
          <div className="solution-hero-buttons">
            <button className="fashion-btn-hero">Get Started</button>
            <button className="fashion-btn-nav">Book a Call</button>
          </div>
        </div>
        <div className="solution-hero-right">
          <img src="https://picsum.photos/seed/diversity1/225/320" alt="Model 1" className="solution-hero-img" />
          <img src="https://picsum.photos/seed/diversity2/225/320" alt="Model 2" className="solution-hero-img" />
          <img src="https://picsum.photos/seed/diversity3/225/320" alt="Model 3" className="solution-hero-img" />
        </div>
      </section>

      <section className="solution-section">
        <div className="solution-section-content">
          <div className="solution-section-left">
            <div className="solution-feature-ui">
              <div className="solution-ui-toolbar"></div>
              <div className="solution-ui-photos">
                <img src="https://picsum.photos/seed/diversemodel1/160/200" alt="Model 1" />
                <img src="https://picsum.photos/seed/diversemodel2/160/200" alt="Model 2" />
                <img src="https://picsum.photos/seed/diversemodel3/160/200" alt="Model 3" />
              </div>
              <div className="solution-ui-bar"></div>
              <div className="solution-ui-bar" style={{width: '70%'}}></div>
            </div>
          </div>
          <div className="solution-section-right">
            <h2 className="solution-section-h2">500+ diverse models</h2>
            <p className="solution-section-p">Show your products on models representing all backgrounds. Make every customer feel represented and increase conversion rates.</p>
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
          <img src="https://picsum.photos/seed/diversitystudio/780/520" alt="Studio" />
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

export default Diversity
