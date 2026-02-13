import { useNavigate } from 'react-router-dom'
import { Dropdown } from 'antd'
import { useTheme } from '../../context/ThemeContext'
import { IoChevronDown } from 'react-icons/io5'
import './Navbar.css'

function Navbar({ productItems, solutionItems, resourceItems }) {
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const handleMenuClick = (key) => {
    navigate(`/${key}`)
  }

  return (
    <nav className="botika-nav">
      <div className="botika-nav-container">
        <div className="botika-logo" onClick={() => navigate('/')}>
          <span className="logo-icon">A</span>
          <span className="logo-text">AI FASHION</span>
        </div>
        <div className="botika-nav-links">
          <Dropdown 
            menu={{ items: productItems, onClick: ({ key }) => handleMenuClick(key) }} 
            trigger={['hover']}
            styles={{ root: { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } }}
          >
            <a className="nav-link">
              Product
            </a>
          </Dropdown>
          <Dropdown 
            menu={{ items: solutionItems, onClick: ({ key }) => handleMenuClick(key) }} 
            trigger={['hover']}
            styles={{ root: { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } }}
          >
            <a className="nav-link">
              Solutions
            </a>
          </Dropdown>
          <Dropdown 
            menu={{ items: resourceItems, onClick: ({ key }) => handleMenuClick(key) }} 
            trigger={['hover']}
            styles={{ root: { backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' } }}
          >
            <a className="nav-link">
              Resources
            </a>
          </Dropdown>
          <a onClick={() => navigate('/pricing')} className="nav-link">Pricing</a>
        </div>
        <div className="botika-nav-actions">
          <button className="contact-btn" onClick={() => navigate('/contact')}>Contact Us</button>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
