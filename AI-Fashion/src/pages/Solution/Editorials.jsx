import '../../styles/Solution.css'

function Editorials() {
  return (
    <div className="solution-page">
      <section className="solution-hero">
        <div className="solution-hero-left">
          <h1 className="solution-hero-h1">Create editorials</h1>
          <p className="solution-hero-p">Magazine-quality fashion editorials with AI. Professional styling without the production costs.</p>
          <div className="solution-hero-buttons">
            <button className="fashion-btn-hero">Get Started</button>
            <button className="fashion-btn-nav">Book a Call</button>
          </div>
        </div>
        <div className="solution-hero-right">
          <img src="https://picsum.photos/seed/editorial1/225/320" alt="Model 1" className="solution-hero-img" />
          <img src="https://picsum.photos/seed/editorial2/225/320" alt="Model 2" className="solution-hero-img" />
          <img src="https://picsum.photos/seed/editorial3/225/320" alt="Model 3" className="solution-hero-img" />
        </div>
      </section>

      <section className="solution-section">
        <div className="solution-section-content">
          <div className="solution-section-left">
            <div className="solution-feature-mosaic">
              <div className="solution-mosaic-left">
                <img src="https://picsum.photos/seed/editorialfull/290/380" alt="Full Body" />
              </div>
              <div className="solution-mosaic-right">
                <img src="https://picsum.photos/seed/editorialupper/290/188" alt="Upper Body" />
                <img src="https://picsum.photos/seed/editorialclose/290/188" alt="Close Up" />
              </div>
            </div>
          </div>
          <div className="solution-section-right">
            <h2 className="solution-section-h2">High-end editorial looks</h2>
            <p className="solution-section-p">Create stunning editorial-style images for your brand with various poses, backgrounds, and styling options.</p>
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
          <img src="https://picsum.photos/seed/editorialstudio/780/520" alt="Studio" />
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

export default Editorials
