import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'

function Blog() {
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
        <h2>Blog</h2>
        <p className="botika-section-desc">Latest news, tips, and industry insights</p>
      </div>
      <div className="resource-content">
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-image">📰</div>
            <h3>AI in Fashion: The Future is Here</h3>
            <p>How AI is transforming the fashion industry</p>
            <span className="blog-date">Dec 15, 2024</span>
          </div>
          <div className="blog-card">
            <div className="blog-image">💡</div>
            <h3>10 Tips for Better Product Photos</h3>
            <p>Maximize your AI-generated images</p>
            <span className="blog-date">Dec 10, 2024</span>
          </div>
          <div className="blog-card">
            <div className="blog-image">🚀</div>
            <h3>Success Story: Brand X Increases Sales 40%</h3>
            <p>How AI Fashion helped scale their business</p>
            <span className="blog-date">Dec 5, 2024</span>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}

export default Blog
