import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import FAQSection from '../components/sections/Pricing/FAQSection'
import CTA from '../components/common/CTA'
import './PricingPage.css'

function PricingPage() {
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
      
      <div className="pricing-page">
        {/* Hero Section */}
        <section className="pricing-hero">
          <div className="pricing-hero-content">
            <h1>Simple, transparent pricing</h1>
            <p>Choose the perfect plan for your business. No hidden fees, cancel anytime.</p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pricing-section">
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Starter</h3>
                <p className="pricing-desc">Perfect for small businesses</p>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">49</span>
                <span className="period">/month</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> 100 images/month</li>
                <li><span className="check">✓</span> All AI models</li>
                <li><span className="check">✓</span> HD quality (1080p)</li>
                <li><span className="check">✓</span> Email support</li>
                <li><span className="check">✓</span> Commercial license</li>
              </ul>
              <button className="pricing-btn">Get Started</button>
            </div>

            <div className="pricing-card featured">
              <div className="popular-badge">MOST POPULAR</div>
              <div className="pricing-card-header">
                <h3>Professional</h3>
                <p className="pricing-desc">For growing fashion brands</p>
              </div>
              <div className="pricing-price">
                <span className="currency">$</span>
                <span className="amount">149</span>
                <span className="period">/month</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> 500 images/month</li>
                <li><span className="check">✓</span> All AI models</li>
                <li><span className="check">✓</span> 4K quality (2160p)</li>
                <li><span className="check">✓</span> Priority support</li>
                <li><span className="check">✓</span> API access</li>
                <li><span className="check">✓</span> Custom backgrounds</li>
              </ul>
              <button className="pricing-btn featured-btn">Get Started</button>
            </div>

            <div className="pricing-card">
              <div className="pricing-card-header">
                <h3>Enterprise</h3>
                <p className="pricing-desc">For large organizations</p>
              </div>
              <div className="pricing-price">
                <span className="amount custom">Custom</span>
              </div>
              <ul className="pricing-features">
                <li><span className="check">✓</span> Unlimited images</li>
                <li><span className="check">✓</span> Custom AI models</li>
                <li><span className="check">✓</span> 8K quality (4320p)</li>
                <li><span className="check">✓</span> Dedicated support</li>
                <li><span className="check">✓</span> Custom integration</li>
                <li><span className="check">✓</span> SLA guarantee</li>
              </ul>
              <button className="pricing-btn">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="pricing-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>10M+</h3>
              <p>Images Generated</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Time Saved</p>
            </div>
            <div className="stat-item">
              <h3>40%</h3>
              <p>Conversion Boost</p>
            </div>
          </div>
        </section>

        <FAQSection />
        <CTA />
      </div>
      
      <Footer />
    </>
  )
}

export default PricingPage
