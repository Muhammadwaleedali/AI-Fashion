import { useState } from 'react'
import './ModelSelector.css'

function ModelSelector() {
  const [selectedModel, setSelectedModel] = useState(0)

  const models = [
    { id: 0, name: 'Emma', ethnicity: 'Caucasian', age: '25-30', bodyType: 'Athletic' },
    { id: 1, name: 'Aisha', ethnicity: 'African', age: '20-25', bodyType: 'Curvy' },
    { id: 2, name: 'Yuki', ethnicity: 'Asian', age: '25-30', bodyType: 'Slim' },
    { id: 3, name: 'Sofia', ethnicity: 'Hispanic', age: '30-35', bodyType: 'Athletic' },
    { id: 4, name: 'Maya', ethnicity: 'Indian', age: '25-30', bodyType: 'Average' },
    { id: 5, name: 'Olivia', ethnicity: 'Caucasian', age: '35-40', bodyType: 'Plus Size' },
  ]

  return (
    <section className="model-selector-section">
      <div className="section-header">
        <span className="section-badge">AI MODELS</span>
        <h2 className="section-title">Choose From Diverse AI Models</h2>
        <p className="section-desc">100+ realistic AI models representing all body types, ages, and ethnicities</p>
      </div>
      
      <div className="model-selector-container">
        <div className="model-preview">
          <div className="model-preview-image">
            <div className="model-placeholder">
              <span>👤</span>
              <p>{models[selectedModel].name}</p>
            </div>
          </div>
          <div className="model-info">
            <h3>{models[selectedModel].name}</h3>
            <div className="model-details">
              <span><strong>Ethnicity:</strong> {models[selectedModel].ethnicity}</span>
              <span><strong>Age:</strong> {models[selectedModel].age}</span>
              <span><strong>Body Type:</strong> {models[selectedModel].bodyType}</span>
            </div>
          </div>
        </div>

        <div className="model-grid">
          {models.map((model) => (
            <div
              key={model.id}
              className={`model-card ${selectedModel === model.id ? 'active' : ''}`}
              onClick={() => setSelectedModel(model.id)}
            >
              <div className="model-avatar">
                <span>👤</span>
              </div>
              <p>{model.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ModelSelector
