function Blog() {
  return (
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
  )
}

export default Blog
