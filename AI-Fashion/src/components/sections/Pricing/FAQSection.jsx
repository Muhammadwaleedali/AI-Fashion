function FAQSection() {
  return (
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
  )
}

export default FAQSection
