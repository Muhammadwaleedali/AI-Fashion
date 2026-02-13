import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'

function HelpCenter() {
  const productItems = [
    { key: 'model-gallery', label: 'Model Gallery' },
    { key: 'on-model', label: 'On Model' },
    { key: 'flat-lay', label: 'Flat Lay' },
    { key: 'mannequin', label: 'Mannequin' },
    { key: 'video', label: 'Video' },
  ]

  const solutionItems = [
    { key: 'cut-costs', label: 'Cut Costs' },
    { key: 'market-faster', label: 'Market Faster' },
    { key: 'editorials', label: 'Editorials' },
    { key: 'diversity', label: 'Diversity' },
  ]

  const resourceItems = [
    { key: 'help-center', label: 'Help Center' },
    { key: 'blog', label: 'Blog' },
    { key: 'case-studies', label: 'Case Studies' },
    { key: 'faqs', label: 'FAQs' },
  ]

  return (
    <>
      <Navbar productItems={productItems} solutionItems={solutionItems} resourceItems={resourceItems} />
    <section className="resource-section">
      <div className="botika-section-header">
        <span className="botika-badge-pill">RESOURCE</span>
        <h2>Help Center</h2>
        <p className="botika-section-desc">Get support and answers to your questions</p>
      </div>
      <div className="resource-content">
        <div className="help-categories">
          <div className="help-card">
            <div className="help-icon">📚</div>
            <h3>Getting Started</h3>
            <p>Learn the basics</p>
          </div>
          <div className="help-card">
            <div className="help-icon">🎓</div>
            <h3>Tutorials</h3>
            <p>Step-by-step guides</p>
          </div>
          <div className="help-card">
            <div className="help-icon">💬</div>
            <h3>Contact Support</h3>
            <p>24/7 support available</p>
          </div>
          <div className="help-card">
            <div className="help-icon">🔧</div>
            <h3>Troubleshooting</h3>
            <p>Fix common issues</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default HelpCenter
