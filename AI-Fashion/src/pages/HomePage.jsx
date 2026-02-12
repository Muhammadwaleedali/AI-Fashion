import { useState, useEffect } from 'react'
import BeforeAfter from '../components/BeforeAfter'
import ModelCustomization from '../components/ModelCustomization'
import BackgroundGenerator from '../components/BackgroundGenerator'
import BatchProcessor from '../components/BatchProcessor'
import ModelGallery from './Product/ModelGallery'
import OnModel from './Product/OnModel'
import FlatLay from './Product/FlatLay'
import Mannequin from './Product/Mannequin'
import Video from './Product/Video'
import CutCosts from './Solution/CutCosts'
import MarketFaster from './Solution/MarketFaster'
import Editorials from './Solution/Editorials'
import Diversity from './Solution/Diversity'
import HelpCenter from './Resource/HelpCenter'
import Blog from './Resource/Blog'
import CaseStudies from './Resource/CaseStudies'
import FAQs from './Resource/FAQs'
import { dummyImages } from '../utils/imageUtils'
import { useTheme } from '../context/ThemeContext'
import '../styles/HomePage.css'

function AIFashion() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [currentGallery, setCurrentGallery] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [uploadedImages, setUploadedImages] = useState([])
  const [uploadMode, setUploadMode] = useState('single')
  const [uploadStep, setUploadStep] = useState(1)
  const [selectedModel, setSelectedModel] = useState(null)
  const [selectedBackground, setSelectedBackground] = useState(null)
  const [showProductMenu, setShowProductMenu] = useState(false)
  const [showSolutionsMenu, setShowSolutionsMenu] = useState(false)
  const [showResourceMenu, setShowResourceMenu] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  
  const heroImages = [
    dummyImages.after1,
    dummyImages.after2,
    dummyImages.after3,
    dummyImages.gallery1,
    dummyImages.gallery2,
    dummyImages.gallery3
  ]

  const heroTexts = [
    'On-model fashion photography',
    'AI-Powered Virtual Try-On',
    'Professional Product Photos',
    'Diverse AI Model Selection',
    'Instant Image Generation',
    'Transform Your Fashion Business'
  ]

  const galleryImages = [
    dummyImages.gallery1,
    dummyImages.gallery2,
    dummyImages.gallery3,
    dummyImages.gallery4,
    dummyImages.gallery5,
    dummyImages.gallery6,
    dummyImages.gallery7,
    dummyImages.gallery8
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGallery((prev) => (prev + 1) % galleryImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const text = heroTexts[currentImage]
    let index = 0
    setTypedText('')
    
    const typingInterval = setInterval(() => {
      if (index <= text.length) {
        setTypedText(text.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 80)
    
    return () => clearInterval(typingInterval)
  }, [currentImage])

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files)
    if (uploadMode === 'single' && files[0]) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result)
      }
      reader.readAsDataURL(files[0])
    } else if (uploadMode === 'multiple' && files.length > 0) {
      const imagePromises = files.map(file => {
        return new Promise((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(reader.result)
          reader.readAsDataURL(file)
        })
      })
      Promise.all(imagePromises).then(images => {
        setUploadedImages(images)
      })
    }
  }

  const removeImage = (index) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index))
  }

  return (
    <div className={`fashion-page ${theme === 'dark' ? 'dark-theme' : ''}`}>
      <nav className="fashion-nav">
        <div className="fashion-nav-container">
          <div className="fashion-logo" onClick={toggleTheme} style={{ cursor: 'pointer' }}>AI Fashion</div>
          <div className={`fashion-nav-links ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-dropdown">
              <a style={{ cursor: 'pointer' }} onClick={() => setShowProductMenu(!showProductMenu)}>
                Product ▾
              </a>
              {showProductMenu && (
                <div className="dropdown-menu">
                  <a onClick={() => { setActiveSection('model-gallery'); setShowProductMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Model gallery</strong>
                    </div>
                  </a>
                  <a onClick={() => { setActiveSection('on-model'); setShowProductMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>On model</strong>
                    </div>
                  </a>
                  <a onClick={() => { setActiveSection('flat-lay'); setShowProductMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Flat lay</strong>
                    </div>
                  </a>
                  <a onClick={() => { setActiveSection('mannequin'); setShowProductMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Mannequin</strong>
                    </div>
                  </a>
                  <a onClick={() => { setActiveSection('video'); setShowProductMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Video</strong>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <div className="nav-dropdown">
              <a style={{ cursor: 'pointer' }} onClick={() => setShowSolutionsMenu(!showSolutionsMenu)}>
                Solution ▾
              </a>
              {showSolutionsMenu && (
                <div className="dropdown-menu">
                  <a onClick={() => { setActiveSection('cut-costs'); setShowSolutionsMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Cut production costs</strong>
                    </div>
                  </a>
                  <a onClick={() => { setActiveSection('market-faster'); setShowSolutionsMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Get to market faster</strong>
                    </div>
                  </a>
                  <a onClick={() => { setActiveSection('editorials'); setShowSolutionsMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Create editorials</strong>
                    </div>
                  </a>
                  <a onClick={() => { setActiveSection('diversity'); setShowSolutionsMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Increase diversity</strong>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <div className="nav-dropdown">
              <a style={{ cursor: 'pointer' }} onClick={() => setShowResourceMenu(!showResourceMenu)}>
                Resource ▾
              </a>
              {showResourceMenu && (
                <div className="dropdown-menu">
                  <a onClick={() => { setActiveSection('help-center'); setShowResourceMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Help center</strong>
                    </div>
                  </a>
                  <a onClick={() => { setActiveSection('blog'); setShowResourceMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Blog</strong>
                    </div>
                  </a>
                  <a onClick={() => { setActiveSection('case-studies'); setShowResourceMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>Case studies</strong>
                    </div>
                  </a>
                  <a onClick={() => { setActiveSection('faqs'); setShowResourceMenu(false); }} className="dropdown-item" style={{ cursor: 'pointer' }}>
                    <div>
                      <strong>FAQs</strong>
                    </div>
                  </a>
                </div>
              )}
            </div>
            <a onClick={() => setActiveSection('pricing')} style={{ cursor: 'pointer' }}>Pricing</a>
          </div>
          <div className="fashion-nav-actions">
            <button className="fashion-theme-toggle" onClick={toggleTheme}>
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="fashion-btn-nav">Try for free</button>
          </div>
          <div className="fashion-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <>
      <section className="fashion-hero" id="home">
        <div className="fashion-hero-content">
          <h1 className="fashion-typing-text">{typedText}<span className="fashion-cursor">|</span></h1>
          <p>Create high-quality product photos with AI models</p>
          <button className="fashion-btn-hero" onClick={() => {}}>Try for free</button>
          <span className="fashion-note">No credit card required</span>
          <div className="fashion-trust">
            <span>Trusted by 10,000+ brands worldwide</span>
          </div>
        </div>
        <div className="fashion-hero-image">
          <div className="fashion-hero-slider">
            {heroImages.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`AI Fashion Example ${idx + 1}`}
                className={idx === currentImage ? 'active' : ''}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="fashion-brands">
        <p className="fashion-brands-title">Trusted by leading fashion brands</p>
        <div className="fashion-brands-logos">
          <div className="fashion-brand-item">ZARA</div>
          <div className="fashion-brand-item">H&M</div>
          <div className="fashion-brand-item">ASOS</div>
          <div className="fashion-brand-item">SHEIN</div>
          <div className="fashion-brand-item">UNIQLO</div>
          <div className="fashion-brand-item">MANGO</div>
        </div>
      </section>

      <section className="fashion-stats">
        <div className="fashion-stats-grid">
          <div className="fashion-stat">
            <h3>10M+</h3>
            <p>Images Generated</p>
          </div>
          <div className="fashion-stat">
            <h3>10K+</h3>
            <p>Active Brands</p>
          </div>
          <div className="fashion-stat">
            <h3>95%</h3>
            <p>Time Saved</p>
          </div>
          <div className="fashion-stat">
            <h3>40%</h3>
            <p>Conversion Boost</p>
          </div>
        </div>
      </section>

      <section className="fashion-demo" id="demo">
        <div className="fashion-demo-header">
          <span className="fashion-badge-pill">TECHNOLOGY</span>
          <h2>AI-Powered Transformation</h2>
          <p className="fashion-demo-subtitle">Watch your products come to life on professional AI models</p>
        </div>
        <div className="fashion-demo-content">
          <div className="fashion-demo-features">
            <div className="fashion-demo-feature">
              <div className="fashion-feature-icon-circle">🧠</div>
              <div>
                <h3>Advanced AI</h3>
                <p>State-of-the-art machine learning models</p>
              </div>
            </div>
            <div className="fashion-demo-feature">
              <div className="fashion-feature-icon-circle">⚡</div>
              <div>
                <h3>Lightning Fast</h3>
                <p>Results in under 60 seconds</p>
              </div>
            </div>
            <div className="fashion-demo-feature">
              <div className="fashion-feature-icon-circle">🎯</div>
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

      <section className="fashion-features" id="features">
        <div className="fashion-section-header">
          <span className="fashion-badge-pill">SOLUTIONS</span>
          <h2>Everything You Need</h2>
          <p className="fashion-section-desc">Powerful features to transform your fashion business</p>
        </div>
        <div className="fashion-features-grid">
          <div className="fashion-feature">
            <div className="fashion-feature-icon-box">
              <div className="fashion-icon">⚡</div>
            </div>
            <h3>Lightning fast</h3>
            <p>Get professional photos in under 60 seconds</p>
          </div>
          <div className="fashion-feature">
            <div className="fashion-feature-icon-box">
              <div className="fashion-icon">🌍</div>
            </div>
            <h3>Diverse & inclusive</h3>
            <p>Hundreds of AI models representing all backgrounds</p>
          </div>
          <div className="fashion-feature">
            <div className="fashion-feature-icon-box">
              <div className="fashion-icon">💰</div>
            </div>
            <h3>Cost effective</h3>
            <p>No expensive photoshoots or model fees</p>
          </div>
          <div className="fashion-feature">
            <div className="fashion-feature-icon-box">
              <div className="fashion-icon">📈</div>
            </div>
            <h3>Boost sales</h3>
            <p>Increase conversions with professional imagery</p>
          </div>
        </div>
      </section>

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

      <section className="fashion-services" id="services">
        <div className="fashion-section-header">
          <span className="fashion-badge-pill">SERVICES</span>
          <h2>Our AI-Powered Services</h2>
          <p className="fashion-section-desc">Complete suite of AI tools for fashion professionals</p>
        </div>
        <div className="fashion-services-grid">
          <div className="fashion-service-card">
            <div className="fashion-service-icon">🎯</div>
            <h3>Background Remover</h3>
            <p>Remove backgrounds from images with AI precision in one click</p>
            <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
          </div>
          <div className="fashion-service-card">
            <div className="fashion-service-icon">✨</div>
            <h3>Image Enhancer</h3>
            <p>Enhance image quality, adjust brightness, and improve clarity</p>
            <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
          </div>
          <div className="fashion-service-card">
            <div className="fashion-service-icon">👔</div>
            <h3>Wrinkled to Ironed</h3>
            <p>Transform wrinkled clothes into smooth, polished visuals</p>
            <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
          </div>
          <div className="fashion-service-card">
            <div className="fashion-service-icon">🤖</div>
            <h3>AI Model Try-On</h3>
            <p>See clothes on AI models instantly with virtual try-on</p>
            <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
          </div>
          <div className="fashion-service-card">
            <div className="fashion-service-icon">👓</div>
            <h3>Try-On Gear</h3>
            <p>Try on glasses, watches, shoes, and accessories with AI</p>
            <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
          </div>
          <div className="fashion-service-card">
            <div className="fashion-service-icon">🎨</div>
            <h3>Cloth Adjuster</h3>
            <p>Enhance and adjust clothing images with AI processing</p>
            <button className="fashion-btn-service" onClick={() => setShowUploadForm(!showUploadForm)}>Try Now</button>
          </div>
        </div>
      </section>

      {showUploadForm && (
        <div className="upload-modal">
          <div className="upload-modal-content-large">
            <button className="close-modal" onClick={() => { setShowUploadForm(false); setUploadedImage(null); setUploadedImages([]); setUploadStep(1); }}>&times;</button>
            
            <div className="upload-steps">
              <div className={`step-indicator ${uploadStep >= 1 ? 'active' : ''}`}>1. Upload</div>
              <div className={`step-indicator ${uploadStep >= 2 ? 'active' : ''}`}>2. Model</div>
              <div className={`step-indicator ${uploadStep >= 3 ? 'active' : ''}`}>3. Background</div>
              <div className={`step-indicator ${uploadStep >= 4 ? 'active' : ''}`}>4. Process</div>
            </div>

            {uploadStep === 1 && (
              <div className="upload-step-content">
                <h3>Upload Your Images</h3>
                
                <div className="upload-mode-toggle">
                  <button 
                    className={`mode-btn ${uploadMode === 'single' ? 'active' : ''}`}
                    onClick={() => { setUploadMode('single'); setUploadedImage(null); setUploadedImages([]); }}
                  >
                    Single Image
                  </button>
                  <button 
                    className={`mode-btn ${uploadMode === 'multiple' ? 'active' : ''}`}
                    onClick={() => { setUploadMode('multiple'); setUploadedImage(null); setUploadedImages([]); }}
                  >
                    Multiple Images
                  </button>
                  <button 
                    className={`mode-btn ${uploadMode === 'batch' ? 'active' : ''}`}
                    onClick={() => { setUploadMode('batch'); setUploadedImage(null); setUploadedImages([]); }}
                  >
                    Batch Processing
                  </button>
                </div>

                {uploadMode === 'batch' ? (
                  <BatchProcessor />
                ) : (
                  <>
                    <div className="upload-area">
                      <input 
                        type="file" 
                        accept="image/*" 
                        multiple={uploadMode === 'multiple'}
                        onChange={handleImageUpload}
                        className="upload-input"
                        id="imageUpload"
                      />
                      <label htmlFor="imageUpload" className="upload-label">
                        <div className="upload-icon">📁</div>
                        <p>Click to browse or drag and drop</p>
                        <span>Supports: JPG, PNG, WEBP (Max 10MB)</span>
                      </label>
                    </div>

                    {uploadMode === 'single' && uploadedImage && (
                      <div className="upload-preview-single">
                        <img src={uploadedImage} alt="Uploaded" />
                        <div className="preview-actions">
                          <button className="btn-next" onClick={() => setUploadStep(2)}>Next: Choose Model</button>
                          <button className="btn-remove" onClick={() => setUploadedImage(null)}>Remove</button>
                        </div>
                      </div>
                    )}

                    {uploadMode === 'multiple' && uploadedImages.length > 0 && (
                      <div className="upload-preview-multiple">
                        <div className="preview-grid">
                          {uploadedImages.map((img, index) => (
                            <div key={index} className="preview-item">
                              <img src={img} alt={`Upload ${index + 1}`} />
                              <button className="btn-remove-small" onClick={() => removeImage(index)}>&times;</button>
                            </div>
                          ))}
                        </div>
                        <button className="btn-next" onClick={() => setUploadStep(2)}>Next: Choose Model</button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}

            {uploadStep === 2 && (
              <div className="upload-step-content">
                <ModelCustomization onSelect={(data) => setSelectedModel(data)} />
                <div className="step-actions">
                  <button className="btn-back" onClick={() => setUploadStep(1)}>Back</button>
                  <button className="btn-next" onClick={() => setUploadStep(3)} disabled={!selectedModel}>Next: Choose Background</button>
                </div>
              </div>
            )}

            {uploadStep === 3 && (
              <div className="upload-step-content">
                <BackgroundGenerator onSelect={(bg) => setSelectedBackground(bg)} />
                <div className="step-actions">
                  <button className="btn-back" onClick={() => setUploadStep(2)}>Back</button>
                  <button className="btn-next" onClick={() => setUploadStep(4)} disabled={!selectedBackground}>Next: Review & Process</button>
                </div>
              </div>
            )}

            {uploadStep === 4 && (
              <div className="upload-step-content">
                <h3>Review & Process</h3>
                <div className="review-summary">
                  <div className="review-item">
                    <strong>Images:</strong> {uploadMode === 'single' ? '1 image' : `${uploadedImages.length} images`}
                  </div>
                  <div className="review-item">
                    <strong>Model:</strong> {selectedModel?.model?.name} - {selectedModel?.pose?.name}
                  </div>
                  <div className="review-item">
                    <strong>Background:</strong> {selectedBackground?.name}
                  </div>
                </div>
                <div className="step-actions">
                  <button className="btn-back" onClick={() => setUploadStep(3)}>Back</button>
                  <button className="btn-process-final">Generate AI Images</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <section className="fashion-integration">
        <div className="fashion-section-header">
          <span className="fashion-badge-pill">INTEGRATIONS</span>
          <h2>Seamless Integration</h2>
          <p className="fashion-section-desc">Connect with your favorite tools and platforms</p>
        </div>
        <div className="fashion-integration-grid">
          <div className="fashion-integration-item">
            <div className="fashion-integration-image">
              <img src={dummyImages.integration1} alt="Shopify" />
            </div>
            <div className="fashion-integration-icon">🛒</div>
            <h3>Shopify</h3>
            <p>Direct integration with your Shopify store. Auto-sync products and images.</p>
          </div>
          <div className="fashion-integration-item">
            <div className="fashion-integration-image">
              <img src={dummyImages.integration2} alt="Figma" />
            </div>
            <div className="fashion-integration-icon">🎨</div>
            <h3>Figma</h3>
            <p>Design workflow integration. Export directly to your design files.</p>
          </div>
          <div className="fashion-integration-item">
            <div className="fashion-integration-image">
              <img src={dummyImages.integration3} alt="WooCommerce" />
            </div>
            <div className="fashion-integration-icon">📦</div>
            <h3>WooCommerce</h3>
            <p>WordPress e-commerce plugin. One-click product photo generation.</p>
          </div>
          <div className="fashion-integration-item">
            <div className="fashion-integration-image">
              <img src={dummyImages.integration4} alt="API" />
            </div>
            <div className="fashion-integration-icon">⚡</div>
            <h3>API Access</h3>
            <p>Custom integration options. RESTful API with comprehensive documentation.</p>
          </div>
          <div className="fashion-integration-item">
            <div className="fashion-integration-image">
              <img src={dummyImages.integration5} alt="Instagram" />
            </div>
            <div className="fashion-integration-icon">📱</div>
            <h3>Instagram</h3>
            <p>Social media integration. Post directly to your Instagram business account.</p>
          </div>
          <div className="fashion-integration-item">
            <div className="fashion-integration-image">
              <img src={dummyImages.integration6} alt="Analytics" />
            </div>
            <div className="fashion-integration-icon">📊</div>
            <h3>Analytics</h3>
            <p>Track performance metrics. See which images drive the most conversions.</p>
          </div>
        </div>
      </section>

      <section className="fashion-examples" id="examples">
        <div className="fashion-section-header">
          <span className="fashion-badge-pill">GALLERY</span>
          <h2>Stunning Results</h2>
          <p className="fashion-section-desc">See the quality of AI-generated fashion photography</p>
        </div>
        <div className="fashion-examples-single">
          <div className="fashion-example-slideshow">
            {galleryImages.map((img, idx) => (
              <img 
                key={idx}
                src={img} 
                alt={`Example ${idx + 1}`}
                className={idx === currentGallery ? 'active' : ''}
              />
            ))}
          </div>
          <div className="fashion-gallery-indicators">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                className={`fashion-indicator ${idx === currentGallery ? 'active' : ''}`}
                onClick={() => setCurrentGallery(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="fashion-testimonials" id="testimonials">
        <div className="fashion-section-header">
          <span className="fashion-badge-pill">TESTIMONIALS</span>
          <h2>Trusted By Leading Brands</h2>
          <p className="fashion-section-desc">See what our customers say about us</p>
        </div>
        <div className="fashion-testimonials-grid">
          <div className="fashion-testimonial">
            <div className="fashion-testimonial-image">
              <img src={dummyImages.testimonial1} alt="Customer" />
            </div>
            <div className="fashion-quote">"💖</div>
            <p>"AI Fashion transformed our workflow. 10x more content in half the time."</p>
            <div className="fashion-rating">⭐⭐⭐⭐⭐</div>
            <strong>Sarah Chen</strong>
            <span>Fashion Co</span>
          </div>
          <div className="fashion-testimonial">
            <div className="fashion-testimonial-image">
              <img src={dummyImages.testimonial2} alt="Customer" />
            </div>
            <div className="fashion-quote">"🚀</div>
            <p>"Conversion rate increased by 40% after switching to AI Fashion."</p>
            <div className="fashion-rating">⭐⭐⭐⭐⭐</div>
            <strong>Michael Rodriguez</strong>
            <span>StyleHub</span>
          </div>
          <div className="fashion-testimonial">
            <div className="fashion-testimonial-image">
              <img src={dummyImages.testimonial3} alt="Customer" />
            </div>
            <div className="fashion-quote">"✨</div>
            <p>"Best investment. No more expensive photoshoots."</p>
            <div className="fashion-rating">⭐⭐⭐⭐⭐</div>
            <strong>Emma Thompson</strong>
            <span>ChicBoutique</span>
          </div>
        </div>
      </section>
        </>
      )}

      {activeSection === 'pricing' && (
        <>
      <section className="fashion-pricing" id="pricing">
        <div className="fashion-section-header">
          <span className="fashion-badge-pill">PRICING</span>
          <h2>Choose Your Plan</h2>
          <p className="fashion-section-desc">Flexible pricing for every business size</p>
        </div>
        <div className="fashion-pricing-grid">
          <div className="fashion-price-card">
            <div className="fashion-price-icon">🚀</div>
            <h3>Starter</h3>
            <div className="fashion-price">$49<span>/mo</span></div>
            <ul>
              <li>✓ 100 images/month</li>
              <li>✓ All AI models</li>
              <li>✓ HD quality</li>
              <li>✓ Email support</li>
            </ul>
            <button className="fashion-btn-price">Get started</button>
          </div>
          <div className="fashion-price-card fashion-featured">
            <div className="fashion-badge">POPULAR</div>
            <div className="fashion-price-icon">⭐</div>
            <h3>Professional</h3>
            <div className="fashion-price">$149<span>/mo</span></div>
            <ul>
              <li>✓ 500 images/month</li>
              <li>✓ All AI models</li>
              <li>✓ 4K quality</li>
              <li>✓ Priority support</li>
              <li>✓ API access</li>
            </ul>
            <button className="fashion-btn-price-dark">Get started</button>
          </div>
          <div className="fashion-price-card">
            <div className="fashion-price-icon">💎</div>
            <h3>Enterprise</h3>
            <div className="fashion-price">Custom</div>
            <ul>
              <li>✓ Unlimited images</li>
              <li>✓ Custom models</li>
              <li>✓ 8K quality</li>
              <li>✓ Dedicated support</li>
              <li>✓ Custom integration</li>
            </ul>
            <button className="fashion-btn-price">Contact us</button>
          </div>
        </div>
      </section>

      <section className="fashion-faq" id="faq">
        <div className="fashion-section-header">
          <span className="fashion-badge-pill">FAQ</span>
          <h2>Got Questions?</h2>
          <p className="fashion-section-desc">Everything you need to know about AI Fashion</p>
        </div>
        <div className="fashion-faq-grid">
          <div className="fashion-faq-item">
            <div className="fashion-faq-icon">❓</div>
            <h3>What types of garments work best?</h3>
            <p>All types - tops, dresses, pants, jackets, accessories. Just upload a clear photo on white or neutral background for best results.</p>
          </div>
          <div className="fashion-faq-item">
            <div className="fashion-faq-icon">🤖</div>
            <h3>How realistic are the AI models?</h3>
            <p>Photorealistic and indistinguishable from real photography. Our AI uses advanced deep learning to create lifelike model images.</p>
          </div>
          <div className="fashion-faq-item">
            <div className="fashion-faq-icon">📜</div>
            <h3>Can I use photos commercially?</h3>
            <p>Yes! Full commercial rights to all generated images. Use them on your website, social media, ads, anywhere you need.</p>
          </div>
          <div className="fashion-faq-item">
            <div className="fashion-faq-icon">⚡</div>
            <h3>How long does it take?</h3>
            <p>Most images ready in under 60 seconds. Bulk processing available for enterprise customers with faster turnaround.</p>
          </div>
          <div className="fashion-faq-item">
            <div className="fashion-faq-icon">📸</div>
            <h3>What image formats do you support?</h3>
            <p>We support JPG, PNG, and WEBP formats up to 20MB. Output available in multiple resolutions from HD to 8K quality.</p>
          </div>
          <div className="fashion-faq-item">
            <div className="fashion-faq-icon">🔄</div>
            <h3>Can I cancel anytime?</h3>
            <p>Yes, you can cancel your subscription at any time with no penalties. Your credits remain valid until the end of billing period.</p>
          </div>
        </div>
      </section>
        </>
      )}

      {activeSection === 'model-gallery' && (
      <ModelGallery />
      )}

      {activeSection === 'on-model' && (
      <OnModel />
      )}

      {activeSection === 'flat-lay' && (
      <FlatLay />
      )}

      {activeSection === 'mannequin' && (
      <Mannequin />
      )}

      {activeSection === 'video' && (
      <Video />
      )}

      {activeSection === 'cut-costs' && (
      <CutCosts />
      )}

      {activeSection === 'market-faster' && (
      <MarketFaster />
      )}

      {activeSection === 'editorials' && (
      <Editorials />
      )}

      {activeSection === 'diversity' && (
      <Diversity />
      )}

      {activeSection === 'help-center' && (
      <HelpCenter />
      )}

      {activeSection === 'blog' && (
      <Blog />
      )}

      {activeSection === 'case-studies' && (
      <CaseStudies />
      )}

      {activeSection === 'faqs' && (
      <FAQs />
      )}

      <section className="fashion-cta">
        <div className="fashion-cta-content">
          <div className="fashion-cta-badge">🎉</div>
          <h2>Ready to Transform Your Fashion Business?</h2>
          <p>Join 10,000+ brands creating stunning product photos with AI</p>
          <div className="fashion-cta-features">
            <span>✓ No credit card required</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
          </div>
          <button className="fashion-btn-cta" onClick={() => {}}>Start Free Trial</button>
          <p className="fashion-cta-note">Get 10 free images to try our platform</p>
        </div>
      </section>

      <footer className="fashion-footer">
        <div className="fashion-footer-content">
          <div className="fashion-footer-brand">
            <h3>AI Fashion</h3>
            <p>Transform your fashion business with AI-powered photography. Create stunning product images in seconds.</p>
            <div className="fashion-social">
              <a href="#" className="fashion-social-icon">📘</a>
              <a href="#" className="fashion-social-icon">📷</a>
              <a href="#" className="fashion-social-icon">🐦</a>
              <a href="#" className="fashion-social-icon">💼</a>
            </div>
          </div>
          <div className="fashion-footer-links">
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#examples">Examples</a>
            <a href="#demo">Technology</a>
          </div>
          <div className="fashion-footer-links">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#testimonials">Testimonials</a>
          </div>
          <div className="fashion-footer-links">
            <h4>Support</h4>
            <a href="#faq">FAQ</a>
            <a href="#">Help Center</a>
            <a href="#">Contact</a>
            <a href="#">API Docs</a>
          </div>
        </div>
        <div className="fashion-footer-bottom">
          <p>© 2024 AI Fashion. All rights reserved. Made with 💜 for fashion brands worldwide.</p>
          <div className="fashion-footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AIFashion
