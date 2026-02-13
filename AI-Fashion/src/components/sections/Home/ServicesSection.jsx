import { FaBullseye, FaImage, FaTshirt, FaRobot, FaGlasses, FaPalette } from 'react-icons/fa'

function ServicesSection({ setShowUploadForm, showUploadForm }) {
  return (
    <section className="fashion-services" id="services">
      <div className="fashion-section-header">
        <span className="fashion-badge-pill">SERVICES</span>
        <h2>Our AI-Powered Services</h2>
        <p className="fashion-section-desc">Complete suite of AI tools for fashion professionals</p>
      </div>
      <div className="fashion-services-grid">
        <div className="fashion-service-card">
          <div className="fashion-service-icon"><FaBullseye /></div>
          <h3>Background Remover</h3>
          <p>Remove backgrounds from images with AI precision in one click</p>
          <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
        </div>
        <div className="fashion-service-card">
          <div className="fashion-service-icon"><FaImage /></div>
          <h3>Image Enhancer</h3>
          <p>Enhance image quality, adjust brightness, and improve clarity</p>
          <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
        </div>
        <div className="fashion-service-card">
          <div className="fashion-service-icon"><FaTshirt /></div>
          <h3>Wrinkled to Ironed</h3>
          <p>Transform wrinkled clothes into smooth, polished visuals</p>
          <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
        </div>
        <div className="fashion-service-card">
          <div className="fashion-service-icon"><FaRobot /></div>
          <h3>AI Model Try-On</h3>
          <p>See clothes on AI models instantly with virtual try-on</p>
          <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
        </div>
        <div className="fashion-service-card">
          <div className="fashion-service-icon"><FaGlasses /></div>
          <h3>Try-On Gear</h3>
          <p>Try on glasses, watches, shoes, and accessories with AI</p>
          <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
        </div>
        <div className="fashion-service-card">
          <div className="fashion-service-icon"><FaPalette /></div>
          <h3>Cloth Adjuster</h3>
          <p>Enhance and adjust clothing images with AI processing</p>
          <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
