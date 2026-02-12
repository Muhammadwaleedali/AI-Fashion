import { useState } from 'react'
import './ServiceModal.css'

function ServiceModal({ isOpen, onClose, serviceName }) {
  const [mainImage, setMainImage] = useState(null)
  const [bgImage, setBgImage] = useState(null)
  const [folder, setFolder] = useState(null)
  const [transparent, setTransparent] = useState(false)
  const [processing, setProcessing] = useState(false)

  if (!isOpen) return null

  const handleMainImageChange = (e) => {
    setMainImage(e.target.files[0])
  }

  const handleBgImageChange = (e) => {
    setBgImage(e.target.files[0])
  }

  const handleFolderChange = (e) => {
    setFolder(e.target.files)
  }

  const handleProcessSingle = (e) => {
    e.preventDefault()
    if (!mainImage) {
      alert('Please upload main image first')
      return
    }
    
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      alert(`${serviceName} completed successfully!`)
      resetForm()
    }, 2000)
  }

  const handleProcessFolder = (e) => {
    e.preventDefault()
    if (!folder || folder.length === 0) {
      alert('Please upload a folder first')
      return
    }
    
    setProcessing(true)
    setTimeout(() => {
      setProcessing(false)
      alert(`Processed ${folder.length} images successfully!`)
      resetForm()
    }, 2000)
  }

  const resetForm = () => {
    setMainImage(null)
    setBgImage(null)
    setFolder(null)
    setTransparent(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  // Show specific form based on service
  const isBgRemover = serviceName === 'Background Remover' || serviceName === 'Background Remover & Centralized Image'

  return (
    <div className="service-modal-overlay" onClick={handleClose}>
      <div className="service-modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>
        
        <div className="modal-header">
          <h2>{serviceName}</h2>
          <p className="modal-desc">
            {isBgRemover 
              ? 'Remove backgrounds and center your subject. Upload single or multiple images.'
              : 'Upload your image to process with AI'}
          </p>
        </div>
        
        <div className="modal-body">
          <form className="service-form">
          {isBgRemover && (
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={transparent}
                  onChange={(e) => setTransparent(e.target.checked)}
                />
                <span>Transparent Background</span>
              </label>
              <p className="checkbox-desc">When enabled, the background will be removed and made transparent</p>
            </div>
          )}

          <div className="form-group">
            <label>Main Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleMainImageChange}
              className="file-input-field"
            />
            <p className="file-name">{mainImage ? mainImage.name : 'No file chosen'}</p>
          </div>

          {isBgRemover && (
            <div className="form-group">
              <label>Background Image (Optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleBgImageChange}
                className="file-input-field"
              />
              <p className="file-name">{bgImage ? bgImage.name : 'No file chosen'}</p>
            </div>
          )}

          <div className="divider">OR</div>

          <div className="form-group">
            <label>Upload Folder (Multiple Images)</label>
            <input
              type="file"
              multiple
              webkitdirectory=""
              directory=""
              accept="image/*"
              onChange={handleFolderChange}
              className="file-input-field"
            />
            <p className="file-name">{folder ? `${folder.length} files selected` : 'No file chosen'}</p>
          </div>

          <div className="button-group">
            <button 
              type="button" 
              className="btn-process" 
              onClick={handleProcessSingle}
              disabled={processing || !mainImage}
            >
              {processing ? (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                mainImage ? 'Process Single Image' : 'Upload main image first'
              )}
            </button>

            <button 
              type="button" 
              className="btn-process btn-secondary" 
              onClick={handleProcessFolder}
              disabled={processing || !folder}
            >
              {processing ? (
                <div className="loading-container">
                  <div className="loading-spinner"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                folder ? `Process ${folder.length} Images` : 'Upload a folder first'
              )}
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ServiceModal
