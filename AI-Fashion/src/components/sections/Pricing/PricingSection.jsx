function PricingSection() {
  return (
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
  )
}

export default PricingSection
