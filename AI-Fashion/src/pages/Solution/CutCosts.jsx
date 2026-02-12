import '../../styles/Solution.css'

function CutCosts() {
  return (
    <div className="solution-page">
      <section className="solution-hero">
        <div className="solution-hero-left">
          <h1 className="solution-hero-h1">Cut production costs</h1>
          <p className="solution-hero-p">Save up to 90% on photoshoot expenses with AI-generated fashion photography.</p>
          <div className="solution-hero-buttons">
            <button className="fashion-btn-hero">Get Started</button>
            <button className="fashion-btn-nav">Book a Call</button>
          </div>
        </div>
        <div className="solution-hero-right">
          <img src="https://picsum.photos/seed/costmodel1/225/320" alt="Model 1" className="solution-hero-img" />
          <img src="https://picsum.photos/seed/costmodel2/225/320" alt="Model 2" className="solution-hero-img" />
          <img src="https://picsum.photos/seed/costmodel3/225/320" alt="Model 3" className="solution-hero-img" />
        </div>
      </section>

      <section className="solution-section">
        <div className="solution-section-content">
          <div className="solution-section-left">
            <div className="solution-feature-card solution-feature-split">
              <img src="https://picsum.photos/seed/costbefore/280/380" alt="Traditional" />
              <img src="https://picsum.photos/seed/costafter/280/380" alt="AI Fashion" />
            </div>
          </div>
          <div className="solution-section-right">
            <h2 className="solution-section-h2">No more expensive shoots</h2>
            <p className="solution-section-p">Eliminate model fees, photographer costs, studio rentals, and equipment expenses.</p>
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
          <img src="https://picsum.photos/seed/coststudio/780/520" alt="Studio" />
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

export default CutCosts
