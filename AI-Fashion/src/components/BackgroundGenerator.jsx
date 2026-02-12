import { useState } from 'react'
import '../styles/BackgroundGenerator.css'

function BackgroundGenerator({ onSelect }) {
  const [selectedBg, setSelectedBg] = useState(null)

  const backgrounds = [
    { id: 1, name: 'White Studio', type: 'studio', color: '#ffffff' },
    { id: 2, name: 'Gray Studio', type: 'studio', color: '#f5f5f5' },
    { id: 3, name: 'Black Studio', type: 'studio', color: '#000000' },
    { id: 4, name: 'Urban Street', type: 'lifestyle', icon: '🏙️' },
    { id: 5, name: 'Beach', type: 'lifestyle', icon: '🏖️' },
    { id: 6, name: 'Park', type: 'lifestyle', icon: '🌳' },
    { id: 7, name: 'Cafe', type: 'lifestyle', icon: '☕' },
    { id: 8, name: 'Office', type: 'lifestyle', icon: '🏢' },
    { id: 9, name: 'Home Interior', type: 'lifestyle', icon: '🏠' },
  ]

  const handleSelect = (bg) => {
    setSelectedBg(bg)
    if (onSelect) onSelect(bg)
  }

  return (
    <div className="background-generator">
      <h3>Choose Background</h3>
      
      <div className="bg-section">
        <h4>Studio Backgrounds</h4>
        <div className="bg-grid">
          {backgrounds.filter(bg => bg.type === 'studio').map(bg => (
            <div 
              key={bg.id}
              className={`bg-card ${selectedBg?.id === bg.id ? 'selected' : ''}`}
              onClick={() => handleSelect(bg)}
            >
              <div className="bg-preview" style={{ background: bg.color }}></div>
              <p>{bg.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-section">
        <h4>Lifestyle Backgrounds</h4>
        <div className="bg-grid">
          {backgrounds.filter(bg => bg.type === 'lifestyle').map(bg => (
            <div 
              key={bg.id}
              className={`bg-card ${selectedBg?.id === bg.id ? 'selected' : ''}`}
              onClick={() => handleSelect(bg)}
            >
              <div className="bg-preview-icon">{bg.icon}</div>
              <p>{bg.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedBg && (
        <div className="bg-summary">
          <p>✓ Selected: {selectedBg.name}</p>
        </div>
      )}
    </div>
  )
}

export default BackgroundGenerator
