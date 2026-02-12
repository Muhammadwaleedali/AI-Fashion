import { useState } from 'react'
import '../styles/BatchProcessor.css'

function BatchProcessor() {
  const [batchImages, setBatchImages] = useState([])
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleBatchUpload = (e) => {
    const files = Array.from(e.target.files)
    const imagePromises = files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve({ 
          id: Math.random(), 
          src: reader.result, 
          name: file.name,
          status: 'pending'
        })
        reader.readAsDataURL(file)
      })
    })
    Promise.all(imagePromises).then(images => {
      setBatchImages(images)
    })
  }

  const processBatch = () => {
    setProcessing(true)
    setProgress(0)
    
    // Simulate batch processing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setProcessing(false)
          setBatchImages(imgs => imgs.map(img => ({ ...img, status: 'completed' })))
          return 100
        }
        return prev + 10
      })
    }, 500)
  }

  const removeImage = (id) => {
    setBatchImages(batchImages.filter(img => img.id !== id))
  }

  const downloadAll = () => {
    alert('Downloading all processed images...')
  }

  return (
    <div className="batch-processor">
      <h3>Batch Processing</h3>
      <p className="batch-desc">Upload multiple products and process them all at once</p>

      <div className="batch-upload-area">
        <input 
          type="file" 
          accept="image/*" 
          multiple
          onChange={handleBatchUpload}
          className="batch-input"
          id="batchUpload"
        />
        <label htmlFor="batchUpload" className="batch-label">
          <div className="batch-icon">📁</div>
          <p>Upload Multiple Images</p>
          <span>Select up to 100 images</span>
        </label>
      </div>

      {batchImages.length > 0 && (
        <>
          <div className="batch-summary">
            <p><strong>{batchImages.length}</strong> images uploaded</p>
            {!processing && batchImages[0]?.status === 'pending' && (
              <button className="btn-process-batch" onClick={processBatch}>
                Process All Images
              </button>
            )}
            {batchImages[0]?.status === 'completed' && (
              <button className="btn-download-batch" onClick={downloadAll}>
                Download All ({batchImages.length})
              </button>
            )}
          </div>

          {processing && (
            <div className="batch-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
              <p>Processing... {progress}%</p>
            </div>
          )}

          <div className="batch-grid">
            {batchImages.map(img => (
              <div key={img.id} className="batch-item">
                <img src={img.src} alt={img.name} />
                <div className="batch-item-overlay">
                  <p className="batch-item-name">{img.name}</p>
                  {img.status === 'completed' && <span className="status-badge">✓ Done</span>}
                  {img.status === 'pending' && !processing && (
                    <button className="btn-remove-batch" onClick={() => removeImage(img.id)}>×</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default BatchProcessor
