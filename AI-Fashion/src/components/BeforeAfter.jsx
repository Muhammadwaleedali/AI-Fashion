import { useState } from 'react'
import '../styles/BeforeAfter.css'

function BeforeAfter({ before, after, label }) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (e) => {
    if (!isDragging && e.type !== 'click') return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX || e.touches?.[0]?.clientX) - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  return (
    <div className="before-after-container">
      {label && <div className="ba-label">{label}</div>}
      <div 
        className="before-after"
        onMouseMove={handleMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleMove}
        onClick={handleMove}
      >
        <div className="ba-image ba-after">
          <img src={after} alt="After" />
          <span className="ba-tag ba-tag-after">After</span>
        </div>
        <div 
          className="ba-image ba-before" 
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={before} alt="Before" />
          <span className="ba-tag ba-tag-before">Before</span>
        </div>
        <div 
          className="ba-slider" 
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="ba-slider-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 19l7-7-7-7" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeforeAfter
