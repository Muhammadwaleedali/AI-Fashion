import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'

function FAQs() {
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
        <h2>Frequently Asked Questions</h2>
        <p className="botika-section-desc">Quick answers to common questions</p>
      </div>
      <div className="resource-content">
        <div className="faq-list">
          <div className="faq-item-detailed">
            <h3>How does AI Fashion work?</h3>
            <p>Upload your product photo, select an AI model and background, and our AI generates professional images in seconds.</p>
          </div>
          <div className="faq-item-detailed">
            <h3>What file formats are supported?</h3>
            <p>We support JPG, PNG, and WEBP formats up to 20MB per image.</p>
          </div>
          <div className="faq-item-detailed">
            <h3>Can I use the images commercially?</h3>
            <p>Yes! You have full commercial rights to all generated images.</p>
          </div>
          <div className="faq-item-detailed">
            <h3>How long does processing take?</h3>
            <p>Most images are ready in under 60 seconds.</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default FAQs
