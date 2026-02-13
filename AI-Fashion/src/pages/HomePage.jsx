import { useState } from 'react'
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
import HeroSection from '../components/sections/Home/HeroSection'
import BrandsSection from '../components/sections/Home/BrandsSection'
import PlatformSection from '../components/sections/Home/PlatformSection'
import StatsSection from '../components/sections/Home/StatsSection'
import DemoSection from '../components/sections/Home/DemoSection'
import HowItWorksSection from '../components/sections/Home/HowItWorksSection'
import FeaturesSection from '../components/sections/Home/FeaturesSection'
import UseCasesSection from '../components/sections/Home/UseCasesSection'
import ServicesSection from '../components/sections/Home/ServicesSection'
import IntegrationSection from '../components/sections/Home/IntegrationSection'
import GallerySection from '../components/sections/Home/GallerySection'
import TestimonialsSection from '../components/sections/Home/TestimonialsSection'
import PricingSection from '../components/sections/Pricing/PricingSection'
import FAQSection from '../components/sections/Pricing/FAQSection'
import Navbar from '../components/common/Navbar'
import CTA from '../components/common/CTA'
import Footer from '../components/common/Footer'
import { useTheme } from '../context/ThemeContext'
import '../styles/HomePage.css'

function AIFashion() {
  const { theme } = useTheme()
  const [showUploadForm, setShowUploadForm] = useState(false)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [uploadedImages, setUploadedImages] = useState([])
  const [uploadMode, setUploadMode] = useState('single')
  const [uploadStep, setUploadStep] = useState(1)
  const [selectedModel, setSelectedModel] = useState(null)
  const [selectedBackground, setSelectedBackground] = useState(null)
  const [activeSection, setActiveSection] = useState('home')

  const productItems = [
    { key: 'model-gallery', label: 'Model gallery' },
    { key: 'on-model', label: 'On model' },
    { key: 'flat-lay', label: 'Flat lay' },
    { key: 'mannequin', label: 'Mannequin' },
    { key: 'video', label: 'Video' },
  ]

  const solutionItems = [
    { key: 'cut-costs', label: 'Cut production costs' },
    { key: 'market-faster', label: 'Get to market faster' },
    { key: 'editorials', label: 'Create editorials' },
    { key: 'diversity', label: 'Increase diversity' },
  ]

  const resourceItems = [
    { key: 'help-center', label: 'Help center' },
    { key: 'blog', label: 'Blog' },
    { key: 'case-studies', label: 'Case studies' },
    { key: 'faqs', label: 'FAQs' },
  ]

  const handleMenuClick = (key) => {
    setActiveSection(key)
  }

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
      <Navbar 
        productItems={productItems}
        solutionItems={solutionItems}
        resourceItems={resourceItems}
        handleMenuClick={handleMenuClick}
        setActiveSection={setActiveSection}
      />

      {activeSection === 'home' && (
        <>
          <HeroSection />
          <BrandsSection />
          <PlatformSection />
          <StatsSection />
          <DemoSection />
          <HowItWorksSection />
          <FeaturesSection />
          <UseCasesSection />
          <ServicesSection setShowUploadForm={setShowUploadForm} showUploadForm={showUploadForm} />
          <IntegrationSection />
          <GallerySection />
          <TestimonialsSection />
        </>
      )}

      {activeSection === 'pricing' && (
        <>
          <PricingSection />
          <FAQSection />
        </>
      )}

      {activeSection === 'model-gallery' && <ModelGallery />}
      {activeSection === 'on-model' && <OnModel />}
      {activeSection === 'flat-lay' && <FlatLay />}
      {activeSection === 'mannequin' && <Mannequin />}
      {activeSection === 'video' && <Video />}
      {activeSection === 'cut-costs' && <CutCosts />}
      {activeSection === 'market-faster' && <MarketFaster />}
      {activeSection === 'editorials' && <Editorials />}
      {activeSection === 'diversity' && <Diversity />}
      {activeSection === 'help-center' && <HelpCenter />}
      {activeSection === 'blog' && <Blog />}
      {activeSection === 'case-studies' && <CaseStudies />}
      {activeSection === 'faqs' && <FAQs />}

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

      <CTA />
      <Footer />
    </div>
  )
}

export default AIFashion
