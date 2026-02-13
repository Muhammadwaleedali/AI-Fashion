import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'

function CaseStudies() {
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
        <h2>Case Studies</h2>
        <p className="botika-section-desc">Real results from real brands</p>
      </div>
      <div className="resource-content">
        <div className="case-studies-grid">
          <div className="case-study-card">
            <h3>Fashion Brand A</h3>
            <div className="case-result">+150% Sales Growth</div>
            <p>Reduced costs by 85%</p>
          </div>
          <div className="case-study-card">
            <h3>E-commerce Store B</h3>
            <div className="case-result">+40% Conversion Rate</div>
            <p>Increased diversity representation</p>
          </div>
          <div className="case-study-card">
            <h3>Designer Brand C</h3>
            <div className="case-result">90% Cost Reduction</div>
            <p>Eliminated photoshoot expenses</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default CaseStudies
