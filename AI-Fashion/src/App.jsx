import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AIFashion from './pages/HomePage'
import ModelGallery from './pages/Product/ModelGallery'
import OnModel from './pages/Product/OnModel'
import FlatLay from './pages/Product/FlatLay'
import Mannequin from './pages/Product/Mannequin'
import Video from './pages/Product/Video'
import CutCosts from './pages/Solution/CutCosts'
import MarketFaster from './pages/Solution/MarketFaster'
import Editorials from './pages/Solution/Editorials'
import Diversity from './pages/Solution/Diversity'
import HelpCenter from './pages/Resource/HelpCenter'
import Blog from './pages/Resource/Blog'
import CaseStudies from './pages/Resource/CaseStudies'
import FAQs from './pages/Resource/FAQs'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

function AppContent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AIFashion />} />
        <Route path="/model-gallery" element={<ModelGallery />} />
        <Route path="/on-model" element={<OnModel />} />
        <Route path="/flat-lay" element={<FlatLay />} />
        <Route path="/mannequin" element={<Mannequin />} />
        <Route path="/video" element={<Video />} />
        <Route path="/cut-costs" element={<CutCosts />} />
        <Route path="/market-faster" element={<MarketFaster />} />
        <Route path="/editorials" element={<Editorials />} />
        <Route path="/diversity" element={<Diversity />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
