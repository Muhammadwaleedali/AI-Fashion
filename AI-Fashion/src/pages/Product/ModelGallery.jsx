import { useState } from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import '../../styles/ModelGallery.css'

function ModelGallery() {
  const [activeTab, setActiveTab] = useState('women')
  const [expandedFaq, setExpandedFaq] = useState(null)

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

  const womenModels = [
    { id: 1, name: 'Yao Jin', image: 'https://picsum.photos/seed/yaojin/300/400' },
    { id: 2, name: 'Anouk', image: 'https://picsum.photos/seed/anouk/300/400' },
    { id: 3, name: 'Daria', image: 'https://picsum.photos/seed/daria/300/400' },
    { id: 4, name: 'Leona', image: 'https://picsum.photos/seed/leona/300/400' },
    { id: 5, name: 'Ayo', image: 'https://picsum.photos/seed/ayo/300/400' },
    { id: 6, name: 'Lani', image: 'https://picsum.photos/seed/lani/300/400' },
    { id: 7, name: 'Imani', image: 'https://picsum.photos/seed/imani/300/400' },
    { id: 8, name: 'Rita', image: 'https://picsum.photos/seed/rita/300/400' },
  ]

  const lockedModels = [
    { id: 9, image: 'https://picsum.photos/seed/locked1/300/400' },
    { id: 10, image: 'https://picsum.photos/seed/locked2/300/400' },
    { id: 11, image: 'https://picsum.photos/seed/locked3/300/400' },
    { id: 12, image: 'https://picsum.photos/seed/locked4/300/400' },
  ]

  const faqs = [
    { question: 'What types of photos and poses can I use with Fashion AI?', answer: 'You can use any product photos with various poses including standing, sitting, walking, and custom poses.' },
    { question: 'Where do Fashion AI models come from?', answer: 'Our AI models are generated using advanced machine learning technology trained on diverse datasets.' },
    { question: 'What tech powers your AI models?', answer: 'We use state-of-the-art deep learning and computer vision technology to create photorealistic AI models.' },
    { question: 'Can I customize clothing or models using my own prompts?', answer: 'Yes, you can customize models and clothing with our advanced customization tools and prompts.' },
  ]

  return (
    <div className="model-gallery-page">
      <Navbar productItems={productItems} solutionItems={solutionItems} resourceItems={resourceItems} />
      {/* Hero Header */}
      <section className="gallery-hero">
        <h1>Your search for AI fashion models ends here</h1>
        <p className="gallery-subtitle">
          AI fashion models built for leading brands: posing, moving & showcasing your collection like real talent.
        </p>
        <div className="gender-toggle">
          <button 
            className={activeTab === 'women' ? 'active' : ''} 
            onClick={() => setActiveTab('women')}
          >
            Women
          </button>
          <button 
            className={activeTab === 'men' ? 'active' : ''} 
            onClick={() => setActiveTab('men')}
          >
            Men
          </button>
        </div>
      </section>

      {/* Models Grid */}
      <section className="models-grid-section">
        <div className="models-grid">
          {womenModels.map(model => (
            <div key={model.id} className="model-card">
              <div className="model-image">
                <img src={model.image} alt={model.name} />
              </div>
              <p className="model-name">{model.name}</p>
            </div>
          ))}
          {lockedModels.map(model => (
            <div key={model.id} className="model-card locked">
              <div className="model-image">
                <img src={model.image} alt="Locked Model" />
                <div className="locked-overlay">🔒</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gallery-cta">
        <h2>Unlock all models. Start creating now</h2>
        <div className="cta-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Book a Call</button>
        </div>
      </section>

      {/* Custom Model Banner */}
      <section className="custom-model-banner">
        <div className="banner-content">
          <div className="banner-text">
            <h3>Didn't find the exact model you're looking for?</h3>
            <p>Contact us to discuss our full service custom plans.</p>
            <button className="btn-contact">Contact Us</button>
          </div>
          <div className="banner-image">
            <img src="https://picsum.photos/seed/custom/600/800" alt="Custom Model" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="gallery-faq">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{expandedFaq === index ? '−' : '+'}</span>
              </div>
              {expandedFaq === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ModelGallery
