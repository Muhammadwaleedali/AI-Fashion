import { useState } from 'react'
import '../styles/ModelCustomization.css'

function ModelCustomization({ onSelect }) {
  const [selectedModel, setSelectedModel] = useState(null)
  const [selectedPose, setSelectedPose] = useState(null)

  const models = [
    { id: 1, name: 'Model A', ethnicity: 'Asian', bodyType: 'Athletic', age: '25-30', gender: 'Female' },
    { id: 2, name: 'Model B', ethnicity: 'Caucasian', bodyType: 'Slim', age: '20-25', gender: 'Female' },
    { id: 3, name: 'Model C', ethnicity: 'African', bodyType: 'Curvy', age: '30-35', gender: 'Female' },
    { id: 4, name: 'Model D', ethnicity: 'Hispanic', bodyType: 'Average', age: '25-30', gender: 'Female' },
    { id: 5, name: 'Model E', ethnicity: 'Asian', bodyType: 'Athletic', age: '25-30', gender: 'Male' },
    { id: 6, name: 'Model F', ethnicity: 'Caucasian', bodyType: 'Muscular', age: '30-35', gender: 'Male' },
  ]

  const poses = [
    { id: 1, name: 'Standing Front', icon: '🧍' },
    { id: 2, name: 'Side View', icon: '🚶' },
    { id: 3, name: 'Walking', icon: '🏃' },
    { id: 4, name: 'Sitting', icon: '🪑' },
    { id: 5, name: 'Casual Pose', icon: '💃' },
    { id: 6, name: 'Professional', icon: '🕴️' },
  ]

  const handleModelSelect = (model) => {
    setSelectedModel(model)
    if (onSelect) onSelect({ model, pose: selectedPose })
  }

  const handlePoseSelect = (pose) => {
    setSelectedPose(pose)
    if (onSelect) onSelect({ model: selectedModel, pose })
  }

  return (
    <div className="model-customization">
      <h3>Customize Your AI Model</h3>
      
      <div className="customization-section">
        <h4>Select Model</h4>
        <div className="model-grid">
          {models.map(model => (
            <div 
              key={model.id}
              className={`model-card ${selectedModel?.id === model.id ? 'selected' : ''}`}
              onClick={() => handleModelSelect(model)}
            >
              <div className="model-avatar">👤</div>
              <h5>{model.name}</h5>
              <p>{model.ethnicity} • {model.bodyType}</p>
              <p>{model.age} • {model.gender}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="customization-section">
        <h4>Select Pose</h4>
        <div className="pose-grid">
          {poses.map(pose => (
            <div 
              key={pose.id}
              className={`pose-card ${selectedPose?.id === pose.id ? 'selected' : ''}`}
              onClick={() => handlePoseSelect(pose)}
            >
              <div className="pose-icon">{pose.icon}</div>
              <p>{pose.name}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedModel && selectedPose && (
        <div className="selection-summary">
          <p>✓ Selected: {selectedModel.name} - {selectedPose.name}</p>
        </div>
      )}
    </div>
  )
}

export default ModelCustomization
